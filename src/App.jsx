import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white relative overflow-hidden">
      <Hero />
      <About />
      <Project />
      <Contact />
    </div>
  )
}

export default App