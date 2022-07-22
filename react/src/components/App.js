import "../App.css";
import Nav from "./Nav";
import { Route, Routes } from "react-router-dom";
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
import StocksList from './domain/stock/StocksList';
import StockView from './domain/stock/StockView';
import StockEdit from './domain/stock/StockEdit';
import StockCreate from './domain/stock/StockCreate';

// Axios default api config values
axios.defaults.baseURL = "http://localhost:3001/api";
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
          <Route path="/" element={<h1>Futur Dashboard ?</h1>} />
          <Route path="/logins" element={<FunLogin />} />

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

          <Route path="/stocks" element={<StocksList />} />
          {/* <Route path="/stocks/:id/view" element={<StockView />} />
          <Route path="/stocks/:id/edit" element={<StockEdit />} />
          <Route path="/stocks/add" element={<StockCreate />} /> */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="mt-4"></footer>
    </div>
  );
};

export default App;
