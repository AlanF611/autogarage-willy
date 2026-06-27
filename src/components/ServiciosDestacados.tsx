import { Link } from 'react-router-dom';

interface Servicio {
  titulo: string;
  descripcion: string;
  icono: string;
}

export default function ServiciosDestacados() {
  const serviciosPremium: Servicio[] = [
    {
      titulo: 'Restauración de Vehículos',
      descripcion: 'Restauraciones completas de autos clásicos y modernos con los más altos estándares de calidad.',
      icono: '🔧',
    },
    {
      titulo: 'Audio Car SQ Premium',
      descripcion: 'Sistemas de sonido de alta fidelidad SQ. Instalaciones profesionales con los mejores componentes.',
      icono: '🎵',
    },
    {
      titulo: 'Protección PPF',
      descripcion: 'Paint Protection Film de última generación. Protege la pintura contra rayones y contaminación.',
      icono: '🛡️',
    },
    {
      titulo: 'Tapicería Automotriz',
      descripcion: 'Tapicería personalizada en cuero, alcántara y materiales premium. Diseños exclusivos.',
      icono: '💺',
    },
    {
      titulo: 'Personalización Premium',
      descripcion: 'Especialistas en autos premium y exóticos. Modificaciones únicas con acabados de clase mundial.',
      icono: '✨',
    },
    {
      titulo: 'Detallado Cerámico',
      descripcion: 'Protección cerámica de alta duración. Acabado espejo y protección superior para tu vehículo.',
      icono: '💎',
    },
  ];

  return (
    <section className="py-24 bg-noir">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-gold mb-4">
            Servicios Premium
          </h2>
          <p className="text-cream/60 font-body text-lg max-w-2xl mx-auto">
            Especialistas en transformar vehículos premium y exóticos con los más altos estándares de calidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviciosPremium.map((servicio, index) => (
            <div
              key={index}
              className="group relative bg-noir/50 border border-steel/20 rounded-lg p-8 hover:border-gold/50 transition-all duration-500 hover:bg-gold/5"
            >
              <div className="text-5xl mb-6">{servicio.icono}</div>
              <h3 className="font-display text-2xl text-gold mb-3 group-hover:text-gold/90 transition-colors">
                {servicio.titulo}
              </h3>
              <p className="text-cream/60 font-body leading-relaxed">
                {servicio.descripcion}
              </p>
              <div className="mt-6 flex items-center text-gold/80 font-body text-sm">
                <span className="group-hover:underline">Conocer más</span>
                <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 bg-gold text-noir font-body font-semibold px-8 py-4 rounded-lg hover:bg-gold/90 transition-all duration-300 hover:scale-105"
          >
            Ver todos los servicios
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}