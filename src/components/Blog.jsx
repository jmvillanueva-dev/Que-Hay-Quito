import React from 'react';
import { Link } from 'react-router-dom'
import styles from './../styles/blog.module.css'
import TrenEcuador from '../assets/tren-ecuador.png'

const Blog = () => {
  return (
    <section id="blog" className={styles.latestStories}>
      <div className="container-ferrocarril">
        <div className={styles.moreArticles}>
          <h2>Explore nuestras últimas historias</h2>
          <div>
            <Link to="/Que-Hay-Quito/blog2">
              <button className={styles.button}>Leer más noticias</button>
            </Link>
            <Link to="/Que-Hay-Quito/blog">
              <button className={styles.button}>Ver más artículos</button>
            </Link>
          </div>
        </div>
        
        <div className={styles.storiesContainer}>
          <div className={styles.mainStory}>
            <img src={TrenEcuador} alt="tren inbambura" />
            <div className={styles.mainStoryText}>
              <span >NOTICIAS</span>
              <h3>El ferrocarril vuelve a recorrer Imbabura</h3>
              <p>Ago 26, 2024 • Lectura: 6 min </p>
              <p>La rehabilitación del ferrocarril en Imbabura se convirtió en una realidad. Desde agosto de 2024, las estaciones y la línea férrea fueron refaccionadas, gracias a iniciativas locales públicas y privadas.</p>
              <Link to="/blog">
                Leer más...
              </Link>
            </div>
          </div>
          <div className={styles.sideStories}>
            <div className={styles.sideStory}>
              <span className={styles.category}>FAUNA Y NATURALEZA</span>
              <h4>10 Parques naturales que puedes visitar en Quito</h4>
              <p>Nov 1, 2024 • Lectura: 2 min</p>
              <Link to="/blog" className="font-color-blue">
                Leer más...
              </Link>
            </div>
            <div className={styles.sideStory}>
              <span className={styles.category}>ARQUITECTURA</span>
              <h4>El centro histórico de Quito, un paisaje arquitectónico</h4>
              <p>Nov 2, 2024 • Lectura: 8 min</p>
              <Link to="/blog" className="font-color-blue">
                Leer más...
              </Link>
            </div>
            <div className={styles.sideStory}>
              <span className={styles.category}>PLAYAS</span>
              <h4>¿Fuera de Quito este Feriado? Visita estas playas</h4>
              <p>Nov 2, 2024 • Lectura: 3 min</p>
              <Link to="/blog" className="font-color-blue">
                Leer más...
              </Link>
            </div>
            <div className={styles.sideStory}>
              <span className={styles.category}>FOTOGRAFÍA</span>
              <h4>13 museos gratis para disfrutar en Quito</h4>
              <p>Nov 5, 2024 • Lectura: 7 min</p>
              <Link to="/blog" className="font-color-blue">
                Leer más...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog

