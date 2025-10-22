import React from 'react';
import { Wrench } from 'lucide-react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2>Hakkımızda</h2>
          <p>
            15 yıllık deneyimimizle elektrik sektöründe güvenilir hizmet sunuyoruz. 
            Müşteri memnuniyeti odaklı yaklaşımımız ve kaliteli işçiliğimizle 
            binlerce projeyi başarıyla tamamladık.
          </p>
          <p>
            Lisanslı elektrikçi ekibimiz, modern teknoloji ve güvenlik standartlarına 
            uygun çalışarak evinizin ve işyerinizin elektrik ihtiyaçlarını karşılıyor.
          </p>
          
          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Tamamlanan Proje</span>
            </div>
            <div className="stat">
              <span className="stat-number">15</span>
              <span className="stat-label">Yıl Deneyim</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Acil Hizmet</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Müşteri Memnuniyeti</span>
            </div>
          </div>
        </div>
        
        <div className="about-image">
          <Wrench size={120} />
        </div>
      </div>
    </section>
  );
};

export default About;