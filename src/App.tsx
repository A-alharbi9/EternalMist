import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div>
      {/* <h1 className="font-bold underline text-lg">Eternal Mist</h1> */}
      <Nav />
      <Hero />
      <Features />
      <Benefits />
      <Testimonials />
    </div>
  );
}

export default App;
