import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Plus, Pencil, Trash2, X, MessageCircle, Send, Clock, Users, Search, Loader2 } from "lucide-react";
import { campaignsApi, type CampaignAPI } from "@/lib/api";
import { BRANCHES, CATEGORIES } from "@/lib/site-data";

export const Route = createFileRoute("/admin/campaigns")({
    component: CampaignsManagement,
});

const STATUS_STYLES: Record<string, string> = {
    draft: "bg-gray-100 text-gray-600",
    sent: "bg-green-100 text-green-700",
    scheduled: "bg-blue-100 text-blue-700",
};

const SEGMENT_STYLES: Record<string, string> = {
    all: "bg-purple-50 text-purple-700",
    branch: "bg-indigo-50 text-indigo-700",
    category: "bg-amber-50 text-amber-700",
};

export function CampaignsManagement() {
    const [campaigns, setCampaigns] = useState<CampaignAPI[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [modal, setModal] = useState<"add" | "edit" | null>(null);
    const [editing, setEditing] = useState<CampaignAPI | null>(null);
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [segment, setSegment] = useState<"all" | "branch" | "category">("all");
    const [segmentValue, setSegmentValue] = useState("");
    const [deleteId, setDeleteId] = useState<string | null>(null);
    const [saving, setSaving] = useState(false);

    useEffect(() => { fetchCampaigns(); }, []);

    const fetchCampaigns = async () => {
        try {
            setLoading(true);
            const data = await campaignsApi.getAll();
            setCampaigns(data);
        } catch (err) {
            console.error("Failed to fetch campaigns:", err);
        } finally {
            setLoading(false);
        }
    };

    const filtered = campaigns.filter(
        (c) =>
            c.title.toLowerCase().includes(search.toLowerCase()) ||
            c.message.toLowerCase().includes(search.toLowerCase()),
    );

    const resetForm = () => { setTitle(""); setMessage(""); setSegment("all"); setSegmentValue(""); };
    const openAdd = () => { resetForm(); setModal("add"); };
    const openEdit = (c: CampaignAPI) => {
        setEditing(c); setTitle(c.title); setMessage(c.message); setSegment(c.segment);
        setSegmentValue(c.segmentValue || ""); setModal("edit");
    };
    const closeModal = () => { setModal(null); setEditing(null); resetForm(); };

    const save = async () => {
        try {
            setSaving(true);
            const data = { title, message, segment, segmentValue, status: "draft" as const, recipients: 0 };
            if (modal === "add") {
                const newCampaign = await campaignsApi.create(data);
                setCampaigns([newCampaign, ...campaigns]);
            } else if (modal === "edit" && editing) {
                const updated = await campaignsApi.update(editing._id, { title, message, segment, segmentValue });
                setCampaigns(campaigns.map((c) => (c._id === editing._id ? updated : c)));
            }
            closeModal();
        } catch (err) {
            console.error("Failed to save campaign:", err);
        } finally {
            setSaving(false);
        }
    };

    const sendCampaign = async (id: string) => {
        try {
            const updated = await campaignsApi.send(id);
            setCampaigns(campaigns.map((c) => (c._id === id ? updated : c)));
        } catch (err) {
            console.error("Failed to send campaign:", err);
        }
    };

    const del = async (id: string) => {
        try {
            await campaignsApi.delete(id);
            setCampaigns(campaigns.filter((c) => c._id !== id));
            setDeleteId(null);
        } catch (err) {
            console.error("Failed to delete campaign:", err);
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
                    <h2 className="font-display text-xl font-bold">WhatsApp Campaigns</h2>
                    <p className="text-sm text-muted-foreground">
                        {campaigns.length} campaigns · {campaigns.filter((c) => c.status === "sent").length} sent
                    </p>
                </div>
                <button
                    onClick={openAdd}
                    className="inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-4 py-2.5 text-sm font-semibold text-white shadow-brand-glow hover:scale-[1.02] transition-transform"
                >
                    <Plus className="h-4 w-4" /> New Campaign
                </button>
            </div>

            {/* Search */}
            <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search campaigns..."
                    className="w-full rounded-xl border border-border bg-white pl-9 pr-4 py-2.5 text-sm outline-none focus:border-brand"
                />
            </div>

            {/* Campaign Cards */}
            {filtered.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
                    <MessageCircle className="mb-2 h-8 w-8 opacity-30" />
                    <span>No campaigns found</span>
                </div>
            ) : (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((c) => (
                        <div key={c._id} className="rounded-2xl border border-border/60 bg-white p-5 shadow-elevated">
                            <div className="flex items-start justify-between">
                                <div className="grid h-11 w-11 place-items-center rounded-xl bg-green-100 text-green-700">
                                    <MessageCircle className="h-5 w-5" />
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase ${STATUS_STYLES[c.status]}`}>
                                        {c.status}
                                    </span>
                                </div>
                            </div>

                            <h3 className="mt-3 font-display font-semibold">{c.title}</h3>
                            <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2">{c.message}</p>

                            <div className="mt-3 flex flex-wrap gap-2">
                                <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase ${SEGMENT_STYLES[c.segment]}`}>
                                    {c.segment === "all" ? "All Customers" : `${c.segment}: ${c.segmentValue}`}
                                </span>
                            </div>

                            <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                                <div className="flex items-center gap-1">
                                    <Users className="h-3 w-3" />
                                    <span>{c.recipients} recipients</span>
                                </div>
                                {c.sentAt && (
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-3 w-3" />
                                        <span>{c.sentAt}</span>
                                    </div>
                                )}
                            </div>

                            <div className="mt-4 flex gap-2">
                                {c.status === "draft" && (
                                    <button
                                        onClick={() => sendCampaign(c._id)}
                                        className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-green-600 py-1.5 text-xs font-semibold text-white hover:bg-green-700"
                                    >
                                        <Send className="h-3.5 w-3.5" /> Send Now
                                    </button>
                                )}
                                <button
                                    onClick={() => openEdit(c)}
                                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border py-1.5 text-xs font-medium hover:border-brand hover:text-brand"
                                >
                                    <Pencil className="h-3.5 w-3.5" /> Edit
                                </button>
                                <button
                                    onClick={() => setDeleteId(c._id)}
                                    className="grid h-[30px] w-[30px] place-items-center rounded-lg border border-border text-muted-foreground hover:border-destructive hover:text-destructive"
                                >
                                    <Trash2 className="h-3.5 w-3.5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Add/Edit Modal */}
            {modal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
                    <div className="w-full max-w-lg rounded-2xl bg-white shadow-elevated">
                        <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
                            <h3 className="font-display font-semibold">{modal === "add" ? "New Campaign" : "Edit Campaign"}</h3>
                            <button onClick={closeModal} className="grid h-8 w-8 place-items-center rounded-lg hover:bg-muted">
                                <X className="h-4 w-4" />
                            </button>
                        </div>
                        <div className="grid gap-4 p-5">
                            <div>
                                <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Campaign Title</label>
                                <input
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="mt-1.5 w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-brand"
                                    placeholder="e.g. Festival Sale Alert"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Message</label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    rows={4}
                                    className="mt-1.5 w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-brand resize-none"
                                    placeholder="Type your WhatsApp message here..."
                                />
                                <p className="mt-1 text-[10px] text-muted-foreground">{message.length} characters</p>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Segment</label>
                                    <select
                                        value={segment}
                                        onChange={(e) => { setSegment(e.target.value as typeof segment); setSegmentValue(""); }}
                                        className="mt-1.5 w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-brand"
                                    >
                                        <option value="all">All Customers</option>
                                        <option value="branch">By Branch</option>
                                        <option value="category">By Category</option>
                                    </select>
                                </div>
                                {segment !== "all" && (
                                    <div>
                                        <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                            {segment === "branch" ? "Branch" : "Category"}
                                        </label>
                                        <select
                                            value={segmentValue}
                                            onChange={(e) => setSegmentValue(e.target.value)}
                                            className="mt-1.5 w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-brand"
                                        >
                                            <option value="">Select {segment}</option>
                                            {(segment === "branch" ? BRANCHES.map((b) => b.name) : CATEGORIES.map((c) => c.name)).map((v) => (
                                                <option key={v} value={v}>{v}</option>
                                            ))}
                                        </select>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Preview */}
                        {message && (
                            <div className="mx-5 mb-4 rounded-xl border border-green-200 bg-green-50 p-4">
                                <p className="text-[10px] font-semibold uppercase tracking-wide text-green-700 mb-2">WhatsApp Preview</p>
                                <div className="rounded-lg bg-white p-3 text-sm shadow-sm">
                                    <p className="whitespace-pre-wrap">{message}</p>
                                </div>
                            </div>
                        )}

                        <div className="flex justify-end gap-2 border-t border-border/60 px-5 py-4">
                            <button onClick={closeModal} className="rounded-xl border border-border px-4 py-2 text-sm font-medium hover:bg-muted">Cancel</button>
                            <button
                                onClick={save}
                                disabled={!title || !message || saving}
                                className="inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-brand-glow disabled:opacity-50"
                            >
                                {saving && <Loader2 className="h-4 w-4 animate-spin" />}
                                {modal === "add" ? "Create Campaign" : "Save Changes"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete confirm */}
            {deleteId && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
                    <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-elevated">
                        <h3 className="font-display font-semibold">Delete Campaign?</h3>
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
