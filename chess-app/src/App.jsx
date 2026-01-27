import './App.css'
import Game from './components/Game'
import { GameProvider } from './contexts/GameContext.jsx';

function App() {
  return (
    <GameProvider>
      <Game />
    </GameProvider>
  )
}

export default App
