import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/header";
import Register from "./components/Register";
import Login from "./components/Login";
import DashBoard from "./components/dashboard";
import { useState } from "react";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogout = () => {
      setLoggedIn(false);
  }
  const handleLogin = () => {
    setLoggedIn(true);
}

  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Header loggedIn={loggedIn} onLogin={handleLogin} onLogout={handleLogout} />
      </div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login onLogin={handleLogin}/>} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
