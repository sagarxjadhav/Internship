import './App.css';
import NavbarHeader from './components/NavbarHeader';
// import Page1 from './components/Page1';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Spaces from './pages/Spaces';
import Locations from './pages/Locations';
import Services from './pages/Services';
import Property from './pages/Property';
import Login from './pages/Login';


function App() {
  return (
    <>

    <Router>
    <NavbarHeader/> 

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/spaces" element={<Spaces/>}/>
        <Route path="/locations" element={<Locations/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/property" element={<Property/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>

      {/* <Page1/> */}
    </>
  );
}

export default App;
