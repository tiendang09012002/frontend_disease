import "./App.css";
import Header from "./shared/component/Layout/Header";
import Footer from "./shared/component/Layout/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import React from "react";
import About from "./pages/About";
import Doctor from "./pages/Doctor";
import Treatment from "./pages/Treatment";

function App() {
  return (
    <BrowserRouter>
      {/*	Header	*/}
      <Header />
      {/*	End Header	*/}
      {/*	Body	*/}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/treatment" element={<Treatment />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
