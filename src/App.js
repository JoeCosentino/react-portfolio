import Contact from './components/Contact';
import Intro from './components/Intro';
import Menu from './components/Menu'
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Works from './components/Works';
import './scss/app.scss';
import { useEffect, useState } from 'react';

function App() {

  useEffect(() => {
    document.title = "Joe's Portfolio"
  })

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        {/* <Testimonials /> */}
        <Contact />
      </div>
    </div>
  );
}

export default App;
