import React from 'react';
import { Link } from 'react-router-dom';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      <header className="bg-gray-800 shadow-md py-4 px-6 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-400">MyBlog</div>
        <nav className="space-x-4">
          <Link to="/" className="text-gray-200 hover:text-blue-400">Головна</Link>
          <Link to="/about" className="text-gray-200 hover:text-blue-400">Про мене</Link>
          <Link to="/gallery" className="text-gray-200 hover:text-blue-400">Галерея</Link>
        </nav>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-gray-800 border-t border-gray-700 py-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} MyBlog. Всі права захищено.
      </footer>
    </div>
  );
};

export default MainLayout;