import React from 'react';
import { 
  Home, 
  Wrench, 
  Lightbulb, 
  Shield, 
  Zap, 
  Settings 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home size={40} />,
      title: "Ev Elektrik Tesisatı",
      description: "Yeni ev elektrik tesisatı, tamir ve bakım hizmetleri. Güvenli ve modern çözümler."
    },
    {
      icon: <Wrench size={40} />,
      title: "Elektrik Arıza Tamiri",
      description: "Tüm elektrik arızalarında hızlı ve güvenilir tamir hizmeti. 7/24 acil müdahale."
    },
    {
      icon: <Lightbulb size={40} />,
      title: "Aydınlatma Sistemleri",
      description: "LED aydınlatma, spot ışık, dekoratif aydınlatma sistemleri kurulumu."
    },
    {
      icon: <Shield size={40} />,
      title: "Elektrik Güvenlik",
      description: "Topraklama, parafudur, güvenlik sistemleri kurulumu ve bakımı."
    },
    {
      icon: <Zap size={40} />,
      title: "Elektrik Panosu",
      description: "Elektrik panosu kurulumu, bakımı ve modernizasyonu hizmetleri."
    },
    {
      icon: <Settings size={40} />,
      title: "Elektrik Bakım",
      description: "Düzenli elektrik bakım hizmetleri ile güvenli ve verimli sistemler."
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
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;