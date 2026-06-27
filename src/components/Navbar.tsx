// components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Galería', to: '/galeria' },
  { label: 'Contacto', to: '/contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Eliminamos la condición isHome, ahora funciona igual en todas las páginas
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#1A1A1E]/90 backdrop-blur-md border-b border-white/5 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <Link
          to="/"
          className="hover:opacity-80 transition-opacity duration-200 flex-shrink-0"
        >
          <img 
            src="/img/logo1.png" 
            alt="Detallados Premium" 
            className="h-16 md:h-20 w-auto"
            style={{
              filter: scrolled
                ? 'brightness(1) drop-shadow(0 1px 4px rgba(0,0,0,0.2))'
                : 'drop-shadow(0 2px 12px rgba(0,0,0,0.8))'
            }}
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`font-body text-sm tracking-wide transition-colors duration-200 ${
                location.pathname === l.to
                  ? 'text-gold'
                  : scrolled
                    ? 'text-[#E8E6E1]/70 hover:text-gold'
                    : 'text-white/90 hover:text-gold'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <button
          className={`md:hidden ${scrolled ? 'text-[#E8E6E1]/70' : 'text-white/90'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menú"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#1A1A1E]/95 backdrop-blur-md border-t border-white/5">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`font-body text-lg transition-colors duration-200 ${
                  location.pathname === l.to
                    ? 'text-gold'
                    : 'text-[#E8E6E1]/80 hover:text-gold'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}