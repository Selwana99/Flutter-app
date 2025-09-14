import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-white">
      <header className="p-4 flex items-center gap-4 border-b border-white/10 sticky top-0 bg-background/80 backdrop-blur-sm z-10">
        <Link href="/dashboard" className="p-2 rounded-full hover:bg-card-bg">
          <FaArrowLeft className="text-xl" />
        </Link>
        <div>
          <h1 className="text-xl font-bold">ADMIN PANEL</h1>
          <p className="text-xs text-success-green font-semibold">وضع المطور السري</p>
        </div>
      </header>
      <main className="p-4">
        {children}
      </main>
    </div>
  );
}
