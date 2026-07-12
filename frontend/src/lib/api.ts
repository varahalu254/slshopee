/**
 * API client for SL SHOPEE backend
 * Base URL defaults to http://localhost:5000/api in dev
 */

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

async function request<T>(path: string, options?: RequestInit): Promise<T> {
    const res = await fetch(`${API_BASE}${path}`, {
        ...options,
        headers: {
            ...(options?.body instanceof FormData ? {} : { "Content-Type": "application/json" }),
            ...options?.headers,
        },
    });

    if (!res.ok) {
        const err = await res.json().catch(() => ({ error: res.statusText }));
        throw new Error(err.error || "Request failed");
    }

    return res.json();
}

// ── Products ─────────────────────────────────────────────────────────────

export type ProductAPI = {
    _id: string;
    name: string;
    brand: string;
    price: string;
    priceNum: number;
    category: string;
    image: string;
    imagePublicId: string;
    stock: number;
    status: "active" | "inactive" | "out_of_stock";
    createdAt: string;
};

export const productsApi = {
    getAll: () => request<ProductAPI[]>("/products"),
    getById: (id: string) => request<ProductAPI>(`/products/${id}`),
    create: (formData: FormData) =>
        request<ProductAPI>("/products", { method: "POST", body: formData }),
    update: (id: string, formData: FormData) =>
        request<ProductAPI>(`/products/${id}`, { method: "PUT", body: formData }),
    delete: (id: string) =>
        request<{ message: string }>(`/products/${id}`, { method: "DELETE" }),
};

// ── Categories ───────────────────────────────────────────────────────────

export type CategoryAPI = {
    _id: string;
    name: string;
    slug: string;
    productCount: number;
    status: "active" | "inactive";
};

export const categoriesApi = {
    getAll: () => request<CategoryAPI[]>("/categories"),
    create: (data: Omit<CategoryAPI, "_id">) =>
        request<CategoryAPI>("/categories", { method: "POST", body: JSON.stringify(data) }),
    update: (id: string, data: Partial<CategoryAPI>) =>
        request<CategoryAPI>(`/categories/${id}`, { method: "PUT", body: JSON.stringify(data) }),
    delete: (id: string) =>
        request<{ message: string }>(`/categories/${id}`, { method: "DELETE" }),
};

// ── Orders ───────────────────────────────────────────────────────────────

export type OrderAPI = {
    _id: string;
    customer: string;
    phone: string;
    product: string;
    category: string;
    branch: string;
    amount: string;
    amountNum: number;
    status: "pending" | "confirmed" | "delivered" | "cancelled";
    date: string;
    paymentMode: "cash" | "emi" | "upi" | "card";
};

export const ordersApi = {
    getAll: () => request<OrderAPI[]>("/orders"),
    getById: (id: string) => request<OrderAPI>(`/orders/${id}`),
    create: (data: Omit<OrderAPI, "_id">) =>
        request<OrderAPI>("/orders", { method: "POST", body: JSON.stringify(data) }),
    update: (id: string, data: Partial<OrderAPI>) =>
        request<OrderAPI>(`/orders/${id}`, { method: "PUT", body: JSON.stringify(data) }),
    updateStatus: (id: string, status: OrderAPI["status"]) =>
        request<OrderAPI>(`/orders/${id}/status`, { method: "PATCH", body: JSON.stringify({ status }) }),
    delete: (id: string) =>
        request<{ message: string }>(`/orders/${id}`, { method: "DELETE" }),
};

// ── Customers ────────────────────────────────────────────────────────────

export type CustomerAPI = {
    _id: string;
    name: string;
    phone: string;
    email: string;
    city: string;
    branch: string;
    totalOrders: number;
    totalSpend: string;
    lastOrder: string;
    status: "active" | "inactive";
};

export const customersApi = {
    getAll: () => request<CustomerAPI[]>("/customers"),
    getById: (id: string) => request<CustomerAPI>(`/customers/${id}`),
    create: (data: Omit<CustomerAPI, "_id">) =>
        request<CustomerAPI>("/customers", { method: "POST", body: JSON.stringify(data) }),
    update: (id: string, data: Partial<CustomerAPI>) =>
        request<CustomerAPI>(`/customers/${id}`, { method: "PUT", body: JSON.stringify(data) }),
    delete: (id: string) =>
        request<{ message: string }>(`/customers/${id}`, { method: "DELETE" }),
};

// ── Gallery ──────────────────────────────────────────────────────────────

export type GalleryItemAPI = {
    _id: string;
    title: string;
    type: "image" | "video";
    url: string;
    imagePublicId: string;
    category: string;
    uploadedAt: string;
    featured: boolean;
};

export const galleryApi = {
    getAll: () => request<GalleryItemAPI[]>("/gallery"),
    create: (formData: FormData) =>
        request<GalleryItemAPI>("/gallery", { method: "POST", body: formData }),
    update: (id: string, formData: FormData) =>
        request<GalleryItemAPI>(`/gallery/${id}`, { method: "PUT", body: formData }),
    toggleFeatured: (id: string) =>
        request<GalleryItemAPI>(`/gallery/${id}/featured`, { method: "PATCH" }),
    delete: (id: string) =>
        request<{ message: string }>(`/gallery/${id}`, { method: "DELETE" }),
};

// ── Campaigns ────────────────────────────────────────────────────────────

export type CampaignAPI = {
    _id: string;
    title: string;
    message: string;
    segment: "all" | "branch" | "category";
    segmentValue?: string;
    sentAt?: string;
    status: "draft" | "sent" | "scheduled";
    recipients: number;
};

export const campaignsApi = {
    getAll: () => request<CampaignAPI[]>("/campaigns"),
    create: (data: Omit<CampaignAPI, "_id">) =>
        request<CampaignAPI>("/campaigns", { method: "POST", body: JSON.stringify(data) }),
    update: (id: string, data: Partial<CampaignAPI>) =>
        request<CampaignAPI>(`/campaigns/${id}`, { method: "PUT", body: JSON.stringify(data) }),
    send: (id: string) =>
        request<CampaignAPI>(`/campaigns/${id}/send`, { method: "PATCH" }),
    delete: (id: string) =>
        request<{ message: string }>(`/campaigns/${id}`, { method: "DELETE" }),
};

// ── Notifications ────────────────────────────────────────────────────────

export type NotificationAPI = {
    _id: string;
    title: string;
    body: string;
    type: "promo" | "order" | "general";
    sentAt?: string;
    status: "draft" | "sent";
    recipients: number;
};

export const notificationsApi = {
    getAll: () => request<NotificationAPI[]>("/notifications"),
    create: (data: Omit<NotificationAPI, "_id">) =>
        request<NotificationAPI>("/notifications", { method: "POST", body: JSON.stringify(data) }),
    update: (id: string, data: Partial<NotificationAPI>) =>
        request<NotificationAPI>(`/notifications/${id}`, { method: "PUT", body: JSON.stringify(data) }),
    send: (id: string) =>
        request<NotificationAPI>(`/notifications/${id}/send`, { method: "PATCH" }),
    delete: (id: string) =>
        request<{ message: string }>(`/notifications/${id}`, { method: "DELETE" }),
};

// ── Analytics ────────────────────────────────────────────────────────────

export type DashboardAnalytics = {
    productCount: number;
    orderCount: number;
    customerCount: number;
    totalRevenue: number;
    statusBreakdown: {
        pending: number;
        confirmed: number;
        delivered: number;
        cancelled: number;
    };
    categorySales: { category: string; revenue: number; units: number }[];
    branchSales: { branch: string; revenue: number; orders: number }[];
};

export const analyticsApi = {
    getDashboard: () => request<DashboardAnalytics>("/analytics/dashboard"),
};
