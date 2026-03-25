<template>
  <div id="app">
    <header class="navbar">
      <router-link to="/" class="navbar-logo">
        <span class="logo-bracket">[</span>
        MEGAJUEGOS
        <span class="logo-bracket">]</span>
      </router-link>
      <div class="navbar-scanline"></div>
    </header>

    <main class="main-content">
      <router-view />
    </main>

    <footer class="footer">
      <span>INSERT COIN TO CONTINUE</span>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* ── Reset & fuentes ── */
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323:wght@400&display=swap');

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --neon-green:  #39ff14;
  --neon-pink:   #ff2d78;
  --neon-cyan:   #00f5ff;
  --neon-yellow: #ffe600;
  --bg:          #0a0a0f;
  --bg-card:     #0f0f1a;
  --border:      #1e1e3a;
  --font-pixel:  'Press Start 2P', monospace;
  --font-vt:     'VT323', monospace;
  --glow-green:  0 0 8px #39ff14, 0 0 20px #39ff1455;
  --glow-pink:   0 0 8px #ff2d78, 0 0 20px #ff2d7855;
  --glow-cyan:   0 0 8px #00f5ff, 0 0 20px #00f5ff55;
}

html, body {
  height: 100%;
}

body {
  background-color: var(--bg);
  color: var(--neon-green);
  font-family: var(--font-pixel);
  overflow-x: hidden;
  /* scanlines globales */
  background-image:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0,0,0,0.15) 2px,
      rgba(0,0,0,0.15) 4px
    );
}

a { text-decoration: none; color: inherit; }

/* ── Layout ── */
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 2rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

/* ── Navbar ── */
.navbar {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 2rem;
  border-bottom: 2px solid var(--neon-green);
  box-shadow: var(--glow-green);
  background: var(--bg);
  overflow: hidden;
}

.navbar-logo {
  font-family: var(--font-pixel);
  font-size: clamp(0.7rem, 2vw, 1rem);
  color: var(--neon-green);
  letter-spacing: 0.2em;
  text-shadow: var(--glow-green);
  animation: blink-logo 4s step-end infinite;
}

.logo-bracket {
  color: var(--neon-pink);
  text-shadow: var(--glow-pink);
}

/* línea de escáner animada sobre la navbar */
.navbar-scanline {
  position: absolute;
  left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--neon-cyan), transparent);
  animation: scanline 3s linear infinite;
  opacity: 0.5;
}

/* ── Footer ── */
.footer {
  text-align: center;
  padding: 1rem;
  font-family: var(--font-pixel);
  font-size: 0.5rem;
  color: var(--neon-pink);
  text-shadow: var(--glow-pink);
  border-top: 1px solid var(--border);
  animation: blink-logo 1s step-end infinite;
  letter-spacing: 0.15em;
}

/* ── Animaciones ── */
@keyframes scanline {
  0%   { top: 0; }
  100% { top: 100%; }
}

@keyframes blink-logo {
  0%, 100% { opacity: 1; }
  49%       { opacity: 1; }
  50%       { opacity: 0.4; }
  99%       { opacity: 0.4; }
}
</style>
