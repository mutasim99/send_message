import { motion } from 'framer-motion';

export default function TrackHeader({ current, total, label }) {
  return (
    <div className="flex items-center gap-2 font-type text-[11px] text-ink/50 mb-6">
      <motion.svg
        width="16" height="16" viewBox="0 0 20 20"
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      >
        <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="10" r="2.5" fill="currentColor" />
      </motion.svg>
      <span>track {current} of {total} — {label}</span>
    </div>
  );
}