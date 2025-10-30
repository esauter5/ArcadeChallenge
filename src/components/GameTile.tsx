import { useState } from 'react';
import type { Game } from '../config/games.config';
import './GameTile.css';

interface GameTileProps {
  game: Game;
  onClick: () => void;
}

export const GameTile = ({ game, onClick }: GameTileProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="game-tile"
      style={{
        '--neon-color': game.color,
      } as React.CSSProperties}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="game-tile-inner">
        <div className="game-icon">{game.icon}</div>
        <h2 className="game-name">{game.name}</h2>

        {isHovered && (
          <div className="game-hover-content">
            <p className="game-description">{game.description}</p>
            <button className="press-start-btn">PRESS START</button>
          </div>
        )}
      </div>

      <div className="scanlines"></div>
    </div>
  );
};
