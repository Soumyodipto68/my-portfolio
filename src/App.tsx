import Navbar from "./components/Navbar";
import Hero from "./section/Hero";
import About from "./section/About";
import Skills from "./section/Skills";
import Projects from "./section/Projects";
import Contact from "./section/Contact";
import Footer from "./components/Footer";
import Journey from "./section/Journey";
function App() {
  return (
    <>
    <main className="bg-[#0d1117] text-[#e6edf3] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey/>
      <Contact />
      <Footer/>
    </main>
    </>

  );
}

export default App;