import { motion } from 'framer-motion';

export default function TapedPhoto({ src, caption, className = '', rotate = -5, delay = 0 }) {
  return (
    <motion.div
      className={`w-32 relative ${className}`}
      initial={{ opacity: 0, y: 24, rotate: 0 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ delay, type: 'spring', stiffness: 110, damping: 15 }}
      whileHover={{ scale: 1.06, rotate: 0, zIndex: 10 }}
    >
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-4 bg-mustard/50 rotate-2" />
      <div className="bg-[#EFE4C8] p-1.5 pb-4 shadow-[3px_4px_6px_rgba(59,42,42,0.25)]">
        <div className="w-full aspect-[4/5] bg-rose/20 sepia-[.3] saturate-[.7] overflow-hidden">
          {src ? (
            <img src={src} alt={caption || 'us'} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-ink/40 font-type text-[10px] text-center px-2">her photo here</div>
          )}
        </div>
        {caption && <p className="font-hand text-rose text-xs text-center mt-1">{caption}</p>}
      </div>
    </motion.div>
  );
}