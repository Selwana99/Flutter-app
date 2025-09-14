import Link from 'next/link';

export default function SignupPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-background text-white">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">إنشاء حساب جديد</h1>
          <p className="text-text-secondary mt-2">انضم إلينا وابدأ التحليل</p>
        </div>

        <form className="space-y-5">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-text-secondary mb-2">الاسم الكامل</label>
            <input
              type="text"
              id="fullName"
              placeholder="اسمك الكامل"
              className="w-full bg-card-bg border-transparent rounded-lg p-3 focus:ring-2 focus:ring-accent-gold outline-none transition"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">البريد الإلكتروني</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full bg-card-bg border-transparent rounded-lg p-3 focus:ring-2 focus:ring-accent-gold outline-none transition"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-text-secondary mb-2">كلمة المرور</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full bg-card-bg border-transparent rounded-lg p-3 focus:ring-2 focus:ring-accent-gold outline-none transition"
            />
          </div>
           <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-text-secondary mb-2">تأكيد كلمة المرور</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="••••••••"
              className="w-full bg-card-bg border-transparent rounded-lg p-3 focus:ring-2 focus:ring-accent-gold outline-none transition"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-accent-gold text-background font-bold py-3 rounded-lg transition-transform hover:scale-105 !mt-8"
          >
            إنشاء الحساب
          </button>
        </form>

        <p className="text-center text-sm text-text-secondary mt-8">
          لديك حساب بالفعل؟{' '}
          <Link href="/login" className="font-semibold text-accent-gold hover:underline">
            تسجيل الدخول
          </Link>
        </p>
      </div>
    </main>
  );
}
