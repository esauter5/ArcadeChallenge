export interface Game {
  id: string;
  name: string;
  description: string;
  icon: string; // emoji or path to icon
  route: string;
  color: string; // neon color for this game's theme
}

export const games: Game[] = [
  {
    id: 'snake',
    name: 'Snake',
    description: 'Classic snake game - eat, grow, survive!',
    icon: '🐍',
    route: '/snake',
    color: '#39ff14', // neon green
  },
  {
    id: 'tetris',
    name: 'Tetris',
    description: 'Match blocks and clear lines!',
    icon: '🟦',
    route: '/tetris',
    color: '#00ffff', // cyan
  },
  {
    id: 'pong',
    name: 'Pong',
    description: 'Classic arcade paddle game!',
    icon: '🏓',
    route: '/pong',
    color: '#ff00ff', // magenta
  },
  // LLMs: Add your new game here following the same structure
  // {
  //   id: 'your-game-id',
  //   name: 'Your Game Name',
  //   description: 'Brief description of your game',
  //   icon: '🎮',
  //   route: '/your-game',
  //   color: '#ff0080', // your neon color
  // },
];
