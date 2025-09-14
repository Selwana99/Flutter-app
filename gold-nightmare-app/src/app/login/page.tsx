'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/store/userStore';
import { login } from '@/services/authService';

export default function LoginPage() {
  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('password123');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const userLogin = useUserStore((state) => state.login);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await login({ email, password });
      if (response.success && response.user) {
        userLogin(response.user);
        router.push('/dashboard');
      } else {
        setError(response.message || 'An unexpected error occurred.');
      }
    } catch (err: any) {
      setError(err.message || 'Failed to login.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-background text-white">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">تسجيل الدخول</h1>
          <p className="text-text-secondary mt-2">مرحباً بعودتك!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">البريد الإلكتروني</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-card-bg border-transparent rounded-lg p-3 focus:ring-2 focus:ring-accent-gold outline-none transition"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-text-secondary mb-2">كلمة المرور</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-card-bg border-transparent rounded-lg p-3 focus:ring-2 focus:ring-accent-gold outline-none transition"
              required
            />
          </div>

          {error && <p className="text-danger-red text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-accent-gold text-background font-bold py-3 rounded-lg transition-transform hover:scale-105 disabled:opacity-50 disabled:scale-100"
            disabled={loading}
          >
            {loading ? 'جاري الدخول...' : 'دخول'}
          </button>
        </form>

        <p className="text-center text-sm text-text-secondary mt-8">
          ليس لديك حساب؟{' '}
          <Link href="/signup" className="font-semibold text-accent-gold hover:underline">
            أنشئ حسابًا
          </Link>
        </p>
      </div>
    </main>
  );
}
