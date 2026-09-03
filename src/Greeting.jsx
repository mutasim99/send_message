import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Polaroid from "./Polaroid";
import img1 from "../src/assets/hira-1.jpeg";
import img2 from "../src/assets/hira-2.jpeg";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 140, damping: 16 },
  },
};

export default function Greeting() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-mustard via-terracotta to-teal flex items-center justify-center p-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
    >
      <motion.span
        className="absolute top-10 left-10 text-3xl"
        animate={{ y: [0, -12, 0], rotate: [-10, -6, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        ✦
      </motion.span>
      <motion.span
        className="absolute bottom-16 right-16 text-2xl"
        animate={{ y: [0, -14, 0], rotate: [8, 12, 8] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        ♥
      </motion.span>

      <Polaroid
        className="absolute left-[6%] top-[15%] hidden md:block"
        rotate={-8}
        delay={0.3}
        caption="us :)"
        src={img1}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="bg-cream border-[3px] border-ink rounded-2xl p-8 max-w-md w-full text-center shadow-[8px_8px_0_theme(colors.ink)]"
      >
        <motion.svg
          variants={item}
          viewBox="0 0 200 90"
          className="mx-auto mb-4 w-40"
        >
          <rect x="4" y="10" width="192" height="72" rx="10" fill="#2B1B17" />
          <circle
            cx="52"
            cy="46"
            r="22"
            fill="#F5EAD3"
            stroke="#C1502E"
            strokeWidth="4"
          />
          <motion.circle
            cx="52"
            cy="46"
            r="7"
            fill="#2B1B17"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{ originX: "52px", originY: "46px" }}
          />
          <circle
            cx="148"
            cy="46"
            r="22"
            fill="#F5EAD3"
            stroke="#C1502E"
            strokeWidth="4"
          />
          <motion.circle
            cx="148"
            cy="46"
            r="7"
            fill="#2B1B17"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{ originX: "148px", originY: "46px" }}
          />
          <rect x="88" y="30" width="24" height="30" rx="4" fill="#1B6B65" />
        </motion.svg>

        <motion.h1
          variants={item}
          className="font-display text-terracotta text-3xl mb-2"
        >
          Hey You! ✨
        </motion.h1>
        <motion.p
          variants={item}
          className="font-mono text-ink/70 text-sm mb-8"
        >
          I recorded something for you. Press play.
        </motion.p>

        <motion.button
          variants={item}
          onClick={() => navigate("/message")}
          whileHover={{ y: -3, boxShadow: "6px 8px 0 #2B1B17" }}
          whileTap={{ y: 2, boxShadow: "2px 2px 0 #2B1B17" }}
          className="font-display text-lg text-cream bg-teal border-[3px] border-ink rounded-full px-8 py-3 shadow-[4px_4px_0_theme(colors.ink)]"
        >
          ▶ Press Play
        </motion.button>
      </motion.div>

      <Polaroid
        className="absolute right-[6%] bottom-[12%] hidden md:block"
        rotate={7}
        delay={0.5}
        caption="my favorite"
        src={img2}
      />
    </motion.div>
  );
}
