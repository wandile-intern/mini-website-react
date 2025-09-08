import { useState } from "react";
import "./styles.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./styles.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <header>
        <h1>
          Wandile Nhlapo{" "}
          <button id="toggleMode" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </h1>
      </header>

      <About />
      <Experience />
      <Education />
      <Projects />
      <Contact />  


      <footer>
        <strong>
          <p>&copy; 2025 Wandile Nhlapo.</p>
        </strong>
      </footer>
    </div>
  );
}

export default App;
