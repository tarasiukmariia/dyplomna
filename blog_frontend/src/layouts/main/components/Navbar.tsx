import { Link } from 'react-router-dom';
import ThemeSwitcher from '../../../components/ThemeSwitcher';

const Navbar = () => (
  <nav className="bg-gray-50 shadow-md py-4 px-6 flex items-center justify-between dark:bg-[#23272a]">
    <div className="flex items-center">
      <div className="text-2xl font-bold text-[#b87333] dark:text-[#b87333]">MyBlog</div>
    </div>
    <div className="space-x-4 flex items-center">
      <Link to="/" className="text-gray-700 hover:text-[#b87333] dark:text-gray-100 dark:hover:text-[#b87333]">Головна</Link>
      <Link to="/about" className="text-gray-700 hover:text-[#b87333] dark:text-gray-100 dark:hover:text-[#b87333]">Про мене</Link>
      <Link to="/gallery" className="text-gray-700 hover:text-[#b87333] dark:text-gray-100 dark:hover:text-[#b87333]">Галерея</Link>
      <ThemeSwitcher />
    </div>
  </nav>
);

export default Navbar;
