import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
          <div>
            <Routes>
              <Route exact path="/" element={<Fib />} />
              <Route path="/otherpage" element={<OtherPage />} />
            </Routes>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
