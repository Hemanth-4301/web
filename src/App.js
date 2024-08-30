import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Talents from "./components/Talents";
import Gallery from "./components/Gallery";
import Events from "./components/Events";
import emailjs from "emailjs-com";

function App() {
  emailjs.init("D6RAB1uqhy6wJu3yd");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/talents" element={<Talents />} />
          <Route path="/glimpse" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
