import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Components/Portfolio/Portfolio";
import Skills from "./Components/Skills/Skills";
import './App.css'


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
