import { useEffect, useRef, useState } from "react"
import "../styles/blog2Styes/EventSection.css"
import img1 from '../assets/blog2Places/desfilemercados.avif'
import img2 from '../assets/blog2Places/quitofest.jpg'
import img3 from '../assets/blog2Places/electrofest.avif'

function EventSection() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    const events = [
        {
        image: img1,
        title: "Los mercados saludan a Quito",
        date: "27 de noviembre, 2024",
        location: "Centro de Quito",
        },
        {
        image: img2,
        title: "Quitofest",
        date: "5 de diciembre, 2024",
        location: "Parque Bicentenario",
        },
        {
        image: img3,
        title: "Quinde Electro Fest",
        date: "6 de diciembre, 2024",
        location: "Parque Itchimbía",
        },
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            setIsVisible(entry.isIntersecting)
        },
        { threshold: 0.1 },
        )

        if (sectionRef.current) {
        observer.observe(sectionRef.current)
        }

        return () => {
        if (sectionRef.current) {
            observer.unobserve(sectionRef.current)
        }
        }
    }, [])

    useEffect(() => {
        const handleCardHover = (e) => {
        const card = e.target.closest(".card")
        if (card) {
            const rect = card.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            card.style.setProperty("--mouse-x", `${x}px`)
            card.style.setProperty("--mouse-y", `${y}px`)
        }
        }

        document.addEventListener("mousemove", handleCardHover)

        return () => {
        document.removeEventListener("mousemove", handleCardHover)
        }
    }, [])

    return (
        <section id="eventos" ref={sectionRef} className={isVisible ? "visible" : ""}>
        <h2>Eventos Destacados</h2>
        <div className="card-container">
            {events.map((event, index) => (
            <div key={index} className="card-blog">
                <img src={event.image || "/placeholder.svg"} alt={event.title} />
                <div className="card-info">
                <h3>{event.title}</h3>
                <p>Fecha: {event.date}</p>
                <p>Lugar: {event.location}</p>
                </div>
            </div>
            ))}
        </div>
        </section>
    )
}

export default EventSection



