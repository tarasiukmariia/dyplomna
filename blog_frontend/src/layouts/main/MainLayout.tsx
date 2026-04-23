import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;