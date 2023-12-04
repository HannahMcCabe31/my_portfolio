import './App.css'
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import CV from "./components/CV";

function App() {

    return (
      <main className="font-sans bg-rose-200 body-font">
        <Navbar />
        <About />
        <Projects />
        <Skills />
        {/* <CV /> */}
        <Contact />
      </main>
    );
}

export default App
