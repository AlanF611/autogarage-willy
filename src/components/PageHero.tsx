import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  cta?: { label: string; to: string };
  bgImage: string;
}

export default function PageHero({
  label,
  title,
  subtitle,
  cta,
  bgImage,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <img
        src={bgImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-4"
        >
          {label}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-cream"
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 6rem)',
            lineHeight: 0.95,
            letterSpacing: '0.04em',
          }}
        >
          {title}
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '50%' }}
          transition={{ duration: 1, delay: 0.6 }}
          className="h-[2px] bg-gold mx-auto mt-6"
          style={{ maxWidth: '200px' }}
        />

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-6 font-body text-cream/60 text-lg max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}

        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8"
          >
            <Link
              to={cta.to}
              className="inline-flex items-center gap-2 bg-gold text-noir font-display text-lg tracking-wider px-8 py-4 hover:bg-gold-dark transition-colors duration-200"
            >
              {cta.label}
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
