import BottomNavBar from "@/components/BottomNavBar";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-background">
      {/* The main content */}
      <main className="pb-24"> {/* Padding bottom to avoid overlap with nav bar */}
        {children}
      </main>

      {/* Bottom Navigation Bar */}
      <BottomNavBar />
    </div>
  );
}
