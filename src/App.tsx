import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Buy from './components/Buy';
import Footer from './components/Footer';

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
      <Footer />
    </div>
  );
}

export default App;
