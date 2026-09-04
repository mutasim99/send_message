import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Cover() {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen bg-[#FAF5F0] overflow-hidden flex items-center justify-center lg:justify-start lg:pl-32 p-6">
      
      {/* Big hidden text in the background for a rich look */}
      <div className="absolute -left-10 top-10 font-serif italic text-[#E8D8C4] text-[15rem] opacity-30 pointer-events-none select-none">
        Love
      </div>

      {/* Left Side - Text & Button */}
      <motion.div
  initial={{ opacity: 0, x: -30 }} 
  animate={{ opacity: 1, x: 0 }} 
  transition={{ duration: 1 }}
  className="relative z-10 max-w-xl text-center lg:text-left"
>
  <p className="tracking-[0.4em] text-[#8B5A5A] uppercase text-xs font-bold mb-4">A Small Letter</p>
  <h1 className="text-7xl lg:text-9xl text-[#4A2525] font-serif mb-6 leading-none">For You.</h1>
  <p className="text-xl text-[#2A2A2A]/70 font-serif italic mb-12">
    A few things I never quite said out loud. Kept here, just for you.
  </p>

  {/* Pulsing Button that asks to be clicked */}
  <motion.button
    onClick={() => navigate('/story')}
    whileHover={{ scale: 1.05 }} 
    whileTap={{ scale: 0.95 }}
    animate={{ boxShadow: ["0px 0px 0px rgba(74,37,37,0)", "0px 0px 20px rgba(74,37,37,0.3)", "0px 0px 0px rgba(74,37,37,0)"] }}
    transition={{ duration: 2, repeat: Infinity }}
    className="bg-[#4A2525] text-white px-10 py-5 rounded-full tracking-[0.2em] uppercase text-sm shadow-xl flex items-center gap-4 mx-auto lg:mx-0"
  >
    Turn It On
    <span className="text-lg">▶</span>
  </motion.button>
</motion.div>

      {/* Right Side - Huge Spinning Vinyl Record */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1.5 }}
        className="absolute -right-60 top-1/2 -translate-y-1/2 w-[150%] sm:w-[120%] lg:w-[800px] aspect-square opacity-10 lg:opacity-100 pointer-events-none"
      >
        <motion.div
          animate={{ rotate: 360 }} 
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="w-full h-full rounded-full bg-[#1A1A1A] shadow-[0_0_50px_rgba(0,0,0,0.3)] border-8 border-[#2A2A2A] relative flex items-center justify-center overflow-hidden"
        >
          {/* Record Grooves (the lines on the vinyl) */}
          <div className="absolute inset-[10%] rounded-full border border-white/5"></div>
          <div className="absolute inset-[20%] rounded-full border border-white/5"></div>
          <div className="absolute inset-[30%] rounded-full border border-white/10"></div>
          <div className="absolute inset-[40%] rounded-full border border-white/5"></div>
          <div className="absolute inset-[45%] rounded-full border border-black/40 shadow-inner"></div>

          {/* Center Label of the Record */}
          <div className="w-[30%] h-[30%] bg-[#8B5A5A] rounded-full border-4 border-[#FAF5F0] flex items-center justify-center shadow-inner relative">
            
            <span className="absolute top-8 text-[#FAF5F0]/60 font-serif text-sm tracking-widest uppercase">Side A</span>
            
            <div className="w-1/4 h-1/4 bg-[#FAF5F0] rounded-full flex items-center justify-center shadow-md">
              <div className="w-4 h-4 bg-[#1A1A1A] rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      
    </div>
  );
}