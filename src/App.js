import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ChooseUs from './components/ChooseUs';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <ChooseUs/>
    </div>
  );
}

export default App;
