import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Features from './components/Features';

function App() {
  return (
    <div>
      {/* <h1 className="font-bold underline text-lg">Eternal Mist</h1> */}
      <Nav />
      <Hero />
      <Features/>
    </div>
  );
}

export default App;
