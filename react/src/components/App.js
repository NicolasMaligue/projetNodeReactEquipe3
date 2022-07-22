import "../App.css";
import Nav from "./Nav";
import { Route, Routes } from "react-router-dom";
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import FunLogin from "./login/FunLogin";
import AdminRoute from "./routes/admin.route";
import TraderRoute from "./routes/trader.route";
import BossRoute from "./routes/boss.route";
import NotFound from "./NotFound";

// Axios default api config values
axios.defaults.baseURL = "http://localhost:3001/api";
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const ApiContext = createContext();

const App = () => {
  const admin = "admin";
  const boss = "boss";
  const dealer = "dealer";
  const role = "dealer";

  const role_view = () => {
    if (role === admin) {
      return <Route path="/*" element={<AdminRoute role={role} />} />;
    }
    if (role === boss) {
      return <Route path="/*" element={<BossRoute role={role} />} />;
    }
    if (role === dealer) {
      return <Route path="/*" element={<TraderRoute role={role} />} />;
    }
  };

  return (
    <ApiContext.Provider
      value={{
        useApi: useApi,
        useApiEffect: useApiEffect,
      }}
    >
      <div className="App">
        <header>
          <Nav role={role} />
        </header>
        <main className="container mt-2">
          <Routes>
            <Route path="/" element={<h1>test</h1>} />
            <Route path="/logins" element={<FunLogin />} />

            {role_view()}

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer className="mt-4"></footer>
      </div>
    </ApiContext.Provider>
  );
};

const useApi = (api_path, data_body, method = "get") => {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const effectCallback = () => {
    if (api_path && !pending) {
      setPending(true);
      axios[method](api_path, data_body)
        .then((response) => {
          console.log(`useApiSave(${api_path}) response: `, response);
          setData(response.data);
        })
        .catch((error) => setError(error))
        .then(() => setPending(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  return [data, setData, effectCallback, pending, error];
};

const useApiEffect = (api_path, data_body, method = "get") => {
  const [data, setData, effectCallback, pending, error] = useApi(
    api_path,
    data_body,
    method
  );
  // componentDidMount equivalent
  useEffect(() => effectCallback(), []);

  return [data, setData, pending, error];
};

export default App;
