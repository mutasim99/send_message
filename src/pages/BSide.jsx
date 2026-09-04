import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import hiraB1 from '../assets/hira-b-1.jpeg';
import hiraB2 from '../assets/hira-b-2.jpeg';
import hiraB3 from '../assets/hira-b-3.jpeg';
import hiraB4 from '../assets/hira-b-4.jpeg';
import hiraB5 from '../assets/hira-b-5.jpeg';

const REASONS = [
  { text: 'The way your smile could always make my day better.', label: 'A Smile', img: hiraB1 },
  { text: 'How easy it was to talk to you about anything in the world.', label: 'A Memory', img: hiraB2 },
  { text: 'The peaceful feeling I always had when I was around you.', label: 'A Feeling', img: hiraB3 },
  { text: 'The comforting sound of your voice when the world was asleep.', label: 'A Moment', img: hiraB4 },
  { text: "You have a beautiful heart, and I am very lucky to know you.", label: 'Always', img: hiraB5 },
];

export default function BSide() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 md:px-12 relative z-10 overflow-hidden">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Page Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-center mb-32 md:mb-48"
        >
          <p className="font-sans text-[#8B5A5A]/60 text-xs uppercase tracking-[0.4em] mb-4">Chapter II</p>
          <h1 className="font-serif italic text-[#4A2525] text-5xl md:text-7xl">What I Hold Onto</h1>
        </motion.div>

        {/* The Zigzag Layout */}
        <div className="flex flex-col space-y-32 md:space-y-40">
          {REASONS.map((r, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full md:w-3/4 lg:w-2/3 ${
                  isLeft ? 'self-start' : 'self-end md:flex-row-reverse'
                }`}
              >
                
                {/* The Picture Box */}
                <div className="w-full md:w-1/2">
                  <div className={`w-full aspect-[4/5] bg-white p-4 shadow-2xl rounded-sm border border-black/5 transition-transform duration-500 flex items-center justify-center overflow-hidden ${isLeft ? 'rotate-[-3deg] hover:rotate-0' : 'rotate-[3deg] hover:rotate-0'}`}>
                    {r.img ? (
                      <img src={r.img} alt="Memory" className="w-full h-full object-cover rounded-sm" />
                    ) : (
                      <span className="font-serif italic text-[#4A2525]/30 text-lg">Your Photo</span>
                    )}
                  </div>
                </div>

                {/* The Text with Soft Labels */}
                <div className={`w-full md:w-1/2 text-center ${isLeft ? 'md:text-left' : 'md:text-right'}`}>
                  <p className="font-sans text-[#8B5A5A]/50 text-xs md:text-sm tracking-[0.3em] mb-4 uppercase">
                    {r.label}
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl text-[#2A2A2A] leading-snug">
                    "{r.text}"
                  </h2>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Buttons at the bottom */}
        <div className="flex justify-between items-center mt-40 pt-10 border-t border-[#E8D8C4] max-w-2xl mx-auto">
          <button onClick={() => navigate('/story')} className="font-sans uppercase text-[10px] tracking-widest text-[#2A2A2A]/50 hover:text-[#4A2525] transition-colors">
            ← Go Back
          </button>
          <button onClick={() => navigate('/letter')} className="font-sans uppercase text-[10px] tracking-widest text-[#8B5A5A] hover:text-[#C9A66B] transition-colors flex items-center gap-2">
            Read my letter <span>→</span>
          </button>
        </div>

      </div>
    </div>
  );
}