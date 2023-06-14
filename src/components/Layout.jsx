import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="layout">
      <nav className="navigation">
        <ul className="menu">
          <li>
            <NavLink to="/" className="menu-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/posts" className="menu-link">
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink to="/create-post" className="menu-link">
              Create Post
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="container">
        <Outlet />
      </div>
      <footer className="footer">Это подвал</footer>
    </div>
  );
}

export default Layout;
