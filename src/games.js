/**
 * CATÁLOGO DE JUEGOS
 * ─────────────────────────────────────────────────────────────
 * Para añadir un nuevo juego, agrega un objeto a este array:
 *
 *   {
 *     id:          'mi-juego',            // identificador único (slug)
 *     title:       'Mi Juego',            // nombre que se muestra
 *     description: 'Descripción corta',   // subtítulo en la tarjeta
 *     emoji:       '🎮',                  // icono representativo
 *     color:       '#ff2d78',             // color de acento de la tarjeta
 *     file:        '/games/miJuego.html', // ruta al HTML en /public/games/
 *     tags:        ['acción', 'arcade'],  // etiquetas opcionales
 *   }
 *
 * El archivo HTML debe estar en: public/games/<nombre>.html
 * ─────────────────────────────────────────────────────────────
 */

export const games = [
  {
    id:          'stack-game',
    title:       'Stack Game',
    description: 'Apila bloques lo más alto que puedas',
    emoji:       '🧱',
    color:       '#39ff14',
    file:        '/games/stackGame.html',
    tags:        ['arcade', 'habilidad'],
  },
  {
    id:          'snake',
    title:       'Snake',
    description: 'Come manzanas, no te muerdas la cola',
    emoji:       '🐍',
    color:       '#00f5ff',
    file:        '/games/snake.html',
    tags:        ['clásico'],
  },
  {
    id:          'breakout',
    title:       'Breakout',
    description: 'Rompe todos los ladrillos',
    emoji:       '🧨',
    color:       '#ffe600',
    file:        '/games/breakout.html',
    tags:        ['acción'],
  },
  {
    id: 'space-invaders', 
    title: 'Space Invaders',
    description: 'Defiende la Tierra de la invasión alienígena',
    emoji: '👾', 
    color: '#ff2d78',
    file: '/games/spaceInvaders.html', 
    tags: ['arcade', 'acción'],
  },
  {
    id: '2048', 
    title: '2048',
    description: 'Combina losetas para llegar al 2048',
    emoji: '🔢', 
    color: '#00f5ff',
    file: '/games/2048.html', 
    tags: ['puzzle'],
  },
  {
    id: 'pong', 
    title: 'Pong',
    description: 'El clásico cara a cara contra la CPU',
    emoji: '🏓', 
    color: '#ff2d78',
    file: '/games/pong.html', 
    tags: ['clásico', '1vs1'],
  },
  {
    id: 'flappy-bird', 
    title: 'Flappy Bird',
    description: 'Vuela sin chocar con las tuberías',
    emoji: '🐦', 
    color: '#ffe600',
    file: '/games/flappyBird.html', 
    tags: ['arcade', 'habilidad'],
  },
]

export default games
