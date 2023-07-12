import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <div className='navbar'>
      <Navbar/>
      </div>
      <div className='app-home'>
      <Home/>
      </div>
    </div>
  );
}

export default App;
