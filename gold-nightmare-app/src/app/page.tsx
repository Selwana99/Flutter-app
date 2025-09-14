import Link from 'next/link';
import { FaShieldAlt } from 'react-icons/fa';

export default function WelcomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-background text-white">
      <div className="text-center">
        {/* Using a generic icon as a placeholder for the logo */}
        <FaShieldAlt className="text-accent-gold mx-auto mb-4" size={64} />
        <h1 className="text-4xl font-bold mb-2">
          Gold Nightmare
        </h1>
        <p className="text-text-secondary mb-12">
          تحليلات دقيقة، قرارات ذكية
        </p>
      </div>

      <div className="flex flex-col gap-4 w-full max-w-xs">
        <Link
          href="/signup"
          className="w-full bg-accent-gold text-background font-bold py-3 px-4 rounded-lg text-center transition-transform hover:scale-105"
        >
          إنشاء حساب جديد
        </Link>
        <Link
          href="/login"
          className="w-full bg-card-bg text-white font-bold py-3 px-4 rounded-lg text-center transition-transform hover:scale-105"
        >
          تسجيل الدخول
        </Link>
      </div>

      <div className="mt-8">
        <Link href="/dashboard" className="text-text-secondary hover:text-white transition-colors">
          الدخول كحساب تجريبي
        </Link>
      </div>
    </main>
  );
}
