import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Cover from './pages/Cover';
import Tracklist from './pages/Tracklist';
import BSide from './pages/BSide';
import Letter from './pages/Letter';
import Encore from './pages/Encore';

function Static() {
  return (
    <motion.div
      className="fixed inset-0 z-50 pointer-events-none bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.85, 0] }}
      transition={{ duration: 0.35 }}
    />
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Static key={location.pathname + '-flash'} />
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Cover />} />
          <Route path="/story" element={<Tracklist />} />
          <Route path="/bside" element={<BSide />} />
          <Route path="/letter" element={<Letter />} />
          <Route path="/encore" element={<Encore />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}