import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Normal form gönderimi - sadece alert göster
    alert(`Teşekkürler ${formData.name}! Mesajınız alındı. En kısa sürede size dönüş yapacağız.`);
    
    // Formu temizle
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="section-title">İletişim</h2>
        <p className="section-subtitle">
          Elektrik ihtiyaçlarınız için bizimle iletişime geçin
        </p>
        
        <div className="contact-grid">
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
                <p>Gaziosmanpaşa/İstanbul</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <Clock size={24} />
              </div>
              <div>
                <strong>Çalışma Saatleri</strong>
                <p>Pazartesi - Cuma: 09:00 - 23:00</p>
              </div>
            </div>

            {/* WhatsApp Hızlı İletişim - Ayrı buton */}
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
          
          <div className="contact-form">
            <h3>Hızlı İletişim</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Ad Soyad</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">E-posta</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Telefon</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Mesaj</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Elektrik ihtiyacınızı detaylandırın..."
                  required
                />
              </div>
              
              <button type="submit" className="submit-btn">
                <Send size={20} />
                Mesaj Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;