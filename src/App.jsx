import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar_main from './components/Navbar_main'
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Navbar_main />
      <Main />
    </div>
  );
}

export default App;
