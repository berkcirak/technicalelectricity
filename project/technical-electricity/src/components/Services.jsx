import React from 'react';
import { 
  Wrench, 
  Lightbulb, 
  Satellite, 
  Camera, 
  RefreshCw, 
  Shield 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Arıza Tespiti & Onarımı",
      description: "Elektrik arızalarının hızlı tespiti ve profesyonel onarımı. 7/24 acil müdahale hizmeti.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      alt: "Elektrik arıza tespiti ve onarımı hizmeti - İstanbul elektrikçi - 7/24 acil müdahale"
    },
    {
      title: "Avize & Aydınlatma Montajı",
      description: "Modern avize montajı, LED aydınlatma sistemleri ve dekoratif ışık kurulumu.",
      image: "images/services/aydinlatma.jpeg",
      alt: "Avize ve aydınlatma montajı hizmeti - LED aydınlatma sistemleri kurulumu - İstanbul"
    },
    {
      title: "Merkezi Uydu Sistemleri",
      description: "Uydu anten kurulumu, merkezi uydu sistemleri ve sinyal güçlendirme hizmetleri.",
      image: "images/services/merkeziuydusistemleri.jpg",
      alt: "Merkezi uydu sistemleri kurulumu - Uydu anten montajı - İstanbul uydu sistemleri"
    },
    {
      title: "Diafon & Kamera Sistemleri",
      description: "Güvenlik kameraları, diafon sistemleri ve akıllı güvenlik çözümleri kurulumu.",
      image: "images/services/diafon.jpeg",
      alt: "Diafon ve kamera sistemleri kurulumu - Güvenlik kamerası montajı - İstanbul güvenlik sistemleri"
    },
    {
      title: "Tesisat Yenileme",
      description: "Eski elektrik tesisatlarının modernizasyonu ve güvenlik standartlarına uygun yenileme.",
      image: "images/services/tesisatyenileme.jpg",
      alt: "Elektrik tesisatı yenileme hizmeti - Tesisat modernizasyonu - İstanbul elektrik tesisatı"
    },
    {
      title: "Hızlı Güvenli ve Uygun Fiyatlı Hizmet",
      description: "Kaliteli işçilik, güvenli çalışma ve uygun fiyat garantisi ile profesyonel hizmet.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      alt: "Profesyonel elektrik hizmetleri - Güvenli ve uygun fiyatlı elektrik çözümleri - İstanbul"
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2 className="section-title">Hizmetlerimiz</h2>
        <p className="section-subtitle">
          Profesyonel elektrik hizmetleri ile ihtiyaçlarınıza en uygun çözümleri sunuyoruz
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image">
                <img 
                  src={service.image} 
                  alt={service.alt}
                  loading="lazy"
                />
                <div className="service-overlay">
                 
                </div>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;