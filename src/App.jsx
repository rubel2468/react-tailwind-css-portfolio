import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar'
import './index.css'
import { Home } from "./Home";
import Contuct from "./Contuct";
import Skill from "./Skill";
import About from "./About";
import Cv from "./cv";

function App() {


  return (

    <>

      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contuct" element={<Contuct />} />
          <Route path="/Skill" element={<Skill />} />

          <Route path="/cv" element={<Cv />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
