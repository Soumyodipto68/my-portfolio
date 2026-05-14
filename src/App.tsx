import Navbar from "./components/Navbar";
import Hero from "./section/Hero";
import About from "./section/About";
import Skills from "./section/Skills";
import Projects from "./section/Projects";
import Contact from "./section/Contact";
import Footer from "./components/Footer";
import Journey from "./section/Journey";
import BackgroundEffects from "./components/BackgroundEffects";
function App() {
  return (
    <>
    <main className="bg-[#0d1117] text-[#e6edf3] min-h-screen">
      <BackgroundEffects />
      <div className="relative z-10">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey/>
      <Contact />
      <Footer/>
      </div>
    </main>
    </>

  );
}

export default App;