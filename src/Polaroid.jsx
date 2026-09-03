import { motion } from 'framer-motion';

export default function Polaroid({ src, caption, className = '', rotate = -6, delay = 0 }) {
  return (
    <motion.div
      className={`bg-white p-3 pb-10 shadow-[6px_6px_0_rgba(43,27,23,0.25)] w-40 relative ${className}`}
      initial={{ opacity: 0, y: 30, rotate: 0 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ delay, type: 'spring', stiffness: 120, damping: 14 }}
      whileHover={{ scale: 1.08, rotate: 0, zIndex: 20 }}
      drag
      dragConstraints={{ left: -40, right: 40, top: -40, bottom: 40 }}
      dragElastic={0.3}
    >
      <div className="w-2/3 h-4 bg-mustard/60 absolute -top-2 left-1/2 -translate-x-1/2 rotate-2" />
      <div className="w-full aspect-square bg-blush/40 overflow-hidden">
        {src ? (
          <img src={src} alt={caption || 'us'} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-ink/40 font-mono text-xs text-center px-2">
            drop her photo here
          </div>
        )}
      </div>
      {caption && <p className="font-mono text-[11px] text-ink/70 text-center mt-2">{caption}</p>}
    </motion.div>
  );
}