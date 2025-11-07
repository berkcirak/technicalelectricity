import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="section-title">İletişim</h2>
        <p className="section-subtitle">
          Elektrik ihtiyaçlarınız için bizimle iletişime geçin
        </p>
        
        <div className="contact-info-only">
          <div className="contact-info">
            <h3>İletişim Bilgileri</h3>
            
            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <div>
                <strong>Telefon</strong>
                <p>+90 505 145 28 34</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <div>
                <strong>E-posta</strong>
                <p>info@elektrikustasi.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={24} />
              </div>
              <div>
                <strong>Adres</strong>
                <p>Eyüp, Yeşilpınar, İstanbul</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <Clock size={24} />
              </div>
              <div>
                <strong>Çalışma Saatleri</strong>
                <p>Her gün: 08.00 - 23.00</p>
              </div>
            </div>

            {/* WhatsApp Hızlı İletişim */}
            <div className="whatsapp-contact">
              <a 
                href="https://wa.me/905051452834" 
                target="_blank" 
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                <MessageCircle size={24} />
                WhatsApp ile Hızlı İletişim
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;