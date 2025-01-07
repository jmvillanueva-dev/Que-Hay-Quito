// Falta terminar y enlazar
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/BlogPage.css';

const BlogPage: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove(styles.animate);
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(`.${styles.blogItem}`).forEach((item) => {
      item.classList.add(styles.animate);
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const showSlide = (index: number) => {
    if (carouselRef.current) {
      const slides = carouselRef.current.children;
      let newIndex = index;
      if (index < 0) newIndex = slides.length - 1;
      else if (index >= slides.length) newIndex = 0;

      setCurrentSlide(newIndex);
      carouselRef.current.style.transform = `translateX(-${newIndex * 100}%)`;
    }
  };

  const nextSlide = () => showSlide(currentSlide + 1);
  const prevSlide = () => showSlide(currentSlide - 1);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <main>
      <section className={styles.textCenter}>
        <h1 className={styles.titulo}>Articulos de Quito</h1>
      </section>
      
      <section id="carousel" className={styles.carousel}>
        <div ref={carouselRef} className={styles.carouselContainer}>
          <div className={styles.carouselSlide}>
            <img src="/images/blogPlaces/panecillo.avif" alt="El Panecillo" />
            <div className={styles.carouselContent}>
              <h2>El Panecillo: El Mirador de Quito</h2>
              <p>Descubre la historia y la vista panorámica desde este icónico monumento.</p>
              <button className={styles.btnText}>Leer más</button>
            </div>
          </div>
          <div className={styles.carouselSlide}>
            <img src="/images/blogPlaces/mitaddelmundo.avif" alt="La Mitad del Mundo" />
            <div className={styles.carouselContent}>
              <h2>La Mitad del Mundo: Entre Dos Hemisferios</h2>
              <p>Visita el monumento que marca la línea ecuatorial y aprende sobre la cultura ecuatoriana.</p>
              <button className={styles.btnText}>Leer más</button>
            </div>
          </div>
          <div className={styles.carouselSlide}>
            <img src="/images/blogPlaces/telefericoQ.jpg" alt="Teleférico de Quito" />
            <div className={styles.carouselContent}>
              <h2>Teleférico de Quito: Un Viaje a las Alturas</h2>
              <p>Explora Quito desde las alturas con este emocionante recorrido en teleférico.</p>
              <button className={styles.btnText}>Leer más</button>
            </div>
          </div>
        </div>
        <button id="prevBtn" className={`${styles.carouselBtn} ${styles.prev}`} onClick={prevSlide}>&#10094;</button>
        <button id="nextBtn" className={`${styles.carouselBtn} ${styles.next}`} onClick={nextSlide}>&#10095;</button>
      </section>

      <section id="featured-posts" className={styles.featuredPosts}>
        <h2>Artículos Destacados</h2>
        <div className={styles.featuredGrid}>
          <div className={styles.featuredCard}>
            <img src="/images/blogPlaces/Vista-noctura-de-Quito.avif" alt="Centro Histórico de Quito" />
            <h3>Centro Histórico de Quito</h3>
            <p>Explora las calles coloniales y las iglesias barrocas del primer Patrimonio Cultural de la Humanidad.</p>
            <button>Leer más</button>
          </div>
          <div className={styles.featuredCard}>
            <img src="/images/blogPlaces/mercadoOtavalo.avif" alt="Mercado de Otavalo" />
            <h3>Mercado de Otavalo</h3>
            <p>Sumérgete en la cultura indígena y encuentra artesanías únicas en este colorido mercado.</p>
            <button>Leer más</button>
          </div>
          <div className={styles.featuredCard}>
            <img src="/images/blogPlaces/parqueCotopaxi.avif" alt="Parque Nacional Cotopaxi" />
            <h3>Parque Nacional Cotopaxi</h3>
            <p>Aventúrate en uno de los volcanes activos más altos del mundo y disfruta de paisajes impresionantes.</p>
            <button>Leer más</button>
          </div>
        </div>
      </section>

      <section id="blog-list" className={styles.blogList}>
        <h2>Todos los Artículos</h2>
        <div className={styles.blogItem}>
          <img src="/images/blogPlaces/basilica.avif" alt="Basílica del Voto Nacional" />
          <div className={styles.blogContent}>
            <h3>Basílica del Voto Nacional</h3>
            <p>Descubre la imponente arquitectura neogótica de esta iglesia emblemática de Quito.</p>
            <button>Leer más</button>
          </div>
        </div>
        <div className={styles.blogItem}>
          <img src="/images/blogPlaces/ronda.jpg" alt="Calle La Ronda" />
          <div className={styles.blogContent}>
            <h3>Calle La Ronda</h3>
            <p>Pasea por esta pintoresca calle colonial llena de arte, música y gastronomía tradicional.</p>
            <button>Leer más</button>
          </div>
        </div>
        <div className={styles.blogItem}>
          <img src="/images/blogPlaces/museo.avif" alt="Museo de la Ciudad" />
          <div className={styles.blogContent}>
            <h3>Museo de la Ciudad</h3>
            <p>Explora la historia de Quito desde la época precolombina hasta la actualidad en este fascinante museo.</p>
            <button>Leer más</button>
          </div>
        </div>
        <div className={styles.blogItem}>
          <img src="/images/blogPlaces/jardin.avif" alt="Jardín Botánico de Quito" />
          <div className={styles.blogContent}>
            <h3>Jardín Botánico de Quito</h3>
            <p>Admira la diversidad de la flora ecuatoriana en este hermoso oasis en medio de la ciudad.</p>
            <button>Leer más</button>
          </div>
        </div>
        <div className={styles.blogItem}>
          <img src="/images/blogPlaces/capilla.avif" alt="Capilla del Hombre" />
          <div className={styles.blogContent}>
            <h3>Capilla del Hombre</h3>
            <p>Visita este museo dedicado a la obra del famoso pintor ecuatoriano Oswaldo Guayasamín.</p>
            <button>Leer más</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;

