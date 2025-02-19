import { HashRouter as Router } from 'react-router-dom';
import NavBar from './component/1.NavBar/NavBar';
import Header from './component/2.Header/Header';
import Hero from './component/3.Hero/Hero';
import Skills from './component/4.Skills/Skills';
import Works from './component/5.Works/Works';
import About from './component/6.About/About';
import Contact from './component/7.Contact/Contact';
import Footer from './component/8.Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Header />
        <Hero />
        <div id="skills">
          <Skills />
        </div>
        <div id="works">
          <Works />
        </div>
        <About />
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;

