import styles from './App.module.css'
import {Navbar} from "./components/Navbar/Navbar.jsx";
import {Hero} from './components/Hero/Hero';
import {Education} from './components/Education/Education';
import {Experience} from './components/Experience/Experience';
import {Projects} from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App
