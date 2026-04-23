import { Link } from 'react-router-dom';
import ThemeSwitcher from '../../../components/ThemeSwitcher';

const Navbar = () => (
  <nav className="bg-surface shadow-md py-4 px-6 flex items-center justify-between dark:bg-surface-dark">
    <div className="flex items-center">
      <div className="text-2xl font-bold text-primary dark:text-primary">MyBlog</div>
    </div>
    <div className="space-x-4 flex items-center">
      <Link to="/" className="text-text hover:text-primary dark:text-text-light dark:hover:text-primary">Головна</Link>
      <Link to="/about" className="text-text hover:text-primary dark:text-text-light dark:hover:text-primary">Про мене</Link>
      <Link to="/gallery" className="text-text hover:text-primary dark:text-text-light dark:hover:text-primary">Галерея</Link>
      <ThemeSwitcher />
    </div>
  </nav>
);

export default Navbar;
