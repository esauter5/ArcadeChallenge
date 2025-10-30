import './App.css'
import { GameTile } from './components/GameTile'
import { games } from './config/games.config'

function App() {
  const handleGameClick = (route: string) => {
    // For now, just log the route. Later, this will use React Router
    console.log(`Navigating to: ${route}`)
    alert(`Game route: ${route}\n\nGame pages will be implemented by LLMs!`)
  }

  return (
    <div className="arcade-container">
      <header className="arcade-header">
        <h1 className="arcade-title">
          <span className="title-line">ARCADE</span>
          <span className="title-line">CHALLENGE</span>
        </h1>
        <p className="arcade-subtitle">INSERT COIN TO PLAY</p>
      </header>

      <main className="games-grid">
        {games.map((game) => (
          <GameTile
            key={game.id}
            game={game}
            onClick={() => handleGameClick(game.route)}
          />
        ))}
      </main>

      <footer className="arcade-footer">
        <p>🎮 READY PLAYER ONE 🎮</p>
      </footer>
    </div>
  )
}

export default App
