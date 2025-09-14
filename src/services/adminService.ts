// Mock data service for the admin panel UI

export const getAdminStats = async () => {
  await new Promise(resolve => setTimeout(resolve, 200)); // Simulate latency
  return {
    totalUsers: 127,
    activeUsers: 45,
    analysesToday: 312,
    revenue: 4580.5,
  };
};

export const getLicenseKeys = async () => {
  await new Promise(resolve => setTimeout(resolve, 200));
  return [
    { id: '1', key: 'GOLD-ADMIN-2024-NIGHTMARE', type: 'ADMIN', status: 'نشط', color: 'red' },
    { id: '2', key: 'GOLD-VIP-2024-PREMIUM', type: 'VIP', status: 'نشط', color: 'yellow' },
    { id: '3', key: 'GOLD-PRO-2024-USER001', type: 'PRO', status: 'نشط', color: 'blue' },
  ];
};

export const getUsers = async () => {
  await new Promise(resolve => setTimeout(resolve, 200));
  return [
    { id: 'USR1003', analyses: 26, type: 'VIP', lastSeen: 'منذ 3 ساعات' },
    { id: 'USR1004', analyses: 44, type: 'FREE', lastSeen: 'منذ 5 دقائق' },
    { id: 'USR1005', analyses: 81, type: 'PRO', lastSeen: 'الآن' },
    { id: 'USR1006', analyses: 12, type: 'VIP', lastSeen: 'منذ 3 ساعات' },
  ];
};
