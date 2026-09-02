# Ma Silhouette Desirée Spa — Catálogo web

Proyecto independiente (React + Vite) del catálogo digital de Ma Silhouette
Desirée Spa. No depende de Claude ni del entorno de Artifacts: es un sitio
estático normal, listo para desplegarse en cualquier hosting estático,
incluyendo Cloudflare Pages.

## Qué incluye

- `src/App.jsx` — toda la lógica del sitio: datos de los servicios, navegación
  entre Inicio / Masajes / Faciales / Servicios Extras / Contacto, fichas
  individuales, botón flotante de WhatsApp contextual, etc.
- `src/styles/global.css` — estilos globales (paleta, tipografía, layout,
  responsive).
- `src/assets/fonts/` — las 4 tipografías oficiales de la marca (Motena
  Golden, Mundial Regular, Mundial Bold, Aura Hives), ya optimizadas para
  web (solo los caracteres que el sitio usa, en formato WOFF).
- `src/assets/images/` — el logotipo oficial y el ícono de marca, en las
  variantes de color que usa el sitio.
- `public/favicon.png` — ícono de la pestaña del navegador.
- `public/_redirects` — regla de Cloudflare Pages (no es indispensable, ya
  que el sitio usa navegación por hash, pero queda como red de seguridad).

No se modificó ningún precio, texto, color ni comportamiento respecto a la
versión aprobada. Es exactamente el mismo sitio, empaquetado como proyecto
independiente.

## Desarrollo local

Requiere [Node.js](https://nodejs.org) 18 o superior.

```bash
npm install
npm run dev
```

Esto abre el sitio en `http://localhost:5173` con recarga en caliente.

## Generar la build de producción

```bash
npm run build
```

Esto genera la carpeta `dist/` con el sitio ya compilado y optimizado
(HTML, CSS y JS listos para producción). Puedes previsualizar esa build
localmente con:

```bash
npm run preview
```

## Desplegar en Cloudflare Pages (vía GitHub)

1. **Sube este proyecto a un repositorio de GitHub.**
   Dentro de esta misma carpeta:
   ```bash
   git init
   git add .
   git commit -m "Catálogo web Ma Silhouette Desirée Spa"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
   git push -u origin main
   ```

2. **Entra a Cloudflare Pages.**
   - Ve a [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create application** → pestaña **Pages** → **Connect to Git**.
   - Autoriza el acceso a GitHub y selecciona el repositorio que acabas de crear.

3. **Configura el build con estos valores:**
   | Campo | Valor |
   |---|---|
   | Framework preset | `Vite` (si no aparece, usa `None`) |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Root directory | `/` (raíz del repo) |

4. **Despliega.**
   Cloudflare instalará las dependencias, correrá `npm run build` y
   publicará el contenido de `dist/`. Al terminar te dará una URL gratuita
   del tipo:
   ```
   https://masilhouette-spa.pages.dev
   ```
   (el subdominio exacto depende del nombre que le des al proyecto dentro
   de Cloudflare Pages en el paso de configuración inicial).

5. **Actualizaciones futuras.**
   Cualquier cambio que subas a la rama `main` en GitHub (por ejemplo, un
   precio nuevo editado en `src/App.jsx`) se vuelve a desplegar
   automáticamente — no hay que repetir estos pasos cada vez.

## Dominio propio (opcional, más adelante)

Una vez publicado en `pages.dev`, Cloudflare Pages permite conectar un
dominio propio (por ejemplo `www.masilhouettedesireespa.com`) desde la
pestaña **Custom domains** del proyecto, sin volver a tocar el código.

## Editar contenido (precios, servicios, textos)

Toda la información editable vive en un solo lugar: el objeto `DATA` al
inicio de `src/App.jsx` (datos del negocio, y los servicios de cada
categoría: masajes, faciales, extras). Cambiar un precio, nombre,
descripción o mensaje de WhatsApp es editar ese campo ahí — el resto del
sitio se actualiza solo. Después de editar, corre `npm run build` de nuevo
(o simplemente sube el cambio a GitHub si ya está conectado a Cloudflare
Pages, y se construye solo).
