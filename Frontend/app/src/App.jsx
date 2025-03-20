import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/layouts/Header";
import Footer from "../src/layouts/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Portfolio from "./pages/Portfolio";
import ContactPage from "./pages/ContactPage";
import ArchitecturePage from "./pages/ArchitecturePage";
import InteriorDesignPage from "./pages/InteriorDesignPage";
import ManagementPage from "./pages/ManagementPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/architecture" element={<ArchitecturePage />} />
          <Route path="/interior" element={<InteriorDesignPage />} />
          <Route path="/management" element={<ManagementPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
