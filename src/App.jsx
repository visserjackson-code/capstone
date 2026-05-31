import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState} from "react";
import Layout from "./pages/Layout";
import Landing from "./pages/Landing";
import Tracker from "./pages/Tracker";
import Nuzlocke from "./pages/Nuzlocke";

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const handleAuth = (token, email) => {
    setToken(token);
    setUser(email);
  };

  const handleLogout = () => {
    setToken(null);
    setUser(null);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                token={token}
                user={user}
                onAuth={handleAuth}
                onLogout={handleLogout}
              />
            }
          >
            <Route index element={<Landing />} />
            <Route path="tracker" element={<Tracker token={token} />} />
            <Route path="nuzlocke" element={<Nuzlocke token={token} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
