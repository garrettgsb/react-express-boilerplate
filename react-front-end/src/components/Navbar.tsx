import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Chronicle Your Day </Link>
      <Link to="/categories">Categories </Link>
      <Link to="/entries">Entries</Link>
    </nav>
  );
};

export default Navbar;
