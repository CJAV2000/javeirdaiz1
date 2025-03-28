document.addEventListener("DOMContentLoaded", () => {
    // ===== TOGGLE DETALLES DE CANCIÓN =====
    const detailsToggles = document.querySelectorAll(".details-toggle")
  
    detailsToggles.forEach((toggle) => {
      toggle.addEventListener("click", function () {
        const targetId = this.getAttribute("data-target")
        const targetElement = document.getElementById(targetId)
  
        // Toggle clase active
        targetElement.classList.toggle("active")
  
        // Cambiar texto del botón
        if (targetElement.classList.contains("active")) {
          this.textContent = "Ocultar detalles"
        } else {
          this.textContent = "Ver detalles"
        }
      })
    })
  
    // ===== EFECTO PARALLAX EN HERO (solo en music.html) =====
    const musicHero = document.querySelector(".music-hero")
    const musicHeroImage = document.querySelector(".music-hero-image")
  
    if (musicHero && musicHeroImage) {
      window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY
        const heroTop = musicHero.offsetTop
        const heroHeight = musicHero.offsetHeight
  
        // Solo aplica el efecto cuando la sección está visible
        if (scrollPosition >= heroTop && scrollPosition <= heroTop + heroHeight) {
          // Calcula el desplazamiento para el efecto parallax
          const parallaxOffset = (scrollPosition - heroTop) * 0.4
          musicHeroImage.style.transform = `translateY(${parallaxOffset}px)`
        }
      })
    }
  
    // ===== EFECTO HOVER 3D EN PORTADAS (solo en desktop) =====
    const albumCovers = document.querySelectorAll(".album-cover")
  
    albumCovers.forEach((cover) => {
      // Efecto de seguimiento del cursor
      cover.addEventListener("mousemove", function (e) {
        // Solo en dispositivos desktop
        if (window.innerWidth >= 1024) {
          const rect = this.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top
  
          // Calcula la posición relativa del cursor (0-1)
          const xPercent = x / rect.width
          const yPercent = y / rect.height
  
          // Aplica una ligera rotación 3D basada en la posición del cursor
          const rotateX = (0.5 - yPercent) * 8 // -4 a 4 grados
          const rotateY = (xPercent - 0.5) * 8 // -4 a 4 grados
  
          this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
        }
      })
  
      // Restaura la posición al salir
      cover.addEventListener("mouseleave", function () {
        this.style.transform = "perspective(1000px) rotateX(0) rotateY(0)"
      })
    })
  
    // ===== ANIMACIÓN DE ICONOS DE STREAMING =====
    const streamingLinks = document.querySelectorAll(".streaming-link")
  
    streamingLinks.forEach((link) => {
      link.addEventListener("mouseenter", function () {
        // Añade clase para animación de pulso
        this.classList.add("pulse")
  
        // Elimina la clase después de la animación
        setTimeout(() => {
          this.classList.remove("pulse")
        }, 1000)
      })
    })
  
    // ===== DETECCIÓN DE INTERSECCIÓN PARA ANIMACIONES AL SCROLL =====
    // Solo si el navegador soporta IntersectionObserver
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view")
              // Dejar de observar después de animar
              observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.1, // Trigger cuando al menos 10% del elemento es visible
        },
      )
  
      // Observa las tarjetas y otros elementos para animarlos al scroll
      document.querySelectorAll(".music-card, .music-titulo, .catalog-title").forEach((el) => {
        observer.observe(el)
      })
    }
  
    // ===== ESTILOS DINÁMICOS PARA ANIMACIONES =====
    const style = document.createElement("style")
    style.textContent = `
          /* Animaciones adicionales */
          .streaming-link.pulse {
              animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1);
          }
          
          .music-titulo.in-view, .catalog-title.in-view {
              animation: fadeIn 0.8s ease forwards;
          }
          
          .music-card.in-view {
              animation: fadeIn 0.8s ease forwards;
          }
      `
    document.head.appendChild(style)
  })
  
  