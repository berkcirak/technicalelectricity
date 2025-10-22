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
              <span>Teknik Elektrik</span>
            </div>
            <p>
            Teknik Elektrik olarak, ev sahiplerine ve işletmelere güvenilir ve kaliteli elektrik tesisatı hizmetleri sunmaktayız.
             Deneyimli ve uzman ekibimizle, her türlü elektrik tesisatı ihtiyacınızı karşılayabiliriz.
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
            <p>Arıza Tespiti & Onarımı</p>
            <p>Avize & Aydınlatma Montajı</p>
            <p>Merkezi Uydu Sistemleri</p>
            <p>Diafon & Kamera Sistemleri</p>
            <p>Tesisat Yenileme</p>
          </div>
          
          <div className="footer-section">
            <h3>İletişim</h3>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={16} />
              +90 505 145 28 34
            </p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={16} />
              info@elektrikustasi.com
            </p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={16} />
              Gaziosmanpaşa/İstanbul
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Teknik Elektrik. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;