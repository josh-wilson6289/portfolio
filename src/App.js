import './App.css';
import Showcase from "./components/Showcase";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
    <Navbar />
    <Showcase />
    <About />
    <hr size="2" color="#243951"></hr>
    <Projects />
    <hr size="2" color="#243951"></hr>
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
