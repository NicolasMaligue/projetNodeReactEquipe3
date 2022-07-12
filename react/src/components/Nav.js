import { Component } from "react";

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <a className="navbar-brand ps-3" href="index.html">Start Bootstrap</a>
                <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><svg className="svg-inline--fa fa-bars" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"></path></svg><i className="fas fa-bars"></i></button>
            </nav>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg className="bi me-2" width="40" height="32"><use href="#bootstrap"></use></svg>
                <span className="fs-4">Sidebar</span>
                </a>
                <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="#" className="nav-link active" aria-current="page">
                    <svg className="bi me-2" width="16" height="16"><use href="#home"></use></svg>
                    Home
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                    <svg className="bi me-2" width="16" height="16"><use href="#speedometer2"></use></svg>
                    Dashboard
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                    <svg className="bi me-2" width="16" height="16"><use href="#table"></use></svg>
                    Orders
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                    <svg className="bi me-2" width="16" height="16"><use href="#grid"></use></svg>
                    Products
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                    <svg className="bi me-2" width="16" height="16"><use href="#people-circle"></use></svg>
                    Customers
                    </a>
                </li>
                </ul>
                <div className="dropdown">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                        <strong>mdo</strong>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>   
                </div>
            </div>
        </>
        );
    }
}

export default Nav;