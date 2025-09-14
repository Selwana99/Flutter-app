'use client';

import { useRouter } from 'next/navigation';
import { useUserStore } from '@/store/userStore';
import Card from '@/components/Card';
import { FaSignOutAlt, FaPalette, FaBell, FaChevronLeft } from 'react-icons/fa';

// A simple toggle switch component for UI representation
const ToggleSwitch = ({ enabled }: { enabled: boolean }) => (
  <div className={`w-12 h-6 rounded-full p-1 flex items-center cursor-pointer transition-colors ${enabled ? 'bg-success-green' : 'bg-background'}`}>
    <div className={`w-4 h-4 bg-white rounded-full transform transition-transform ${enabled ? 'translate-x-6' : 'translate-x-0'}`}></div>
  </div>
);


export default function SettingsPage() {
  const router = useRouter();
  const { logout, user } = useUserStore();

  const handleLogout = () => {
    logout();
    router.push('/'); // Redirect to the welcome page after logout
  };

  return (
    <div className="p-4 space-y-6 max-w-lg mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">الإعدادات</h1>
        <p className="text-text-secondary mt-2">{user?.email}</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-text-secondary font-bold text-lg px-2">العام</h2>
        <Card className="!p-0">
          <div className="flex justify-between items-center p-4 border-b border-white/10">
            <div className="flex items-center gap-4">
              <FaPalette className="text-text-secondary" size={20} />
              <span>المظهر</span>
            </div>
            <div className="flex items-center gap-2 text-text-secondary">
              <span>داكن</span>
              <FaChevronLeft />
            </div>
          </div>
          <div className="flex justify-between items-center p-4">
             <div className="flex items-center gap-4">
              <FaBell className="text-text-secondary" size={20} />
              <span>تنبيهات الأسعار</span>
            </div>
            <ToggleSwitch enabled={true} />
          </div>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-text-secondary font-bold text-lg px-2">الحساب</h2>
        <Card className="!p-0">
          <button
            onClick={handleLogout}
            className="w-full text-danger-red font-semibold flex items-center justify-center gap-3 text-lg p-4"
          >
            <FaSignOutAlt />
            <span>تسجيل الخروج</span>
          </button>
        </Card>
      </div>
    </div>
  );
}
