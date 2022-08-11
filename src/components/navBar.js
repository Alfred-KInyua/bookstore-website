import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="nav">
    <nav>
      <ul>

        <li>
          <NavLink to="/">Books</NavLink>

        </li>
        <li>
          <NavLink to="/Categories" className="two">Categories</NavLink>
        </li>

      </ul>
    </nav>

  </div>
);
export default Navbar;
