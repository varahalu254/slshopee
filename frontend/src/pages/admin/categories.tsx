import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Plus, Pencil, Trash2, X, Tag, Loader2 } from "lucide-react";
import { categoriesApi, type CategoryAPI } from "@/lib/api";

export const Route = createFileRoute("/admin/categories")({
  component: CategoriesManagement,
});

function CategoriesManagement() {
  const [cats, setCats] = useState<CategoryAPI[]>([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState<"add" | "edit" | null>(null);
  const [editing, setEditing] = useState<CategoryAPI | null>(null);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [status, setStatus] = useState<"active" | "inactive">("active");
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => { fetchCategories(); }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const data = await categoriesApi.getAll();
      setCats(data);
    } catch (err) {
      console.error("Failed to fetch categories:", err);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => { setName(""); setSlug(""); setStatus("active"); };
  const openAdd = () => { resetForm(); setModal("add"); };
  const openEdit = (c: CategoryAPI) => {
    setEditing(c); setName(c.name); setSlug(c.slug); setStatus(c.status); setModal("edit");
  };
  const closeModal = () => { setModal(null); setEditing(null); resetForm(); };

  const save = async () => {
    try {
      setSaving(true);
      const finalSlug = slug || name.toLowerCase().replace(/\s+/g, "-");
      if (modal === "add") {
        const newCat = await categoriesApi.create({ name, slug: finalSlug, productCount: 0, status });
        setCats([...cats, newCat]);
      } else if (modal === "edit" && editing) {
        const updated = await categoriesApi.update(editing._id, { name, slug: finalSlug, status });
        setCats(cats.map((c) => (c._id === editing._id ? updated : c)));
      }
      closeModal();
    } catch (err) {
      console.error("Failed to save category:", err);
    } finally {
      setSaving(false);
    }
  };

  const del = async (id: string) => {
    try {
      await categoriesApi.delete(id);
      setCats(cats.filter((c) => c._id !== id));
      setDeleteId(null);
    } catch (err) {
      console.error("Failed to delete category:", err);
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
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="font-display text-xl font-bold">Categories</h2>
          <p className="text-sm text-muted-foreground">{cats.length} categories</p>
        </div>
        <button onClick={openAdd} className="inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-4 py-2.5 text-sm font-semibold text-white shadow-brand-glow hover:scale-[1.02] transition-transform">
          <Plus className="h-4 w-4" /> Add Category
        </button>
      </div>

      {/* Grid view */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cats.map((c) => (
          <div key={c._id} className="rounded-2xl border border-border/60 bg-white p-5 shadow-elevated">
            <div className="flex items-start justify-between">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand">
                <Tag className="h-5 w-5" />
              </div>
              <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase ${c.status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>
                {c.status}
              </span>
            </div>
            <h3 className="mt-3 font-display font-semibold">{c.name}</h3>
            <p className="text-xs text-muted-foreground">/{c.slug}</p>
            <p className="mt-2 text-sm text-muted-foreground">{c.productCount} products</p>
            <div className="mt-4 flex gap-2">
              <button onClick={() => openEdit(c)} className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border py-1.5 text-xs font-medium hover:border-brand hover:text-brand">
                <Pencil className="h-3.5 w-3.5" /> Edit
              </button>
              <button onClick={() => setDeleteId(c._id)} className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border py-1.5 text-xs font-medium hover:border-destructive hover:text-destructive">
                <Trash2 className="h-3.5 w-3.5" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white shadow-elevated">
            <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
              <h3 className="font-display font-semibold">{modal === "add" ? "Add Category" : "Edit Category"}</h3>
              <button onClick={closeModal} className="grid h-8 w-8 place-items-center rounded-lg hover:bg-muted"><X className="h-4 w-4" /></button>
            </div>
            <div className="grid gap-4 p-5">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Category Name</label>
                <input value={name} onChange={(e) => { setName(e.target.value); setSlug(e.target.value.toLowerCase().replace(/\s+/g, "-")); }} className="mt-1.5 w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-brand" placeholder="e.g. Televisions" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Slug</label>
                <input value={slug} onChange={(e) => setSlug(e.target.value)} className="mt-1.5 w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-brand font-mono" placeholder="televisions" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Status</label>
                <select value={status} onChange={(e) => setStatus(e.target.value as "active" | "inactive")} className="mt-1.5 w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-brand">
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-2 border-t border-border/60 px-5 py-4">
              <button onClick={closeModal} className="rounded-xl border border-border px-4 py-2 text-sm font-medium hover:bg-muted">Cancel</button>
              <button onClick={save} disabled={!name || saving} className="inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-brand-glow disabled:opacity-50">
                {saving && <Loader2 className="h-4 w-4 animate-spin" />}
                {modal === "add" ? "Add Category" : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      )}

      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-elevated">
            <h3 className="font-display font-semibold">Delete Category?</h3>
            <p className="mt-2 text-sm text-muted-foreground">Products in this category won't be deleted.</p>
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
