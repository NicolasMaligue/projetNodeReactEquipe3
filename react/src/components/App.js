import "../App.css";
import Nav from "./Nav";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
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

            {role_view()}

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      )}
      <footer className="mt-4"></footer>
    </div>
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
