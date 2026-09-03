import { useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import TrackHeader from '../components/TrackHeader';
import RomanticBg from '../components/RomanticBg';

const PETALS = Array.from({ length: 10 }, (_, i) => i);

export default function Encore() {
  const [revealed, setRevealed] = useState(false);

  return (
    <RomanticBg>
      <m.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="bg-[#EFE4C8]/95 backdrop-blur-sm border border-ink/15 rounded-sm p-9 sm:p-12 max-w-sm w-full text-center shadow-[0_12px_32px_rgba(59,42,42,0.25)] relative overflow-hidden"
      >
        <TrackHeader current={5} total={5} label="encore" />
        <p className="font-type text-ink/60 text-sm mb-10">that's the whole tape. one last thing —</p>

        <div className="relative flex items-center justify-center h-32 mb-4">
          <AnimatePresence>
            {revealed &&
              [0, 1, 2].map((r) => (
                <m.div
                  key={r}
                  className="absolute rounded-full border-2 border-wax/40"
                  initial={{ width: 96, height: 96, opacity: 0.6 }}
                  animate={{ width: 220, height: 220, opacity: 0 }}
                  transition={{ duration: 1.2, delay: r * 0.15, ease: 'easeOut' }}
                />
              ))}
          </AnimatePresence>

          <m.button
            onClick={() => setRevealed(true)}
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: -8 }}
            transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.3 }}
            whileHover={{ scale: revealed ? 1 : 1.05 }}
            whileTap={{ scale: revealed ? 1 : 0.92 }}
            disabled={revealed}
            className="relative z-10 w-24 h-24 rounded-full bg-wax text-paper font-hand text-sm flex items-center justify-center shadow-[0_6px_14px_rgba(0,0,0,0.35)] border-4 border-wax"
            style={{ cursor: revealed ? 'default' : 'pointer' }}
          >
            {revealed ? '' : 'break seal'}
          </m.button>
        </div>

        <m.p
          initial={{ opacity: 0, y: 10 }}
          animate={revealed ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-hand text-rose text-3xl mt-4 rotate-[-1deg]"
        >
          {revealed ? "you're it for me." : ''}
        </m.p>

        <m.svg viewBox="0 0 160 12" className="mx-auto mt-3 w-32"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={revealed ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <m.path d="M2 8 Q40 -2 80 8 T158 8" stroke="#6E9A96" strokeWidth="2" fill="none" />
        </m.svg>

        <AnimatePresence>
          {revealed &&
            PETALS.map((p) => (
              <m.span
                key={p}
                className="absolute text-rose text-lg pointer-events-none"
                style={{ left: `${8 + p * 9}%`, top: -20 }}
                initial={{ y: -20, opacity: 0, rotate: 0 }}
                animate={{ y: 340, opacity: [0, 1, 1, 0], rotate: 180 }}
                transition={{ duration: 3 + (p % 3), delay: p * 0.12, ease: 'easeIn' }}
              >
                ♥
              </m.span>
            ))}
        </AnimatePresence>

        {revealed && (
          <m.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
            className="font-type text-ink/40 text-[10px] mt-10 tracking-widest"
          >
            fin.
          </m.p>
        )}
      </m.div>
    </RomanticBg>
  );
}