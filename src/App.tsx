import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NoiseTexture from "./components/ui/NoiseTexture";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MusicPage from "./pages/MusicPage";
import EPPage from "./pages/EPPage";
import JourneyPage from "./pages/JourneyPage";
import ContactPage from "./pages/ContactPage";
import RequestPage from "./pages/RequestPage";
import ErrorBoundary from "./components/ErrorBoundary";

/** Reset scroll position on every route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        {/* Cinematic page reveal */}
        <NoiseTexture />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/ep" element={<EPPage />} />
          <Route path="/journey" element={<JourneyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/request" element={<RequestPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ErrorBoundary>
  );
}
