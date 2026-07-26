import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import { useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import PageTransition from './components/PageTransition';
import AdminLayout from './components/AdminLayout';
import ProtectedRoute from './components/ProtectedRoute';
const HomePage = lazy(() => import('./pages/HomePage'));
const ShopPage = lazy(() => import('./pages/ShopPage'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const CartPage = lazy(() => import('./pages/CartPage'));
const WishlistPage = lazy(() => import('./pages/WishlistPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
const PaymentPage = lazy(() => import('./pages/PaymentPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const ForgotPasswordPage = lazy(() => import('./pages/ForgotPasswordPage'));
const ResetPasswordPage = lazy(() => import('./pages/ResetPasswordPage'));
const MyOrdersPage = lazy(() => import('./pages/MyOrdersPage'));
const OrderDetailPage = lazy(() => import('./pages/OrderDetailPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsConditionsPage = lazy(() => import('./pages/TermsConditionsPage'));
const RefundPolicyPage = lazy(() => import('./pages/RefundPolicyPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));
const ProductManagement = lazy(() => import('./pages/admin/ProductManagement'));
const OrderManagement = lazy(() => import('./pages/admin/OrderManagement'));
const CustomerDatabase = lazy(() => import('./pages/admin/CustomerDatabase'));
const SalesReport = lazy(() => import('./pages/admin/SalesReport'));
const AdminManagement = lazy(() => import('./pages/admin/AdminManagement'));
const AuditLog = lazy(() => import('./pages/admin/AuditLog'));
const CampaignManagement = lazy(() => import('./pages/admin/CampaignManagement'));
const WhatsAppMessaging = lazy(() => import('./pages/admin/WhatsAppMessaging'));
const Analytics = lazy(() => import('./pages/admin/Analytics'));
const CategoryManagement = lazy(() => import('./pages/admin/CategoryManagement'));
const BrandManagement = lazy(() => import('./pages/admin/BrandManagement'));
const SendNotifications = lazy(() => import('./pages/admin/SendNotifications'));
const BranchManagement = lazy(() => import('./pages/admin/BranchManagement'));
const DealsManagement = lazy(() => import('./pages/admin/DealsManagement'));
const QueriesManagement = lazy(() => import('./pages/admin/QueriesManagement'));
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { WishlistProvider } from './context/WishlistContext';

// Component to redirect admins to admin dashboard
const AdminRedirect = () => {
  const { user } = useAuth();

  if (user && (user.role === 'admin' || user.role === 'super_admin')) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return <HomePage />;
};

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <Router>
            <Suspense fallback={<div className="flex h-screen items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div></div>}><Routes>
              {/* Admin Login — redirects to main login */}
              <Route path="/admin/login" element={<Navigate to="/login" replace />} />

              {/* Admin Routes */}
              <Route path="/admin/*" element={
                <ProtectedRoute requireAdmin={true}>
                  <AdminLayout>
                    <PageTransition>
                      <Suspense fallback={<div className="flex h-screen items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div></div>}><Routes>
                        <Route path="dashboard" element={<AdminDashboard />} />
                        <Route path="products" element={<ProductManagement />} />
                        <Route path="orders" element={<OrderManagement />} />
                        <Route path="customers" element={<CustomerDatabase />} />
                        <Route path="sales-report" element={<SalesReport />} />
                        <Route path="admin-management" element={<AdminManagement />} />
                        <Route path="audit-log" element={<AuditLog />} />
                        <Route path="campaigns" element={<CampaignManagement />} />
                        <Route path="whatsapp" element={<WhatsAppMessaging />} />
                        <Route path="categories" element={<CategoryManagement />} />
                        <Route path="brands" element={<BrandManagement />} />
                        <Route path="analytics" element={<Analytics />} />
                        <Route path="send-notifications" element={<SendNotifications />} />
                        <Route path="branches" element={<BranchManagement />} />
                        <Route path="deals" element={<DealsManagement />} />
                        <Route path="queries" element={<QueriesManagement />} />
                        <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
                      </Routes></Suspense>
                    </PageTransition>
                  </AdminLayout>
                </ProtectedRoute>
              } />

              {/* Public Routes */}
              <Route path="/*" element={
                <div className="min-h-screen flex flex-col">
                  <Navbar />
                  <main className="grow">
                    <PageTransition>
                      <Suspense fallback={<div className="flex h-screen items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div></div>}><Routes>
                        <Route path="/" element={<AdminRedirect />} />
                        <Route path="/shop" element={<ShopPage />} />
                        <Route path="/shop/:category" element={<ShopPage />} />
                        <Route path="/product/:id" element={<ProductDetailPage />} />
                        <Route path="/view-website" element={<HomePage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
                        <Route path="/wishlist" element={<Navigate to="/profile?tab=wishlist" replace />} />
                        <Route path="/checkout" element={<ProtectedRoute><PaymentPage /></ProtectedRoute>} />
                        <Route path="/payment" element={<ProtectedRoute><PaymentPage /></ProtectedRoute>} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignUpPage />} />
                        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                        <Route path="/reset-password" element={<ResetPasswordPage />} />
                        <Route path="/my-orders" element={<ProtectedRoute><MyOrdersPage /></ProtectedRoute>} />
                        <Route path="/order/:id" element={<ProtectedRoute><OrderDetailPage /></ProtectedRoute>} />
                        <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                        <Route path="/terms-conditions" element={<TermsConditionsPage />} />
                        <Route path="/refund-policy" element={<RefundPolicyPage />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                      </Routes></Suspense>
                    </PageTransition>
                  </main>
                  <Footer />
                  <WhatsAppFloat />
                </div>
              } />
            </Routes></Suspense>
          </Router>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
