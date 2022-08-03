import NavBar from './components/NavBar';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Works from './components/Works';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import './css/app.css';

function App() {
  return (
    <div className="app">
      <NavBar />
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
