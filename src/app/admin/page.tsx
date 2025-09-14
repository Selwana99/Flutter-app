import { getAdminStats, getLicenseKeys } from '@/services/adminService';
import Card from '@/components/Card';
import { FaUsers, FaUserCheck, FaChartBar, FaDollarSign, FaKey, FaPlus, FaTrash } from 'react-icons/fa';
import Link from 'next/link';

// A dedicated component for the statistic cards
const StatCard = ({ icon: Icon, value, label, colorClass }) => (
  <Card className={`!p-5 flex flex-col justify-between text-white ${colorClass}`}>
    <div className="flex justify-between items-start mb-4">
      <Icon size={28} />
    </div>
    <div>
      <p className="text-3xl font-bold">{value}</p>
      <p className="text-sm text-white/80">{label}</p>
    </div>
  </Card>
);

// A map to ensure Tailwind CSS recognizes the dynamic classes
const colorMap = {
  red: { text: 'text-red-400', bg: 'bg-red-500' },
  yellow: { text: 'text-yellow-400', bg: 'bg-yellow-500' },
  blue: { text: 'text-blue-400', bg: 'bg-blue-500' },
};

export default async function AdminDashboardPage() {
  // Fetch data in parallel
  const [stats, keys] = await Promise.all([getAdminStats(), getLicenseKeys()]);

  return (
    <div className="space-y-10">
      {/* Statistics Section */}
      <section>
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold flex items-center gap-3"><FaChartBar /> الإحصائيات</h2>
            <Link href="/admin/users" className="text-sm text-accent-gold hover:underline">عرض كل المستخدمين</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard icon={FaUsers} value={stats.totalUsers} label="إجمالي المستخدمين" colorClass="bg-gradient-to-br from-purple-500 to-indigo-600" />
          <StatCard icon={FaUserCheck} value={stats.activeUsers} label="المستخدمين النشطين" colorClass="bg-gradient-to-br from-green-500 to-emerald-600" />
          <StatCard icon={FaChartBar} value={stats.analysesToday} label="تحليلات اليوم" colorClass="bg-gradient-to-br from-blue-500 to-sky-600" />
          <StatCard icon={FaDollarSign} value={`$${stats.revenue.toLocaleString()}`} label="الإيرادات" colorClass="bg-gradient-to-br from-yellow-500 to-amber-600" />
        </div>
      </section>

      {/* Key Management Section */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold flex items-center gap-3"><FaKey /> إدارة المفاتيح</h2>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors">
            <FaPlus /> إنشاء مفتاح
          </button>
        </div>
        <div className="space-y-3">
          {keys.map(key => (
            <Card key={key.id} className="!p-3 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <FaKey className={colorMap[key.color]?.text || 'text-gray-400'} size={20} />
                <div>
                  <p className="font-mono text-sm md:text-base">{key.key}</p>
                  <span className={`text-xs font-bold text-white px-2 py-0.5 rounded-full ${colorMap[key.color]?.bg || 'bg-gray-500'}`}>{key.type}</span>
                </div>
              </div>
              <button className="p-2 rounded-full hover:bg-card-bg text-gray-400 hover:text-danger-red transition-colors"><FaTrash /></button>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
