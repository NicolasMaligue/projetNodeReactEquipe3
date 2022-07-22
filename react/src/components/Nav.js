import React from "react";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  const nav_button = () => {
    if (props.role === "admin") {
      return (
        <>
          <li className="nav-item px-3">
            <NavLink to="/users">
              <button className="btn btn-light">Utilisateurs</button>
            </NavLink>
          </li>
        </>
      );
    }
    if (props.role === "boss") {
      return (
        <>
          <li className="nav-item px-3">
            <NavLink to="/">
              <button className="btn btn-light">Dashboard</button>
            </NavLink>
          </li>
          <li className="nav-item px-3">
            <NavLink to="/quotes">
              <button className="btn btn-light">Devis</button>
            </NavLink>
          </li>
          <li className="nav-item px-3">
            <NavLink to="/orders">
              <button className="btn btn-light">Commandes</button>
            </NavLink>
          </li>
          <li className="nav-item px-3">
            <NavLink to="/invoices">
              <button className="btn btn-light">Factures</button>
            </NavLink>
          </li>
          <li className="nav-item px-3">
            <NavLink to="/vehicles">
              <button className="btn btn-light">Véhicules</button>
            </NavLink>
          </li>
          <li className="nav-item px-3">
            <NavLink to="/customers">
              <button className="btn btn-light">Clients</button>
            </NavLink>
          </li>
        </>
      );
    }
    if (props.role === "dealer") {
      return (
        <>
          <li className="nav-item px-3">
            <NavLink to="/">
              <button className="btn btn-light">Dashboard</button>
            </NavLink>
          </li>
          <li className="nav-item px-3">
            <NavLink to="/quotes">
              <button className="btn btn-light">Devis</button>
            </NavLink>
          </li>
          <li className="nav-item px-3">
            <NavLink to="/orders">
              <button className="btn btn-light">Commandes</button>
            </NavLink>
          </li>
          <li className="nav-item px-3">
            <NavLink to="/invoices">
              <button className="btn btn-light">Factures</button>
            </NavLink>
          </li>
          <li className="nav-item px-3">
            <NavLink to="/vehicles">
              <button className="btn btn-light">Véhicules</button>
            </NavLink>
          </li>
          <li className="nav-item px-3">
            <NavLink to="/customers">
              <button className="btn btn-light">Clients</button>
            </NavLink>
          </li>
        </>
      );
    }
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        aria-label="Fifth navbar example"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            FunTeam
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample05"
            aria-controls="navbarsExample05"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample05">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">{nav_button()}</ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
