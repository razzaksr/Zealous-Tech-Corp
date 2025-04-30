import React from "react";
import { useEffect } from "react";
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
  useEffect(() => {
    const handleKeyDown = (e) => {
      // e.preventDefault();
      // if (e.key === "F12" || e.keyCode === 123) {
      //   e.preventDefault();
      // }
      // if (e.ctrlKey && e.shiftKey && e.key === "I") {
      //   e.preventDefault();
      // }
        const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

        // Block F12
        if (e.key === 'F12' || e.keyCode === 123) {
          e.preventDefault();
        }

        // Block Ctrl+Shift+I or Cmd+Opt+I
        if (
          (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'i') ||
          (isMac && e.metaKey && e.altKey && e.key.toLowerCase() === 'i')
        ) {
          e.preventDefault();
        }

        // Block Ctrl+Shift+J
        if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'j') {
          e.preventDefault();
        }

        // Block Ctrl+U
        if (e.ctrlKey && e.key.toLowerCase() === 'u') {
          e.preventDefault();
        }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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