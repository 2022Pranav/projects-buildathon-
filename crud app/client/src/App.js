import logo from './logo.svg';
import './App.css';
import Home from './componets/Home';
import {Browser Router as Router, Route, Routes} from 'react-router-dom0';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<Home/>}/>

        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
