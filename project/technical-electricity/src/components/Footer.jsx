import React from 'react';
import { Zap, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="logo" style={{ justifyContent: 'flex-start', marginBottom: '1rem' }}>
              <Zap size={24} />
              <span>Elektrik Ustası</span>
            </div>
            <p>
              Profesyonel elektrik hizmetleri ile güvenilir çözümler sunuyoruz. 
              15 yıllık deneyimimizle müşteri memnuniyeti odaklı hizmet veriyoruz.
            </p>
          </div>
          
          <div className="footer-section">
            <h3>Hızlı Linkler</h3>
            <p><a href="#home">Ana Sayfa</a></p>
            <p><a href="#services">Hizmetler</a></p>
            <p><a href="#about">Hakkımızda</a></p>
            <p><a href="#contact">İletişim</a></p>
          </div>
          
          <div className="footer-section">
            <h3>Hizmetler</h3>
            <p>Ev Elektrik Tesisatı</p>
            <p>Elektrik Arıza Tamiri</p>
            <p>Aydınlatma Sistemleri</p>
            <p>Elektrik Güvenlik</p>
          </div>
          
          <div className="footer-section">
            <h3>İletişim</h3>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={16} />
              +90 555 123 45 67
            </p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={16} />
              info@elektrikustasi.com
            </p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={16} />
              Kadıköy/İstanbul
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Elektrik Ustası. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;