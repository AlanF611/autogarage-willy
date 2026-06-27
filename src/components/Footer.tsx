import { Link } from 'react-router-dom';
import { Phone, Instagram, Facebook, Mail, MapPin } from 'lucide-react';

const serviceLinks = [
  'Detallado Cerámico',
  'PPF & Restauraciones',
  'Tapicería Premium',
  'Pintura & Repros Tuning',
  'Escaneos 3D',
  'Mecatrónica',
  'Audio Car SQ',
  'Fabricación CNC',
  'GPS & Alarmas',
];

export default function Footer() {
  return (
    <footer className="bg-noir border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            {/* LOGO */}
            <Link to="/" className="inline-block mb-4">
              <img
                src="/img/logo.png"
                alt="Autogarage Willy"
                className="h-20 w-auto"
              />
            </Link>
            <p className="font-body text-cream/40 text-sm leading-relaxed">
              Centro de detalle automotriz de alto nivel. Donde la artesanía y la
              tecnología convergen para crear experiencias extraordinarias.
            </p>
          </div>

          <div>
            <h4 className="font-display text-cream tracking-wider mb-4 text-lg">
              SERVICIOS
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link
                    to="/servicios"
                    className="font-body text-cream/40 text-sm hover:text-gold transition-colors duration-200"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-cream tracking-wider mb-4 text-lg">
              NAVEGACIÓN
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Inicio', to: '/' },
                { label: 'Servicios', to: '/servicios' },
                { label: 'Galería', to: '/galeria' },
                { label: 'Contacto', to: '/contacto' },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="font-body text-cream/40 text-sm hover:text-gold transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-cream tracking-wider mb-4 text-lg">
              CONTACTO
            </h4>
            <ul className="space-y-3 font-body text-cream/40 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-gold shrink-0" />
                <a
                  href="tel:+523322540962"
                  className="hover:text-gold transition-colors duration-200"
                >
                  +52 33 2254 0962
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-gold shrink-0" />
                <a
                  href="mailto:contacto@detalladospremium.com"
                  className="hover:text-gold transition-colors duration-200"
                >
                  contacto@detalladospremium.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
                <span>
                  Av. Base Aérea 725, Nuevo México
                  <br />
                  45138 Zapopan, Jal.
                </span>
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="text-cream/40 hover:text-gold transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-cream/40 hover:text-gold transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-cream/40 hover:text-gold transition-colors duration-200"
                aria-label="TikTok"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.16V11.7a4.83 4.83 0 01-3.77-1.34V6.69h3.77z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-steel/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-cream/20 text-xs tracking-wider">
            AUTOGARAGE WILLY &copy; {new Date().getFullYear()}. Todos los
            derechos reservados.
          </p>
          <p className="font-body text-cream/20 text-xs tracking-wider">
            Diseñado con obsesión por el detalle.
          </p>
        </div>
      </div>
    </footer>
  );
}
