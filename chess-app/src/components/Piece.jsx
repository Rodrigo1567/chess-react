

const PIECES = {
  rook: "fa-solid fa-chess-rook",
  ROOK: "fa-solid fa-chess-rook",
  knight: "fa-solid fa-chess-knight",
  KNIGHT: "fa-solid fa-chess-knight",
  bishop: "fa-solid fa-chess-bishop",
  BISHOP: "fa-solid fa-chess-bishop",
  queen: "fa-solid fa-chess-queen",
  QUEEN: "fa-solid fa-chess-queen",
  king: "fa-solid fa-chess-king",
  KING: "fa-solid fa-chess-king",
  pawn: "fa-solid fa-chess-pawn",
  PAWN: "fa-solid fa-chess-pawn",
  '': '',
};

const mapPiecesToIcons = (type, color) => {
  const key = color === 'white' ? type.toUpperCase() : type.toLowerCase();
  return PIECES[key] || '';
}
function Piece({ piece }) {
  return (
    <div className={`piece ${piece.color}`}>
      {mapPiecesToIcons(piece.type, piece.color) && (
        <i className={mapPiecesToIcons(piece.type, piece.color)}></i>
      )}
    </div>
  );
}

export default Piece