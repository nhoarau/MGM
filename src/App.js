import { Routes, Route } from 'react-router-dom'
import './App.css'
import AboutMe from './components/AboutMe/AboutMe';
import Home from "./components/Home/Home"
import Navigation from './components/Navigation/Navigation';
import Portfolio from "./components/Portfolio/Portfolio"

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/portfolio" element={ <Portfolio /> }/>
        <Route path="/aboutme" element={ <AboutMe /> }/>
      </Routes>
    </div>
  );
}

export default App;
