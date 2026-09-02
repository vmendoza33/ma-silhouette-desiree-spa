import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuración estándar de Vite + React.
// Sin configuración especial de "base": el sitio usa navegación por hash
// (#/masajes, #/masajes/masaje-relajante, etc.), por lo que funciona
// igual en la raíz de un dominio propio o en un subpath, sin necesidad
// de reglas de reescritura del servidor.
export default defineConfig({
  plugins: [react()],
});
