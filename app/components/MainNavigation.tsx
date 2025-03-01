import { NavLink } from '@remix-run/react';

function MainNavigation() {
  return (
    <nav id="main-navigation">
      <ul>
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;