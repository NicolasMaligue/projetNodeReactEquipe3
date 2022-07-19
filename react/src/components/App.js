import "../App.css";
import Users from "./pages/Users";
import Nav from "./Nav";
import { Route, Routes } from "react-router-dom";
import Quotes from './pages/Quotes';
import Customers from "./pages/Customers";
import React from "react";
import axios from 'axios';
import Invoices from './pages/Invoices';
import Vehicles from './pages/Vehicles';
import FunLogin from './login/FunLogin';
import UseToken from './login/UseToken';
import Order from './domain/Order';
import FunList from "./fun/FunList";
import OrderView from './fun/OrderView';
import CustomerView from './fun/CustomerView';
import QuoteView from './fun/QuoteView';
import InvoiceView from './fun/InvoiceView';
import VehicleView from './fun/VehicleView';
import UserView from './fun/UserView';

// Axios default api config values
axios.defaults.baseURL = 'http://localhost:3001/api';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const App = () => {
  const { token, setToken } = UseToken();
  // const [token, setToken] = useState();

  if (!token) {
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
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/users" element={<Users />} />
          <Route path="/orders" element={<FunList nestedComponent={Order} api_path="/orders" />} />
          <Route path="/orders/1" element={<OrderView />} />
          <Route path="/customers/1" element={<CustomerView />} />
          <Route path="/quotes/1" element={<QuoteView />} />
          <Route path="/invoices/1" element={<InvoiceView />} />
          <Route path="/vehicles/1" element={<VehicleView />} />
          <Route path="/users/1" element={<UserView />} />
        </Routes>
      </main>
      <footer className="mt-4"></footer>
    </div>
  );
};

export default App;
