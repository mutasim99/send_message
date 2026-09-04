import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const MESSAGE = `Some chapters don't end with a slam, they just fade into a quiet hum you carry without noticing. And there's a particular kind of silence — the one from nights when a conversation slowly turned into someone falling asleep on the other end — that I don't think fully leaves a person.

Maybe it's true that we don't really miss people, just the shape of the moments they left behind. Either way, some warmth doesn't ask permission to stay. It just does.

I hope life is gentle with you, wherever it's taking you now. And I hope the Almighty keeps you safe and happy, always...`;

export default function Letter() {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center p-4 md:p-8 relative z-10"
    >
      <div className="bg-white/80 backdrop-blur-2xl border border-white p-10 md:p-16 max-w-3xl w-full shadow-glass rounded-sm relative">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#4A2525_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <p className="font-sans text-[#8B5A5A]/40 text-[10px] uppercase tracking-[0.3em] mb-8 text-center">
          Chapter III
        </p>

        <h1 className="font-serif italic text-[#4A2525] text-5xl md:text-6xl mb-8">
          Dear Babai🤍,
        </h1>

        <p className="font-serif text-[#2A2A2A] text-lg md:text-xl leading-loose whitespace-pre-line relative z-10">
          {MESSAGE}
        </p>

        <div className="mt-12 text-right">
          <p className="font-serif text-lg text-[#2A2A2A] mb-2">With everything unsaid</p>
          {/* <p className="font-serif italic text-[#8B5A5A] text-4xl">Me</p> */}
        </div>

        <div className="flex justify-between items-center mt-16 pt-8 border-t border-black/5 relative z-10">
          <button
            onClick={() => navigate("/bside")}
            className="font-sans uppercase text-[10px] tracking-widest text-[#2A2A2A]/50 hover:text-[#4A2525] transition-colors"
          >
            ← Previous
          </button>

          <button
            onClick={() => navigate("/encore")}
            className="font-sans uppercase text-[10px] tracking-widest text-[#8B5A5A] hover:text-[#C9A66B] transition-colors flex items-center gap-2"
          >
            Wait, One More 🤍
          </button>
        </div>
      </div>
    </motion.div>
  );
}
