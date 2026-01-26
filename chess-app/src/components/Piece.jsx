

const PIECES = {
  rook: "fa-solid fa-chess-rook",
  ROOK: "fa-regular fa-chess-rook",
  knight: "fa-solid fa-chess-knight",
  KNIGHT: "fa-regular fa-chess-knight",
  bishop: "fa-solid fa-chess-bishop",
  BISHOP: "fa-regular fa-chess-bishop",
  queen: "fa-solid fa-chess-queen",
  QUEEN: "fa-regular fa-chess-queen",
  king: "fa-solid fa-chess-king",
  KING: "fa-regular fa-chess-king",
  pawn: "fa-solid fa-chess-pawn",
  PAWN: "fa-regular fa-chess-pawn",
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