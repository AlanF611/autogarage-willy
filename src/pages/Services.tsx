import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Paintbrush,
  Shield,
  Scissors,
  Palette,
  ScanLine,
  Cpu,
  Volume2,
  Wrench,
  MapPin,
  ArrowRight,
  ChevronRight,
  Anchor,
  Car,
  Camera,
  Key,
  Sun,
  AlertTriangle,
  Lightbulb,
  Ship,
  Sparkles,
} from 'lucide-react';
import { useState } from 'react'; // ← Agregar useState
import PageHero from '../components/PageHero';

// Componente para manejar la imagen con fallback al icono
const ServiceImage = ({ src, alt, Icon }: { src: string; alt: string; Icon: any }) => {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div className="w-full h-full bg-charcoal flex items-center justify-center">
        <Icon size={64} className="text-gold/20" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
};

const services = [
  {
    icon: Car,
    title: 'Body Shop',
    slug: 'body-shop',
    desc: 'Reparación estructural y estética de carrocería con estándares de fábrica.',
    features: ['Reparación de chasis', 'Soldadura de precisión', 'Pintura color-match', 'Enderezado en frío'],
    image: '/img/body-shop.jpg', // ← Si no existe esta imagen, mostrará el icono
  },
  {
    icon: Sparkles,
    title: 'Restauración de Vehículos',
    slug: 'restauracion',
    desc: 'Restauraciones completas de vehículos clásicos y modernos con estándares de concurso.',
    features: ['Restauración integral', 'Piezas OEM y custom', 'Documentación del proceso', 'Acabados de concurso'],
    image: '/img/restauracion.jpg',
  },
  {
    icon: Palette,
    title: 'Laminado y Pintura',
    slug: 'laminado-pintura',
    desc: 'Aplicación profesional de laminados y pintura de alto rendimiento.',
    features: ['Laminado líquido', 'Pintura poliuretano', 'Acabados especiales', 'Protección UV'],
    image: '/img/pintura.jpg',
  },
  {
    icon: Shield,
    title: 'Detallado Cerámico',
    slug: 'ceramico',
    desc: 'Protección cerámica nanotecnológica que resguarda la pintura con brillo y durabilidad excepcionales.',
    features: ['Recubrimiento 9H', 'Protección UV', 'Efecto hidrofóbico', 'Brillo espejo'],
    image: '/img/ceramico.png',
  },
  {
    icon: Shield,
    title: 'PPF',
    slug: 'ppf',
    desc: 'Paint Protection Film premium que blinda cada superficie contra impactos y contaminación.',
    features: ['PPF SunTek/XPEL', 'Auto-regeneración', 'Protección impacto', 'Instalación certificada'],
    image: '/img/ppf.jpg',
  },
  {
    icon: Palette,
    title: 'WRAP',
    slug: 'wrap',
    desc: 'Transformación total de color y acabados con vinilos premium de las mejores marcas.',
    features: ['Vinilos 3M/Avery', 'Acabados mate/gloss', 'Diseños personalizados', 'Remoción segura'],
    image: '/img/wrap.jpg',
  },
  {
    icon: Volume2,
    title: 'Audio Car SQ Premium',
    slug: 'audio',
    desc: 'Sound Quality de competencia. Instalaciones premium de arquitectura sonora con equipos de alta fidelidad.',
    features: ['Damping completo', 'DSP 32-bit', 'Instalación stealth', 'Tuning profesional'],
    image: '/img/sound.png',
  },
  {
    icon: Wrench,
    title: 'Diseño y Fabricación CNC',
    slug: 'cnc',
    desc: 'Piezas personalizadas mecanizadas con precisión industrial. Paneles, cajones y componentes únicos.',
    features: ['Mecanizado 5 ejes', 'Aluminio/acero', 'Anodizado', 'Prototipado rápido'],
    image: '/img/cnc.jpg',
  },
  {
    icon: Scissors,
    title: 'Tapicería Automotriz',
    slug: 'tapiceria',
    desc: 'Interiores a medida con materiales de lujo. Cuero, Alcantara y textiles exclusivos.',
    features: ['Cuero Nappa', 'Alcantara importada', 'Costura decorativa', 'Aislamiento acústico'],
    image: '/img/tapiceria.jpg',
  },
  {
    icon: Ship,
    title: 'Barcos',
    slug: 'barcos',
    desc: 'Servicios especializados para embarcaciones. Protección, restauración y personalización náutica.',
    features: ['Protección marina', 'Restauración gelcoat', 'Tapicería náutica', 'Electrónica marina'],
    image: '/img/barcos.jpg',
  },
  {
    icon: MapPin,
    title: 'Alarmas y GPS',
    slug: 'gps',
    desc: 'Seguridad vehicular inteligente y rastreo en tiempo real con control remoto.',
    features: ['Rastreo GPS', 'Geocercas', 'Inmovilizador', 'App monitoreo 24/7'],
    image: '/img/gps.jpg',
  },
  {
    icon: Car,
    title: 'Repros Tuning',
    slug: 'repros',
    desc: 'Reproducciones de alta fidelidad y optimización de performance para vehículos tuning.',
    features: ['Réplicas exactas', 'Optimización ECU', 'Performance tuning', 'Acabados OEM+'],
    image: '/img/repros.jpg',
  },
  {
    icon: Volume2,
    title: 'Audio Marino YATES',
    slug: 'audio-marino',
    desc: 'Sistemas de audio de alta fidelidad diseñados específicamente para el ambiente marino.',
    features: ['Equipos marinos', 'Resistencia salina', 'Instalación sellada', 'Tuning acuático'],
    image: '/img/audio-marino.jpg',
  },
  {
    icon: Car,
    title: 'UTVs y RAZER',
    slug: 'utvs',
    desc: 'Personalización y mejoras para vehículos off-road. Rendimiento y estilo todoterreno.',
    features: ['Protección roll-cage', 'Iluminación LED', 'Audio outdoor', 'Performance'],
    image: '/img/utvs.jpg',
  },
  {
    icon: AlertTriangle,
    title: 'Reparación de Air Bag',
    slug: 'airbag',
    desc: 'Diagnóstico, reparación y restauración de sistemas de airbag con componentes OEM.',
    features: ['Diagnóstico SRS', 'Reparación módulos', 'Reset de colisión', 'Componentes OEM'],
    image: '/img/airbag.jpg',
  },
  {
    icon: Lightbulb,
    title: 'Luces LED',
    slug: 'led',
    desc: 'Instalación y upgrade de sistemas de iluminación LED de alto rendimiento.',
    features: ['LED premium', 'Retrofit OEM', 'DRL personalizados', 'Iluminación interior'],
    image: '/img/led.jpg',
  },
  {
    icon: Cpu,
    title: 'Escaneo y Mecatrónica',
    slug: 'mecatronica',
    desc: 'Diagnóstico y electrónica automotriz avanzada con tecnología de punta multi-marca.',
    features: ['Diagnóstico OEM', 'Programación ECU', 'Codificación módulos', 'Recalibración'],
    image: '/img/mecatronica.jpg',
  },
  {
    icon: Key,
    title: 'Llaves con Chip Automotriz',
    slug: 'llaves',
    desc: 'Programación y duplicación de llaves con chip para todas las marcas y modelos.',
    features: ['Programación OEM', 'Duplicación chip', 'Emergencia in-situ', 'Todas las marcas'],
    image: '/img/llaves.jpg',
  },
  {
    icon: Sun,
    title: 'Polarizados Cerámicos',
    slug: 'polarizados',
    desc: 'Venta e instalación de polarizados cerámicos premium con máxima protección térmica.',
    features: ['Cerámico IR', 'Protección UV 99%', 'Rechazo térmico', 'Garantía color'],
    image: '/img/polarizados.jpg',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Services() {
  return (
    <>
      <PageHero
        label="Nuestros Servicios"
        title="MAESTRÍA TÉCNICA"
        subtitle="Cada servicio es ejecutado con precisión artesanal y tecnología de vanguardia. No hay atajos cuando la excelencia es el estándar."
        bgImage="/img/servicios.png"
      />

      {/* ALL SERVICES - ELEGANT GRID WITH IMAGES */}
      <section className="py-24 md:py-32 bg-noir">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="text-center mb-20"
          >
            <motion.p variants={fadeUp} custom={0} className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-3">
              Excelencia Técnica
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-6xl text-cream tracking-wide mb-6">
              TODOS NUESTROS SERVICIOS
            </motion.h2>
            <motion.div variants={fadeUp} custom={2} className="h-[2px] w-24 bg-gold mx-auto mb-8" />
            <motion.p variants={fadeUp} custom={3} className="font-body text-cream/50 max-w-3xl mx-auto leading-relaxed">
              Desde restauraciones completas hasta el más mínimo detalle electrónico. 
              Dominamos cada disciplina con la misma obsesión por la perfección.
            </motion.p>
          </motion.div>

          {/* Services Grid with Images */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.slug}
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-charcoal border border-steel/20 overflow-hidden cursor-pointer"
                >
                  {/* Imagen de fondo con fallback al icono */}
                  <div className="relative h-48 overflow-hidden">
                    <ServiceImage src={s.image} alt={s.title} Icon={Icon} />
                    
                    {/* Overlay gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
                    
                    {/* Icono pequeño en la esquina superior izquierda */}
                    <div className="absolute top-3 left-3 bg-noir/80 backdrop-blur-sm border border-gold/20 p-2">
                      <Icon size={20} className="text-gold" />
                    </div>
                    
                    {/* Número de servicio */}
                    <div className="absolute top-3 right-3">
                      <span className="font-display text-cream/20 text-lg">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  
                  {/* Contenido */}
                  <div className="p-6 relative">
                    <h3 className="font-display text-xl text-cream tracking-wide mb-2 group-hover:text-gold transition-colors duration-300">
                      {s.title}
                    </h3>
                    
                    <p className="font-body text-cream/50 text-sm leading-relaxed mb-4">
                      {s.desc}
                    </p>
                    
                    <div className="space-y-1.5 mb-5">
                      {s.features.slice(0, 2).map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-gold/50 rounded-full" />
                          <span className="font-body text-cream/40 text-xs">{f}</span>
                        </div>
                      ))}
                      {s.features.length > 2 && (
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-gold/30 rounded-full" />
                          <span className="font-body text-cream/30 text-xs italic">
                            +{s.features.length - 2} más
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <Link
                      to="/contacto"
                      className="inline-flex items-center gap-2 text-gold font-body text-sm tracking-wider hover:gap-3 transition-all duration-200 group/link"
                    >
                      COTIZAR
                      <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  
                  {/* Borde dorado en hover */}
                  <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 transition-colors duration-300 pointer-events-none" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal border-t border-steel/20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="font-display text-3xl md:text-5xl text-cream tracking-wide mb-4">
            ¿LISTO PARA COMENZAR?
          </h2>
          <p className="font-body text-cream/60 mb-8">
            Cada proyecto es diferente. Contáctanos y diseñamos una solución a la medida de tu vehículo.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-gold text-noir font-display text-lg tracking-wider px-8 py-4 hover:bg-gold-dark transition-colors duration-200"
          >
            HABLAR CON UN EXPERTO
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </>
  );
}