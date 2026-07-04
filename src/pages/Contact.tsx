import { motion } from 'framer-motion';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Instagram, Facebook, CheckCircle } from 'lucide-react';
import PageHero from '../components/PageHero';

const contactInfo = [
  { 
    icon: Phone, 
    label: 'Teléfono', 
    value: '+52 33 2254 0962', 
    href: 'tel:+523322540962',
    description: 'Llámanos para atención inmediata'
  },
  { 
    icon: Mail, 
    label: 'Email', 
    value: 'contacto@detalladospremium.com', 
    href: 'mailto:contacto@detalladospremium.com',
    description: 'Escríbenos y te responderemos en 24h'
  },
  { 
    icon: MapPin, 
    label: 'Dirección', 
    value: 'Av. Base Aérea 725, Nuevo México, 45138 Zapopan, Jal.', 
    href: 'https://maps.google.com/?q=Autogarage+Willy+Av+Base+Aerea+725+Zapopan+Jalisco',
    description: 'Visítanos en nuestro taller'
  },
  { 
    icon: Clock, 
    label: 'Horario', 
    value: 'Lun–Vie: 9:30am–6:00pm | Sáb: 10:00am–2:00pm', 
    href: '#',
    description: 'Domingos cerrado'
  },
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <>
      <PageHero
        label="Contacto"
        title="HABLEMOS DE TU PROYECTO"
        subtitle="Cada transformación comienza con una conversación. Cuéntanos tu visión y nosotros la ejecutamos."
        bgImage="/img/contacto.png"
      />

      <section className="py-24 md:py-32 bg-noir relative overflow-hidden">
        {/* Fondo decorativo */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-t from-gold/5 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* FORMULARIO */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} custom={0} className="mb-10">
                <h3 className="font-display text-4xl text-cream tracking-wide mb-3">
                  ENVÍA TU CONSULTA
                </h3>
                <div className="w-20 h-1 bg-gold mb-4" />
                <p className="font-body text-cream/50 text-sm max-w-md">
                  Completa el formulario y te responderemos en menos de 24 horas.
                </p>
              </motion.div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-charcoal border border-gold/30 p-12 text-center rounded-lg"
                >
                  <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} className="text-gold" />
                  </div>
                  <h4 className="font-display text-3xl text-cream tracking-wide mb-3">¡MENSAJE ENVIADO!</h4>
                  <p className="font-body text-cream/50 text-sm max-w-xs mx-auto">
                    Recibirás respuesta de nuestro equipo en las próximas 24 horas. 
                    ¡Gracias por confiar en nosotros!
                  </p>
                </motion.div>
              ) : (
                <motion.form variants={fadeUp} custom={1} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="font-body text-cream/60 text-xs tracking-wider uppercase block mb-2">
                        Nombre completo <span className="text-gold">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-charcoal border border-steel/30 text-cream px-4 py-3.5 font-body text-sm focus:border-gold focus:outline-none transition-all duration-300 rounded-lg hover:border-steel/50"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="font-body text-cream/60 text-xs tracking-wider uppercase block mb-2">
                        Email <span className="text-gold">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-charcoal border border-steel/30 text-cream px-4 py-3.5 font-body text-sm focus:border-gold focus:outline-none transition-all duration-300 rounded-lg hover:border-steel/50"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="font-body text-cream/60 text-xs tracking-wider uppercase block mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-charcoal border border-steel/30 text-cream px-4 py-3.5 font-body text-sm focus:border-gold focus:outline-none transition-all duration-300 rounded-lg hover:border-steel/50"
                        placeholder="+52 33 2254 0962"
                      />
                    </div>
                    <div>
                      <label className="font-body text-cream/60 text-xs tracking-wider uppercase block mb-2">
                        Servicio de interés
                      </label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full bg-charcoal border border-steel/30 text-cream px-4 py-3.5 font-body text-sm focus:border-gold focus:outline-none transition-all duration-300 rounded-lg hover:border-steel/50 appearance-none"
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
                    <label className="font-body text-cream/60 text-xs tracking-wider uppercase block mb-2">
                      Mensaje <span className="text-gold">*</span>
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-charcoal border border-steel/30 text-cream px-4 py-3.5 font-body text-sm focus:border-gold focus:outline-none transition-all duration-300 rounded-lg resize-none hover:border-steel/50"
                      placeholder="Cuéntanos sobre tu vehículo y lo que necesitas..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-3 bg-gold text-noir font-display text-lg tracking-wider px-10 py-4 hover:bg-gold-dark transition-all duration-300 rounded-lg group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-noir" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        ENVIANDO...
                      </>
                    ) : (
                      <>
                        ENVIAR MENSAJE
                        <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                  
                  <p className="font-body text-cream/30 text-xs">
                    * Campos obligatorios
                  </p>
                </motion.form>
              )}
            </motion.div>

            {/* INFORMACIÓN DE CONTACTO */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="space-y-10"
            >
              <motion.div variants={fadeUp} custom={0}>
                <h3 className="font-display text-4xl text-cream tracking-wide mb-3">
                  INFORMACIÓN DE CONTACTO
                </h3>
                <div className="w-20 h-1 bg-gold mb-4" />
                <p className="font-body text-cream/50 text-sm">
                  Estamos disponibles para atenderte y resolver todas tus dudas.
                </p>
              </motion.div>

              <div className="space-y-4">
                {contactInfo.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <motion.a
                      key={c.label}
                      href={c.href}
                      variants={fadeUp}
                      custom={i + 1}
                      whileHover={{ x: 6 }}
                      className="flex items-start gap-5 group bg-charcoal/30 p-4 rounded-lg border border-transparent hover:border-gold/20 transition-all duration-300"
                      target={c.label === 'Dirección' ? '_blank' : undefined}
                      rel={c.label === 'Dirección' ? 'noopener noreferrer' : undefined}
                    >
                      <div className="w-12 h-12 bg-charcoal border border-steel/20 flex items-center justify-center shrink-0 group-hover:border-gold/40 group-hover:bg-gold/5 transition-all duration-300 rounded-lg">
                        <Icon size={20} className="text-gold group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <p className="font-body text-cream/40 text-xs tracking-wider uppercase">{c.label}</p>
                        <p className="font-body text-cream/80 text-sm font-medium mt-1">{c.value}</p>
                        <p className="font-body text-cream/30 text-xs mt-1">{c.description}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* REDES SOCIALES */}
              <motion.div variants={fadeUp} custom={5} className="pt-8 border-t border-steel/20">
                <p className="font-body text-cream/40 text-xs tracking-wider uppercase mb-5">SÍGUENOS EN REDES</p>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-charcoal border border-steel/20 flex items-center justify-center text-cream/40 hover:text-gold hover:border-gold/40 hover:bg-gold/5 transition-all duration-300 rounded-lg group"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-charcoal border border-steel/20 flex items-center justify-center text-cream/40 hover:text-gold hover:border-gold/40 hover:bg-gold/5 transition-all duration-300 rounded-lg group"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-charcoal border border-steel/20 flex items-center justify-center text-cream/40 hover:text-gold hover:border-gold/40 hover:bg-gold/5 transition-all duration-300 rounded-lg group"
                    aria-label="TikTok"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[20px] h-[20px] group-hover:scale-110 transition-transform">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.16V11.7a4.83 4.83 0 01-3.77-1.34V6.69h3.77z" />
                    </svg>
                  </a>
                </div>
              </motion.div>

              {/* MAPA GOOGLE - CORREGIDO */}
              <motion.div variants={fadeUp} custom={6} className="relative overflow-hidden border border-steel/20 rounded-lg bg-charcoal">
                <div className="w-full h-[280px] relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.8783820575823!2d-103.4421749!3d20.7557229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428aff096fac5bd%3A0x625c54e36a52c0dd!2sAutogarage%20Willy!5e0!3m2!1ses!2smx!4v1782251680876!5m2!1ses!2smx"
                    width="100%"
                    height="100%"
                    style={{ 
                      border: 0,
                      filter: 'grayscale(80%) contrast(90%) brightness(70%)'
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Autogarage Willy - Ubicación"
                    className="hover:grayscale-0 hover:contrast-100 hover:brightness-100 transition-all duration-700"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-noir/90 backdrop-blur-sm px-5 py-4 flex items-center gap-4 border-t border-gold/10">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-display text-cream tracking-wider text-xs">AUTOGARAGE WILLY</p>
                    <p className="font-body text-cream/40 text-[11px]">Av. Base Aérea 725, Nuevo México, 45138 Zapopan, Jal.</p>
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
