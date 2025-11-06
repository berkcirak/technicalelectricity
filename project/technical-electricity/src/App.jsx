import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  // Structured Data (Schema.org) - LocalBusiness
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Teknik Elektrik",
    "image": "https://www.teknik-elektrik.com/images/about/about.jpg",
    "@id": "https://www.teknik-elektrik.com",
    "url": "https://www.teknik-elektrik.com",
    "telephone": "+905051452834",
    "email": "info@elektrikustasi.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gaziosmanpaşa",
      "addressLocality": "İstanbul",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.0082,
      "longitude": 28.9784
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "23:00"
    },
    "priceRange": "$$",
    "areaServed": {
      "@type": "City",
      "name": "İstanbul"
    },
    "serviceType": [
      "Elektrik Arıza Tespiti",
      "Elektrik Tesisatı Yenileme",
      "Aydınlatma Montajı",
      "Merkezi Uydu Sistemleri",
      "Diafon ve Kamera Sistemleri"
    ],
    "description": "İstanbul'da 15 yıllık deneyimle profesyonel elektrik hizmetleri sunan Teknik Elektrik. 7/24 acil müdahale, kaliteli işçilik ve uygun fiyat garantisi."
  };

  return (
    <div className="App">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;