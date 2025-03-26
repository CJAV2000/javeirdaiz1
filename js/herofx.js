// herofx.js - Responsive Canvas Sketch Animation

class ResponsiveCanvasAnimation {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.ctx = this.container.getContext('2d');

    this.palette = {
      background: 'rgba(11, 11, 31, 1)',
      passion: 'rgba(255, 31, 74, 1)', 
      desire: [255, 215, 0, 1],
      electric: 'rgba(0, 247, 255, 1)'
    };

    this.particles = [];
    this.waves = [];
    this.time = 0;
    this.animationFrame = null;

    this.setupEventListeners();
    this.resize();
  }

  setupEventListeners() {
    window.addEventListener('resize', () => this.resize());
    this.startAnimation();
  }

  resize() {
    const parent = this.container.parentElement;
    const pixelRatio = window.devicePixelRatio || 1;
    
    this.container.width = parent.clientWidth * pixelRatio;
    this.container.height = parent.clientHeight * pixelRatio;
    
    this.container.style.width = `${parent.clientWidth}px`;
    this.container.style.height = `${parent.clientHeight}px`;
    
    this.ctx.scale(pixelRatio, pixelRatio);

    this.initParticles();
    this.initWaves();
  }

  // Inicializar ondas circulares expansivas
  initWaves() {
    const width = this.container.width / (window.devicePixelRatio || 1);
    const height = this.container.height / (window.devicePixelRatio || 1);

    this.waves = Array.from({ length: 3 }).map(() => ({
      x: width / 2,
      y: height / 2,
      radius: 0,
      maxRadius: Math.max(width, height),
      opacity: 0.5,
      speed: Math.random() * 2 + 1
    }));
  }

  // Actualizar ondas circulares
  updateWaves() {
    this.waves.forEach(wave => {
      wave.radius += wave.speed;
      wave.opacity -= 0.01;

      // Reiniciar onda si se desvanece
      if (wave.opacity <= 0) {
        wave.radius = 0;
        wave.opacity = 0.5;
      }
    });
  }

  initParticles() {
    const width = this.container.width / (window.devicePixelRatio || 1);
    const height = this.container.height / (window.devicePixelRatio || 1);
    
    // Generar partículas en un círculo más natural
    this.particles = Array.from({ length: 200 }).map(() => {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.pow(Math.random(), 0.5) * Math.min(width, height) * 0.4;

      return {
        pos: [
          width / 2 + Math.cos(angle) * radius,
          height / 2 + Math.sin(angle) * radius
        ],
        vel: [
          (Math.random() - 0.5) * 0.1, 
          (Math.random() - 0.5) * 0.1
        ],
        life: Math.random(),
        size: Math.random() * 3 + 1,
        hue: Math.random() < 0.3 ? this.palette.passion : this.palette.desire
      };
    });
  }

  updateParticles() {
    const width = this.container.width / (window.devicePixelRatio || 1);
    const height = this.container.height / (window.devicePixelRatio || 1);

    this.particles.forEach(particle => {
      particle.pos[0] += particle.vel[0] * Math.sin(this.time);
      particle.pos[1] += particle.vel[1] * Math.cos(this.time);

      particle.life -= 0.01;

      if (particle.life <= 0) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.pow(Math.random(), 0.5) * Math.min(width, height) * 0.4;
        
        particle.pos = [
          width / 2 + Math.cos(angle) * radius,
          height / 2 + Math.sin(angle) * radius
        ];
        particle.life = Math.random();
        particle.size = Math.random() * 3 + 1;
      }
    });
  }

  drawCanvas() {
    const ctx = this.ctx;
    const width = this.container.width / (window.devicePixelRatio || 1);
    const height = this.container.height / (window.devicePixelRatio || 1);

    // Gradiente de fondo rojo
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, 'rgba(100, 0, 0.8)');
    gradient.addColorStop(1, 'rgba(11, 11, 31, 1)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

// Para cambiar el color del círculo de fondo de las partículas, modifica en drawCanvas():
// Dibuja un círculo rojo de fondo
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, Math.min(width, height) * 0.4, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 0, 0, 0.2)';  // Color rojo con transparencia
    ctx.fill();


    // Dibujar ondas circulares
    this.waves.forEach(wave => {
      ctx.beginPath();
      ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255, 255, 255, ${wave.opacity})`;
      ctx.lineWidth = 2;
      ctx.stroke();
    });

    // Dibujar partículas
    this.particles.forEach(particle => {
      ctx.beginPath();
      ctx.arc(particle.pos[0], particle.pos[1], particle.size, 0, Math.PI * 2);
      
      const hue = Array.isArray(particle.hue) ? particle.hue : [255, 215, 0, 1];
      ctx.fillStyle = `rgba(${hue[0]}, ${hue[1]}, ${hue[2]}, 1)`;
      ctx.shadowColor = `rgba(${hue[0]}, ${hue[1]}, ${hue[2]}, 0.5)`;
      ctx.shadowBlur = 10;
      ctx.fill();
    });

    this.time += 0.02;
  }

  startAnimation() {
    const animate = () => {
      this.updateParticles();
      this.updateWaves();
      this.drawCanvas();
      this.animationFrame = requestAnimationFrame(animate);
    };
    animate();
  }
}

// Inicializar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
  const heroCanvas = document.getElementById('efectoCanvas');
  if (heroCanvas) {
    new ResponsiveCanvasAnimation('efectoCanvas');
  }
});