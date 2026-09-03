import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import TrackHeader from '../components/TrackHeader';
import RomanticBg from '../components/RomanticBg';
import TapedPhoto from '../components/TapedPhoto';
// import photoA from '../assets/reason1.jpg';

const REASONS = [
  'the way you laugh at your own jokes before finishing them',
  'you remember the small things I mention once',
  'how safe it feels to be a mess around you',
  'you make ordinary days feel like something',
  "you're just... my favorite person",
];

export default function BSide() {
  const navigate = useNavigate();
  return (
    <RomanticBg>
      <motion.div
        initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
        className="bg-[#EFE4C8]/95 backdrop-blur-sm border border-ink/15 rounded-sm p-8 sm:p-10 max-w-3xl w-full shadow-[0_12px_32px_rgba(59,42,42,0.25)] grid md:grid-cols-[1.2fr_1fr] gap-8 items-start"
      >
        <div>
          <TrackHeader current={3} total={5} label="b-side" />
          <h1 className="font-hand text-rose text-4xl mb-6 rotate-[-1deg]">reasons</h1>

          <motion.ul
            initial="hidden" animate="show"
            variants={{ show: { transition: { staggerChildren: 0.15 } } }}
            className="space-y-4"
          >
            {REASONS.map((r) => (
              <motion.li
                key={r}
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                className="font-hand text-ink text-lg leading-snug"
              >
                — {r}
              </motion.li>
            ))}
          </motion.ul>

          <div className="flex justify-between mt-10 pt-6 border-t border-dashed border-ink/15">
            <button onClick={() => navigate('/story')} className="font-type text-xs text-ink/50 hover:text-ink transition-colors">◀◀ back</button>
            <motion.button onClick={() => navigate('/letter')} whileHover={{ x: 2 }} className="font-type text-xs text-teal">
              next track ▶▶
            </motion.button>
          </div>
        </div>

        <div className="relative h-72 md:h-full hidden md:block">
          <TapedPhoto className="absolute left-2 top-2" rotate={-8} delay={0.3} caption="giggling" />
          <TapedPhoto className="absolute right-0 top-20" rotate={7} delay={0.45} caption="that face" />
          <TapedPhoto className="absolute left-10 bottom-0" rotate={4} delay={0.6} caption="always" />
        </div>
      </motion.div>
    </RomanticBg>
  );
}