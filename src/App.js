// src/App.js
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import FirstPage from './Components/Pages/FirstPage';
import About from './Components/Pages/About';
import Projects from './Components/Pages/Projects';


function App() {


  function Nav(){
    return(
      <div>
        <Link to="/">FirstPage</Link>
        <Link to="/about">About</Link>
        <Link to='/projects'>Projects</Link>
      </div>
    )
  }
 

  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </div>
  );
}

export default App;
