import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import AllRoutes from './AllRoutes';
import Home from './Pages/Home/Home';
import About from './Components/About';
import Navbar2 from './Components/Navbar/Navbar2';



function App() {
  return (
    <div className="App">
        <Router>
          {/* <Navbar /> */}
          <Navbar2/>
          <Routes>
            <Route exact path="/home" element={<Home/>}/>
            <Route exact path="/about" element={<About/>} />
          </Routes>
        </Router> 
    </div>
  );
}

export default App;
