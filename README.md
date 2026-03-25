# 🎮 MegaJuegos Frontend

Bienvenido a **MegaJuegos**, una plataforma de minijuegos con estética **arcade retro**: píxeles, neón y pura nostalgia 🎯

La idea es simple: jugar rápido, sin descargas, directamente desde el navegador.

---

## 🕹️ Características

* 🎨 Estilo visual **pixelado + neón**
* ⚡ Juegos ligeros en HTML, CSS y JavaScript
* 🧩 Arquitectura modular para añadir nuevos juegos fácilmente
* 🚀 Navegación SPA con Vue
* 🖥️ Ejecución directa en navegador (sin APIs externas)

---

## 🏗️ Estructura del proyecto

```
/frontend
│
├── /public
│   └── /games
│       ├── /2048
│       │   ├── index.html
│       │   ├── game.js
│       │   └── style.css
│       └── /tetris
│
├── /src
│   ├── /components
│   │   └── GameCard.vue
│   │
│   ├── /views
│   │   ├── Home.vue
│   │   └── GameView.vue
│   │
│   ├── router.js
│   ├── App.vue
│   └── main.js
│
├── index.html
├── package.json
└── vite.config.js
```

---

## 🎮 ¿Cómo se integran los juegos?

Los juegos están desarrollados de forma independiente en **HTML + JS** y se alojan dentro de:

```
/public/games/
```

Cada juego tiene su propia carpeta:

```
/public/games/nombre-del-juego/
```

### 🔌 Integración en la app

Los juegos se cargan dentro de la aplicación usando un `<iframe>` en la vista `GameView.vue`.

### 📄 Ejemplo:

```vue
<template>
  <div class="game-container">
    <iframe :src="gameUrl" frameborder="0"></iframe>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const gameUrl = `/games/${route.params.name}/index.html`
</script>
```

### 🧠 Ventajas de este enfoque

* ✔ Aislamiento total de cada juego
* ✔ No rompe la app principal
* ✔ Permite integrar juegos existentes fácilmente
* ✔ Escalable (añadir juegos = copiar carpeta)

---

## ➕ Añadir un nuevo juego

1. Crear carpeta en:

```
/public/games/nuevo-juego/
```

2. Añadir:

   * `index.html`
   * `game.js`
   * `style.css`

3. Registrar el juego en el listado (por ejemplo en `Home.vue`):

```js
const games = [
  { name: "2048", title: "2048" },
  { name: "tetris", title: "Tetris" },
  { name: "nuevo-juego", title: "Nuevo Juego" }
]
```

---

## 🎨 Estilo visual (Arcade Retro)

La UI sigue una estética:

* 🟣 Colores neón (magenta, cyan, verde)
* 🟦 Fondos oscuros
* 🔲 Tipografías pixeladas
* ✨ Efectos glow

Recomendaciones:

* Usar fuentes tipo `Press Start 2P`
* Sombras tipo `text-shadow` neón
* Bordes brillantes

---

## 🚀 Ejecutar el proyecto en local

### 1️⃣ Instalar dependencias

```bash
npm install
```

---

### 2️⃣ Ejecutar servidor de desarrollo

```bash
npm run dev
```

---

### 3️⃣ Abrir en navegador

Normalmente en:

```
http://localhost:5173/
```

---

## 📦 Build para producción

```bash
npm run build
```

Generará la carpeta:

```
/dist
```

---

## 🧪 Vista previa del build

```bash
npm run preview
```

---

## ⚠️ Notas importantes

* Los juegos deben estar en `/public`, no en `/src`
* No usar rutas absolutas externas en los juegos
* Cada juego debe ser autocontenido

---

## 🔮 Futuras mejoras

* 🏆 Sistema de puntuaciones
* 👤 Usuarios / login
* ⭐ Favoritos
* 🖥️ Modo pantalla completa
* 🎮 Más juegos

---

## 👾 Filosofía del proyecto

> “Hazlo simple, hazlo divertido, hazlo retro.”

---

Disfruta programando y jugando 🚀
