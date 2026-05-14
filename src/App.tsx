import Navbar from "./components/Navbar";
import Hero from "./section/Hero";
import About from "./section/About";
import Skills from "./section/Skills";

function App() {
  return (
    <>
    <main className="bg-[#0d1117] text-[#e6edf3] min-h-screen">
      <Navbar />

      <Hero />

      <About />

      <Skills />
    </main>
    </>

  );
}

export default App;