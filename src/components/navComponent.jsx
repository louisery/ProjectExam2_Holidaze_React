import React from "react";
import { NavLink } from "react-router-dom";

export default class NavbarComponent extends React.Component {
  render() {
    return (
      <nav
        className="[ navbar navbar-expand-lg navbar-dark ]"
        role="navigation"
      >
        <a className="[ navbar-brand ] [ navbar__brand ]" href="/home">
          Holidaze
        </a>
        <button
          className="[ navbar-toggler ]"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-content"
          aria-controls="navbar-content"
          aria-expanded="false"
          aria-label="toggle navigation"
        >
          <i class="[ fas fa-bars ] [ navbar__hamburger--color ]" />
        </button>

        <div className="[ collapse navbar-collapse ]" id="navbar-content">
          <ul className="[ navbar-nav ml-auto ]">
            <li className="[ nav-item ]">
              <NavLink to="/#/home" className="[ navbar__link ]">
                Home
              </NavLink>
            </li>

            <li className="[ nav-item ]">
              <NavLink to="/hotels" className="[ navbar__link ]">
                Hotels
              </NavLink>
            </li>

            <li className="[ nav-item ]">
              <NavLink to="/contact" className="[ navbar__link ]">
                Contact
              </NavLink>
            </li>

            <li className="[ nav-item ]">
              <NavLink to="/login" className="[ navbar__link ]">
                <i className="[ far fa-user ]" />
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
