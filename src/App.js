import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/layout/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './components/Dashboard';
import AddProject from './components/projects/AddProject';
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
      <div className='App'>
      <Header />
        <Routes>
          <Route path="/dashBoard" element={<Dashboard />} /> 
          <Route path="/addProject" element={<AddProject />} />
        </Routes>
      </div>
      </Router>
    </Provider>
  );
}

export default App;
