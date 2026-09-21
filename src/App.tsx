import './App.css';
import Navbar      from './components/Navbar';
import Hero        from './components/Hero';
import About       from './components/About';
import Skills      from './components/Skills';
import Projects    from './components/Projects';
import Experience  from './components/Experience';
import References  from './components/References';
import Footer      from './components/Footer';

export default function App() {
  return (
    <>
      {/* Fixed background grid */}
      <div className="bg-grid" aria-hidden />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <References />
      </main>

      <Footer />
    </>
  );
}
