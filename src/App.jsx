import React, { useState, useEffect, useMemo, useCallback } from "react";

import logoFullColor from "./assets/images/logo-full-color.png";
import logoFullWhite from "./assets/images/logo-full-white.png";
import logoWordmarkColor from "./assets/images/logo-wordmark-color.png";
import iconColor from "./assets/images/icon-color.png";
import iconWhite from "./assets/images/icon-white.png";
import badgeWhite from "./assets/images/badge-white.png";


/* ============================================================
   1. DATOS — separados por completo de la presentación visual.
   ============================================================ */

const DATA = {
  sitio: {
    nombre: "Ma Silhouette Desirée Spa",
    tagline: "Aquí comienza tu momento",
    direccion: "Av. Gonzalo de Sandoval #1458, Colima, Col. Col. Revolución",
    telefonoLocal: "3121315700",
    telefonoWhatsapp: "523121315700",
    whatsappMensajeGenerico: "Hola, me gustaría más información sobre sus servicios.",
    instagram: "masilhouette.spa",
    facebook: "Ma silhouette Desirée spa",
    horario: "Bajo previa cita",
  },

  categorias: {
    masajes: {
      titulo: "Masajes",
      subtitulo: "Técnicas manuales para liberar tensión y restaurar el equilibrio del cuerpo.",
      notaGeneral:
        "Todos nuestros masajes incluyen bebida de cortesía, aromaterapia, musicoterapia y ambiente relajante.",
      servicios: [
        {
          id: "masaje-relajante",
          nombre: "Masaje relajante",
          duracion: "60 minutos",
          descripcion: "Cuerpo completo, frente y espalda",
          incluye: [],
          tipoPrecio: "fijo",
          precio: 500,
          precioTexto: null,
          mensajeWhatsapp: "Hola, me gustaría agendar el Masaje relajante. ¿Qué disponibilidad tienen?",
        },
        {
          id: "masaje-descontracturante",
          nombre: "Descontracturante, tejido profundo, quiromasaje",
          duracion: "60 minutos",
          descripcion: "Cuerpo completo, frente y espalda",
          incluye: [],
          tipoPrecio: "fijo",
          precio: 550,
          precioTexto: null,
          mensajeWhatsapp:
            "Hola, me gustaría agendar el masaje Descontracturante, tejido profundo, quiromasaje. ¿Qué disponibilidad tienen?",
        },
        {
          id: "masaje-bruxismo",
          nombre: "Masaje de bruxismo",
          duracion: "30 minutos",
          descripcion: "Cara, mandíbula, cuello y hombros",
          incluye: [],
          tipoPrecio: "fijo",
          precio: 300,
          precioTexto: null,
          mensajeWhatsapp: "Hola, me gustaría agendar el Masaje de bruxismo. ¿Qué disponibilidad tienen?",
        },
        {
          id: "masaje-craneal-cuello-espalda",
          nombre: "Masaje craneal, cuello y espalda",
          duracion: "30 minutos",
          descripcion: "Cabeza, cuello y espalda",
          incluye: [],
          tipoPrecio: "fijo",
          precio: 300,
          precioTexto: null,
          mensajeWhatsapp: "Hola, me gustaría agendar el Masaje craneal, cuello y espalda. ¿Qué disponibilidad tienen?",
        },
        {
          id: "masaje-postoperatorio",
          nombre: "Masaje postoperatorio (personalizado)",
          duracion: null,
          descripcion: "Tratamiento personalizado según tipo de cirugía",
          incluye: [],
          tipoPrecio: "personalizado",
          precio: null,
          precioTexto: "Duración y precio según evaluación",
          mensajeWhatsapp:
            "Hola, me interesa el Masaje postoperatorio y quisiera agendar una evaluación. ¿Qué disponibilidad tienen?",
        },
        {
          id: "drenaje-linfatico-completo",
          nombre: "Drenaje linfático cuerpo completo",
          duracion: "60 minutos",
          descripcion: "Cuerpo completo, frente y espalda",
          incluye: [],
          tipoPrecio: "fijo",
          precio: 550,
          precioTexto: null,
          mensajeWhatsapp: "Hola, me gustaría agendar el Drenaje linfático cuerpo completo. ¿Qué disponibilidad tienen?",
        },
        {
          id: "drenaje-linfatico-personalizado",
          nombre: "Drenaje linfático personalizado",
          duracion: null,
          descripcion: "Zona o zonas a tratar (personalizado)",
          incluye: [],
          tipoPrecio: "personalizado",
          precio: null,
          precioTexto: "Duración y precio según evaluación",
          mensajeWhatsapp:
            "Hola, me interesa el Drenaje linfático personalizado y quisiera agendar una evaluación. ¿Qué disponibilidad tienen?",
        },
        {
          id: "masaje-reductivo-maderoterapia",
          nombre: "Masaje reductivo con maderoterapia",
          duracion: "60 minutos",
          descripcion: "Cuerpo completo, frente y espalda",
          incluye: [],
          tipoPrecio: "fijo",
          precio: 550,
          precioTexto: null,
          mensajeWhatsapp: "Hola, me gustaría agendar el Masaje reductivo con maderoterapia. ¿Qué disponibilidad tienen?",
        },
        {
          id: "masaje-reductivo-personalizado",
          nombre: "Masaje reductivo personalizado",
          duracion: null,
          descripcion: "Zona o zonas a tratar (personalizado)",
          incluye: [],
          tipoPrecio: "personalizado",
          precio: null,
          precioTexto: "Duración y precio según zona/evaluación",
          mensajeWhatsapp:
            "Hola, me interesa el Masaje reductivo personalizado y quisiera agendar una evaluación. ¿Qué disponibilidad tienen?",
        },
        {
          id: "terapia-especial-masaje",
          nombre: "Terapia especial de masaje",
          duracion: "90 minutos",
          descripcion: "Cuerpo completo, frente y espalda",
          incluye: [],
          tipoPrecio: "fijo",
          precio: 650,
          precioTexto: null,
          mensajeWhatsapp: "Hola, me gustaría agendar la Terapia especial de masaje. ¿Qué disponibilidad tienen?",
        },
      ],
    },

    faciales: {
      titulo: "Faciales",
      subtitulo: "Protocolos personalizados de cuidado facial, evaluados antes de cada tratamiento.",
      bloqueConfianza: [
        "Productos profesionales de alta calidad",
        "Protocolos seguros y personalizados",
        "Evaluación previa para cada tratamiento",
      ],
      servicios: [
        {
          id: "facial-mantenimiento",
          nombre: "Facial de mantenimiento",
          duracion: null,
          descripcion: null,
          incluye: [
            "Limpieza y preparación de la piel",
            "Exfoliación",
            "Microdermoabrasión con punta diamante",
            "Mascarilla personalizada",
            "Masaje con terapia LED",
          ],
          tipoPrecio: "fijo",
          precio: 349,
          precioTexto: null,
          mensajeWhatsapp: "Hola, me gustaría agendar el Facial de mantenimiento. ¿Qué disponibilidad tienen?",
        },
        {
          id: "limpieza-facial-profunda",
          nombre: "Limpieza facial Profunda",
          duracion: null,
          descripcion: null,
          incluye: [
            "Limpieza y preparación de la piel",
            "Exfoliación",
            "Vaporización",
            "Extracción manual de impurezas",
            "Skin Scrubber",
            "Microdermoabrasión con punta diamante",
            "Alta frecuencia",
            "Mascarilla personalizada",
            "Masaje con terapia LED",
          ],
          tipoPrecio: "fijo",
          precio: 389,
          precioTexto: null,
          mensajeWhatsapp: "Hola, me gustaría agendar la Limpieza facial Profunda. ¿Qué disponibilidad tienen?",
        },
        {
          id: "microneedling-dermapen-express",
          nombre: "Microneedling (Dermapen) — Dermapen Express",
          duracion: null,
          descripcion: null,
          incluye: [
            "Limpieza de la piel",
            "Exfoliante enzimático",
            "Ampolleta de acuerdo a sus necesidades",
            "Mascarilla calmante",
            "Terapia LED",
          ],
          tipoPrecio: "fijo",
          precio: 549,
          precioTexto: null,
          mensajeWhatsapp: "Hola, me gustaría agendar el Dermapen Express. ¿Qué disponibilidad tienen?",
        },
        {
          id: "dermapen-plus",
          nombre: "Dermapen Plus",
          duracion: null,
          descripcion: null,
          incluye: [
            "Limpieza facial profunda",
            "Ampolleta de acuerdo a sus necesidades",
            "Mascarilla calmante",
            "Terapia LED",
          ],
          tipoPrecio: "fijo",
          precio: 749,
          precioTexto: null,
          mensajeWhatsapp: "Hola, me gustaría agendar el Dermapen Plus. ¿Qué disponibilidad tienen?",
        },
        {
          id: "reafirmante-radiofrecuencia",
          nombre: "Reafirmante — Radiofrecuencia facial",
          duracion: null,
          descripcion: null,
          incluye: [
            "Limpieza y preparación de la piel",
            "Radiofrecuencia facial con ampolleta de acuerdo a sus necesidades",
            "Mascarilla personalizada",
            "Masaje con terapia LED",
          ],
          tipoPrecio: "fijo",
          precio: 449,
          precioTexto: null,
          mensajeWhatsapp:
            "Hola, me gustaría agendar el tratamiento Reafirmante (Radiofrecuencia facial). ¿Qué disponibilidad tienen?",
        },
        {
          id: "fotorejuvenecimiento",
          nombre: "Fotorejuvenecimiento",
          duracion: null,
          descripcion: null,
          incluye: ["Limpieza facial profunda", "Luz Pulsada Intensa (IPL)", "Mascarilla calmante"],
          tipoPrecio: "fijo",
          precio: 499,
          precioTexto: null,
          mensajeWhatsapp: "Hola, me gustaría agendar el Fotorejuvenecimiento. ¿Qué disponibilidad tienen?",
        },
        {
          id: "tratamiento-piel-acne",
          nombre: "Tratamiento para piel con acné",
          duracion: null,
          descripcion: null,
          incluye: [
            "Limpieza y preparación de la piel",
            "Luz Pulsada Intensa (IPL)",
            "Alta frecuencia",
            "Mascarilla calmante",
          ],
          tipoPrecio: "fijo",
          precio: 349,
          precioTexto: null,
          mensajeWhatsapp: "Hola, me gustaría agendar el Tratamiento para piel con acné. ¿Qué disponibilidad tienen?",
        },
      ],
    },

    extras: {
      titulo: "Servicios Extras",
      subtitulo: "Tratamientos complementarios para el cuidado del cuerpo.",
      servicios: [
        {
          id: "depilacion-laser",
          nombre: "Depilación láser",
          duracion: null,
          descripcion: "Personalizado, dependiendo de las zonas. Cobro por sesión.",
          incluye: [],
          tipoPrecio: "personalizado",
          precio: null,
          precioTexto: "Cotización personalizada por sesión",
          mensajeWhatsapp:
            "Hola, me interesa la Depilación láser y quisiera información sobre precios según zona. ¿Qué disponibilidad tienen?",
        },
        {
          id: "limpieza-oidos-conoterapia",
          nombre: "Limpieza de oídos con conoterapia",
          duracion: null,
          descripcion: null,
          incluye: [],
          tipoPrecio: "fijo",
          precio: 259,
          precioTexto: null,
          mensajeWhatsapp: "Hola, me gustaría agendar la Limpieza de oídos con conoterapia. ¿Qué disponibilidad tienen?",
        },
        {
          id: "exfoliacion-cuerpo-completo",
          nombre: "Exfoliación de cuerpo completo",
          duracion: null,
          descripcion: null,
          incluye: [],
          tipoPrecio: "fijo",
          precio: 359,
          precioTexto: null,
          mensajeWhatsapp: "Hola, me gustaría agendar la Exfoliación de cuerpo completo. ¿Qué disponibilidad tienen?",
        },
        {
          id: "limpieza-oidos-masaje-espalda",
          nombre: "Limpieza de oídos y masaje de espalda",
          duracion: null,
          descripcion: null,
          incluye: [],
          tipoPrecio: "fijo",
          precio: 449,
          precioTexto: null,
          mensajeWhatsapp: "Hola, me gustaría agendar la Limpieza de oídos y masaje de espalda. ¿Qué disponibilidad tienen?",
        },
        {
          id: "limpieza-profunda-espalda",
          nombre: "Limpieza profunda de espalda",
          duracion: null,
          descripcion: null,
          incluye: [],
          tipoPrecio: "fijo",
          precio: 459,
          precioTexto: null,
          mensajeWhatsapp: "Hola, me gustaría agendar la Limpieza profunda de espalda. ¿Qué disponibilidad tienen?",
        },
        {
          id: "limpieza-facial-mas-masaje",
          nombre: "Limpieza facial + masaje",
          duracion: null,
          descripcion: null,
          incluye: [],
          tipoPrecio: "fijo",
          precio: 849,
          precioTexto: null,
          mensajeWhatsapp: "Hola, me gustaría agendar el paquete Limpieza facial + masaje. ¿Qué disponibilidad tienen?",
        },
        {
          id: "limpieza-facial-mas-oidos",
          nombre: "Limpieza facial + limpieza de oídos",
          duracion: null,
          descripcion: null,
          incluye: [],
          tipoPrecio: "fijo",
          precio: 599,
          precioTexto: null,
          mensajeWhatsapp:
            "Hola, me gustaría agendar el paquete Limpieza facial + limpieza de oídos. ¿Qué disponibilidad tienen?",
        },
      ],
    },
  },
};

const CATEGORIA_ORDEN = ["masajes", "faciales", "extras"];

/* ============================================================
   2. UTILIDADES
   ============================================================ */

function waLink(mensaje) {
  return `https://wa.me/${DATA.sitio.telefonoWhatsapp}?text=${encodeURIComponent(mensaje)}`;
}

function formatPrecio(n) {
  return `$${n.toLocaleString("es-MX")}`;
}

function findServicio(categoriaId, servicioId) {
  const cat = DATA.categorias[categoriaId];
  if (!cat) return null;
  return cat.servicios.find((s) => s.id === servicioId) || null;
}

function parseHash() {
  const raw = (typeof window !== "undefined" ? window.location.hash : "").replace(/^#\/?/, "");
  const parts = raw.split("/").filter(Boolean);
  if (parts.length === 0) return { page: "inicio" };
  if (parts[0] === "contacto") return { page: "contacto" };
  if (CATEGORIA_ORDEN.includes(parts[0])) {
    if (parts[1]) return { page: "ficha", categoria: parts[0], servicioId: parts[1] };
    return { page: "categoria", categoria: parts[0] };
  }
  return { page: "inicio" };
}

function routeToHash(route) {
  if (route.page === "inicio") return "#/";
  if (route.page === "contacto") return "#/contacto";
  if (route.page === "categoria") return `#/${route.categoria}`;
  if (route.page === "ficha") return `#/${route.categoria}/${route.servicioId}`;
  return "#/";
}

/* ============================================================
   4. LOGOTIPO E ICONOGRAFÍA (assets reales de la guía de marca)
   ============================================================ */

// Lockup completo (ícono + wordmark + "Desirée · Spa"). Usar en Hero y Footer.
function LogoFull({ tone = "color", className = "" }) {
  const src = tone === "white" ? logoFullWhite : logoFullColor;
  return <img src={src} alt="Ma Silhouette Desirée Spa" className={`msd-logo-full ${className}`} />;
}

// Wordmark sin ícono, para espacios compactos (header). Solo se usa sobre
// fondo claro en este sitio, por eso se embebe únicamente esa variante.
function LogoWordmark({ className = "" }) {
  return <img src={logoWordmarkColor} alt="Ma Silhouette Desirée Spa" className={`msd-logo-wordmark ${className}`} />;
}

// Ícono/gráfico auxiliar solo (silueta lineal), como recurso ornamental.
function BrandIcon({ tone = "color", className = "" }) {
  const src = tone === "white" ? iconWhite : iconColor;
  return <img src={src} alt="" aria-hidden="true" className={`msd-icon ${className}`} />;
}

// Versión circular (sello), usada como acento decorativo puntual.
// Solo se usa sobre fondo oscuro (menú móvil), por eso se embebe únicamente esa variante.
function BrandBadge({ className = "" }) {
  return <img src={badgeWhite} alt="" aria-hidden="true" className={`msd-badge ${className}`} />;
}

function IconChat({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16 5C9.9 5 5 9.4 5 14.9c0 2.9 1.4 5.5 3.6 7.3-.2 1.6-.9 3.2-1.9 4.5 2-.2 3.9-1 5.4-2.1 1.2.4 2.5.6 3.9.6 6.1 0 11-4.4 11-9.9S22.1 5 16 5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="11.3" cy="14.9" r="1.15" fill="currentColor" />
      <circle cx="16" cy="14.9" r="1.15" fill="currentColor" />
      <circle cx="20.7" cy="14.9" r="1.15" fill="currentColor" />
    </svg>
  );
}

function IconArrowLeft({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14.5 5 8 12l6.5 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconMenu({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function IconClose({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function IconInstagram({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

function IconFacebook({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14.5 21v-7.2h2.4l.4-2.8h-2.8V9.2c0-.8.2-1.4 1.4-1.4h1.5V5.3c-.3 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7v2.1H9.3v2.8h2.4V21"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPin({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s7-6.3 7-11.5A7 7 0 0 0 5 9.5C5 14.7 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function IconClock({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 8v4.2l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ============================================================
   5. NAVEGACIÓN
   ============================================================ */

const NAV_ITEMS = [
  { label: "Inicio", page: "inicio" },
  { label: "Masajes", page: "categoria", categoria: "masajes" },
  { label: "Faciales", page: "categoria", categoria: "faciales" },
  { label: "Servicios Extras", page: "categoria", categoria: "extras" },
  { label: "Contacto", page: "contacto" },
];

function isActive(route, item) {
  if (item.page === "inicio") return route.page === "inicio";
  if (item.page === "contacto") return route.page === "contacto";
  if (item.page === "categoria") {
    return (route.page === "categoria" || route.page === "ficha") && route.categoria === item.categoria;
  }
  return false;
}

function Header({ route, navigate }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [route.page, route.categoria, route.servicioId]);

  return (
    <header className="msd-header">
      <button className="msd-header__brand" onClick={() => navigate({ page: "inicio" })} aria-label="Ir a inicio">
        <LogoWordmark className="msd-header__logo" />
      </button>

      <nav className="msd-header__nav msd-header__nav--desktop" aria-label="Navegación principal">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.label}
            className={`msd-navlink ${isActive(route, item) ? "is-active" : ""}`}
            onClick={() => navigate(item.page === "categoria" ? { page: "categoria", categoria: item.categoria } : { page: item.page })}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <button
        className="msd-header__menu-btn"
        onClick={() => setOpen(true)}
        aria-label="Abrir menú de navegación"
      >
        <IconMenu />
      </button>

      {open && (
        <div className="msd-mobile-menu" role="dialog" aria-label="Menú">
          <button className="msd-mobile-menu__close" onClick={() => setOpen(false)} aria-label="Cerrar menú">
            <IconClose />
          </button>
          <div className="msd-mobile-menu__list">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                className={`msd-mobile-menu__link ${isActive(route, item) ? "is-active" : ""}`}
                onClick={() =>
                  navigate(item.page === "categoria" ? { page: "categoria", categoria: item.categoria } : { page: item.page })
                }
              >
                {item.label}
              </button>
            ))}
          </div>
          <BrandBadge className="msd-mobile-menu__badge" />
        </div>
      )}
    </header>
  );
}

/* ============================================================
   6. BOTÓN FLOTANTE DE WHATSAPP (contextual)
   ============================================================ */

function FloatingWhatsApp({ route }) {
  let mensaje = DATA.sitio.whatsappMensajeGenerico;
  if (route.page === "ficha") {
    const servicio = findServicio(route.categoria, route.servicioId);
    if (servicio) mensaje = servicio.mensajeWhatsapp;
  }
  return (
    <a
      className="msd-floating-wa"
      href={waLink(mensaje)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar por WhatsApp"
    >
      <IconChat className="msd-floating-wa__icon" />
    </a>
  );
}

/* ============================================================
   7. TARJETAS Y BLOQUES REUTILIZABLES
   ============================================================ */

function PrecioTag({ servicio, compact = false }) {
  if (servicio.tipoPrecio === "fijo") {
    return <span className="msd-precio">{formatPrecio(servicio.precio)}</span>;
  }
  return (
    <span className={`msd-precio msd-precio--personalizado ${compact ? "msd-precio--compact" : ""}`}>
      {compact ? "A medida" : servicio.precioTexto}
    </span>
  );
}

function ServicioCard({ servicio, categoria, navigate }) {
  return (
    <button
      className="msd-card"
      onClick={() => navigate({ page: "ficha", categoria, servicioId: servicio.id })}
    >
      <div className="msd-card__top">
        <h3 className="msd-card__nombre">{servicio.nombre}</h3>
        {servicio.duracion && <p className="msd-card__duracion">{servicio.duracion}</p>}
      </div>
      <div className="msd-card__bottom">
        <PrecioTag servicio={servicio} compact />
        <span className="msd-card__chevron" aria-hidden="true">›</span>
      </div>
    </button>
  );
}

function SectionHeading({ eyebrow, title, subtitle, tone = "light" }) {
  return (
    <div className={`msd-section-heading msd-section-heading--${tone}`}>
      <BrandIcon tone={tone === "dark" ? "white" : "color"} className="msd-section-heading__icon" />
      {eyebrow && <p className="msd-eyebrow">{eyebrow}</p>}
      <h1 className="msd-title">{title}</h1>
      {subtitle && <p className="msd-subtitle">{subtitle}</p>}
    </div>
  );
}

function BackButton({ label, onClick }) {
  return (
    <button className="msd-back" onClick={onClick}>
      <IconArrowLeft className="msd-back__icon" />
      <span>{label}</span>
    </button>
  );
}

/* ============================================================
   8. PÁGINAS
   ============================================================ */

function InicioPage({ navigate }) {
  return (
    <div className="msd-page">
      <section className="msd-hero">
        <div className="msd-hero__content">
          <LogoFull tone="white" className="msd-hero__logo" />
          <p className="msd-hero__tagline">
            <span className="msd-hero__tagline-cap">A</span>quí comienza tu momento
          </p>
        </div>
      </section>

      <section className="msd-categorias">
        <p className="msd-eyebrow msd-eyebrow--center">Nuestros servicios</p>
        <div className="msd-categorias__grid">
          {CATEGORIA_ORDEN.map((catId) => {
            const cat = DATA.categorias[catId];
            return (
              <button
                key={catId}
                className="msd-categoria-tile"
                onClick={() => navigate({ page: "categoria", categoria: catId })}
              >
                <h2>{cat.titulo}</h2>
                <p>{cat.subtitulo}</p>
                <span className="msd-categoria-tile__link">Ver servicios ›</span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="msd-info-breve">
        <div className="msd-info-breve__item">
          <IconClock className="msd-info-breve__icon" />
          <div>
            <p className="msd-info-breve__label">Horario</p>
            <p className="msd-info-breve__value">{DATA.sitio.horario}</p>
          </div>
        </div>
        <div className="msd-info-breve__item">
          <IconPin className="msd-info-breve__icon" />
          <div>
            <p className="msd-info-breve__label">Ubicación</p>
            <p className="msd-info-breve__value">Colima, Colima</p>
          </div>
        </div>
      </section>

      <section className="msd-cta-band">
        <h2>Agenda tu cita por WhatsApp</h2>
        <a
          className="msd-btn msd-btn--primary msd-btn--onDark"
          href={waLink(DATA.sitio.whatsappMensajeGenerico)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Escribir por WhatsApp
        </a>
      </section>
    </div>
  );
}

function CategoriaPage({ categoriaId, navigate }) {
  const cat = DATA.categorias[categoriaId];
  if (!cat) return null;

  return (
    <div className="msd-page">
      <div className="msd-page__inner">
        <BackButton label="Inicio" onClick={() => navigate({ page: "inicio" })} />
        <SectionHeading title={cat.titulo} subtitle={cat.subtitulo} tone="light" />

        {cat.notaGeneral && (
          <div className="msd-nota-general">
            <p>{cat.notaGeneral}</p>
          </div>
        )}

        {cat.bloqueConfianza && (
          <ul className="msd-bloque-confianza">
            {cat.bloqueConfianza.map((linea) => (
              <li key={linea}>{linea}</li>
            ))}
          </ul>
        )}

        <div className="msd-cards-grid">
          {cat.servicios.map((s) => (
            <ServicioCard key={s.id} servicio={s} categoria={categoriaId} navigate={navigate} />
          ))}
        </div>
      </div>
    </div>
  );
}

function FichaPage({ categoriaId, servicioId, navigate }) {
  const cat = DATA.categorias[categoriaId];
  const servicio = findServicio(categoriaId, servicioId);

  if (!cat || !servicio) {
    return (
      <div className="msd-page">
        <div className="msd-page__inner">
          <BackButton label="Inicio" onClick={() => navigate({ page: "inicio" })} />
          <p>No se encontró este servicio.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="msd-page">
      <div className="msd-page__inner msd-ficha">
        <BackButton label={cat.titulo} onClick={() => navigate({ page: "categoria", categoria: categoriaId })} />

        <h1 className="msd-ficha__nombre">{servicio.nombre}</h1>

        {servicio.duracion && (
          <p className="msd-ficha__duracion">
            <IconClock className="msd-ficha__duracion-icon" />
            {servicio.duracion}
          </p>
        )}

        {servicio.descripcion && <p className="msd-ficha__descripcion">{servicio.descripcion}</p>}

        {servicio.incluye.length > 0 && (
          <>
            <hr className="msd-divider" />
            <div className="msd-ficha__incluye">
              <p className="msd-eyebrow">Qué incluye</p>
              <ul>
                {servicio.incluye.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </>
        )}

        <hr className="msd-divider" />

        <div className="msd-ficha__precio-block">
          <p className="msd-eyebrow">
            {servicio.tipoPrecio === "fijo" ? "Precio" : "Condición de precio"}
          </p>
          <PrecioTag servicio={servicio} />
        </div>

        <a
          className="msd-btn msd-btn--primary msd-ficha__cta"
          href={waLink(servicio.mensajeWhatsapp)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Agendar por WhatsApp
        </a>
      </div>
    </div>
  );
}

function ContactoPage() {
  const mapQuery = encodeURIComponent(`${DATA.sitio.nombre}, ${DATA.sitio.direccion}`);
  return (
    <div className="msd-page msd-page--dark">
      <div className="msd-page__inner">
        <SectionHeading eyebrow="Visítanos" title="Contacto" tone="dark" />

        <div className="msd-contacto__grid">
          <div className="msd-contacto__item">
            <IconPin className="msd-contacto__icon" />
            <div>
              <p className="msd-contacto__label">Dirección</p>
              <p className="msd-contacto__value">{DATA.sitio.direccion}</p>
            </div>
          </div>

          <div className="msd-contacto__item">
            <IconClock className="msd-contacto__icon" />
            <div>
              <p className="msd-contacto__label">Horario</p>
              <p className="msd-contacto__value">{DATA.sitio.horario}</p>
            </div>
          </div>

          <div className="msd-contacto__item">
            <IconChat className="msd-contacto__icon" />
            <div>
              <p className="msd-contacto__label">WhatsApp</p>
              <p className="msd-contacto__value">{DATA.sitio.telefonoLocal} (solo WhatsApp)</p>
            </div>
          </div>
        </div>

        <div className="msd-contacto__redes">
          <a
            className="msd-btn msd-btn--secondary msd-btn--onDark"
            href={`https://instagram.com/${DATA.sitio.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconInstagram className="msd-btn__icon" /> @{DATA.sitio.instagram}
          </a>
          <a
            className="msd-btn msd-btn--secondary msd-btn--onDark"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconFacebook className="msd-btn__icon" /> Facebook
          </a>
        </div>

        <div className="msd-mapa">
          <iframe
            title="Ubicación de Ma Silhouette Desirée Spa"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <a
          className="msd-btn msd-btn--primary msd-btn--onDark msd-contacto__cta"
          href={waLink(DATA.sitio.whatsappMensajeGenerico)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Escribir por WhatsApp
        </a>
      </div>
    </div>
  );
}

function Footer({ navigate }) {
  return (
    <footer className="msd-footer">
      <div className="msd-footer__brand">
        <LogoFull tone="color" className="msd-footer__logo" />
      </div>
      <div className="msd-footer__cols">
        <div>
          <p className="msd-footer__label">Dirección</p>
          <p>{DATA.sitio.direccion}</p>
        </div>
        <div>
          <p className="msd-footer__label">Horario</p>
          <p>{DATA.sitio.horario}</p>
        </div>
        <div>
          <p className="msd-footer__label">Contacto</p>
          <p>WhatsApp {DATA.sitio.telefonoLocal}</p>
          <p>Instagram @{DATA.sitio.instagram}</p>
          <p>Facebook: {DATA.sitio.facebook}</p>
        </div>
      </div>
      <nav className="msd-footer__nav">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.label}
            onClick={() => navigate(item.page === "categoria" ? { page: "categoria", categoria: item.categoria } : { page: item.page })}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </footer>
  );
}

/* ============================================================
   9. APP
   ============================================================ */

export default function App() {
  const [route, setRoute] = useState(() => (typeof window !== "undefined" ? parseHash() : { page: "inicio" }));

  useEffect(() => {
    const onHashChange = () => setRoute(parseHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const navigate = useCallback((nextRoute) => {
    setRoute(nextRoute);
    const hash = routeToHash(nextRoute);
    if (window.location.hash !== hash) window.location.hash = hash;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const page = useMemo(() => {
    switch (route.page) {
      case "categoria":
        return <CategoriaPage categoriaId={route.categoria} navigate={navigate} />;
      case "ficha":
        return <FichaPage categoriaId={route.categoria} servicioId={route.servicioId} navigate={navigate} />;
      case "contacto":
        return <ContactoPage />;
      default:
        return <InicioPage navigate={navigate} />;
    }
  }, [route, navigate]);

  return (
    <div className="msd-app">
      <Header route={route} navigate={navigate} />
      <main>{page}</main>
      <Footer navigate={navigate} />
      <FloatingWhatsApp route={route} />
    </div>
  );
}
