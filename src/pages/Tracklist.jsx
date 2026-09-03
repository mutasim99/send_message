import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import TrackHeader from '../components/TrackHeader';
import RomanticBg from '../components/RomanticBg';
// import photo1 from '../assets/track1.jpg';

const MILESTONES = [
  { title: 'The Day We Met', date: 'March 2022', blurb: 'I still remember exactly what you were wearing.', width: 60, img: null },
  { title: 'That Rainy Trip', date: 'July 2022', blurb: 'We got soaked and laughed the whole way back.', width: 80, img: null },
  { title: 'The Long Call', date: 'Dec 2022', blurb: 'Talked till 3am and neither of us wanted to hang up.', width: 45, img: null },
  { title: 'First Fight, First Fix', date: 'Feb 2023', blurb: 'We figured out how to actually talk to each other.', width: 70, img: null },
  { title: 'Right Now', date: 'Today', blurb: 'Still choosing you. Still my favorite.', width: 95, img: null },
];

const item = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 130, damping: 16 } },
};

export default function Tracklist() {
  const navigate = useNavigate();
  return (
    <RomanticBg>
      <motion.div
        initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
        className="bg-[#EFE4C8]/95 backdrop-blur-sm border border-ink/15 rounded-sm p-8 sm:p-10 max-w-2xl w-full shadow-[0_12px_32px_rgba(59,42,42,0.25)]"
      >
        <TrackHeader current={2} total={5} label="our story" />
        <h1 className="font-hand text-rose text-4xl mb-8 rotate-[-1deg]">tracklist</h1>

        <motion.div
          initial="hidden" animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="divide-y divide-ink/10"
        >
          {MILESTONES.map((m, i) => (
            <motion.div key={m.title} variants={item} className="flex gap-4 py-5 first:pt-0 last:pb-0">
              <div
                className="w-16 h-16 shrink-0 rounded-sm overflow-hidden border-2 border-white shadow-[2px_3px_6px_rgba(59,42,42,0.3)] bg-rose/20 sepia-[.25] saturate-[.75]"
                style={{ transform: `rotate(${i % 2 === 0 ? -4 : 4}deg)` }}
              >
                {m.img ? (
                  <img src={m.img} alt={m.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-ink/30 font-type text-[9px] text-center px-1">photo</div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline gap-2">
                  <span className="font-type text-ink text-sm truncate">{String(i + 1).padStart(2, '0')}. {m.title}</span>
                  <span className="font-type text-ink/40 text-[11px] shrink-0">{m.date}</span>
                </div>
                <p className="font-type text-ink/60 text-xs mt-1 mb-2">{m.blurb}</p>
                <div className="h-1.5 bg-ink/10 w-full rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-teal"
                    initial={{ width: 0 }}
                    animate={{ width: `${m.width}%` }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-between mt-8 pt-6 border-t border-dashed border-ink/15">
          <button onClick={() => navigate('/')} className="font-type text-xs text-ink/50 hover:text-ink transition-colors">◀◀ back</button>
          <motion.button onClick={() => navigate('/bside')} whileHover={{ x: 2 }} className="font-type text-xs text-teal">
            next track ▶▶
          </motion.button>
        </div>
      </motion.div>
    </RomanticBg>
  );
}