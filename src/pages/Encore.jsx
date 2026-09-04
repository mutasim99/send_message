import { useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import img1 from '../assets/hira-final.jpeg'

export default function Encore() {
  const [revealed, setRevealed] = useState(false);
  const [hearts, setHearts] = useState([]);

  // Create the falling hearts only when clicked
  const handleTouch = () => {
    const newHearts = Array.from({ length: 25 }).map(() => ({
      left: Math.random() * 100, // Random spot across the screen
      duration: 4 + Math.random() * 4, // Random speed
      delay: Math.random() * 2,
      scale: 0.5 + Math.random() * 1, // Random sizes
    }));
    
    setHearts(newHearts);
    setRevealed(true);
  };

  return (
    <m.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center p-6 relative z-10 overflow-hidden"
    >
      <div className="text-center z-20 w-full flex flex-col items-center">
        <AnimatePresence mode="wait">
          {!revealed ? (
            <m.div
              key="unrevealed"
              exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <p className="font-sans text-charcoal/50 text-[10px] uppercase tracking-[0.3em] mb-12">One last thing</p>
              
              <div className="relative flex items-center justify-center">
                <m.div 
                  className="absolute w-32 h-32 rounded-full border border-gold/40"
                  animate={{ scale: [1, 1.5], opacity: [0.8, 0] }} 
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
                <m.div 
                  className="absolute w-32 h-32 rounded-full border border-burgundy/20"
                  animate={{ scale: [1, 2], opacity: [0.5, 0] }} 
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                />
                <button
                  onClick={handleTouch}
                  className="w-24 h-24 rounded-full bg-gradient-to-tr from-burgundy to-rosewood text-white shadow-2xl flex items-center justify-center hover:scale-105 transition-transform duration-500 z-10"
                >
                  <span className="font-serif italic text-lg tracking-wide">Touch</span>
                </button>
              </div>
            </m.div>
          ) : (
            <m.div
              key="revealed"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="flex flex-col items-center w-full"
            >
              <h1 className="font-script text-burgundy text-6xl md:text-7xl mb-6 drop-shadow-sm">
                You were a good chapter.
              </h1>
              <div className="w-24 h-[1px] bg-gold mb-6"></div>
              <p className="font-serif text-charcoal/70 text-lg md:text-xl italic">
                Forever and always.
              </p>

              {/* Floating Picture Frame */}
              <m.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -15, 0] // This creates the soft bouncing/floating effect
                }}
                transition={{ 
                  opacity: { duration: 1.5, delay: 1.5 },
                  scale: { duration: 1.5, delay: 1.5 },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" } // Repeats forever
                }}
                className="w-48 h-56 md:w-56 md:h-64 mt-12 bg-white p-3 shadow-2xl rounded-sm border border-black/5 z-20"
              >
                <div className="w-full h-full bg-champagne flex items-center justify-center font-serif text-burgundy italic text-sm overflow-hidden">
                  {/* Change this text to an img tag when you have your real photo! */}
                  <span>
                    <img src={img1} alt="" />
                  </span>
                </div>
              </m.div>
              
              <m.p
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3, duration: 2 }}
                className="font-sans text-burgundy/40 text-[9px] uppercase tracking-[0.4em] mt-16"
              >
                Fin.
              </m.p>
            </m.div>
          )}
        </AnimatePresence>
      </div>

      {/* Falling Hearts */}
      <AnimatePresence>
        {revealed && hearts.map((heart, i) => (
          <m.div
            key={i}
            initial={{ opacity: 0, y: "-10vh", x: `${heart.left}vw`, scale: heart.scale }}
            animate={{ 
              opacity: [0, 0.7, 0], 
              y: "110vh", // Fall past the bottom of the screen
              rotate: [0, 180, 360] // Spin slightly as they fall
            }}
            transition={{ 
              duration: heart.duration, 
              delay: heart.delay,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-0 text-rosewood/40 pointer-events-none text-2xl z-0"
          >
            🤍
          </m.div>
        ))}
      </AnimatePresence>
    </m.div>
  );
}