import React from "react";
import "./../styles/destinations.css";

// Importa las imágenes
import img1 from "../assets/iglesia-san-francisco.png";
import img2 from "../assets/monumento-mitad-mundo.png";
import img3 from "../assets/teleferico-quito.png";

const destinations = [
{
id: 1,
title: "Iglesia de San Francisco de Quito",
category: "Templos",
description: "Un lugar histórico y religioso emblemático.",
image: img1,
},
{
id: 2,
title: "Teleférico de Quito",
category: "Mirador",
description: "Un paseo a los cielos con vistas increíbles.",
image: img2,
},
{
id: 3,
title: "Monumento Mitad del Mundo",
category: "Museos",
description: "Descubre el centro del mundo y su historia.",
image: img3,
},
];

const Destinations = () => {
return (
<div className="destinations">
    <h2 className="destinations-title">¿Cuál es tu próximo destino?</h2>
    <div className="destinations-grid">
    {destinations.map((destination) => (
        <div key={destination.id} className="destination-card">
        <div
            className="destination-image"
            style={{ backgroundImage: `url(${destination.image})` }}
        ></div>
        <div className="destination-info">
            <span className="destination-category">{destination.category}</span>
            <h3 className="destination-title">{destination.title}</h3>
            <p className="destination-description">{destination.description}</p>
            <button className="destination-button">Más información...</button>
        </div>
        </div>
    ))}
    </div>
</div>
);
};

export default Destinations;
