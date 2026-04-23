import { Link } from 'react-router-dom';
import ThemeSwitcher from '../../../components/ThemeSwitcher';

const Navbar = () => (
  <nav className="bg-gray-50 shadow-md py-4 px-6 flex items-center justify-between dark:bg-surface-dark">
    <div className="flex items-center">
      <div className="text-2xl font-bold text-accent dark:text-accent">MyBlog</div>
    </div>
    <div className="space-x-4 flex items-center">
      <Link to="/" className="text-gray-700 hover:text-accent dark:text-gray-100 dark:hover:text-accent">Головна</Link>
      <Link to="/about" className="text-gray-700 hover:text-accent dark:text-gray-100 dark:hover:text-accent">Про мене</Link>
      <Link to="/gallery" className="text-gray-700 hover:text-accent dark:text-gray-100 dark:hover:text-accent">Галерея</Link>
      <ThemeSwitcher />
    </div>
  </nav>
);

export default Navbar;
