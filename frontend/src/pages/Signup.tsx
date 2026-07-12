import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { Mail, Lock, User, Phone, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { customersApi } from '@/lib/api';
import logo from '../assets/logo.png';

export const Route = createFileRoute('/Signup')({
  component: SignupPage,
});

export function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setLoading(true);
    try {
      await customersApi.create({
        name,
        phone,
        email,
        city: 'Kakinada',
        branch: 'Kakinada Main',
        totalOrders: 0,
        totalSpend: '0',
        lastOrder: '',
        status: 'active'
      });
      localStorage.setItem("user", JSON.stringify({ name, email }));
      window.dispatchEvent(new Event("user-changed"));
      navigate({ to: "/profile" });
    } catch (err) {
      console.error(err);
      alert("Error creating account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[oklch(0.98_0.005_260)] px-4 py-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute -right-20 top-20 h-64 w-64 rounded-full bg-brand/5 blur-3xl" />
        <div className="absolute -left-20 bottom-20 h-64 w-64 rounded-full bg-brand/5 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl border border-border/60 bg-white shadow-elevated">
        <div className="bg-brand-gradient p-8 text-center text-white">
          <Link to="/" className="inline-block bg-white p-2 rounded-xl shadow-brand-glow transition-transform hover:scale-105">
            <img src={logo} alt="SL SHOPEE" className="h-10 w-auto object-contain block" />
          </Link>
          <h1 className="mt-4 font-display text-2xl font-bold">Create Account</h1>
          <p className="mt-2 text-sm text-white/80">Join SL SHOPEE for a better shopping experience.</p>
        </div>

        <div className="p-8">
          <form className="space-y-4" onSubmit={handleSignup}>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Full Name</label>
              <div className="relative mt-1.5">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Ravi Kumar"
                  className="w-full rounded-xl border border-border bg-white pl-10 pr-4 py-3 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Phone Number</label>
              <div className="relative mt-1.5 flex overflow-hidden rounded-xl border border-border bg-white focus-within:border-brand focus-within:ring-1 focus-within:ring-brand">
                <div className="flex -mr-px items-center pl-3 pr-2 border-r border-border bg-muted/20 text-muted-foreground">
                  <Phone className="h-4 w-4 mr-1.5" />
                  <span className="text-sm font-medium">+91</span>
                </div>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="98765 43210"
                  className="w-full bg-transparent pl-3 pr-4 py-3 text-sm outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Email Address</label>
              <div className="relative mt-1.5">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full rounded-xl border border-border bg-white pl-10 pr-4 py-3 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Password</label>
              <div className="relative mt-1.5">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-border bg-white pl-10 pr-10 py-3 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-brand">
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Confirm Password</label>
              <div className="relative mt-1.5">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type={showConfirm ? "text" : "password"}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-border bg-white pl-10 pr-10 py-3 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                />
                <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-brand">
                  {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gradient py-3 text-sm font-semibold text-white shadow-brand-glow transition-transform hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
            >
              {loading ? "Creating account..." : "Sign Up"} <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link to="/Login" className="font-semibold text-brand hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
