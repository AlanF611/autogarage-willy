import { motion } from 'framer-motion';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Instagram, Facebook } from 'lucide-react';
import PageHero from '../components/PageHero';

const contactInfo = [
  { icon: Phone, label: 'Teléfono', value: '+52 33 2254 0962', href: 'tel:+523322540962' },
  { icon: Mail, label: 'Email', value: 'contacto@detalladospremium.com', href: 'mailto:contacto@detalladospremium.com' },
  { icon: MapPin, label: 'Dirección', value: 'Av. Base Aérea 725, Nuevo México, 45138 Zapopan, Jal.', href: 'https://maps.google.com/?q=Autogarage+Willy+Av+Base+Aerea+725+Zapopan+Jalisco' },
  { icon: Clock, label: 'Horario', value: 'Lun–Vie: 9:00–19:00 | Sáb: 9:00–15:00', href: '#' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        label="Contacto"
        title="HABLEMOS DE TU PROYECTO"
        subtitle="Cada transformación comienza con una conversación. Cuéntanos tu visión y nosotros la ejecutamos."
        bgImage="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80"
      />

      <section className="py-24 md:py-32 bg-noir">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* FORM */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.h3 variants={fadeUp} custom={0} className="font-display text-3xl text-cream tracking-wide mb-2">
                ENVÍA TU CONSULTA
              </motion.h3>
              <motion.p variants={fadeUp} custom={1} className="font-body text-cream/50 text-sm mb-8">
                Completa el formulario y te responderemos en menos de 24 horas.
              </motion.p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-charcoal border border-gold/30 p-12 text-center"
                >
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-gold" />
                  </div>
                  <h4 className="font-display text-2xl text-cream tracking-wide mb-2">MENSAJE ENVIADO</h4>
                  <p className="font-body text-cream/50 text-sm">
                    Recibirás respuesta de nuestro equipo en las próximas 24 horas.
                  </p>
                </motion.div>
              ) : (
                <motion.form variants={fadeUp} custom={2} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="font-body text-cream/60 text-xs tracking-wider uppercase block mb-2">Nombre</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-charcoal border border-steel/30 text-cream px-4 py-3 font-body text-sm focus:border-gold focus:outline-none transition-colors duration-200"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="font-body text-cream/60 text-xs tracking-wider uppercase block mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-charcoal border border-steel/30 text-cream px-4 py-3 font-body text-sm focus:border-gold focus:outline-none transition-colors duration-200"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="font-body text-cream/60 text-xs tracking-wider uppercase block mb-2">Teléfono</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-charcoal border border-steel/30 text-cream px-4 py-3 font-body text-sm focus:border-gold focus:outline-none transition-colors duration-200"
                        placeholder="+52 33 ..."
                      />
                    </div>
                    <div>
                      <label className="font-body text-cream/60 text-xs tracking-wider uppercase block mb-2">Servicio</label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full bg-charcoal border border-steel/30 text-cream px-4 py-3 font-body text-sm focus:border-gold focus:outline-none transition-colors duration-200"
                      >
                        <option value="">Selecciona un servicio</option>
                        <option value="ceramico">Detallado Cerámico</option>
                        <option value="ppf">PPF & Restauraciones</option>
                        <option value="tapiceria">Tapicería Premium</option>
                        <option value="pintura">Pintura & Repros Tuning</option>
                        <option value="escaneos">Escaneos 3D</option>
                        <option value="mecatronica">Mecatrónica</option>
                        <option value="audio">Audio Car SQ</option>
                        <option value="cnc">Fabricación CNC</option>
                        <option value="gps">GPS & Alarmas</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-body text-cream/60 text-xs tracking-wider uppercase block mb-2">Mensaje</label>
                    <textarea
                      rows={5}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-charcoal border border-steel/30 text-cream px-4 py-3 font-body text-sm focus:border-gold focus:outline-none transition-colors duration-200 resize-none"
                      placeholder="Cuéntanos sobre tu vehículo y lo que necesitas..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-gold text-noir font-display text-lg tracking-wider px-8 py-4 hover:bg-gold-dark transition-colors duration-200"
                  >
                    ENVIAR MENSAJE
                    <Send size={18} />
                  </button>
                </motion.form>
              )}
            </motion.div>

            {/* CONTACT INFO */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="space-y-8"
            >
              <div>
                <motion.h3 variants={fadeUp} custom={0} className="font-display text-3xl text-cream tracking-wide mb-2">
                  INFORMACIÓN DE CONTACTO
                </motion.h3>
                <motion.p variants={fadeUp} custom={1} className="font-body text-cream/50 text-sm">
                  Estamos disponibles para atenderte y resolver todas tus dudas.
                </motion.p>
              </div>

              <div className="space-y-5">
                {contactInfo.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <motion.a
                      key={c.label}
                      href={c.href}
                      variants={fadeUp}
                      custom={i + 2}
                      whileHover={{ x: 4 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 bg-charcoal border border-steel/20 flex items-center justify-center shrink-0 group-hover:border-gold/40 transition-colors duration-200">
                        <Icon size={20} className="text-gold" />
                      </div>
                      <div>
                        <p className="font-body text-cream/40 text-xs tracking-wider uppercase">{c.label}</p>
                        <p className="font-body text-cream/80 text-sm mt-1">{c.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              <motion.div variants={fadeUp} custom={6} className="pt-6 border-t border-steel/20">
                <p className="font-body text-cream/40 text-xs tracking-wider uppercase mb-4">SÍGUENOS</p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-charcoal border border-steel/20 flex items-center justify-center text-cream/40 hover:text-gold hover:border-gold/40 transition-all duration-200">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-charcoal border border-steel/20 flex items-center justify-center text-cream/40 hover:text-gold hover:border-gold/40 transition-all duration-200">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-charcoal border border-steel/20 flex items-center justify-center text-cream/40 hover:text-gold hover:border-gold/40 transition-all duration-200">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.16V11.7a4.83 4.83 0 01-3.77-1.34V6.69h3.77z" />
                    </svg>
                  </a>
                </div>
              </motion.div>

              {/* GOOGLE MAPS */}
              <motion.div variants={fadeUp} custom={7} className="relative overflow-hidden border border-steel/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.8783820575823!2d-103.44217490000001!3d20.7557229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428aff096fac5bd%3A0x625c54e36a52c0dd!2sAutogarage%20Willy!5e0!3m2!1ses!2smx!4v1782251680876!5m2!1ses!2smx"
                  width="100%"
                  height="350"
                  style={{ border: 0, filter: 'grayscale(100%) contrast(80%) brightness(70%)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Autogarage Willy - Ubicación"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-noir/90 backdrop-blur-sm px-4 py-3 flex items-center gap-3">
                  <MapPin size={18} className="text-gold shrink-0" />
                  <div>
                    <p className="font-display text-cream tracking-wider text-xs">AUTOGARAGE WILLY</p>
                    <p className="font-body text-cream/40 text-[10px]">Av. Base Aérea 725, Nuevo México, 45138 Zapopan, Jal.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}