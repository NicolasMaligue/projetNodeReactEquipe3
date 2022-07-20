import "../App.css";
import Nav from "./Nav";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import axios from "axios";
import UsersList from "./domain/user/UsersList";
import CustomersList from "./domain/customer/CustomersList";
import QuotesList from "./domain/quote/QuotesList";
import OrdersList from "./domain/order/OrdersList";
import InvoicesList from "./domain/invoice/InvoicesList";
import VehiclesList from "./domain/vehicle/VehiclesList";
import FunLogin from "./login/FunLogin";
import UseToken from "./login/UseToken";
import NotFound from "./NotFound";
import OrderEdit from "./domain/order/OrderEdit";
import OrderView from "./domain/order/OrderView";

// Axios default api config values
axios.defaults.baseURL = "http://localhost:3001/api";
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const ApiContext = createContext();

const App = () => {
  const { token, setToken } = UseToken();
  // const [token, setToken] = useState();

  if (!token) {
    return <FunLogin setToken={setToken} />;
  }

  return (
    <ApiContext.Provider
      value={{
        get: useApiGet,
      }}
    >
      <div className="App">
        <header>
          <Nav />
        </header>
        <main className="container mt-2">
          <Routes>
            <Route path="/" element={<h1>Futur Dashboard ?</h1>} />

            <Route path="/orders" element={<OrdersList />} />
            <Route path="/orders/:id/view" element={<OrderView />} />
            <Route path="/orders/:id/edit" element={<OrderEdit />} />
            <Route path="/orders/add" element={<OrderEdit />} />

            <Route path="/quotes" element={<QuotesList />} />
            <Route path="/quotes/:id/view" element={<h1>QuoteView</h1>} />
            <Route path="/quotes/:id/edit" element={<h1>QuoteEdit</h1>} />
            <Route path="/quotes/add" element={<h1>QuoteEdit </h1>} />

            <Route path="/invoices" element={<InvoicesList />} />
            <Route path="/invoices/:id/view" element={<h1>InvoiceView </h1>} />
            <Route path="/invoices/:id/edit" element={<h1>InvoiceEdit </h1>} />
            <Route path="/invoices/add" element={<h1>InvoiceEdit </h1>} />

            <Route path="/vehicles" element={<VehiclesList />} />
            <Route path="/vehicles/:id/view" element={<h1>VehicleView </h1>} />
            <Route path="/vehicles/:id/edit" element={<h1>VehicleEdit </h1>} />
            <Route path="/vehicles/add" element={<h1>VehicleEdit </h1>} />

            <Route path="/customers" element={<CustomersList />} />
            <Route
              path="/customers/:id/view"
              element={<h1>CustomerView </h1>}
            />
            <Route
              path="/customers/:id/edit"
              element={<h1>CustomerEdit </h1>}
            />
            <Route path="/customers/add" element={<h1>CustomerEdit </h1>} />

            <Route path="/users" element={<UsersList />} />
            <Route path="/users/:id/view" element={<h1>UserView </h1>} />
            <Route path="/users/:id/edit" element={<h1>UserEdit </h1>} />
            <Route path="/users/add" element={<h1>UserEdit </h1>} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer className="mt-4"></footer>
      </div>
    </ApiContext.Provider>
  );
};

const useApiGet = (api_path) => {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (api_path && !pending) {
      setPending(true);
      axios
        .get(api_path)
        .then((response) => {
          console.log(`useGetApi(${api_path}) data: `, response.data);
          setData(response.data);
        })
        .catch((error) => setError(error))
        .then(() => setPending(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api_path]);

  return [data, pending, error];
};

export default App;
