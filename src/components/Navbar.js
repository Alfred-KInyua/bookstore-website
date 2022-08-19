import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="name">
    <header>
      <nav>
        <ul className="header">
          <li className="Bookstore-CMS">
            <NavLink to="/">Bookstore CMS</NavLink>
          </li>
          <li className="bks">
            <NavLink to="/">Books</NavLink>
          </li>
          <li className="CATEGORIES">
            <NavLink to="/categories">Categories</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>
);
export default Navbar;
