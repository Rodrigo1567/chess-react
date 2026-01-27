import {useGame} from '../contexts/GameContext.jsx';

function GameInfo() {
  const {turn} = useGame();
  
  return (
    <div className="game-info">
      <h2>Turno: {turn === 'white' ? 'Blancas' : 'Negras'}</h2>
    </div>
  );
}

export default GameInfo;
