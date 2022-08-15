import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Top from './components/Top';
import Main from './components/Main';
import Canvas from './components/Canvas'
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Top />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/game" element={<Canvas />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;

