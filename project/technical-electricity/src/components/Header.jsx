import React, { useState } from 'react';
import { Zap, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Zap size={32} />
          <span>Teknik Elektrik</span>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <a href="#home">Ana Sayfa</a>
          <a href="#services">Hizmetler</a>
          <a href="#about">Hakkımızda</a>
          <a href="#contact">İletişim</a>
        </nav>
        
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;