import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <h1>Profesyonel Elektrik Hizmetleri</h1>
        <p>
          Güvenilir, kaliteli ve hızlı elektrik çözümleri ile evinizi ve işyerinizi 
          aydınlatıyoruz. 7/24 acil müdahale hizmeti.
        </p>
        <a href="#contact" className="cta-button">
          Hemen İletişime Geç
        </a>
        
        <div className="hero-features">
          <div className="hero-feature">
            <Phone size={24} />
            <span>7/24 Acil Müdahale</span>
          </div>
          <div className="hero-feature">
            <MapPin size={24} />
            <span>Tüm İlçelerde Hizmet</span>
          </div>
          <div className="hero-feature">
            <Clock size={24} />
            <span>Hızlı Çözüm</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;