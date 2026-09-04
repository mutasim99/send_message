import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import hira1 from '../assets/hira-1.jpeg';
import hira2 from '../assets/hira-2.jpeg';
import hira3 from '../assets/hira-3.jpeg';
import hira4 from '../assets/hira-4.jpeg';
import hira5 from '../assets/hira-5.jpeg';

const MILESTONES = [
  { title: 'The Day We Met', date: '21 Feb 2022', blurb: 'The moment I saw you, it felt like a quiet, calming breeze touched my soul.', img: hira1 },
  { title: 'Learning About You', date: '7 May 2023', blurb: 'Finding out all the little things that make you special.', img: hira2},
  { title: 'The Long Call', date: '06 Nov 2024', blurb: 'Talking late into the night until you softly fell asleep. I will always smile thinking about those moments.', img: hira3},
  { title: 'A Perfect Date', date: '7 May 2023', blurb: 'Every moment with you was so special to me. I still think about those happy times a lot.', img: hira4 },
  { title: 'Unwritten', date: 'Today', blurb: 'A quiet space for whatever life brings next.', img: hira5 },
];

export default function Tracklist() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 md:px-12 relative z-10">
      
      <div className="max-w-5xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-center mb-32"
        >
          <p className="font-sans text-[#8B5A5A]/60 text-xs uppercase tracking-[0.4em] mb-4">Chapter I</p>
          <h1 className="font-serif italic text-[#4A2525] text-5xl md:text-7xl">Our Timeline</h1>
        </motion.div>

        <div className="relative">
          
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#E8D8C4] md:-translate-x-1/2"></div>

          {MILESTONES.map((m, i) => {
            const isEven = i % 2 === 0;

            return (
              <motion.div 
                key={m.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row items-center justify-between mb-24 md:mb-40 group ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[#8B5A5A] -translate-x-1/2 mt-8 md:mt-0 shadow-[0_0_10px_rgba(139,90,90,0.5)]"></div>

                <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                  <p className="font-sans text-[#8B5A5A]/60 text-xs tracking-widest mb-2 mt-6 md:mt-0">{m.date}</p>
                  <h3 className="font-serif text-3xl md:text-4xl text-[#2A2A2A] mb-4">{m.title}</h3>
                  <p className="font-sans text-[#2A2A2A]/70 text-sm md:text-base leading-relaxed">{m.blurb}</p>
                </div>

                <div className={`w-full md:w-[45%] pl-12 md:pl-0 mt-8 md:mt-0`}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="w-full bg-[#E8D8C4]/20 border border-white/40 rounded-2xl overflow-hidden shadow-2xl relative"
                  >
                    {m.img ? (
                      <img src={m.img} alt={m.title} className="w-full h-auto block" />
                    ) : (
                      <div className="w-full aspect-[4/3] flex items-center justify-center">
                        <span className="font-serif italic text-[#4A2525]/30 text-lg">Your Photo</span>
                      </div>
                    )}
                  </motion.div>
                </div>

              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-between items-center mt-20 pt-10 border-t border-[#E8D8C4] max-w-2xl mx-auto pl-12 md:pl-0">
          <button onClick={() => navigate('/')} className="font-sans uppercase text-[10px] tracking-widest text-[#2A2A2A]/50 hover:text-[#4A2525] transition-colors">
            ← Rewind
          </button>
          <button onClick={() => navigate('/bside')} className="font-sans uppercase text-[10px] tracking-widest text-[#8B5A5A] hover:text-[#C9A66B] transition-colors flex items-center gap-2">
            Flip to the B-Side <span>→</span>
          </button>
        </div>

      </div>
    </div>
  );
}