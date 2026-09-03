import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Polaroid from "./Polaroid";
import img1 from "../src/assets/hira-3.jpeg";
import img2 from "../src/assets/hira-4.jpeg";

export default function Message() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-teal via-blush to-mustard flex items-center justify-center p-4"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.25 } }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
    >
      <div className="bg-cream border-[3px] border-ink rounded-2xl p-8 max-w-lg w-full shadow-[8px_8px_0_theme(colors.terracotta)]">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-between items-center font-mono text-[11px] text-teal border-b-2 border-dashed border-blush pb-3 mb-5 origin-left"
        >
          <span>SIDE A</span>
          <span>00:01 ── ▶REC</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="font-display text-terracotta text-2xl mb-4"
        >
          Dear You,
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-letter italic text-[17px] leading-8 text-ink space-y-4"
        >
          <p>You can put your sweet message right here.</p>
          <p>
            Talk about a favorite memory, or just say how much she means to you.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="font-display text-teal text-xl mt-6"
        >
          Love, Me
        </motion.p>

        <div className="flex justify-center gap-4 mt-8">
          <Polaroid rotate={-6} delay={1.1} caption="that day" src={img1} />
          <Polaroid rotate={5} delay={1.25} caption="us" src={img2} />
        </div>

        <motion.button
          onClick={() => navigate("/")}
          whileHover={{ y: -2 }}
          whileTap={{ y: 2 }}
          className="mt-8 font-mono text-xs bg-white border-2 border-ink rounded px-4 py-2 shadow-[3px_3px_0_theme(colors.ink)]"
        >
          ← back
        </motion.button>
      </div>
    </motion.div>
  );
}
