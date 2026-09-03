import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import TrackHeader from '../components/TrackHeader';
import RomanticBg from '../components/RomanticBg';
import TapedPhoto from '../components/TapedPhoto';

const MESSAGE = `You can put your real message right here.
Talk about why she matters, what today means, whatever you actually want to say.`;

export default function Letter() {
  const navigate = useNavigate();
  return (
    <RomanticBg sprockets>
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }}
        className="bg-[#EFE4C8]/95 backdrop-blur-sm border border-ink/15 rounded-sm p-8 sm:p-10 max-w-3xl w-full shadow-[0_12px_32px_rgba(59,42,42,0.25)] grid md:grid-cols-[1fr_1.3fr] gap-10 items-start mx-3"
      >
        <div className="flex flex-col items-center gap-6 order-2 md:order-1">
          <TapedPhoto rotate={-6} delay={0.2} caption="that day" />
          <TapedPhoto rotate={5} delay={0.35} caption="us" className="md:ml-10" />
        </div>

        <div className="order-1 md:order-2">
          <TrackHeader current={4} total={5} label="the letter" />
          <h1 className="font-hand text-rose text-4xl mb-6 rotate-[-1deg]">dear you,</h1>

          <p className="font-type text-ink text-[15px] leading-8 whitespace-pre-line">{MESSAGE}</p>
          <p className="font-hand text-teal text-3xl mt-8 rotate-[-1deg]">love, me</p>

          <div className="flex justify-between mt-10 pt-6 border-t border-dashed border-ink/15">
            <button onClick={() => navigate('/bside')} className="font-type text-xs text-ink/50 hover:text-ink transition-colors">◀◀ back</button>
            <motion.button onClick={() => navigate('/encore')} whileHover={{ x: 2 }} className="font-type text-xs text-teal">
              one more thing ▶▶
            </motion.button>
          </div>
        </div>
      </motion.div>
    </RomanticBg>
  );
}