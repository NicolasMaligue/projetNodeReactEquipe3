import React, {Component} from 'react';
import {NavLink, Route, Routes} from 'react-router-dom';
import Customer from './pages/Customer';
import Quote from './pages/Quote';
import Order from './pages/Order';
import Invoice from './pages/Invoice';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <>
          <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand ps-3" href="index.html">Start
              Bootstrap</a>
          </nav>
          <div
              className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark w-25">
            <a href="/"
               className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
              <svg className="bi me-2" width="40" height="32">
                <use href="#bootstrap"></use>
              </svg>
            </a>
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item"><NavLink to="/">Dashboard</NavLink></li>
              <li className="nav-item"><NavLink to="/quote">Devis</NavLink></li>
              <li className="nav-item"><NavLink to="/order">Commande</NavLink>
              </li>
              <li className="nav-item"><NavLink to="/invoice">Facture</NavLink>
              </li>
              <li className="nav-item"><NavLink to="/customer">Clients</NavLink>
              </li>
            </ul>
            <div className="dropdown">
              <a href="#"
                 className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                 id="dropdownUser1" data-bs-toggle="dropdown"
                 aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="" width="32"
                     height="32" className="rounded-circle me-2"/>
                <strong>mdo</strong>
              </a>
              <ul className="dropdown-menu dropdown-menu-dark text-small shadow"
                  aria-labelledby="dropdownUser1">
                <li><a className="dropdown-item" href="#">New project...</a>
                </li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li>
                  <hr className="dropdown-divider"/>
                </li>
                <li><a className="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>
          </div>
        </>
    );
  }
}

export default Nav;