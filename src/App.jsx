import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import { Login } from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
