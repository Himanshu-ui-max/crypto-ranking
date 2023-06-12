import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Market from './components/Market';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Homepage/>
      <Market/>
    </div>
  );
}

export default App;
//hey