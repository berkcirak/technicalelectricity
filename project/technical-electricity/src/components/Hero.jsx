import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <h1>Profesyonel Elektrik Hizmetleri</h1>
        <p>
          Güvenilir, kaliteli ve hızlı elektrik çözümleri ile evinizi ve işyerinizi 
          aydınlatıyoruz..
        </p>
        <a href="#contact" className="cta-button">
          Hemen İletişime Geç
        </a>
        
        <div className="hero-features">
          <div className="hero-feature">
            <Phone size={24} />
            <span>09.00 - 23.00</span>
          </div>
          <div className="hero-feature">
            <MapPin size={24} />
            <span>İstanbul</span>
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