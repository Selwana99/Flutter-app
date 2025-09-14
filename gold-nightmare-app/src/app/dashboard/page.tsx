'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/store/userStore';
import Card from '@/components/Card';
import ActionButton from '@/components/ActionButton';
import Header from '@/components/Header';
import { performAnalysis } from '@/services/analysisService';

import { FaBolt, FaChartLine, FaCrosshairs, FaRedo, FaFire, FaChartBar, FaBook, FaHeadset } from 'react-icons/fa';
import { GiCrystalBall } from 'react-icons/gi';

export default function DashboardPage() {
  const router = useRouter();
  const { user, isAuthenticated, deductPoints } = useUserStore();
  const [loadingAnalysis, setLoadingAnalysis] = useState<string | null>(null);

  useEffect(() => {
    // If not authenticated after a brief moment (to allow store rehydration), redirect to login.
    const timer = setTimeout(() => {
      if (!isAuthenticated) {
        router.replace('/');
      }
    }, 100); // 100ms delay to wait for persisted state to load
    return () => clearTimeout(timer);
  }, [isAuthenticated, router]);

  const handleAnalysis = async (type: string, points: number) => {
    if (!user || user.points < points) {
      alert('نقاط غير كافية!');
      return;
    }
    setLoadingAnalysis(type);
    try {
      const result = await performAnalysis({ analysisType: type, userPoints: user.points });
      if (result.success) {
        deductPoints(result.pointsUsed);
        // In a real app, we'd show this in a modal or a new page.
        alert(`Analysis Result:\n${JSON.stringify(result.data, null, 2)}`);
      }
    } catch (error: any) {
      alert(`Error: ${error.message}`);
    } finally {
      setLoadingAnalysis(null);
    }
  };

  // Render a loading state or null while checking auth to prevent flicker
  if (!isAuthenticated) {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <p>Loading...</p>
        </div>
    );
  }

  return (
    <div className="p-4 space-y-6">
      <Header />

      <div className="grid grid-cols-2 gap-4">
        <Card className="flex flex-col justify-center">
          <p className="text-text-secondary">مرحباً</p>
          <h2 className="text-2xl font-bold text-white">👑 {user?.name || 'Guest'}</h2>
        </Card>
        <Card className="bg-gradient-to-br from-amber-400 to-yellow-600 flex flex-col items-center justify-center">
          <p className="text-yellow-900">النقاط</p>
          <p className="text-3xl font-bold text-white">{user?.points.toLocaleString() || 0}</p>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <ActionButton icon={FaCrosshairs} title="سكالبينج" points={2} onClick={() => handleAnalysis('scalping', 2)} />
        <ActionButton icon={FaChartLine} title="سوينج" points={3} onClick={() => handleAnalysis('swing', 3)} iconColor="text-purple-400" />
        <ActionButton icon={FaFire} title="كابوس الذهب" points={5} onClick={() => handleAnalysis('nightmare', 5)} iconColor="text-red-500" />
        <ActionButton icon={FaBolt} title="تحليل سريع" points={1} onClick={() => handleAnalysis('quick', 1)} />
      </div>

      <div className="space-y-4">
        <Card onClick={() => alert('Navigate to Chart Analysis page')} className="bg-gradient-to-r from-purple-600 to-indigo-600 !p-6 text-center">
          <h3 className="text-xl font-bold flex items-center justify-center gap-2"><FaChartBar /> تحليل الشارت</h3>
        </Card>
        <Card onClick={() => alert('Navigate to Analysis Library page')} className="bg-gradient-to-r from-blue-600 to-sky-600 !p-6 text-center">
          <h3 className="text-xl font-bold flex items-center justify-center gap-2"><FaBook /> مكتبة التحليلات</h3>
        </Card>
      </div>
    </div>
  );
}
