import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Cover from "./pages/Cover";
import Tracklist from "./pages/Tracklist";
import BSide from "./pages/BSide";
import Letter from "./pages/Letter";
import Encore from "./pages/Encore";
import ScrollToTop from "./ScrollToTop";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <div className="relative min-h-screen bg-blush overflow-hidden">
      <ScrollToTop />
      {/* Ambient glowing background blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-champagne/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
      <div
        className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-rosewood/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Cover />} />
          <Route path="/story" element={<Tracklist />} />
          <Route path="/bside" element={<BSide />} />
          <Route path="/letter" element={<Letter />} />
          <Route path="/encore" element={<Encore />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
