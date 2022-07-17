import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Fifth navbar example">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">Expand at lg</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarsExample05">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item px-3"><NavLink to="/">Dashboard</NavLink></li>      
                  <li className="nav-item px-3"><NavLink to="/quote">Devis</NavLink></li>
                  <li className="nav-item px-3"><NavLink to="/orders">Commande</NavLink></li>
                  <li className="nav-item px-3"><NavLink to="/invoice">Facture</NavLink></li>
                  <li className="nav-item px-3"><NavLink to="/customer">Clients</NavLink></li>
                </ul>
                <form>
                  <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                </form>
              </div>
            </div>
          </nav>
        </>
    );
  }
}

export default Nav;