import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./styles/index.css";
import NavBar from "./components/Navbar";
import ImageCarousel from "./components/ImageCarousel";
import About from "./components/About";
import ServicesCard from "./components/ServicesCard";
import TrainingCards from "./components/TrainingCards";
import CampusCard from "./components/CampusCard";
// import ClientsCard from "./components/ClientsCard";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import CertificateLookup from "./components/CertificateVerification"; 
import Compiler from "./components/Compiler";

const theme = createTheme({
  typography: {
    fontFamily: "Usuzi, sans-serif",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
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
          <Route exact path="verify" Component={()=><CertificateLookup />} />
          <Route exact path="compiler" Component={()=><Compiler/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
