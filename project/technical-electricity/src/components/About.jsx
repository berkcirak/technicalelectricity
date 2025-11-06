import React from 'react';
import { Wrench } from 'lucide-react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <article className="about-content">
          <h2>Hakkımızda</h2>
          <p>
            15 yıllık deneyimimizle elektrik sektöründe güvenilir hizmet sunuyoruz. 
            Müşteri memnuniyeti odaklı yaklaşımımız ve kaliteli işçiliğimizle 
            aldığımız projeleri başarıyla tamamladık.
          </p>
          <p>
            Teknik Elektrik olarak, ev sahiplerine ve işletmelere güvenilir ve kaliteli
            elektrik tesisatı hizmetleri sunmaktayız. Deneyimli ve uzman ekibimizle,
            her türlü elektrik tesisatı ihtiyacınızı karşılayabiliriz.
          </p>
          
          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">300+</span>
              <span className="stat-label">Tamamlanan Proje</span>
            </div>
            <div className="stat">
              <span className="stat-number">15</span>
              <span className="stat-label">Yıl Deneyim</span>
            </div>
          </div>
        </article>
        
        <div className="about-image">
          <img 
            src="/images/about/about.jpg" 
            alt="Teknik Elektrik - İstanbul'da 15 yıllık deneyimli profesyonel elektrikçi ekibi - Elektrik tesisatı ve arıza tamiri hizmetleri"
            className="about-photo"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default About;