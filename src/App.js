import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/layout/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className='App'>
      <Header />
        <Routes>
          <Route path="/dashBoard" element={<Dashboard />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
