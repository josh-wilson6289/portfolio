import './App.css';
import Showcase from "./components/Showcase";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
    <Navbar />
    <Showcase />
    <About />
    <Projects />
    </div>
  );
}

export default App;
