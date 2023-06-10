import { useState } from "react";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <Sidenav open={open} setOpen={setOpen}/>
      <Main />
      <About />
      <Work />
      <Skill />
      <Projects open={open} setOpen={setOpen} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
