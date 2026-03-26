<template>
  <div class="home">
    <!-- Cabecera -->
    <div class="home-header">
      <p class="home-subtitle">— SELECT YOUR GAME —</p>
      <div class="header-line"></div>
    </div>

    <!-- Grid de juegos -->
    <div class="games-grid">
      <GameCard
        v-for="game in games"
        :key="game.id"
        :game="game"
      />

      <!-- Placeholder "próximamente" -->
      <div
        v-for="n in placeholders"
        :key="'ph-' + n"
        class="game-card-placeholder"
      >
        <span class="ph-text">COMING<br>SOON</span>
        <span class="ph-blink">_</span>
      </div>
    </div>
  </div>
</template>

<script>
import GameCard from '../components/GameCard.vue'
import { games } from '../games.js'

export default {
  name: 'Home',
  components: { GameCard },
  data() {
    return {
      games,
      // Muestra al menos 3 tarjetas en total (rellena con placeholders)
      minCards: 12
    }
  },
  computed: {
    placeholders() {
      const needed = this.minCards - this.games.length
      return needed > 0 ? needed : 0
    }
  }
}
</script>

<style scoped>
/* ── Header ── */
.home-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.home-subtitle {
  font-family: var(--font-pixel);
  font-size: clamp(0.5rem, 1.5vw, 0.75rem);
  color: var(--neon-cyan);
  text-shadow: var(--glow-cyan);
  letter-spacing: 0.3em;
  margin-bottom: 1rem;
}

.header-line {
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--neon-cyan), transparent);
  box-shadow: var(--glow-cyan);
  max-width: 400px;
  margin: 0 auto;
}

/* ── Grid ── */
.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 1.5rem;
}

/* ── Placeholder ── */
.game-card-placeholder {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 280px;
  border: 2px dashed #1e1e3a;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    rgba(30,30,58,0.3) 10px,
    rgba(30,30,58,0.3) 20px
  );
  opacity: 0.5;
}

.ph-text {
  font-family: var(--font-pixel);
  font-size: 0.6rem;
  color: #333;
  text-align: center;
  line-height: 2;
  letter-spacing: 0.1em;
}

.ph-blink {
  font-family: var(--font-pixel);
  font-size: 1rem;
  color: #333;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
</style>
