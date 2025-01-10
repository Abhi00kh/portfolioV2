import './index.css';
import Nav from './Nav';
import AboutMe from './About';
import Hero from './Hero';
import Projects from './Project';
import Certifications from './Certifications';
import Footer from './footer';
function App() {
  return (
    <>
      <Nav />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="projects">
        <Projects />
      </section>
     
      <Certifications />
      <section id="contact"></section>
      <Footer />
    </>
  );
}

export default App;
