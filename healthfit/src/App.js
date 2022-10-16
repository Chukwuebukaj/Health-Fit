import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Styles/home.css';
import Home from "./pages/Home";
import Fitness from "./pages/Fitness";
import Bookings from "./pages/Bookings";
import Services from './pages/Services';
import About from './pages/About';
import ContactUs from './pages/contact';
import Scroll from './Scroll';

function App() {
  Aos.init();
  return (
    <BrowserRouter>

     <Scroll>
     <Routes>

<Route path="/" element={<Home />} />
<Route path="/bookings" element={<Bookings />} />
<Route path="/blog" element={<Fitness />} />
<Route path="/about" element={<About />} />
<Route path="/services" element={<Services />} />
<Route path="/contact" element={<ContactUs />} />

</Routes>
      </Scroll>
    </BrowserRouter>
  );
}

export default App;