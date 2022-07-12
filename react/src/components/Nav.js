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
        <Routes>
            <Route path="/quote" element={<Quote />}/>
            <Route path="/order" element={<Order />}/>
            <Route path="/invoice" element={<Invoice />}/>
            <Route path="/customer" element={<Customer />}/>
        </Routes>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
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
              <li className="nav-item"><NavLink to="/order">Commande</NavLink></li>
              <li className="nav-item"><NavLink to="/invoice">Facture</NavLink></li>
              <li className="nav-item"><NavLink to="/customer">Clients</NavLink></li>
            </ul>
            <div className="dropdown">
              <a href="#" className="d-flex align-items-center text-white text-decoration-none">
                <img src="https://github.com/mdo.png" alt="" width="32"
                     height="32" className="rounded-circle me-2"/>
                <strong>mdo</strong>
              </a>
            </div>
          </div>
        </>
    );
  }
}

export default Nav;