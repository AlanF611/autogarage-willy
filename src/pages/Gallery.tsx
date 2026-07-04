import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import PageHero from '../components/PageHero';

// Todas las categorías
const categories = [
  'Todos',
  'Audio',
  'Exóticos',
  'Cerámica',
  'GPS',
  'Instalación',
  'Kitt',
  'Laminado',
  'LED',
  'Mecatrónica',
  'Razer',
  'Restauración',
  'Wrap',
];

// Mapeo de carpetas a categorías
const folderToCategory: Record<string, string> = {
  'audio premium': 'Audio',
  'exoticos': 'Exóticos',
  'exoticos detallado ceramico': 'Cerámica',
  'GPS Y DETALLADO': 'GPS',
  'instalacion audio JL': 'Instalación',
  'instalacion audio SQ': 'Instalación',
  'Kitt auto': 'Kitt',
  'laminado y pintura premium': 'Laminado',
  'LED': 'LED',
  'mecatronica': 'Mecatrónica',
  'Razer audio barras leds auroras': 'Razer',
  'restauración y tapicería': 'Restauración',
  'wrap': 'Wrap',
  
};

// 📝 CONFIGURACIÓN - PON EL NÚMERO MÁXIMO DE IMÁGENES QUE PUEDE TENER CADA CARPETA
const folderConfig: Record<string, number> = {
  'audio premium': 20,
  'exoticos': 20,
  'exoticos detallado ceramico': 20,
  'GPS Y DETALLADO': 20,
  'instalacion audio JL': 20,
  'instalacion audio SQ': 20,
  'Kitt auto': 20,
  'laminado y pintura premium': 20,
  'LED': 20,
  'mecatronica': 20,
  'Razer audio barras leds auroras': 20,
  'restauración y tapicería': 50,
  'wrap': 20,
  'YATE': 1,
  'tapiceria': 9,
  'repro tunning': 3,
  'PPF': 2,
  'POLARIZADO': 3,
  'CNC': 2,
  'AIRBAG': 3,
};

// Función para verificar si una imagen existe usando Image object
const imageExists = (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
};

// Función para obtener imágenes de una carpeta verificando una por una
const getImagesFromFolder = async (folderName: string, maxCount: number): Promise<string[]> => {
  const images: string[] = [];
  
  for (let i = 1; i <= maxCount; i++) {
    const url = `/img/${folderName}/${i}.jpeg`;
    const exists = await imageExists(url);
    
    if (exists) {
      images.push(url);
    } else {
      const urlJpg = `/img/${folderName}/${i}.jpg`;
      const existsJpg = await imageExists(urlJpg);
      if (existsJpg) {
        images.push(urlJpg);
      } else {
        break;
      }
    }
  }
  
  return images;
};

export default function Gallery() {
  const [active, setActive] = useState('Todos');
  const [selected, setSelected] = useState<any | null>(null);
  const [allImages, setAllImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [uniqueFolders, setUniqueFolders] = useState<string[]>([]);

  // Cargar imágenes al montar el componente
  useState(() => {
    const loadAllImages = async () => {
      setLoading(true);
      const allImagesArray: any[] = [];
      let globalNumber = 1;
      const foldersWithImages: string[] = [];

      for (const [folderName, maxCount] of Object.entries(folderConfig)) {
        const folderImages = await getImagesFromFolder(folderName, maxCount);
        
        if (folderImages.length > 0) {
          foldersWithImages.push(folderName);
          const category = folderToCategory[folderName] || 'Otros';
          
          folderImages.forEach((url, imgIndex) => {
            allImagesArray.push({
              url,
              folderName,
              category,
              title: folderName,
              number: globalNumber,
              folderNumber: imgIndex + 1,
              totalInFolder: folderImages.length,
            });
            globalNumber++;
          });
        }
      }

      setAllImages(allImagesArray);
      setUniqueFolders(foldersWithImages);
      setLoading(false);
    };

    loadAllImages();
  });

  const filtered = active === 'Todos' 
    ? allImages 
    : allImages.filter((img) => img.category === active);

  // Mostrar loading
  if (loading) {
    return (
      <>
        <PageHero
          label="Portafolio"
          title="RESULTADOS QUE HABLAN"
          subtitle="Cada imagen es testimonio de un proceso ejecutado sin concesiones. Observa la diferencia que marca la obsesión por el detalle."
          bgImage="/img/exoticos detallado ceramico/4.jpeg"
        />
        <section className="py-24 md:py-32 bg-noir">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gold border-t-transparent"></div>
            <p className="font-body text-cream/60 mt-4">Cargando imágenes...</p>
          </div>
        </section>
      </>
    );
  }

  // Si no hay imágenes
  if (allImages.length === 0) {
    return (
      <>
        <PageHero
          label="Portafolio"
          title="RESULTADOS QUE HABLAN"
          subtitle="Cada imagen es testimonio de un proceso ejecutado sin concesiones. Observa la diferencia que marca la obsesión por el detalle."
          bgImage="/img/exoticos detallado ceramico/4.jpeg"
        />
        <section className="py-24 md:py-32 bg-noir">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="font-body text-cream/60">
              No se encontraron imágenes en las carpetas.
            </p>
            <p className="font-body text-cream/40 text-sm mt-2">
              Verifica que las imágenes estén en: <span className="text-gold font-mono">public/img/[nombre-carpeta]/1.jpeg</span>
            </p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        label="Portafolio"
        title="RESULTADOS QUE HABLAN"
        subtitle="Cada imagen es testimonio de un proceso ejecutado sin concesiones. Observa la diferencia que marca la obsesión por el detalle."
        bgImage="/img/exoticos detallado ceramico/4.jpeg"
      />

      <section className="py-24 md:py-32 bg-noir">
        <div className="max-w-7xl mx-auto px-6">
          {/* Contador de imágenes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <p className="font-body text-cream/50 text-sm tracking-wider">
              {allImages.length} imágenes • {uniqueFolders.length} carpetas
            </p>
          </motion.div>

          {/* FILTERS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-3 mb-12 justify-center"
          >
            {categories.map((cat) => {
              const hasImages = allImages.some(img => img.category === cat);
              if (cat !== 'Todos' && !hasImages) return null;
              
              return (
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
              );
            })}
          </motion.div>

          {/* GRID */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((img) => (
                <motion.div
                  key={`${img.folderName}-${img.folderNumber}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative cursor-pointer overflow-hidden bg-charcoal"
                  onClick={() => setSelected(img)}
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"%3E%3Crect width="400" height="400" fill="%23333333"/%3E%3Ctext x="200" y="200" font-family="Arial" font-size="20" fill="%23666666" text-anchor="middle" dy=".3em"%3EImagen no disponible%3C/text%3E%3C/svg%3E';
                    }}
                  />
                  
                  <div className="absolute top-3 left-3 bg-noir/80 backdrop-blur-sm px-3 py-1 rounded border border-gold/30">
                    <span className="font-display text-gold text-sm tracking-wider">
                      #{img.number}
                    </span>
                  </div>
                  
                  <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/60 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn size={32} className="text-gold" />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-noir/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-display text-gold text-sm tracking-wider mb-1">
                      {img.category} • #{img.number}
                    </p>
                    <p className="font-body text-cream/80 text-xs">
                      {img.folderName} ({img.folderNumber}/{img.totalInFolder})
                    </p>
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
                src={selected.url}
                alt={selected.title}
                className="w-full max-h-[75vh] object-contain mx-auto"
              />
              <div className="mt-4 text-center">
                <p className="font-display text-gold tracking-wider">
                  {selected.category} • #{selected.number}
                </p>
                <p className="font-body text-cream/70 text-sm mt-1">
                  {selected.folderName} — {selected.folderNumber}/{selected.totalInFolder}
                </p>
                <p className="font-body text-cream/50 text-xs mt-1">
                  {selected.title}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
