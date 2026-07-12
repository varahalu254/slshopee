import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Plus, Search, Pencil, Trash2, X, Package, Upload, Loader2 } from "lucide-react";
import { productsApi, type ProductAPI } from "@/lib/api";
import { CATEGORIES } from "@/lib/site-data";

export const Route = createFileRoute("/admin/products")({
  component: ProductsManagement,
});

const STATUS_STYLES: Record<string, string> = {
  active: "bg-green-100 text-green-700",
  inactive: "bg-gray-100 text-gray-600",
  out_of_stock: "bg-red-100 text-red-700",
};

export function ProductsManagement() {
  const [products, setProducts] = useState<ProductAPI[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterCat, setFilterCat] = useState("All");
  const [modal, setModal] = useState<"add" | "edit" | null>(null);
  const [editing, setEditing] = useState<ProductAPI | null>(null);
  const [saving, setSaving] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  // Form state
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(0);
  const [status, setStatus] = useState<"active" | "inactive" | "out_of_stock">("active");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await productsApi.getAll();
      setProducts(data);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    } finally {
      setLoading(false);
    }
  };

  const filtered = products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase());
    const matchCat = filterCat === "All" || p.category === filterCat;
    return matchSearch && matchCat;
  });

  const resetForm = () => {
    setName(""); setBrand(""); setPrice(""); setCategory(""); setStock(0); setStatus("active");
    setSelectedFile(null); setPreviewSrc(null);
  };

  const openAdd = () => { resetForm(); setModal("add"); };
  const openEdit = (p: ProductAPI) => {
    setEditing(p);
    setName(p.name); setBrand(p.brand); setPrice(p.price); setCategory(p.category);
    setStock(p.stock); setStatus(p.status);
    setSelectedFile(null); setPreviewSrc(p.image || null);
    setModal("edit");
  };
  const closeModal = () => { setModal(null); setEditing(null); resetForm(); };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = () => setPreviewSrc(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const save = async () => {
    try {
      setSaving(true);
      const formData = new FormData();
      formData.append("name", name);
      formData.append("brand", brand);
      formData.append("price", price);
      formData.append("priceNum", String(Number(price.replace(/[₹,]/g, "")) || 0));
      formData.append("category", category);
      formData.append("stock", String(stock));
      formData.append("status", status);
      if (selectedFile) formData.append("image", selectedFile);

      if (modal === "add") {
        const newProduct = await productsApi.create(formData);
        setProducts([newProduct, ...products]);
      } else if (modal === "edit" && editing) {
        const updated = await productsApi.update(editing._id, formData);
        setProducts(products.map((p) => (p._id === editing._id ? updated : p)));
      }
      closeModal();
    } catch (err) {
      console.error("Failed to save product:", err);
    } finally {
      setSaving(false);
    }
  };

  const del = async (id: string) => {
    try {
      await productsApi.delete(id);
      setProducts(products.filter((p) => p._id !== id));
      setDeleteId(null);
    } catch (err) {
      console.error("Failed to delete product:", err);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="h-8 w-8 animate-spin text-brand" />
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="font-display text-xl font-bold">Products</h2>
          <p className="text-sm text-muted-foreground">{products.length} products total</p>
        </div>
        <button onClick={openAdd} className="inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-4 py-2.5 text-sm font-semibold text-white shadow-brand-glow hover:scale-[1.02] transition-transform">
          <Plus className="h-4 w-4" /> Add Product
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products..." className="w-full rounded-xl border border-border bg-white pl-9 pr-4 py-2.5 text-sm outline-none focus:border-brand" />
        </div>
        <select value={filterCat} onChange={(e) => setFilterCat(e.target.value)} className="rounded-xl border border-border bg-white px-3 py-2.5 text-sm outline-none focus:border-brand">
          <option value="All">All Categories</option>
          {CATEGORIES.map((c) => <option key={c.name} value={c.name}>{c.name}</option>)}
        </select>
      </div>

      {/* Table */}
      <div className="rounded-2xl border border-border/60 bg-white shadow-elevated overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/40 bg-muted/30">
                {["Product", "Brand", "Category", "Price", "Stock", "Status", "Actions"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={7} className="px-4 py-12 text-center text-muted-foreground"><Package className="mx-auto mb-2 h-8 w-8 opacity-30" />No products found</td></tr>
              ) : filtered.map((p) => (
                <tr key={p._id} className="border-b border-border/30 hover:bg-muted/20">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      {p.image ? (
                        <img src={p.image} alt={p.name} className="h-10 w-10 rounded-lg object-contain bg-muted/40" />
                      ) : (
                        <div className="h-10 w-10 rounded-lg bg-muted/40 grid place-items-center text-muted-foreground">
                          <Package className="h-5 w-5" />
                        </div>
                      )}
                      <div>
                        <div className="font-medium leading-tight">{p.name}</div>
                        <div className="text-[10px] font-mono text-muted-foreground">{p._id.slice(-8)}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{p.brand}</td>
                  <td className="px-4 py-3 text-muted-foreground">{p.category}</td>
                  <td className="px-4 py-3 font-semibold text-brand">{p.price}</td>
                  <td className="px-4 py-3">
                    <span className={p.stock < 8 ? "text-orange-600 font-semibold" : "text-foreground"}>{p.stock}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase ${STATUS_STYLES[p.status]}`}>{p.status.replace("_", " ")}</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      <button onClick={() => openEdit(p)} className="grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-muted hover:text-brand">
                        <Pencil className="h-3.5 w-3.5" />
                      </button>
                      <button onClick={() => setDeleteId(p._id)} className="grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-red-50 hover:text-destructive">
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white shadow-elevated">
            <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
              <h3 className="font-display font-semibold">{modal === "add" ? "Add Product" : "Edit Product"}</h3>
              <button onClick={closeModal} className="grid h-8 w-8 place-items-center rounded-lg hover:bg-muted"><X className="h-4 w-4" /></button>
            </div>
            <div className="grid gap-4 p-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Product Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="mt-1.5 w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-brand" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Brand</label>
                <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} className="mt-1.5 w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-brand" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Price (e.g. ₹49,990)</label>
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className="mt-1.5 w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-brand" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Category</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="mt-1.5 w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-brand">
                  <option value="">Select category</option>
                  {CATEGORIES.map((c) => <option key={c.name} value={c.name}>{c.name}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Stock</label>
                <input type="number" value={String(stock)} onChange={(e) => setStock(Number(e.target.value) || 0)} className="mt-1.5 w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-brand" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Status</label>
                <select value={status} onChange={(e) => setStatus(e.target.value as typeof status)} className="mt-1.5 w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-brand">
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="out_of_stock">Out of Stock</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Product Image</label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="mt-1.5 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border px-3 py-4 text-sm text-muted-foreground hover:border-brand hover:text-brand transition-colors"
                >
                  <Upload className="h-5 w-5" />
                  {selectedFile ? selectedFile.name : "Click to upload image"}
                </button>
                {previewSrc && (
                  <div className="mt-2 rounded-xl overflow-hidden border border-border">
                    <img src={previewSrc} alt="Preview" className="h-24 w-full object-contain bg-muted/20" />
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-end gap-2 border-t border-border/60 px-5 py-4">
              <button onClick={closeModal} className="rounded-xl border border-border px-4 py-2 text-sm font-medium hover:bg-muted">Cancel</button>
              <button onClick={save} disabled={!name || !brand || saving} className="inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-brand-glow disabled:opacity-50">
                {saving && <Loader2 className="h-4 w-4 animate-spin" />}
                {saving ? "Saving..." : modal === "add" ? "Add Product" : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete confirm */}
      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-elevated">
            <h3 className="font-display font-semibold">Delete Product?</h3>
            <p className="mt-2 text-sm text-muted-foreground">This action cannot be undone.</p>
            <div className="mt-4 flex gap-2">
              <button onClick={() => setDeleteId(null)} className="flex-1 rounded-xl border border-border py-2 text-sm font-medium hover:bg-muted">Cancel</button>
              <button onClick={() => del(deleteId)} className="flex-1 rounded-xl bg-destructive py-2 text-sm font-semibold text-white">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
