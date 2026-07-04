import { motion, AnimatePresence } from 'framer-motion';
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
  X,
  ChevronLeft,
  ChevronDown,
  Check,
  Star,
  Clock,
  Award,
  Play,
  Pause,
  Maximize2,
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import PageHero from '../components/PageHero';

// Tipos
interface ServiceDetail {
  label: string;
  value: string;
}

interface Service {
  icon: any;
  title: string;
  slug: string;
  desc: string;
  features: string[];
  image: string;
  gallery: string[];
  video?: string;
  details?: ServiceDetail[];
  benefits?: string[];
  duration?: string;
  warranty?: string;
}

// Componente para manejar la imagen con fallback
const ServiceImage = ({ src, alt, Icon, className = "w-full h-full object-cover" }: { src: string; alt: string; Icon: any; className?: string }) => {
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
      className={className}
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
};

// Componente de video con overlay
const ServiceVideo = ({ src, poster, title }: { src: string; poster?: string; title: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const isYouTube = src.includes('youtube') || src.includes('youtu.be');
  const isVimeo = src.includes('vimeo');

  if (isYouTube || isVimeo) {
    const getEmbedUrl = () => {
      if (isYouTube) {
        const videoId = src.split('v=')[1]?.split('&')[0] || src.split('/').pop()?.split('?')[0];
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
      }
      if (isVimeo) {
        const videoId = src.split('/').pop();
        return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
      }
      return src;
    };

    return (
      <div className={`relative w-full ${isExpanded ? 'h-[80vh]' : 'h-full'} bg-noir transition-all duration-500`}>
        <iframe
          src={getEmbedUrl()}
          className="w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={title}
        />
        <button
          onClick={toggleExpand}
          className="absolute bottom-4 right-4 bg-noir/80 backdrop-blur-sm p-3 rounded-full hover:bg-gold/20 transition-colors border border-steel/30"
        >
          <Maximize2 size={20} className="text-cream" />
        </button>
      </div>
    );
  }

  return (
    <div className={`relative w-full ${isExpanded ? 'h-[80vh]' : 'h-full'} bg-noir transition-all duration-500`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover"
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      
      {!isPlaying && (
        <div className="absolute inset-0 bg-noir/40 flex items-center justify-center">
          <button
            onClick={togglePlay}
            className="w-20 h-20 bg-gold/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gold/30 transition-all border border-gold/30 group"
          >
            <Play size={32} className="text-gold ml-1 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      )}

      <div className="absolute bottom-4 right-4 flex gap-2">
        <button
          onClick={togglePlay}
          className="bg-noir/80 backdrop-blur-sm p-3 rounded-full hover:bg-gold/20 transition-colors border border-steel/30"
        >
          {isPlaying ? <Pause size={20} className="text-cream" /> : <Play size={20} className="text-cream" />}
        </button>
        <button
          onClick={toggleExpand}
          className="bg-noir/80 backdrop-blur-sm p-3 rounded-full hover:bg-gold/20 transition-colors border border-steel/30"
        >
          <Maximize2 size={20} className="text-cream" />
        </button>
      </div>
    </div>
  );
};

// Función para generar galería de imágenes (4 imágenes por servicio)
const generateGallery = (folder: string, count: number = 4): string[] => {
  const images: string[] = [];
  for (let i = 1; i <= count; i++) {
    images.push(`/img/${folder}/${i}.jpeg`);
  }
  return images;
};

// TODOS LOS 19 SERVICIOS COMPLETOS - Usando las carpetas de tus imágenes
const services: Service[] = [
  // 1. Body Shop
  {
    icon: Car,
    title: 'Body Shop',
    slug: 'body-shop',
    desc: 'Reparación estructural y estética de carrocería con estándares de fábrica.',
    features: ['Reparación de chasis', 'Soldadura de precisión', 'Pintura color-match', 'Enderezado en frío'],
    image: '/img/laminado y pintura premium/1.jpeg',
    gallery: generateGallery('laminado y pintura premium', 4),
    duration: '5-10 días',
    warranty: '2 años',
    details: [
      { label: 'Tecnología', value: 'Equipo de enderezado computarizado' },
      { label: 'Pintura', value: 'Sistema de color-match por computadora' },
    ],
    benefits: ['Garantía de por vida en reparaciones', 'Uso de piezas OEM'],
  },
  // 2. Restauración de Vehículos
  {
    icon: Sparkles,
    title: 'Restauración de Vehículos',
    slug: 'restauracion',
    desc: 'Restauraciones completas de vehículos clásicos y modernos con estándares de concurso.',
    features: ['Restauración integral', 'Piezas OEM y custom', 'Documentación del proceso', 'Acabados de concurso'],
    image: '/img/clasicos/1.jpeg',
    gallery: generateGallery('clasicos', 4),
    duration: '3-6 meses',
    warranty: '3 años',
    details: [
      { label: 'Proceso', value: 'Desmontaje completo + restauración' },
      { label: 'Documentación', value: 'Libro de restauración incluido' },
    ],
    benefits: ['Certificado de autenticidad', 'Evaluación de valor histórico'],
  },
  // 3. Laminado y Pintura Premium
  {
    icon: Palette,
    title: 'Laminado y Pintura Premium',
    slug: 'laminado-pintura',
    desc: 'Aplicación profesional de laminados y pintura de alto rendimiento.',
    features: ['Laminado líquido', 'Pintura poliuretano', 'Acabados especiales', 'Protección UV'],
    image: '/img/laminado y pintura premium/1.jpeg',
    gallery: generateGallery('laminado y pintura premium', 4),
    duration: '3-5 días',
    warranty: '5 años',
    details: [
      { label: 'Acabados', value: 'Mate, Satinado, Brillante, Metalizado' },
      { label: 'Tecnología', value: 'Cabina de pintura con filtración HEPA' },
    ],
    benefits: ['Protección contra rayos UV', 'Resistencia a químicos'],
  },
  // 4. Detallado Cerámico
  {
    icon: Shield,
    title: 'Detallado Cerámico',
    slug: 'ceramico',
    desc: 'Protección cerámica nanotecnológica que resguarda la pintura con brillo y durabilidad excepcionales.',
    features: ['Recubrimiento 9H', 'Protección UV', 'Efecto hidrofóbico', 'Brillo espejo'],
    image: '/img/exoticos detallado ceramico/1.jpeg',
    gallery: generateGallery('exoticos detallado ceramico', 4),
    duration: '1-2 días',
    warranty: '5 años',
    details: [
      { label: 'Dureza', value: '9H (máxima)' },
      { label: 'Hidrofóbico', value: 'Ángulo de contacto >110°' },
    ],
    benefits: ['Protección contra ácidos', 'Auto-limpieza', 'Brillo profundo'],
  },
  // 5. PPF
  {
    icon: Shield,
    title: 'PPF',
    slug: 'ppf',
    desc: 'Paint Protection Film premium que blinda cada superficie contra impactos y contaminación.',
    features: ['PPF SunTek/XPEL', 'Auto-regeneración', 'Protección impacto', 'Instalación certificada'],
    image: '/img/PPF/1.jpeg',
    gallery: generateGallery('PPF', 2),
    duration: '2-4 días',
    warranty: '10 años',
    details: [
      { label: 'Marca', value: 'SunTek / XPEL' },
      { label: 'Auto-regeneración', value: 'Repara rayones con calor' },
    ],
    benefits: ['Protección contra piedras', 'Resistencia química'],
  },
  // 6. WRAP
  {
    icon: Palette,
    title: 'WRAP',
    slug: 'wrap',
    desc: 'Transformación total de color y acabados con vinilos premium de las mejores marcas.',
    features: ['Vinilos 3M/Avery', 'Acabados mate/gloss', 'Diseños personalizados', 'Remoción segura'],
    image: '/img/wrap/1.jpeg',
    gallery: generateGallery('wrap', 4),
    duration: '2-5 días',
    warranty: '3 años',
    details: [
      { label: 'Marcas', value: '3M, Avery Dennison, Hexis' },
      { label: 'Acabados', value: 'Mate, Brillante, Satinado, Metalizado' },
    ],
    benefits: ['Protección temporal', 'Cambio de color sin pintura'],
  },
  // 7. Audio Car SQ Premium
  {
    icon: Volume2,
    title: 'Audio Car SQ Premium',
    slug: 'audio-sq',
    desc: 'Sound Quality de competencia. Instalaciones premium de arquitectura sonora con equipos de alta fidelidad.',
    features: ['Damping completo', 'DSP 32-bit', 'Instalación stealth', 'Tuning profesional'],
    image: '/img/instalacion audio SQ/1.jpeg',
    gallery: generateGallery('instalacion audio SQ', 4),
    duration: '3-7 días',
    warranty: '2 años',
    details: [
      { label: 'Procesamiento', value: 'DSP 32-bit con 10 canales' },
      { label: 'Aislamiento', value: 'Damping acústico 100% coverage' },
    ],
    benefits: ['Calidad de estudio', 'Instalación invisible'],
  },
  // 8. Diseño y Fabricación CNC
  {
    icon: Wrench,
    title: 'Diseño y Fabricación CNC',
    slug: 'cnc',
    desc: 'Piezas personalizadas mecanizadas con precisión industrial. Paneles, cajones y componentes únicos.',
    features: ['Mecanizado 5 ejes', 'Aluminio/acero', 'Anodizado', 'Prototipado rápido'],
    image: '/img/mecatronica/1.jpeg',
    gallery: generateGallery('mecatronica', 4),
    duration: '7-14 días',
    warranty: '2 años',
    details: [
      { label: 'Ejes', value: '5 ejes simultáneos' },
      { label: 'Materiales', value: 'Aluminio, Acero, Plásticos de ingeniería' },
    ],
    benefits: ['Piezas únicas', 'Precisión milimétrica'],
  },
  // 9. Tapicería Automotriz
  {
    icon: Scissors,
    title: 'Tapicería Automotriz',
    slug: 'tapiceria',
    desc: 'Interiores a medida con materiales de lujo. Cuero, Alcantara y textiles exclusivos.',
    features: ['Cuero Nappa', 'Alcantara importada', 'Costura decorativa', 'Aislamiento acústico'],
    image: '/img/tapiceria/1.jpeg',
    gallery: generateGallery('tapiceria', 10),
    duration: '5-15 días',
    warranty: '3 años',
    details: [
      { label: 'Materiales', value: 'Cuero Nappa, Alcantara, Microfibra' },
      { label: 'Personalización', value: 'Diseño de costuras y patrones' },
    ],
    benefits: ['Confort premium', 'Aislamiento térmico'],
  },
  // 10. Barcos
  {
    icon: Ship,
    title: 'Barcos',
    slug: 'barcos',
    desc: 'Servicios especializados para embarcaciones. Protección, restauración y personalización náutica.',
    features: ['Protección marina', 'Restauración gelcoat', 'Tapicería náutica', 'Electrónica marina'],
    image: '/img/YATE/1.png',
    gallery: generateGallery('YATE', 1),
    duration: 'Varía según proyecto',
    warranty: '2 años',
    details: [
      { label: 'Protección', value: 'Anticorrosión marina' },
      { label: 'Materiales', value: 'Resistentes a salinidad' },
    ],
    benefits: ['Protección contra salinidad', 'Acabados náuticos'],
  },
  // 11. Alarmas y GPS
  {
    icon: MapPin,
    title: 'Alarmas y GPS',
    slug: 'gps',
    desc: 'Seguridad vehicular inteligente y rastreo en tiempo real con control remoto.',
    features: ['Rastreo GPS', 'Geocercas', 'Inmovilizador', 'App monitoreo 24/7'],
    image: '/img/GPS Y DETALLADO/1.jpeg',
    gallery: generateGallery('GPS Y DETALLADO', 4),
    duration: '1 día',
    warranty: '2 años',
    details: [
      { label: 'Tecnología', value: 'GPS dual-band + GLONASS' },
      { label: 'App', value: 'Monitoreo en tiempo real' },
    ],
    benefits: ['Seguridad 24/7', 'Ahorro en seguros'],
  },
  // 12. Repros Tuning
  {
    icon: Car,
    title: 'Repros Tuning',
    slug: 'repros',
    desc: 'Reproducciones de alta fidelidad y optimización de performance para vehículos tuning.',
    features: ['Réplicas exactas', 'Optimización ECU', 'Performance tuning', 'Acabados OEM+'],
    image: '/img/mecatronica/1.jpeg',
    gallery: generateGallery('mecatronica', 4),
    duration: '2-5 días',
    warranty: '1 año',
    details: [
      { label: 'Performance', value: '+20-30 HP dependiendo del modelo' },
      { label: 'ECU', value: 'Programación personalizada' },
    ],
    benefits: ['Mayor potencia', 'Mejor respuesta'],
  },
  // 13. Audio Marino YATES
  {
    icon: Volume2,
    title: 'Audio Marino YATES',
    slug: 'audio-marino',
    desc: 'Sistemas de audio de alta fidelidad diseñados específicamente para el ambiente marino.',
    features: ['Equipos marinos', 'Resistencia salina', 'Instalación sellada', 'Tuning acuático'],
    image: '/img/YATE/1.png',
    gallery: generateGallery('YATE', 1),
    duration: '3-7 días',
    warranty: '2 años',
    details: [
      { label: 'Equipos', value: 'Específicos para ambiente marino' },
      { label: 'Protección', value: 'Sellado IP67' },
    ],
    benefits: ['Audio premium en alta mar', 'Resistencia a salinidad'],
  },
  // 14. UTVs y RAZER
  {
    icon: Car,
    title: 'UTVs y RAZER',
    slug: 'utvs',
    desc: 'Personalización y mejoras para vehículos off-road. Rendimiento y estilo todoterreno.',
    features: ['Protección roll-cage', 'Iluminación LED', 'Audio outdoor', 'Performance'],
    image: '/img/Razer audio barras leds auroras/1.jpeg',
    gallery: generateGallery('Razer audio barras leds auroras', 4),
    duration: '5-10 días',
    warranty: '2 años',
    details: [
      { label: 'Off-road', value: 'Preparación para terrenos extremos' },
      { label: 'Protección', value: 'Roll-cage y protecciones' },
    ],
    benefits: ['Rendimiento off-road', 'Protección extrema'],
  },
  // 15. Reparación de Air Bag
  {
    icon: AlertTriangle,
    title: 'Reparación de Air Bag',
    slug: 'airbag',
    desc: 'Diagnóstico, reparación y restauración de sistemas de airbag con componentes OEM.',
    features: ['Diagnóstico SRS', 'Reparación módulos', 'Reset de colisión', 'Componentes OEM'],
    image: '/img/AIRBAG/3.jpeg',
    gallery: generateGallery('AIRBAG', 3),
    duration: '1-2 días',
    warranty: '2 años',
    details: [
      { label: 'Diagnóstico', value: 'Sistema SRS completo' },
      { label: 'Componentes', value: 'OEM originales' },
    ],
    benefits: ['Seguridad garantizada', 'Reset de módulos'],
  },
  // 16. Luces LED
  {
    icon: Lightbulb,
    title: 'Luces LED',
    slug: 'led',
    desc: 'Instalación y upgrade de sistemas de iluminación LED de alto rendimiento.',
    features: ['LED premium', 'Retrofit OEM', 'DRL personalizados', 'Iluminación interior'],
    image: '/img/LED/1.jpeg',
    gallery: generateGallery('LED', 4),
    duration: '1 día',
    warranty: '2 años',
    details: [
      { label: 'Tecnología', value: 'LED de alta eficiencia' },
      { label: 'DRL', value: 'Diseños personalizados' },
    ],
    benefits: ['Visibilidad mejorada', 'Estética moderna'],
  },
  // 17. Escaneo y Mecatrónica
  {
    icon: Cpu,
    title: 'Escaneo y Mecatrónica',
    slug: 'mecatronica',
    desc: 'Diagnóstico y electrónica automotriz avanzada con tecnología de punta multi-marca.',
    features: ['Diagnóstico OEM', 'Programación ECU', 'Codificación módulos', 'Recalibración'],
    image: '/img/mecatronica/1.jpeg',
    gallery: generateGallery('mecatronica', 4),
    duration: '1-3 días',
    warranty: '1 año',
    details: [
      { label: 'Equipos', value: 'Diagnóstico multi-marca' },
      { label: 'Programación', value: 'ECU y módulos' },
    ],
    benefits: ['Diagnóstico preciso', 'Reparación electrónica'],
  },
  // 18. Llaves con Chip Automotriz
  {
    icon: Key,
    title: 'Llaves con Chip Automotriz',
    slug: 'llaves',
    desc: 'Programación y duplicación de llaves con chip para todas las marcas y modelos.',
    features: ['Programación OEM', 'Duplicación chip', 'Emergencia in-situ', 'Todas las marcas'],
    image: '/img/mecatronica/3.jpeg',
    gallery: generateGallery('mecatronica', 4),
    duration: '1-2 horas',
    warranty: '1 año',
    details: [
      { label: 'Programación', value: 'OEM para todas las marcas' },
      { label: 'Chip', value: 'Duplicación de alta precisión' },
    ],
    benefits: ['Respuesta rápida', 'Servicio in-situ'],
  },
  // 19. Polarizados Cerámicos
  {
    icon: Sun,
    title: 'Polarizados Cerámicos',
    slug: 'polarizados',
    desc: 'Venta e instalación de polarizados cerámicos premium con máxima protección térmica.',
    features: ['Cerámico IR', 'Protección UV 99%', 'Rechazo térmico', 'Garantía color'],
    image: '/img/polarizado/1.jpeg',
    gallery: generateGallery('polarizado', 4),
    duration: '1 día',
    warranty: '5 años',
    details: [
      { label: 'Protección', value: 'UV 99%, IR 95%' },
      { label: 'Garantía', value: '5 años sin decoloración' },
    ],
    benefits: ['Ahorro de combustible', 'Protección interior'],
  },
];

// Componente del modal de servicio detallado
const ServiceModal = ({ service, onClose }: { service: Service; onClose: () => void }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'fotos' | 'video'>('fotos');
  const Icon = service.icon;
  const images = service.gallery || [service.image];
  const hasVideo = !!service.video;

  useEffect(() => {
    setActiveTab('fotos');
    setCurrentImageIndex(0);
  }, [service]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-noir/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="min-h-screen py-8 px-4 md:py-12"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-6xl mx-auto bg-charcoal border border-steel/20 rounded-2xl overflow-hidden">
          {hasVideo && (
            <div className="flex border-b border-steel/20 bg-noir/30">
              <button
                onClick={() => setActiveTab('fotos')}
                className={`flex-1 py-3 text-sm font-display tracking-wider transition-all ${
                  activeTab === 'fotos'
                    ? 'text-gold border-b-2 border-gold'
                    : 'text-cream/40 hover:text-cream/60'
                }`}
              >
                FOTOS
              </button>
              <button
                onClick={() => setActiveTab('video')}
                className={`flex-1 py-3 text-sm font-display tracking-wider transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'video'
                    ? 'text-gold border-b-2 border-gold'
                    : 'text-cream/40 hover:text-cream/60'
                }`}
              >
                <Play size={14} />
                VIDEO
              </button>
            </div>
          )}

          <div className="relative h-[400px] md:h-[500px] bg-noir">
            {activeTab === 'fotos' ? (
              <>
                <ServiceImage 
                  src={images[currentImageIndex]} 
                  alt={service.title} 
                  Icon={Icon}
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
                
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-noir/80 backdrop-blur-sm p-3 rounded-full hover:bg-gold/20 transition-colors border border-steel/30"
                    >
                      <ChevronLeft size={24} className="text-cream" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-noir/80 backdrop-blur-sm p-3 rounded-full hover:bg-gold/20 transition-colors border border-steel/30"
                    >
                      <ChevronRight size={24} className="text-cream" />
                    </button>
                  </>
                )}
                
                {images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-12 h-12 border-2 transition-all ${
                          idx === currentImageIndex 
                            ? 'border-gold' 
                            : 'border-transparent opacity-50 hover:opacity-100'
                        }`}
                      >
                        <ServiceImage src={img} alt={`${service.title} ${idx + 1}`} Icon={Icon} />
                      </button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              hasVideo && <ServiceVideo src={service.video!} poster={service.image} title={service.title} />
            )}
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-noir/80 backdrop-blur-sm p-3 rounded-full hover:bg-gold/20 transition-colors border border-steel/30 z-10"
            >
              <X size={24} className="text-cream" />
            </button>
          </div>

          <div className="p-8 md:p-12">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Icon size={28} className="text-gold" />
                  <h2 className="font-display text-3xl md:text-4xl text-cream tracking-wide">
                    {service.title}
                  </h2>
                </div>
                <p className="font-body text-cream/60 text-lg max-w-2xl">
                  {service.desc}
                </p>
              </div>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 bg-gold text-noir font-display text-sm tracking-wider px-6 py-3 hover:bg-gold-dark transition-colors rounded-lg shrink-0 ml-4"
              >
                COTIZAR
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h4 className="font-display text-cream text-lg tracking-wide mb-4">Características</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-center gap-3 bg-noir/30 p-3 rounded-lg border border-steel/10">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                        <span className="font-body text-cream/70 text-sm">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {service.details && (
                  <div>
                    <h4 className="font-display text-cream text-lg tracking-wide mb-4">Especificaciones</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.details.map((d) => (
                        <div key={d.label} className="bg-noir/20 p-4 rounded-lg border border-steel/10">
                          <p className="font-body text-cream/40 text-xs uppercase tracking-wider">{d.label}</p>
                          <p className="font-body text-cream/80 text-sm mt-1">{d.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {service.benefits && (
                  <div>
                    <h4 className="font-display text-cream text-lg tracking-wide mb-4">Beneficios</h4>
                    <div className="space-y-2">
                      {service.benefits.map((b) => (
                        <div key={b} className="flex items-center gap-3">
                          <Check size={16} className="text-gold" />
                          <span className="font-body text-cream/60 text-sm">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div className="bg-noir/20 p-5 rounded-lg border border-steel/10">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock size={18} className="text-gold" />
                    <h5 className="font-display text-cream text-sm tracking-wide">Duración</h5>
                  </div>
                  <p className="font-body text-cream/60 text-sm">{service.duration || 'Varía según proyecto'}</p>
                </div>

                <div className="bg-noir/20 p-5 rounded-lg border border-steel/10">
                  <div className="flex items-center gap-3 mb-3">
                    <Award size={18} className="text-gold" />
                    <h5 className="font-display text-cream text-sm tracking-wide">Garantía</h5>
                  </div>
                  <p className="font-body text-cream/60 text-sm">{service.warranty || 'Consultar'}</p>
                </div>

                <Link
                  to="/contacto"
                  className="block w-full bg-gold/10 border border-gold/20 text-gold text-center font-display text-sm tracking-wider px-6 py-4 hover:bg-gold/20 transition-colors rounded-lg"
                >
                  SOLICITAR PRESUPUESTO
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Animaciones
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.7, 
      delay: i * 0.1, 
      ease: [0.25, 0.1, 0.25, 1] as any
    },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <>
      <PageHero
        label="Nuestros Servicios"
        title="MAESTRÍA TÉCNICA"
        subtitle="Cada servicio es ejecutado con precisión artesanal y tecnología de vanguardia. No hay atajos cuando la excelencia es el estándar."
        bgImage="/img/servicios.png"
      />

      <section className="py-24 md:py-32 bg-noir">
        <div className="max-w-7xl mx-auto px-6">
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
                  onClick={() => setSelectedService(s)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <ServiceImage src={s.image} alt={s.title} Icon={Icon} />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
                    
                    <div className="absolute top-3 left-3 bg-noir/80 backdrop-blur-sm border border-gold/20 p-2">
                      <Icon size={20} className="text-gold" />
                    </div>
                    
                    <div className="absolute top-3 right-3">
                      <span className="font-display text-cream/20 text-lg">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {s.video && (
                      <div className="absolute bottom-3 left-3 bg-noir/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gold/20 flex items-center gap-1.5">
                        <Play size={12} className="text-gold" />
                        <span className="font-body text-cream/60 text-xs">Video</span>
                      </div>
                    )}

                    {s.gallery && s.gallery.length > 1 && (
                      <div className="absolute bottom-3 right-3 bg-noir/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gold/20 flex items-center gap-1.5">
                        <Camera size={12} className="text-gold" />
                        <span className="font-body text-cream/60 text-xs">
                          {s.gallery.length} fotos
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 relative">
                    <div className="flex items-start justify-between">
                      <h3 className="font-display text-xl text-cream tracking-wide mb-2 group-hover:text-gold transition-colors duration-300">
                        {s.title}
                      </h3>
                      <ChevronRight size={16} className="text-gold/30 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                    </div>
                    
                    <p className="font-body text-cream/50 text-sm leading-relaxed mb-4 line-clamp-2">
                      {s.desc}
                    </p>
                    
                    <div className="flex items-center gap-3 text-cream/30 text-xs">
                      {s.duration && (
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {s.duration}
                        </span>
                      )}
                      {s.warranty && (
                        <>
                          <span className="w-px h-3 bg-steel/20" />
                          <span className="flex items-center gap-1">
                            <Award size={12} />
                            {s.warranty}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 transition-colors duration-300 pointer-events-none" />
                </motion.div>
              );
            })}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center font-body text-cream/30 text-sm mt-12"
          >
            Haz clic en cualquier servicio para ver más detalles y fotos
          </motion.p>
        </div>
      </section>

      <AnimatePresence>
        {selectedService && (
          <ServiceModal 
            service={selectedService} 
            onClose={() => setSelectedService(null)} 
          />
        )}
      </AnimatePresence>

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
