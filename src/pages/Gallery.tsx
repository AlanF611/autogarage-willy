import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import PageHero from '../components/PageHero';

const categories = [
  'Todos',
  'Cerámica',
  'PPF',
  'Pintura',
  'Interior',
  'Audio',
  'CNC',
];

const images = [
  { url: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80', category: 'Cerámica', title: 'Cerámica Nano SiO2 — Mercedes S-Class' },
  { url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', category: 'Pintura', title: 'Repro Porsche GT3 — Guards Red' },
  { url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80', category: 'PPF', title: 'PPF Full Frontal — BMW M5' },
  { url: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80', category: 'Interior', title: 'Tapicería Nappa — Range Rover Autobiography' },
  { url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', category: 'Pintura', title: 'Detalle de acabado — Corvette C8' },
  { url: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80', category: 'Cerámica', title: 'Cerámica Cristal — Audi RS7' },
  { url: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80', category: 'Interior', title: 'Dashboard Restoration — Lexus LC500' },
  { url: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80', category: 'CNC', title: 'Piezas CNC mecanizadas — Tesla Model 3' },
  { url: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80', category: 'Cerámica', title: 'Proceso de aplicación — Lamborghini Urus' },
  { url: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80', category: 'PPF', title: 'Instalación PPF — Ford GT' },
  { url: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80', category: 'Pintura', title: 'Acabado personalizado — Ferrari 488' },
  { url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80', category: 'Audio', title: 'Instalación SQ — Porsche Panamera' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.05 },
  }),
};

export default function Gallery() {
  const [active, setActive] = useState('Todos');
  const [selected, setSelected] = useState<typeof images[0] | null>(null);

  const filtered = active === 'Todos' ? images : images.filter((img) => img.category === active);

  return (
    <>
      <PageHero
        label="Portafolio"
        title="RESULTADOS QUE HABLAN"
        subtitle="Cada imagen es testimonio de un proceso ejecutado sin concesiones. Observa la diferencia que marca la obsesión por el detalle."
        bgImage="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1920&q=80"
      />

      <section className="py-24 md:py-32 bg-noir">
        <div className="max-w-7xl mx-auto px-6">
          {/* FILTERS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-3 mb-12 justify-center"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-display tracking-wider px-5 py-2 text-sm transition-all duration-200 ${
                  active === cat
                    ? 'bg-gold text-noir'
                    : 'bg-charcoal text-cream/60 hover:text-gold border border-steel/20 hover:border-gold/40'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </motion.div>

          {/* GRID */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group relative cursor-pointer overflow-hidden"
                  onClick={() => setSelected(img)}
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/60 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn size={32} className="text-gold" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-noir/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-display text-gold text-sm tracking-wider mb-1">{img.category}</p>
                    <p className="font-body text-cream/80 text-xs">{img.title}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-noir/95 flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-6 right-6 text-cream/60 hover:text-gold transition-colors duration-200"
              onClick={() => setSelected(null)}
              aria-label="Cerrar"
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.url.replace('w=800', 'w=1400')}
                alt={selected.title}
                className="w-full max-h-[75vh] object-contain mx-auto"
              />
              <div className="mt-4 text-center">
                <p className="font-display text-gold tracking-wider">{selected.category}</p>
                <p className="font-body text-cream/70 text-sm mt-1">{selected.title}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
