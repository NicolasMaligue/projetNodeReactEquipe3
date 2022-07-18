import "../App.css";
import Orders from "./pages/Orders";
import Users from "./pages/Users";
import Nav from "./Nav";
import { Route, Routes } from "react-router-dom";
// import Quote from './pages/Quote';
// import Invoice from './pages/Invoice';
import Customer from "./pages/Customer";
import React from "react";
import axios from 'axios';

// Axios default api config values
axios.defaults.baseURL = 'http://localhost:3001/api';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const App = () => {
  return (

    <div className="App">
      <header>
        <Nav />
      </header>
      <main className="container mt-2">
        <Routes>
          <Route path="/" />
          {/* <Route path="/quote" element={<Quote/>}/> */}
          <Route path="/orders" element={<Orders />} />
          {/* <Route path="/invoice" element={<Invoice/>}/> */}
          <Route path="/customer" element={<Customer />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </main>
      <footer className="mt-4"></footer>
    </div>
  );
};

export default App;
