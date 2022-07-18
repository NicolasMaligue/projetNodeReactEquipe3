import "../App.css";
import Orders from "./pages/Orders";
import Users from "./pages/Users";
import Nav from "./Nav";
import { Route, Routes } from "react-router-dom";
import Quotes from './pages/Quotes';
import Customers from "./pages/Customers";
import React from "react";
import axios from 'axios';
import Invoices from './pages/Invoices';
import Vehicles from './pages/Vehicles';
import React from "react";
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
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/invoices" element={<Invoices/>}/>
          <Route path="/vehicles" element={<Vehicles/>}/>
          <Route path="/customers" element={<Customers />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </main>
      <footer className="mt-4"></footer>
    </div>
  );
};

export default App;
