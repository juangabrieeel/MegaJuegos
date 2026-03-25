<template>
  <router-link :to="`/game/${game.id}`" class="game-card" :style="{ '--accent': game.color }">
    <!-- Marco CRT -->
    <div class="card-screen">
      <div class="card-emoji">{{ game.emoji }}</div>
      <div class="card-scanlines"></div>
    </div>

    <!-- Info -->
    <div class="card-info">
      <h2 class="card-title">{{ game.title }}</h2>
      <p class="card-desc">{{ game.description }}</p>

      <div class="card-tags" v-if="game.tags?.length">
        <span class="tag" v-for="tag in game.tags" :key="tag">{{ tag }}</span>
      </div>
    </div>

    <!-- Botón -->
    <div class="card-footer">
      <span class="play-btn">▶ PLAY</span>
    </div>

    <!-- Esquinas decorativas -->
    <span class="corner tl"></span>
    <span class="corner tr"></span>
    <span class="corner bl"></span>
    <span class="corner br"></span>
  </router-link>
</template>

<script>
export default {
  name: 'GameCard',
  props: {
    game: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.game-card {
  --accent: #39ff14;

  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--bg-card);
  border: 2px solid var(--accent);
  box-shadow: 0 0 10px var(--accent), inset 0 0 30px rgba(0,0,0,0.6);
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
}

.game-card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 0 20px var(--accent), 0 0 50px color-mix(in srgb, var(--accent) 30%, transparent);
}

.game-card:hover .play-btn {
  background: var(--accent);
  color: var(--bg);
  box-shadow: 0 0 16px var(--accent);
}

/* ── Pantalla CRT ── */
.card-screen {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 130px;
  background: radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a0f 100%);
  border-bottom: 1px solid var(--accent);
  overflow: hidden;
}

.card-emoji {
  font-size: 3.5rem;
  filter: drop-shadow(0 0 12px var(--accent));
  z-index: 1;
  animation: float 3s ease-in-out infinite;
}

/* líneas de escáner sobre la pantalla */
.card-scanlines {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 3px,
    rgba(0, 0, 0, 0.25) 3px,
    rgba(0, 0, 0, 0.25) 4px
  );
  pointer-events: none;
}

/* ── Info ── */
.card-info {
  padding: 1rem 1rem 0.5rem;
  flex: 1;
}

.card-title {
  font-family: var(--font-pixel);
  font-size: 0.65rem;
  color: var(--accent);
  text-shadow: 0 0 8px var(--accent);
  margin-bottom: 0.5rem;
  letter-spacing: 0.05em;
  line-height: 1.6;
}

.card-desc {
  font-family: var(--font-vt);
  font-size: 1.1rem;
  color: #aaa;
  margin-bottom: 0.6rem;
  line-height: 1.3;
}

.card-tags {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.tag {
  font-family: var(--font-pixel);
  font-size: 0.4rem;
  border: 1px solid var(--accent);
  color: var(--accent);
  padding: 0.2rem 0.4rem;
  opacity: 0.7;
  letter-spacing: 0.05em;
}

/* ── Footer con botón ── */
.card-footer {
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: flex-end;
}

.play-btn {
  font-family: var(--font-pixel);
  font-size: 0.55rem;
  color: var(--accent);
  border: 2px solid var(--accent);
  padding: 0.45rem 0.8rem;
  letter-spacing: 0.1em;
  transition: background 0.15s, color 0.15s, box-shadow 0.15s;
}

/* ── Esquinas ── */
.corner {
  position: absolute;
  width: 10px;
  height: 10px;
  border-color: var(--accent);
  border-style: solid;
}
.corner.tl { top: 4px; left: 4px;  border-width: 2px 0 0 2px; }
.corner.tr { top: 4px; right: 4px; border-width: 2px 2px 0 0; }
.corner.bl { bottom: 4px; left: 4px;  border-width: 0 0 2px 2px; }
.corner.br { bottom: 4px; right: 4px; border-width: 0 2px 2px 0; }

/* ── Animaciones ── */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-6px); }
}
</style>
