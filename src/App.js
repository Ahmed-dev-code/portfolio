import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ScrollToTop from './components/ScrollToTop';

  function App() {

  return (
    
    <div className="App">
      <Navbar />
      <ScrollToTop></ScrollToTop>
      <Hero />
      <About/>
      <Portfolio/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
