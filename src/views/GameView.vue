<template>
  <div class="game-view">
    <!-- Barra superior del juego -->
    <div class="game-topbar" v-if="game">
      <router-link to="/" class="back-btn">◀ BACK</router-link>
      <span class="game-title-bar">
        {{ game.emoji }} {{ game.title }}
      </span>
      <span class="spacer"></span>
    </div>

    <!-- Estado: juego no encontrado -->
    <div class="error-screen" v-if="!game">
      <p class="error-code">ERROR 404</p>
      <p class="error-msg">GAME NOT FOUND</p>
      <router-link to="/" class="back-btn mt">◀ VOLVER AL MENÚ</router-link>
    </div>

    <!-- Marco + iframe -->
    <div class="iframe-wrapper" v-else>
      <!-- indicador de carga -->
      <div class="loading-overlay" v-if="loading">
        <span class="loading-text">LOADING...</span>
        <div class="loading-bar"><div class="loading-fill"></div></div>
      </div>

      <iframe
        :src="game.file"
        :title="game.title"
        class="game-frame"
        :style="{ '--accent': game.color }"
        allowfullscreen
        @load="onLoad"
      ></iframe>

      <!-- Esquinas decorativas -->
      <span class="corner tl" :style="{ borderColor: game.color }"></span>
      <span class="corner tr" :style="{ borderColor: game.color }"></span>
      <span class="corner bl" :style="{ borderColor: game.color }"></span>
      <span class="corner br" :style="{ borderColor: game.color }"></span>
    </div>
  </div>
</template>

<script>
import { games } from '../games.js'

export default {
  name: 'GameView',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      loading: true
    }
  },
  computed: {
    game() {
      return games.find(g => g.id === this.id) || null
    }
  },
  methods: {
    onLoad() {
      this.loading = false
    }
  }
}
</script>

<style scoped>
.game-view {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* ── Topbar ── */
.game-topbar {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.back-btn {
  font-family: var(--font-pixel);
  font-size: 0.55rem;
  color: var(--neon-pink);
  border: 2px solid var(--neon-pink);
  padding: 0.45rem 0.8rem;
  letter-spacing: 0.1em;
  transition: background 0.15s, color 0.15s;
  white-space: nowrap;
}

.back-btn:hover {
  background: var(--neon-pink);
  color: var(--bg);
}

.back-btn.mt {
  margin-top: 1.5rem;
  display: inline-block;
}

.game-title-bar {
  font-family: var(--font-pixel);
  font-size: clamp(0.45rem, 1.2vw, 0.65rem);
  color: var(--neon-green);
  text-shadow: var(--glow-green);
  letter-spacing: 0.1em;
}

.spacer { flex: 1; }

/* ── Iframe wrapper ── */
.iframe-wrapper {
  position: relative;
  width: 100%;
  /* Aspect ratio 16:9 por defecto, ajústalo si tu juego tiene otro ratio */
  aspect-ratio: 16 / 9;
  border: 2px solid var(--accent, var(--neon-green));
  box-shadow: 0 0 20px var(--accent, var(--neon-green));
  background: #000;
  overflow: hidden;
}

.game-frame {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}

/* ── Loading overlay ── */
.loading-overlay {
  position: absolute;
  inset: 0;
  background: var(--bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  z-index: 10;
}

.loading-text {
  font-family: var(--font-pixel);
  font-size: 0.7rem;
  color: var(--neon-green);
  text-shadow: var(--glow-green);
  animation: blink 0.8s step-end infinite;
}

.loading-bar {
  width: 200px;
  height: 8px;
  border: 1px solid var(--neon-green);
}

.loading-fill {
  height: 100%;
  background: var(--neon-green);
  box-shadow: var(--glow-green);
  animation: fill-bar 1.5s ease-in-out infinite alternate;
}

/* ── Esquinas ── */
.corner {
  position: absolute;
  width: 14px;
  height: 14px;
  border-style: solid;
}
.corner.tl { top: 6px; left: 6px;  border-width: 3px 0 0 3px; }
.corner.tr { top: 6px; right: 6px; border-width: 3px 3px 0 0; }
.corner.bl { bottom: 6px; left: 6px;  border-width: 0 0 3px 3px; }
.corner.br { bottom: 6px; right: 6px; border-width: 0 3px 3px 0; }

/* ── Error ── */
.error-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
  gap: 1rem;
}

.error-code {
  font-family: var(--font-pixel);
  font-size: clamp(1rem, 4vw, 2rem);
  color: var(--neon-pink);
  text-shadow: var(--glow-pink);
}

.error-msg {
  font-family: var(--font-vt);
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: #555;
}

/* ── Animaciones ── */
@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}

@keyframes fill-bar {
  0%   { width: 10%; }
  100% { width: 95%; }
}
</style>
