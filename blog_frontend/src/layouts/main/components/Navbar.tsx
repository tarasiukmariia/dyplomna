import { Link } from 'react-router-dom';
import ThemeSwitcher from '../../../components/ThemeSwitcher';
import Button from '../../../components/ui/Button';

const Navbar = () => (
  <nav className="bg-surface shadow-md py-4 px-6 flex items-center justify-between dark:bg-surface-dark">
    <div className="flex items-center">
      <div className="text-2xl font-bold text-primary dark:text-primary">MyBlog</div>
    </div>
    <div className="space-x-2 flex items-center">
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
  </nav>
);

export default Navbar;
