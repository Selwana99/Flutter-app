'use client'; // This component will have client-side interactions (e.g., active state)

import React, { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaComments, FaCog } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const navItems = [
  { icon: FaHome, label: 'الرئيسية', href: '/dashboard' },
  { icon: FaComments, label: 'التحليل', href: '/analysis' },
  { icon: FaCog, label: 'الإعدادات', href: '/settings' },
];

const BottomNavBar = () => {
  const pathname = usePathname();

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-card-bg/80 backdrop-blur-sm shadow-top z-50 border-t border-white/10">
      <nav className="flex justify-around items-center h-20 max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center w-20 transition-colors ${
                isActive ? 'text-accent-gold' : 'text-text-secondary'
              } hover:text-accent-gold`}
            >
              <item.icon size={24} />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </footer>
  );
};

export default BottomNavBar;
