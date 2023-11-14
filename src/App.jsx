import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Home } from "./components/Home";
import { Add } from "./components/Add";
import { Update } from "./components/Update";
import { createContext, useState } from "react";

export const AppContext = createContext();

function App() {
  const [userData, setUserData] = useState({});

  return (
    <div className="App">
      <AppContext.Provider value={{ userData, setUserData }}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/update" element={<Update />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
