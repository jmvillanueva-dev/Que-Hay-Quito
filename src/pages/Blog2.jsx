// falta terminar y enlazar
// faltan estilos
import React, { useEffect, useState } from 'react';
import styles from '../styles';

const Blog2: React.FC = () => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    const fullTitle = "¡Vive las Fiestas de Quito 2024: Noticias y Eventos Imperdibles!";
    let i = 0;

    const typeWriter = () => {
      if (i < fullTitle.length) {
        setTitle(prev => prev + fullTitle.charAt(i));
        i++;
        setTimeout(typeWriter, 50);
      } else {
        setTimeout(() => {
          setTitle('');
          i = 0;
          typeWriter();
        }, 2000);
      }
    };

    typeWriter();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const heroImage = document.querySelector(`.${styles.heroImage}`) as HTMLElement;
      if (heroImage) {
        heroImage.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroImage}></div>
        <h1 id="main-title">{title}</h1>
      </section>

      <section id="eventos" className={styles.eventos}>
        <h2>Eventos Destacados</h2>
        <div className={styles.cardContainer}>
          {/* Event cards */}
          {/* ... (add your event cards here) */}
        </div>
      </section>

      <section id="galeria" className={styles.galeria}>
        <h2>Galería de Imágenes</h2>
        <div className={styles.slider}>
          {/* Image slider */}
          {/* ... (add your image slider here) */}
        </div>
      </section>
    </main>
  );
};

export default Blog2;

