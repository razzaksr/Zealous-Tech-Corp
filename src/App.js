import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import ImageCarousel from "./components/ImageCarousel";
import About from "./components/About";
import ServicesCard from "./components/ServicesCard";
import TrainingCards from "./components/TrainingCards";
import CampusCard from "./components/CampusCard";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import CertificateLookup from "./components/CertificateVerification";
import Compiler from "./components/Compiler";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Home />
              <ImageCarousel />
              <About />
              <ServicesCard />
              <TrainingCards />
              <CampusCard />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/verify" element={<CertificateLookup />} />
        <Route path="/compiler" element={<Compiler />} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;