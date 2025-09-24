import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackgroundIcons from '@/components/BackgroundIcons';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#1A1A1A] relative">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <BackgroundIcons />
      </div>
      <Header />
      <main className="flex-grow z-0 relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;