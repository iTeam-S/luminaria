import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import Layout from './layouts/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/layout' element={<Layout/>} />
      </Routes>
    </Router>
  );
}

export default App;
