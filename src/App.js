
import './app.scss';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import About from "./components/about/About"
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import { useState } from 'react';
import Menu from './components/menu/Menu';


function App() {
  const [menuOpen ,setmenuOpen] = useState(false)
  return (
    <div className="app">
     <Header menuOpen= {menuOpen} setmenuOpen={setmenuOpen}/>
     <Menu menuOpen= {menuOpen} setmenuOpen={setmenuOpen}/>
      <div className ="sections">
       <Intro />
       <About />
       <Projects />
       <Contact />
       
     </div>
    </div>
  );
}

export default App;
