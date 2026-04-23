import { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeSwitcher from '../../../components/ThemeSwitcher';
import Button from '../../../components/ui/Button';
import Sidebar from '../../../components/Sidebar';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav className="bg-surface shadow-md py-4 px-6 flex items-center justify-between dark:bg-surface-dark">
      <div className="flex items-center">
        <div className="text-2xl font-bold text-primary dark:text-primary">MyBlog</div>
      </div>
      <div className="hidden md:flex space-x-2 items-center">
        <Link to="/">
          <Button variant="ghost" className="px-3 py-2">Головна</Button>
        </Link>
        <Link to="/about">
          <Button variant="ghost" className="px-3 py-2">Про мене</Button>
        </Link>
        <Link to="/gallery">
          <Button variant="ghost" className="px-3 py-2">Галерея</Button>
        </Link>
        <ThemeSwitcher />
      </div>
      <div className="md:hidden flex items-center">
        <Button
          variant="ghost"
          className="p-2 flex flex-col justify-center items-center w-10 h-10"
          aria-label="Відкрити меню"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="block w-6 h-0.5 bg-primary mb-1 rounded"></span>
          <span className="block w-6 h-0.5 bg-primary mb-1 rounded"></span>
          <span className="block w-6 h-0.5 bg-primary rounded"></span>
        </Button>
      </div>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)}>
        <Link to="/" onClick={() => setSidebarOpen(false)}>
          <Button variant="ghost" className="w-full justify-start">Головна</Button>
        </Link>
        <Link to="/about" onClick={() => setSidebarOpen(false)}>
          <Button variant="ghost" className="w-full justify-start">Про мене</Button>
        </Link>
        <Link to="/gallery" onClick={() => setSidebarOpen(false)}>
          <Button variant="ghost" className="w-full justify-start">Галерея</Button>
        </Link>
        <ThemeSwitcher />
      </Sidebar>
    </nav>
  );
};

export default Navbar;
