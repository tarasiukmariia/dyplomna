import { Link } from 'react-router-dom';
import ThemeSwitcher from '../../../components/ThemeSwitcher';

const Navbar = () => (
  <nav className="bg-gray-50 shadow-md py-4 px-6 flex items-center justify-between dark:bg-gray-800">
    <div className="flex items-center">
      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">MyBlog</div>
    </div>
    <div className="space-x-4 flex items-center">
      <Link to="/" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">Головна</Link>
      <Link to="/about" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">Про мене</Link>
      <Link to="/gallery" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">Галерея</Link>
      <ThemeSwitcher />
    </div>
  </nav>
);

export default Navbar;
