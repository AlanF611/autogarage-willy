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
  ChevronRight,
  Quote,
  Phone,
  ArrowRight,
} from 'lucide-react';

const services = [
  { icon: Paintbrush, title: 'Detallado Cerámico', desc: 'Protección cerámica de última generación que resguarda la pintura con brillo y durabilidad excepcionales.' },
  { icon: Shield, title: 'PPF & Restauraciones', desc: 'Paint Protection Film y corrección de pintura con estándares de perfección inigualables.' },
  { icon: Scissors, title: 'Tapicería Premium', desc: 'Interiores a medida con materiales de lujo. Cuero, Alcantara y textiles exclusivos.' },
  { icon: Palette, title: 'Pintura & Repros Tuning', desc: 'Acabados personalizados y réplicas de alta fidelidad que superan estándares de fábrica.' },
  { icon: ScanLine, title: 'Escaneos 3D', desc: 'Digitalización de carrocería con precisión milimétrica para desarrollo de piezas a medida.' },
  { icon: Cpu, title: 'Mecatrónica', desc: 'Diagnóstico y electrónica automotriz avanzada con tecnología de punta.' },
  { icon: Volume2, title: 'Audio Car SQ', desc: 'Sound Quality de competencia e instalaciones premium de arquitectura sonora.' },
  { icon: Wrench, title: 'Fabricación CNC', desc: 'Piezas personalizadas mecanizadas con precisión industrial. Del CAD al acabado final.' },
  { icon: MapPin, title: 'GPS & Alarmas', desc: 'Seguridad vehicular inteligente y rastreo en tiempo real con control remoto.' },
];

const stats = [
  { number: '10+', label: 'Años de Experiencia' },
  { number: '500+', label: 'Vehículos Transformados' },
  { number: 'ISO', label: 'Certificación Internacional' },
];

const galleryItems = [
  { url: '/img/restauracion y tapiceria/5.jpeg', label: 'Restauración' },
  { url: '/img/ceramico.png', label: 'PPF' },
  { url: '/img/sound.png', label: 'Audio SQ' },
  { url: '/img/restauracion y tapiceria/22.jpeg', label: 'Tapicería' },
  { url: '/img/EXOTICOS.png', label: 'Exóticos' },
];

const testimonials = [
  { name: 'Alejandro M.', car: 'Mercedes-AMG GT', text: 'El nivel de detalle es simplemente otro universo. Mi vehículo salió con un acabado que supera lo que vi en concesionarios europeos. No es un taller, es un atelier.' },
  { name: 'Carolina R.', car: 'Porsche 911 Turbo S', text: 'La corrección de pintura y el cerámico transformaron completamente el aspecto. La atención es impecable y cada proceso se explica con rigor técnico. Resultado: perfecto.' },
  { name: 'Fernando V.', car: 'BMW M4 Competition', text: 'El sistema de audio que instalaron es de otro nivel. Sound quality real, no solo volumen. La instalación es limpia, profesional e invisible. Gente que sabe.' },
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
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  return (
    <>
      {/* HERO - ARTE • EN • CADA arriba, DETALLE abajo, centro despejado */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* IMAGEN HERO - CENTRO DESPEJADO */}
        <motion.img
          src="/img/hero2.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
          {/* TEXTO CON ARRIBA/ABAJO - CENTRO LIBRE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-cream"
          >
            {/* ✅ GRUPO SUPERIOR: ARTE • EN • CADA (subido) */}
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-3 md:gap-6"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', lineHeight: 1 }}
            >
              <span>ARTE</span>
              <span className="text-gold/50 text-2xl md:text-4xl">•</span>
              <span>EN</span>
              <span className="text-gold/50 text-2xl md:text-4xl">•</span>
              <span>CADA</span>
            </motion.div>

            {/* ✅ ESPACIO GRANDE PARA DEJAR EL CENTRO DESPEJADO */}
            <div className="h-16 md:h-24 lg:h-32"></div>

            {/* ✅ GRUPO INFERIOR: DETALLE (bajado) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', lineHeight: 1 }}
            >
              <span>DETALLE</span>
            </motion.div>
          </motion.div>

          {/* LÍNEA DORADA */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '40%' }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-[2px] bg-gold mx-auto mt-6"
            style={{ maxWidth: '200px' }}
          />

          {/* SUBTÍTULO Y BOTONES - ABAJO DEL TODO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-6"
          >
            <p className="font-body text-cream/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4">
              Donde la ingeniería se encuentra con la obsesión. Transformamos
              vehículos ordinarios en expresiones de excelencia.
            </p>
          </motion.div>

          {/* BOTONES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 bg-gold text-noir font-display text-base md:text-lg tracking-wider px-6 md:px-8 py-3 md:py-4 hover:bg-gold-dark transition-colors duration-200"
            >
              NUESTROS SERVICIOS
              <ChevronRight size={18} />
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 border border-gold text-gold font-display text-base md:text-lg tracking-wider px-6 md:px-8 py-3 md:py-4 hover:bg-gold/10 transition-colors duration-200"
            >
              CONTÁCTANOS
            </Link>
          </motion.div>
        </div>

        {/* SCROLL INDICATOR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-5 h-8 border-2 border-cream/30 rounded-full flex items-start justify-center p-1 animate-bounce">
            <div className="w-1 h-2 bg-gold rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 md:py-32 bg-noir">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-3">
              Lo que hacemos
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-6xl text-cream tracking-wide">
              SERVICIOS DE EXCELENCIA
            </motion.h2>
            <motion.div variants={fadeUp} custom={2} className="mt-6 h-[2px] w-16 bg-gold mx-auto" />
          </motion.div>

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
                  key={s.title}
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ y: -6, borderColor: '#C9A84C' }}
                  transition={{ duration: 0.3 }}
                  className="group bg-charcoal border-t-2 border-steel/20 p-8"
                >
                  <Icon size={32} className="text-gold mb-5 transition-transform duration-200 group-hover:scale-110" />
                  <h3 className="font-display text-2xl text-cream tracking-wide mb-3">{s.title}</h3>
                  <p className="font-body text-cream/50 text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 text-gold font-display tracking-wider hover:gap-3 transition-all duration-200"
            >
              VER TODOS LOS SERVICIOS
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 bg-charcoal border-y border-steel/20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
        >
          {stats.map((s, i) => (
            <motion.div key={s.label} variants={fadeUp} custom={i}>
              <motion.span
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2, type: 'spring', stiffness: 100 }}
                className="font-display text-gold block"
                style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1 }}
              >
                {s.number}
              </motion.span>
              <p className="mt-3 font-body text-cream/60 text-sm tracking-wider uppercase">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* GALLERY TEASER */}
      <section className="py-24 md:py-32 bg-noir overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="mb-12"
          >
            <motion.p variants={fadeUp} custom={0} className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-3">
              Portafolio
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-6xl text-cream tracking-wide">
              RESULTADOS QUE HABLAN
            </motion.h2>
            <motion.div variants={fadeUp} custom={2} className="mt-6 h-[2px] w-16 bg-gold" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex gap-4 overflow-x-auto px-6 pb-6 snap-x snap-mandatory"
        >
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="relative flex-shrink-0 w-72 md:w-96 snap-center cursor-pointer overflow-hidden"
            >
              <img
                src={item.url}
                alt={item.label}
                className="w-full h-56 md:h-72 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 font-display text-gold text-lg tracking-wider">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <Link
            to="/galeria"
            className="inline-flex items-center gap-2 text-gold font-display tracking-wider hover:gap-3 transition-all duration-200"
          >
            VER GALERÍA COMPLETA
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-3">
              Confianza
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-6xl text-cream tracking-wide">
              LO QUE DICEN NUESTROS CLIENTES
            </motion.h2>
            <motion.div variants={fadeUp} custom={2} className="mt-6 h-[2px] w-16 bg-gold mx-auto" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -4, borderColor: 'rgba(201,168,76,0.3)' }}
                className="bg-noir border border-steel/20 p-8 transition-colors duration-300"
              >
                <Quote size={28} className="text-gold mb-4" />
                <p className="font-body text-cream/70 text-sm leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t border-steel/20 pt-4">
                  <p className="font-display text-cream tracking-wide">{t.name}</p>
                  <p className="font-body text-cream/40 text-xs mt-1">{t.car}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 bg-noir overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 diagonal-gold" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="font-display text-4xl md:text-6xl text-cream tracking-wide mb-4">
            ¿LISTO PARA TRANSFORMAR TU VEHÍCULO?
          </h2>
          <p className="font-body text-cream/60 max-w-xl mx-auto mb-10">
            Cada proyecto es único. Agenda una consulta y descubre lo que
            podemos lograr juntos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5215555555555"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-display text-lg tracking-wider px-8 py-4 hover:bg-[#20bd5a] transition-colors duration-200"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WHATSAPP
            </a>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 border border-cream/30 text-cream/80 font-display text-lg tracking-wider px-8 py-4 hover:border-gold hover:text-gold transition-colors duration-200"
            >
              <Phone size={18} />
              CONTÁCTANOS
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
