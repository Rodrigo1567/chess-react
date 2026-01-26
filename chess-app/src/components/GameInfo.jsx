function GameInfo({ turn }) {
  return (
    <div className="game-info">
      <h2>Turno: {turn === 'white' ? 'Blancas' : 'Negras'}</h2>
    </div>
  );
}

export default GameInfo;
