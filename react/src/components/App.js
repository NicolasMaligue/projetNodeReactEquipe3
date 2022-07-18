import "../App.css";
import Orders from "./pages/Orders";
import Nav from "./Nav";
import { Route, Routes } from "react-router-dom";
// import Quote from './pages/Quote';
// import Invoice from './pages/Invoice';
import Customer from "./pages/Customer";
import React, { useState } from "react";
import FunLogin from './login/FunLogin';
import axios from 'axios';
import UseToken from './login/UseToken';

// Axios default api config values
axios.defaults.baseURL = 'http://localhost:3001/api';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const App = () => {
  const { token, setToken } = UseToken();
  // const [token, setToken] = useState();

  if(!token) {
    return <FunLogin setToken={setToken} />
  }

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
          <Route path="/customer" element={<Customer />} />*
        </Routes>
      </main>
      <footer className="mt-4"></footer>
    </div>
  );
};

export default App;
