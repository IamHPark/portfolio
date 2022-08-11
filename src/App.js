import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavbarTop from './components/NavbarTop'
import Main from './components/Main';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

