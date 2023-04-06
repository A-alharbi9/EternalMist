import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Buy from './components/Buy';

function App() {
  return (
    <div>
      {/* <h1 className="font-bold underline text-lg">Eternal Mist</h1> */}
      <Nav />
      <Hero />
      <Features />
      <Benefits />
      <Testimonials />
      <Buy />
    </div>
  );
}

export default App;
