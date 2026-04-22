import React from 'react';
import { Link } from 'react-router-dom';
import ThemeSwitcher from '../components/ThemeSwitcher';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <header className="bg-gray-50 shadow-md py-4 px-6 flex items-center justify-between dark:bg-gray-800">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">MyBlog</div>
        </div>
        <nav className="space-x-4 flex items-center">
          <Link to="/" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">Головна</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">Про мене</Link>
          <Link to="/gallery" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">Галерея</Link>
          <ThemeSwitcher />
        </nav>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-gray-50 border-t border-gray-200 py-4 text-center text-gray-500 text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
        © {new Date().getFullYear()} MyBlog. Всі права захищено.
      </footer>
    </div>
  );
};

export default MainLayout;