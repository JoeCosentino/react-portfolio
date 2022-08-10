import NavBar from './components/NavBar';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Works from './components/Works';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import './scss/app.scss';
import { useState } from 'react';

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
