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
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Fifth navbar example">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Expand at lg</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarsExample05">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item"><NavLink to="/">Dashboard</NavLink></li>      
                  <li className="nav-item"><NavLink to="/quote">Devis</NavLink></li>
                  <li className="nav-item"><NavLink to="/order">Commande</NavLink></li>
                  <li className="nav-item"><NavLink to="/invoice">Facture</NavLink></li>
                  <li className="nav-item"><NavLink to="/customer">Clients</NavLink></li>
                </ul>
                <form>
                  <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
                </form>
              </div>
            </div>
          </nav>
        </>
    );
  }
}

export default Nav;