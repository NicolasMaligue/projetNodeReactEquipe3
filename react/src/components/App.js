import "../App.css";
import Nav from "./Nav";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import UsersList from "./domain/user/UsersList";
import CustomersList from "./domain/customer/CustomersList";
import QuotesList from "./domain/quote/QuotesList";
import OrdersList from "./domain/order/OrdersList";
import InvoicesList from "./domain/invoice/InvoicesList";
import VehiclesList from "./domain/vehicle/VehiclesList";
import VehicleEdit from "./domain/vehicle/VehicleEdit";
import FunLogin from "./login/FunLogin";
import NotFound from "./NotFound";
import OrderEdit from "./domain/order/OrderEdit";
import OrderView from "./domain/order/OrderView";
import QuoteView from "./domain/quote/QuoteView";
import QuoteEdit from "./domain/quote/QuoteEdit";
import CustomerView from "./domain/customer/CustomerView";
import VehicleView from "./domain/vehicle/VehicleView";
import UserView from "./domain/user/UserView";
import InvoiceView from "./domain/invoice/InvoiceView";
import InvoiceEdit from "./domain/invoice/InvoiceEdit";
import InvoiceCreate from "./domain/invoice/InvoiceCreate";
import VehicleCreate from "./domain/vehicle/VehicleCreate";
import QuoteCreate from "./domain/quote/QuoteCreate";
import CustomerEdit from "./domain/customer/CustomerEdit";
import CustomerCreate from "./domain/customer/CustomerCreate";
import OrderCreate from "./domain/order/OrderCreate";
import UserEdit from "./domain/user/UserEdit";
import UserCreate from "./domain/user/UserCreate";

// Axios default api config values
axios.defaults.baseURL = "http://localhost:3001/api";
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const App = () => {
  const [currentUser, setCurrentUser] = useState("");
  // eslint-disable-next-line
  const [userConnected, setUserConnected] = useState({});
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    setCurrentUser(currentUser);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log("currentUser", currentUser);
    if (currentUser) {
      const user = JSON.parse(currentUser);
      setUserConnected(user);
      setIsConnected(true);
    }
    // eslint-disable-next-line
  }, [currentUser]);

  return (
    <div className="App">
      <header>
        <Nav
          isConnected={isConnected}
          setIsConnected={setIsConnected}
          setUserConnected={setUserConnected}
        />
      </header>
      {console.log("isConnected", isConnected)}
      {!isConnected ? (
        <main className="container mt-2">
          <Routes>
            <Route
              path="/*"
              element={
                <FunLogin
                  setIsConnected={setIsConnected}
                  setUserConnected={setUserConnected}
                />
              }
            />
          </Routes>
        </main>
      ) : (
        <main className="container mt-2">
          <Routes>
            <Route path="/" element={<h1>Futur Dashboard ?</h1>} />

            <Route path="/orders" element={<OrdersList />} />
            <Route path="/orders/:id/view" element={<OrderView />} />
            <Route path="/orders/:id/edit" element={<OrderEdit />} />
            <Route path="/orders/add" element={<OrderCreate />} />

            <Route path="/quotes" element={<QuotesList />} />
            <Route path="/quotes/:id/view" element={<QuoteView />} />
            <Route path="/quotes/:id/edit" element={<QuoteEdit />} />
            <Route path="/quotes/add" element={<QuoteCreate />} />

            <Route path="/invoices" element={<InvoicesList />} />
            <Route path="/invoices/:id/view" element={<InvoiceView />} />
            <Route path="/invoices/:id/edit" element={<InvoiceEdit />} />
            <Route path="/invoices/add" element={<InvoiceCreate />} />

            <Route path="/vehicles" element={<VehiclesList />} />
            <Route path="/vehicles/:id/view" element={<VehicleView />} />
            <Route path="/vehicles/:id/edit" element={<VehicleEdit />} />
            <Route path="/vehicles/add" element={<VehicleCreate />} />

            <Route path="/customers" element={<CustomersList />} />
            <Route path="/customers/:id/view" element={<CustomerView />} />
            <Route path="/customers/:id/edit" element={<CustomerEdit />} />
            <Route path="/customers/add" element={<CustomerCreate />} />

            <Route path="/users" element={<UsersList />} />
            <Route path="/users/:id/view" element={<UserView />} />
            <Route path="/users/:id/edit" element={<UserEdit />} />
            <Route path="/users/add" element={<UserCreate />} />

            {/* <Route path="/stocks" element={<UStocksList />} />
            <Route path="/stocks/:id/view" element={<StockView />} />
            <Route path="/stocks/:id/edit" element={<StockEdit />} />
            <Route path="/stocks/add" element={<StockCreate />} /> */}

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      )}
      <footer className="mt-4"></footer>
    </div>
  );
};

export default App;
