import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from './components/Contact';
import { useEffect, useState } from 'react';

function App() {

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true);
  }, []);


  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      <Navbar />

      <Hero />
      <Projects />
      <Contact />

      <>
        <p>&copy; 2026 Faith. All rights reserved</p>
      </>
    </div>
  )
}

export default App
