
import { useEffect, useState, useRef } from "react"
import "../styles/blog2Styes/Hero.css"

function Hero() {
    const [title, setTitle] = useState("")
    const titleRef = useRef(null)
    const fullTitle = "¡Vive las Fiestas de Quito 2024: Noticias y Eventos Imperdibles!"
    const heroImageRef = useRef(null)

    useEffect(() => {
        let i = 0
        let typingInterval

        function typeWriter() {
        if (i < fullTitle.length) {
            setTitle((prev) => prev + fullTitle.charAt(i))
            i++
            typingInterval = setTimeout(typeWriter, 50)
        } else {
            setTimeout(() => {
            setTitle("")
            i = 0
            typeWriter()
            }, 2000)
        }
        }

        typeWriter()

        const handleScroll = () => {
        const scrollPosition = window.pageYOffset
        if (heroImageRef.current) {
            heroImageRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`
        }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
        clearTimeout(typingInterval)
        window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <section className="hero">
        <div className="hero-image" ref={heroImageRef}></div>
        <h1 id="main-title" ref={titleRef}>
            {title}
        </h1>
        </section>
    )
}

export default Hero

