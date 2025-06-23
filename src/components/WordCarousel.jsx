// WordCarousel.jsx
import React, { useEffect, useState } from 'react';
import '../style/WordCarousel.css'; // Asegúrate de tener este archivo CSS

const words = ['Template1', 'Template2', 'Templat3', 'Templat4', 'Template5'];

const WordCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % words.length);
    }, 2000); // cambia cada 2 segundos

    return () => clearInterval(interval); // limpieza
  }, []);

  return (
    <div className="carousel-container">
      <span key={index} className="carousel-word">
        {words[index]}
      </span>
    </div>
  );
};

export default WordCarousel;
