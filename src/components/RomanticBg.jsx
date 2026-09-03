import { motion } from 'framer-motion';

export default function RomanticBg({ children, sprockets = false }) {
  return (
    <div
      className="min-h-screen relative overflow-hidden flex items-center justify-center p-4"
      style={{
        background: `
          radial-gradient(circle at 15% 20%, rgba(217,138,130,0.38), transparent 42%),
          radial-gradient(circle at 85% 15%, rgba(185,166,201,0.32), transparent 45%),
          radial-gradient(circle at 50% 95%, rgba(217,164,65,0.28), transparent 55%),
          #F3E9D2
        `,
      }}
    >
      <div className="grain absolute inset-0 pointer-events-none" />

      <motion.div
        className="absolute w-96 h-96 rounded-full bg-rose/20 blur-3xl"
        style={{ top: '-10%', left: '-10%' }}
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-lavender/20 blur-3xl"
        style={{ bottom: '-10%', right: '-8%' }}
        animate={{ x: [0, -25, 0], y: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {sprockets && (
        <>
          <div className="sprockets absolute left-0 top-0 h-full w-3 bg-ink/80 z-10" />
          <div className="sprockets absolute right-0 top-0 h-full w-3 bg-ink/80 z-10" />
        </>
      )}

      <div className="relative z-20 w-full flex items-center justify-center">{children}</div>
    </div>
  );
}