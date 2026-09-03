import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import TapedPhoto from '../components/TapedPhoto';

export default function Cover() {
  const navigate = useNavigate();
  return (
    <motion.div
      className="min-h-screen bg-paper flex items-center justify-center p-4 relative overflow-hidden"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    >
      <TapedPhoto className="absolute left-[8%] top-[16%] hidden md:block" rotate={-8} delay={0.3} caption="that summer" />

      <div className="bg-[#EFE4C8] border border-ink/20 p-10 max-w-sm w-full text-center shadow-[0_8px_24px_rgba(59,42,42,0.2)]">
        <svg viewBox="0 0 200 90" className="mx-auto mb-5 w-36">
          <rect x="4" y="10" width="192" height="72" rx="6" fill="#3B2A2A" />
          <circle cx="52" cy="46" r="20" fill="#F3E9D2" />
          <motion.circle cx="52" cy="46" r="6" fill="#3B2A2A" animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} style={{ originX: '52px', originY: '46px' }} />
          <circle cx="148" cy="46" r="20" fill="#F3E9D2" />
          <motion.circle cx="148" cy="46" r="6" fill="#3B2A2A" animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} style={{ originX: '148px', originY: '46px' }} />
          <rect x="88" y="32" width="24" height="26" rx="3" fill="#6E9A96" />
        </svg>

        <p className="font-type text-ink/50 text-[11px] mb-2">a mixtape, side A</p>
        <h1 className="font-hand text-rose text-4xl mb-3 rotate-[-1deg]">for you</h1>
        <p className="font-type text-ink/70 text-sm mb-8 leading-relaxed">
          five tracks. our whole story, basically.
        </p>

        <motion.button
          onClick={() => navigate('/story')}
          whileHover={{ y: -2 }} whileTap={{ y: 1 }}
          className="font-type text-sm text-paper bg-teal px-7 py-3 tracking-wide"
        >
          ▶ press play
        </motion.button>
      </div>

      <TapedPhoto className="absolute right-[8%] bottom-[14%] hidden md:block" rotate={6} delay={0.5} caption="us" />
    </motion.div>
  );
}