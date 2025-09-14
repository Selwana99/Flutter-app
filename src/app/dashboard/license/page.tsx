'use client';

import { useState } from 'react';
import { useUserStore } from '@/store/userStore';
import { activateLicense } from '@/services/licenseService';
import Card from '@/components/Card';
import { FaSpinner } from 'react-icons/fa';

export default function LicensePage() {
  const [licenseKey, setLicenseKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const { addPoints, user } = useUserStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!licenseKey) return;

    setLoading(true);
    setMessage(null);

    try {
      const response = await activateLicense(licenseKey);
      if (response.success && response.pointsAdded) {
        addPoints(response.pointsAdded);
        setMessage({ type: 'success', text: `${response.message}. تم إضافة ${response.pointsAdded} نقطة إلى حسابك.` });
        setLicenseKey('');
      }
    } catch (error: any) {
      setMessage({ type: 'error', text: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 space-y-6 max-w-lg mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold">تفعيل الرخصة</h1>
        <p className="text-text-secondary mt-2">أدخل مفتاح الرخصة الخاص بك لإضافة النقاط وتفعيل الميزات.</p>
      </div>
      <Card>
        <div className="text-center mb-6">
            <p className="text-text-secondary">نقاطك الحالية</p>
            <p className="text-3xl font-bold text-accent-gold">{user?.points.toLocaleString()}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="licenseKey" className="block text-sm font-medium text-text-secondary mb-2">
              مفتاح الرخصة
            </label>
            <input
              type="text"
              id="licenseKey"
              value={licenseKey}
              onChange={(e) => setLicenseKey(e.target.value)}
              className="w-full bg-background border-gray-600 border rounded-lg p-3 focus:ring-2 focus:ring-accent-gold outline-none transition text-center tracking-widest"
              placeholder="GOLD-XXXX-XXXX-XXXX"
              required
            />
          </div>

          {message && (
            <div className={`text-center p-3 rounded-lg ${message.type === 'success' ? 'bg-success-green/20 text-success-green' : 'bg-danger-red/20 text-danger-red'}`}>
              {message.text}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent-gold text-background font-bold py-3 rounded-lg disabled:opacity-50 transition hover:scale-105 flex items-center justify-center gap-2"
          >
            {loading && <FaSpinner className="animate-spin" />}
            {loading ? 'جاري التفعيل...' : 'تفعيل'}
          </button>
        </form>
      </Card>
    </div>
  );
}
