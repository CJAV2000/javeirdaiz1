# WEB ARTIST JAVIER DIAGAZ

## Descripción del Proyecto

Este repositorio contiene el código fuente del sitio web oficial de Javier Diagaz, un artista multifacético que combina música, diseño y tecnología. El objetivo es crear una plataforma modular, dinámica y reutilizable que sirva como plantilla para futuros lanzamientos y actualizaciones. El sitio está diseñado con un enfoque mobile-first, responsive design y componentización para facilitar el mantenimiento y escalabilidad.

## Tabla de Contenidos

1. [Tecnologías Utilizadas](#tecnologías-utilizadas)
2. [Enfoque de Desarrollo](#enfoque-de-desarrollo)
3. [Arquitectura Técnica](#arquitectura-técnica)
4. [Patrones de Interacción](#patrones-de-interacción)
5. [Gestión de Estado y Caché](#gestión-de-estado-y-caché)
6. [Secciones Principales](#secciones-principales)
7. [Integración con APIs](#integración-con-apis)
8. [Optimización y Rendimiento](#optimización-y-rendimiento)
9. [Mejoras Propuestas](#mejoras-propuestas)
10. [Plan de Implementación](#plan-de-implementación)
11. [Métricas y Analytics](#métricas-y-analytics)
12. [Estrategia SEO](#estrategia-seo)
13. [Sistema de Build y Automatización](#sistema-de-build-y-automatización)
14. [Testing y Control de Calidad](#testing-y-control-de-calidad)
15. [Gestión de Dependencias](#gestión-de-dependencias)
16. [Backups y Recuperación](#backups-y-recuperación)
17. [Documentación y Mantenimiento](#documentación-y-mantenimiento)
18. [Cómo Contribuir](#cómo-contribuir)
19. [Despliegue en Vercel](#despliegue-en-vercel)

## Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica, accesible y SEO-friendly
- **CSS3**: 
  - Diseño responsive y moderno utilizando Grid y Flexbox
  - Variables CSS para sistema de diseño consistente
  - Media queries específicas para dispositivos móviles, tablets y escritorio
  - Compatibilidad con navegadores modernos (últimas 2 versiones)
- **JavaScript (ES6+)**: 
  - Vanilla JS sin dependencias de frameworks
  - Módulos nativos (import/export)
  - Promises y Async/Await para operaciones asíncronas
  - Intersection Observer para lazy loading
- **Efectos Visuales**: 
  - Animaciones con Canvas (Sketch.js)
  - Efectos personalizados (Matrix, partículas)
  - Web Animations API para animaciones optimizadas

### Producción
- **Hosting**: Vercel (optimizado para sitios estáticos)
- **Repositorio**: GitHub
- **Control de Versiones**: Git
- **Dominio**: www.javierdiagaz.com
- **CDN**: Vercel Edge Network para recursos estáticos

### Herramientas de Desarrollo
- **IDE**: Visual Studio Code (VSCode)
- **Diseño Responsivo**: Mobile-first con breakpoints específicos
- **Optimización de Imágenes**: Formatos modernos (WebP) con fallbacks 
- **Automatización**: Scripts NPM personalizados para tareas repetitivas
- **Testing**: Lighthouse para auditorías de rendimiento

## Enfoque de Desarrollo

### Principios de Diseño
- **Modularidad**: Componentes reutilizables independientes
- **Componentización**: Separación clara de responsabilidades
- **Automatización**: Sistema basado en datos para actualizaciones sencillas
- **Editable**: Estructura que permite modificaciones sin alterar la base
- **Escalable**: Arquitectura preparada para crecer con nuevos lanzamientos
- **Mantenibilidad**: Código legible, documentado y con convenciones claras

### Metodología
- **Mobile-first**: Desarrollo primario para dispositivos móviles
- **Progressive Enhancement**: Funcionalidad básica universal con mejoras progresivas
- **UI/UX Dinámico**: Interfaces interactivas con feedback visual
- **Atomic Design**: Elementos modulares que escalan desde átomos hasta organismos

## Arquitectura Técnica

### Estructura de Carpetas y Archivos

```
/proyecto
│
├── assets/                  # Recursos estáticos
│   ├── fonts/               # Tipografías personalizadas
│   ├── icons/               # Iconos del sitio (SVG preferentemente)
│   ├── images/              # Imágenes organizadas por contexto
│   │   ├── hero/            # Imágenes de portada/banner
│   │   ├── releases/        # Portadas de lanzamientos musicales
│   │   ├── gallery/         # Imágenes para la galería
│   │   └── ui/              # Imágenes de interfaz
│   │
│   ├── audio/               # Archivos de audio (previews, samples)
│   └── videos/              # Videos cortos o teasers
│
├── styles/                  # Archivos CSS
│   ├── base/                # Estilos base y variables
│   │   ├── reset.css        # Normalización de estilos
│   │   ├── variables.css    # Variables CSS (colores, tamaños)
│   │   ├── typography.css   # Estilos de tipografía
│   │   └── animations.css   # Animaciones globales reutilizables
│   │
│   ├── components/          # Estilos de componentes reutilizables
│   │   ├── buttons.css      # Estilos para botones
│   │   ├── cards.css        # Estilos para tarjetas
│   │   ├── navigation.css   # Estilos para menú y navegación
│   │   └── modals.css       # Estilos para ventanas modales
│   │
│   ├── layouts/             # Estructuras de página
│   │   ├── grid.css         # Sistema de rejilla
│   │   ├── header.css       # Estilos para encabezados
│   │   ├── footer.css       # Estilos para pie de página
│   │   └── sections.css     # Estilos generales para secciones
│   │
│   ├── pages/               # Estilos específicos por página
│   │   ├── home.css         # Estilos para la página principal
│   │   ├── music.css        # Estilos para la sección de música
│   │   └── video.css        # Estilos para la sección de videos
│   │
│   └── main.css             # Archivo que importa todos los estilos
│
├── scripts/                 # Archivos JavaScript
│   ├── components/          # Componentes reutilizables
│   │   ├── audioPlayer.js   # Reproductor de audio
│   │   ├── videoPlayer.js   # Reproductor de video
│   │   ├── gallery.js       # Funcionalidad de galería
│   │   └── navigation.js    # Menú hamburguesa y navegación
│   │
│   ├── utils/               # Utilidades y funciones auxiliares
│   │   ├── api.js           # Funciones para interactuar con APIs
│   │   ├── dom.js           # Funciones para manipulación del DOM
│   │   ├── animations.js    # Funciones para animaciones
│   │   └── storage.js       # Gestión de almacenamiento local
│   │
│   ├── data/                # Gestión de datos
│   │   ├── releases.js      # Datos de lanzamientos musicales
│   │   └── videos.js        # Datos de videos
│   │
│   └── main.js              # Archivo principal que inicializa todo
│
├── pages/                   # Páginas HTML individuales
│   ├── music.html           # Página de música completa
│   ├── video.html           # Página de videos completa
│   ├── gallery.html         # Página de galería completa
│   └── contact.html         # Página de contacto
│
├── components/              # Componentes HTML reutilizables
│   ├── header.html          # Fragmento de encabezado
│   ├── footer.html          # Fragmento de pie de página
│   ├── music-card.html      # Plantilla para tarjeta de música
│   └── video-card.html      # Plantilla para tarjeta de video
│
├── tests/                   # Pruebas automatizadas
│   ├── unit/                # Tests unitarios
│   ├── integration/         # Tests de integración
│   └── e2e/                 # Tests end-to-end
│
├── build/                   # Scripts y configuración de build
│   ├── webpack.config.js    # Configuración de Webpack
│   ├── vite.config.js       # Configuración de Vite (alternativa)
│   └── scripts/             # Scripts de automatización
│
├── index.html               # Página principal
├── manifest.json            # Configuración para PWA
├── robots.txt               # Configuración para motores de búsqueda
├── sitemap.xml              # Mapa del sitio para SEO
├── .htaccess                # Configuración del servidor (si aplica)
├── package.json             # Dependencias y scripts npm
├── README.md                # Documentación del proyecto
└── .gitignore               # Archivos ignorados por Git
```

### Convenciones y Estándares

#### Nomenclatura CSS (Metodología BEM)
```css
.block {}
.block__element {}
.block--modifier {}
```

Ejemplo:
```css
.music-card {}
.music-card__title {}
.music-card--featured {}
```

#### Organización de JavaScript
- Patrón módulo para encapsulamiento
- Funciones puras para lógica reutilizable
- Event delegation para mejor rendimiento
- Uso de data-attributes para conectar JS con HTML

## Patrones de Interacción

### Navegación Mobile
- **Menú Hamburguesa**: Animación suave de 3 líneas a X
- **Panel Deslizante**: Desde la derecha con overlay semi-transparente
- **Cierre Automático**: Al seleccionar un ítem o hacer click fuera
- **Transiciones**: 300ms ease-in-out para movimientos naturales

### Transiciones entre Secciones
- **Scroll Suave**: Implementado con CSS scroll-behavior
- **Animaciones de Entrada**: Elementos que aparecen al entrar en viewport
- **Indicadores de Posición**: Feedback visual de sección actual

### Experiencia de Reproducción
- **Controles Intuitivos**: Play/Pause, volumen y progreso
- **Continuidad**: Reproducción no interrumpida al navegar entre secciones
- **Minireproductor**: Versión persistente al salir de la sección principal

## Gestión de Estado y Caché

### Estado de la Aplicación
```javascript
const AppState = {
  currentSection: 'home',
  player: {
    isPlaying: false,
    currentTrack: null,
    volume: 0.8,
    position: 0
  },
  ui: {
    isMenuOpen: false,
    darkMode: false,
    currentModal: null
  }
};
```

### Estrategia de Caché
- **Service Worker**: Para funcionalidad offline básica
- **Cache API**: Para recursos estáticos (imágenes, CSS, JS)
- **LocalStorage**: Para preferencias del usuario y estado de reproducción
- **SessionStorage**: Para datos temporales de sesión
- **IndexedDB**: Para almacenamiento de datos más complejos (ej. historial de reproducción)

## Secciones Principales

### 1. HOME
- **Descripción**: Introducción al artista con un resumen visual y destacados
- **Características**:
  - Hero banner dinámico con último lanzamiento
  - Enlaces rápidos a secciones principales
  - Previsualización de contenido destacado

### 2. MUSIC
- **Descripción**: Catálogo completo de lanzamientos musicales
- **Características**:
  - Reproductor integrado con waveform visual
  - Organización por álbumes/singles/colaboraciones
  - Enlaces directos a plataformas de streaming
  - Letras y créditos expandibles
- **Datos**:
  ```javascript
  {
    "id": "release-001",
    "title": "Nuevo Tema",
    "releaseDate": "2023-06-15",
    "type": "single",
    "coverImage": "assets/images/releases/nuevo-tema.webp",
    "streamingLinks": {
      "spotify": "https://open.spotify.com/album/...",
      "appleMusic": "https://music.apple.com/album/..."
    },
    "tracks": [
      {
        "id": "track-001",
        "title": "Nuevo Tema",
        "duration": "3:45",
        "previewUrl": "assets/audio/previews/nuevo-tema.mp3"
      }
    ]
  }
  ```

### 3. VIDEO
- **Descripción**: Colección de videos musicales, performances y contenido visual
- **Características**:
  - Integración con YouTube y Vimeo (lazy loading)
  - Categorización por tipo (oficial, live, behind-the-scenes)
  - Vista modal para reproducción inmersiva

### 4. GALLERY
- **Descripción**: Imágenes profesionales organizadas en categorías
- **Características**:
  - Diseño masonry responsivo
  - Lightbox con controles táctiles
  - Metadatos y créditos fotográficos

### 5. SHOP/NFT
- **Descripción**: Tienda de merchandising y colecciones digitales
- **Características**:
  - Catálogo de productos físicos y digitales
  - Sistema de carrito básico (integrable con Shopify/WooCommerce)
  - Visualización y compra de NFTs

### 6. ACADEMY
- **Descripción**: Contenido educativo y tutoriales
- **Características**:
  - Organización por módulos y niveles
  - Sistema de progreso para usuarios registrados
  - Recursos descargables

### 7. CONTACT
- **Descripción**: Información de contacto y formulario
- **Características**:
  - Formulario con validación en tiempo real
  - Enlaces a redes sociales con iconos personalizados
  - Sección de booking para eventos

## Integración con APIs

### Plataformas de Streaming
- **Spotify**: 
  - API endpoint: `https://api.spotify.com/v1`
  - Funcionalidad: Obtener tracks, álbumes y estadísticas
  - Autenticación: OAuth 2.0 con Client Credentials Flow
  - Renovación de tokens: Automática cada 50 minutos
  - Gestión de errores: Reintentos con backoff exponencial

- **YouTube**: 
  - API endpoint: `https://www.googleapis.com/youtube/v3`
  - Funcionalidad: Embedded players y datos de videos
  - Cuota: Monitoreo para evitar exceder límites diarios
  - Fallbacks: Alternativas cuando la API no responde

### Redes Sociales
- **Instagram Basic Display API**:
  - Fetch de últimas imágenes para galería
  - Actualización diaria mediante cron job

- **Twitter API v2**:
  - Mostrar últimos tweets en sección de noticias

## Optimización y Rendimiento

### Objetivos de Rendimiento
- **Tiempo de carga inicial**: < 2 segundos en 4G
- **First Contentful Paint (FCP)**: < 1 segundo
- **Time to Interactive (TTI)**: < 3 segundos
- **Largest Contentful Paint (LCP)**: < 2.5 segundos
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Lighthouse Score**: > 90 en todas las categorías

### Estrategias Implementadas
- **Critical CSS**: Estilos críticos inline en `<head>`
- **Lazy Loading**: Imágenes y videos fuera de viewport
- **Code Splitting**: Carga de JavaScript por rutas/componentes
- **Responsive Images**: `srcset` y `sizes` para diferentes resoluciones
  ```html
  <img 
    src="img/releases/album-small.jpg" 
    srcset="img/releases/album-small.jpg 400w,
            img/releases/album-medium.jpg 800w,
            img/releases/album-large.jpg 1200w"
    sizes="(max-width: 600px) 400px,
           (max-width: 1200px) 800px,
           1200px"
    alt="Portada del álbum"
    loading="lazy"
  >
  ```

## Mejoras Propuestas

### 1. Optimización de Recursos
- **Bundling**: Implementar Webpack o Vite para:
  - Minificación de CSS/JS
  - Tree-shaking para eliminar código no utilizado
  - Compresión de assets

- **Sistema de Imágenes Moderno**:
  ```html
  <picture>
    <source srcset="img/hero/banner.webp" type="image/webp">
    <source srcset="img/hero/banner.jpg" type="image/jpeg">
    <img src="img/hero/banner.jpg" alt="Banner principal">
  </picture>
  ```

### 2. PWA (Progressive Web App)
- Implementar Service Worker para:
  - Funcionamiento offline
  - Instalación como aplicación
  - Notificaciones push

### 3. Automatización de Contenido
- Sistema para generar automáticamente:
  - Hero banners para nuevos lanzamientos
  - Cards de contenido desde datos JSON
  - Permalinks para contenido compartible

### 4. Accesibilidad Mejorada
- ARIA roles y landmarks
- Contraste adecuado y modo oscuro
- Navegación por teclado optimizada
- Testing con lectores de pantalla

### 5. Internacionalización
- Sistema multi-idioma con archivos JSON de traducción
- Detección automática de idioma del navegador
- URLs específicas por idioma (/es/, /en/)

## Plan de Implementación

### Fase 1: Estructura Base (1 semana)
1. Configurar repositorio y estructura de archivos
2. Implementar sistema de estilos base (variables, reset, tipografía)
3. Crear esqueleto HTML de página principal
4. Configurar sistema de navegación responsive básico
5. Implementar sistema de build básico (Webpack/Vite)

### Fase 2: Componentes Core (2 semanas)
1. Desarrollar componentes esenciales:
   - Navegación completa con menú hamburguesa
   - Hero banner dinámico
   - Cards para música y videos
   - Footer con enlaces sociales
2. Implementar gestión de estado básica
3. Configurar sistema de pruebas unitarias

### Fase 3: Secciones Principales (3 semanas)
1. HOME: Layout completo y componentes
2. MUSIC: Reproductor y listado de lanzamientos
3. VIDEO: Integración con APIs de video
4. Implementar sistema de routing simple para navegación SPA
5. Desarrollar estrategia SEO inicial

### Fase 4: Optimización y Testing (1 semana)
1. Auditoría de rendimiento con Lighthouse
2. Implementar lazy loading y optimización de imágenes
3. Testing cross-browser y en diferentes dispositivos
4. Correcciones y refinamientos
5. Configurar sistema de monitoreo y analytics

### Fase 5: Despliegue Inicial (3 días)
1. Configuración de dominio y DNS
2. Despliegue en Vercel
3. Configuración de CDN y caché
4. Monitoring inicial y correcciones post-lanzamiento
5. Implementar sistema de backups automatizados

## Métricas y Analytics

### KPIs a Monitorear
- **Engagement**: Tiempo en sitio, páginas por sesión, tasa de rebote
- **Conversión**: Clicks a plataformas de streaming, compras en tienda
- **Rendimiento**: Core Web Vitals, tiempo de carga por página
- **Uso**: Dispositivos, navegadores, ubicaciones geográficas
- **Interacciones musicales**: Reproducciones, tiempo de escucha, compartidos

### Herramientas
- **Google Analytics 4**: Seguimiento general de audiencia y comportamiento
- **Hotjar**: Mapas de calor y grabaciones de sesiones
- **Vercel Analytics**: Métricas de rendimiento en tiempo real
- **Sentry**: Monitoreo de errores en producción

## Estrategia SEO

### Optimización On-Page
- **Estructura de URLs**: Descriptivas y amigables (/music/album-name)
- **Metadatos dinámicos**: 
  ```html
  <title>Javier Diagaz - {{pageTitle}}</title>
  <meta name="description" content="{{pageDescription}}">
  ```
- **Datos estructurados (Schema.org)**: 
  ```html
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "MusicAlbum",
    "name": "Nuevo Álbum",
    "byArtist": {
      "@type": "MusicGroup",
      "name": "Javier Diagaz"
    }
  }
  </script>
  ```
- **Optimización de imágenes**: Alt text descriptivo y contexto relevante

### Estrategia de Contenido
- **Landing pages por género musical**
- **Blog integrado** con artículos sobre procesos creativos
- **Sección de prensa** con material para medios

### Monitoreo SEO
- **Google Search Console**: Seguimiento de posicionamiento
- **Auditorías SEO mensuales**: Usando herramientas como Screaming Frog
- **Estrategia de backlinks**: Mediante colaboraciones con otros artistas

## Sistema de Build y Automatización

### Herramientas
- **Webpack**: Configuración principal para:
  - **Entorno de desarrollo**: Hot Module Replacement (HMR)
  - **Entorno de producción**: Optimización avanzada
- **PostCSS**: Procesamiento de CSS con plugins:
  ```javascript
  // postcss.config.js
  module.exports = {
    plugins: [
      require('autoprefixer'),
      require('cssnano')({
        preset: ['default', {
          discardComments: { removeAll: true }
        }]
      })
    ]
  }
  ```
- **Babel**: Transpilación de JavaScript

### Scripts de Automatización
```json
// package.json
{
  "scripts": {
    "dev": "webpack serve --mode=development",
    "build": "webpack --mode=production",
    "analyze": "webpack --mode=production --analyze",
    "test": "jest",
    "lint": "eslint src/**/*.js",
    "format": "prettier --write \"src/**/*.{js,css,html}\"",
    "generate-release": "node scripts/generate-release.js"
  }
}
```

### Continuous Integration
- **GitHub Actions**: Pipeline automatizado para:
  - Ejecución de pruebas
  - Validación de código
  - Despliegue a entorno de staging

## Testing y Control de Calidad

### Tipos de Pruebas
- **Pruebas Unitarias**: 
  ```javascript
  // audioPlayer.test.js usando Jest
  describe('AudioPlayer', () => {
    test('should toggle play state when play/pause is called', () => {
      const player = new AudioPlayer();
      expect(player.isPlaying).toBe(false);
      player.play();
      expect(player.isPlaying).toBe(true);
      player.pause();
      expect(player.isPlaying).toBe(false);
    });
  });
  ```

- **Pruebas de Integración**: Cypress para interacciones complejas
- **Pruebas E2E**: Escenarios completos de usuario

### Pruebas de Rendimiento
- **WebPagetest**: Análisis detallado del sitio desde diferentes ubicaciones
- **Lighthouse CI**: Integración de auditorías en el pipeline de CI

### Revisión de Código
- **ESLint**: Configuración personalizada para mantener estándares
- **Prettier**: Formateo consistente del código
- **Code Reviews**: Proceso de revisión por pares

## Gestión de Dependencias

### Enfoque
- **Minimalista**: Mantener dependencias al mínimo necesario
- **Auditoría regular**: Verificación de vulnerabilidades con `npm audit`
- **Versionado específico**: Evitar rangos amplios (^x.x.x)

### package.json Optimizado
```json
{
  "name": "javierdiagaz-web",
  "version": "1.0.0",
  "description": "Sitio web oficial de Javier Diagaz",
  "main": "index.js",
  "dependencies": {
    "sanitize-html": "2.7.0"
  },
  "devDependencies": {
    "webpack": "5.72.0",
    "webpack-cli": "4.9.2",
    "webpack-dev-server": "4.8.1",
    "autoprefixer": "10.4.7",
    "postcss": "8.4.13",
    "cssnano": "5.1.7",
    "jest": "28.1.0",
    "cypress": "9.6.0",
    "eslint": "8.15.0",
    "prettier": "2.6.2"
  },
  "engines": {
    "node": ">=14.17.0",
    "npm": ">=7.0.0"
  }
}
```

### Actualización Planificada
- **Revisión trimestral** de dependencias para actualizaciones
- **Proceso de pruebas** antes de actualizar en producción
- **Registro de cambios** para seguimiento de actualizaciones

## Backups y Recuperación

### Estrategia de Backups
- **Repositorio**: Copias completas del código en:
  - GitHub (principal)
  - GitLab (espejo secundario)
- **Contenido**: Backup semanal automatizado de:
  - Recursos estáticos (imágenes, audio)
  - Base de datos de contenido (si aplica)
  - Configuraciones personalizadas

### Plan de Recuperación ante Desastres
- **Tiempo de Recuperación Objetivo (RTO)**: < 2 horas
- **Punto de Recuperación Objetivo (RPO)**: < 24 horas
- **Procedimiento documentado**:
  1. Identificación del problema
  2. Comunicación a stakeholders
  3. Activación del último backup estable
  4. Verificación de funcionalidad
  5. Análisis post-incidente

### Monitoreo Proactivo
- **UptimeRobot**: Verificación de disponibilidad cada 5 minutos
- **Alertas automáticas** por correo y SMS
- **Dashboard de estado** para visualización en tiempo real

## Documentación y Mantenimiento

### Documentación para Desarrolladores
- **Guía de Arquitectura**: Visión general y decisiones técnicas
- **Convenciones de Código**: Estándares y mejores prácticas
- **Guías de Componentes**: JSDoc para funciones y componentes
```javascript
/**
 * Inicializa el reproductor de audio con los controles personalizados
 * @param {HTMLElement} container - Elemento contenedor para el reproductor
 * @param {Object} options - Opciones de configuración
 * @param {string} options.trackUrl - URL del audio a reproducir
 * @param {boolean} [options.autoplay=false] - Iniciar reproducción automáticamente
 * @returns {Object} API del reproductor con métodos play, pause, etc.
 */
function initAudioPlayer(container, options) {
  // Implementación...
}
```

### Proceso de Actualización
- **Plan de Lanzamientos**: Calendario trimestral de actualizaciones
- **Versionado Semántico**: Siguiendo convenciones MAJOR.MINOR.PATCH
- **Changelog**: Registro detallado de cambios para cada versión

### Mantenimiento a Largo Plazo
- **Auditoría Técnica Anual**: Revisión completa de tecnologías
- **Refactorización Planificada**: Identificación de deuda técnica
- **Procedimiento de Migración**: Plan para actualización de tecnologías obsoletas

## Cómo Contribuir

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/javierdiagaz-web.git
   ```

2. Estructura de ramas:
   - `main`: Producción
   - `develop`: Desarrollo
   - `feature/nombre-caracteristica`: Para nuevas características
   - `hotfix/nombre-error`: Para correcciones urgentes

3. Proceso de contribución:
   - Fork del repositorio
   - Crear rama descriptiva
   - Realizar cambios siguiendo guías de estilo
   - Crear pull request con descripción detallada

4. Standards de código:
   - HTML: Validación W3C
   - CSS: BEM para clases
   - JavaScript: ESLint con configuración estándar

## Despliegue en Vercel

### Configuración Inicial
1. Conectar repositorio GitHub a Vercel
2. Configurar variables de entorno:
   - `SPOTIFY_CLIENT_ID`
   - `SPOTIFY_CLIENT_SECRET`
   - `GA_TRACKING_ID`

### Proceso de Despliegue Continuo
1. Push a `main` despliega automáticamente a producción
2. Pull requests generan preview deployments
3. Rollback disponible en caso de problemas

### Optimizaciones Específicas
- Edge Functions para APIs dinámicas
- Image Optimization automática
- Prerendering de páginas estáticas
- Edge Caching para rendimiento global
