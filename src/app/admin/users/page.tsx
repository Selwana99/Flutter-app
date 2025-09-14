import { getUsers } from '@/services/adminService';
import Card from '@/components/Card';
import { FaUser, FaToggleOn, FaTrashAlt, FaDownload, FaUsers } from 'react-icons/fa';

// A simple toggle switch component for UI representation
const ToggleSwitch = ({ enabled }: { enabled: boolean }) => (
  <div className={`w-12 h-6 rounded-full p-1 flex items-center cursor-pointer transition-colors ${enabled ? 'bg-success-green' : 'bg-background'}`}>
    <div className={`w-4 h-4 bg-white rounded-full transform transition-transform ${enabled ? 'translate-x-6' : 'translate-x-0'}`}></div>
  </div>
);

export default async function AdminUsersPage() {
  const users = await getUsers();

  return (
    <div className="space-y-10">
      {/* User Management Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3"><FaUsers /> المستخدمين</h2>
        <div className="space-y-3">
          {users.map(user => (
            <Card key={user.id} className="!p-3 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="font-bold text-black text-sm">US</span>
                </div>
                <div>
                  <p className="font-bold">{`User #${user.id}`}</p>
                  <p className="text-sm text-text-secondary">{`التحليلات: ${user.analyses} | النوع: ${user.type}`}</p>
                </div>
              </div>
              <span className="text-sm text-text-secondary">{user.lastSeen}</span>
            </Card>
          ))}
        </div>
      </section>

      {/* Advanced Settings Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">إعدادات متقدمة</h2>
        <Card className="!p-0">
           <div className="flex justify-between items-center p-4 border-b border-white/10">
            <div>
              <h3 className="font-bold">وضع الصيانة</h3>
              <p className="text-sm text-text-secondary">إيقاف التطبيق مؤقتًا</p>
            </div>
            <ToggleSwitch enabled={false} />
          </div>
          <div className="flex justify-between items-center p-4 border-b border-white/10">
            <div>
              <h3 className="font-bold text-danger-red">حذف جميع البيانات</h3>
              <p className="text-sm text-text-secondary">مسح قاعدة البيانات (لا يمكن التراجع)</p>
            </div>
            <button className="text-danger-red p-2 rounded-full hover:bg-danger-red/10"><FaTrashAlt size={20} /></button>
          </div>
           <div className="flex justify-between items-center p-4">
            <div>
              <h3 className="font-bold">تصدير البيانات</h3>
              <p className="text-sm text-text-secondary">حفظ نسخة احتياطية</p>
            </div>
            <button className="text-accent-gold p-2 rounded-full hover:bg-accent-gold/10"><FaDownload size={20} /></button>
          </div>
        </Card>
      </section>
    </div>
  );
}
