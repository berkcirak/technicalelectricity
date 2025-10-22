import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

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
    // Form gönderme işlemi burada yapılacak
    alert('Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.');
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
                <p>+90 555 123 45 67</p>
                <p>+90 212 123 45 67</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <div>
                <strong>E-posta</strong>
                <p>info@elektrikustasi.com</p>
                <p>destek@elektrikustasi.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={24} />
              </div>
              <div>
                <strong>Adres</strong>
                <p>Merkez Mahallesi, Elektrik Sokak No:123</p>
                <p>Kadıköy/İstanbul</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <Clock size={24} />
              </div>
              <div>
                <strong>Çalışma Saatleri</strong>
                <p>Pazartesi - Cuma: 08:00 - 18:00</p>
                <p>Cumartesi: 09:00 - 16:00</p>
                <p>Pazar: Acil durumlar için 7/24</p>
              </div>
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