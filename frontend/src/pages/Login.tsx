import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { customersApi } from '@/lib/api';
import logo from '../assets/logo.png';

export const Route = createFileRoute('/Login')({
  component: LoginPage,
});

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const safeEmail = email.trim().toLowerCase();
      if (safeEmail === "admin@gmail.app" && password === "admin@123") {
        localStorage.setItem("user", JSON.stringify({ name: "Admin", email: safeEmail, role: "admin" }));
        window.dispatchEvent(new Event("user-changed"));
        navigate({ to: "/admin" });
        return;
      }

      const customers = await customersApi.getAll();
      const existingUser = customers.find(c => c.email.toLowerCase() === email.toLowerCase());

      if (existingUser) {
        localStorage.setItem("user", JSON.stringify({ name: existingUser.name, email: existingUser.email, role: "user" }));
      } else {
        localStorage.setItem("user", JSON.stringify({ name: email.split('@')[0], email, role: "user" }));
      }

      window.dispatchEvent(new Event("user-changed"));
      navigate({ to: "/" });
    } catch (err) {
      console.error(err);
      alert("Error contacting server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[oklch(0.98_0.005_260)] px-4 py-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-brand/5 blur-3xl" />
        <div className="absolute -right-20 bottom-20 h-64 w-64 rounded-full bg-brand/5 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl border border-border/60 bg-white shadow-elevated">
        <div className="bg-brand-gradient p-8 text-center text-white">
          <Link to="/" className="inline-block bg-white p-2 rounded-xl shadow-brand-glow transition-transform hover:scale-105">
            <img src={logo} alt="SL SHOPEE" className="h-10 w-auto object-contain block" />
          </Link>
          <h1 className="mt-4 font-display text-2xl font-bold">Welcome Back</h1>
          <p className="mt-2 text-sm text-white/80">Log in to manage your orders & profile.</p>
        </div>

        <div className="p-8">
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Email Address</label>
              <div className="relative mt-1.5">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="name@example.com"
                  className="w-full rounded-xl border border-border bg-white pl-10 pr-4 py-3 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Password</label>
                <a href="#" className="text-xs font-medium text-brand hover:underline">Forgot password?</a>
              </div>
              <div className="relative mt-1.5">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-border bg-white pl-10 pr-4 py-3 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gradient py-3 text-sm font-semibold text-white shadow-brand-glow transition-transform hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
            >
              {loading ? "Signing in..." : "Sign In"} <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Don't have an account?{' '}
            <Link to="/Signup" className="font-semibold text-brand hover:underline">
              Create one
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}
