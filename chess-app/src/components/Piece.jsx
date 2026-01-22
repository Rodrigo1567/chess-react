// import wPawn from '../assets/pieces/w_pawn.svg';
// import bPawn from '../assets/pieces/b_pawn.svg';
// import bRook from '../assets/pieces/b_rook.svg';
// import wRook from '../assets/pieces/w_rook.svg';
// import bHorse from '../assets/pieces/b_horse.svg';
// import wHorse from '../assets/pieces/w_horse.svg';
// import bBishop from '../assets/pieces/b_bishop.svg';
// import wBishop from '../assets/pieces/w_bishop.svg';
// import bQueen from '../assets/pieces/b_queen.svg';
// import wQueen from '../assets/pieces/w_queen.svg';
// import bKing from '../assets/pieces/b_king.svg';
// import wKing from '../assets/pieces/w_king.svg';

function Piece({ piece , isLight , handleSelectPiece, possibleMoves}) {
const PIECES = {
  r: "fa-solid fa-chess-rook",
  R: "fa-regular fa-chess-rook",
  n: "fa-solid fa-chess-knight",
  N: "fa-regular fa-chess-knight",
  b: "fa-solid fa-chess-bishop",
  B: "fa-regular fa-chess-bishop",
  q: "fa-solid fa-chess-queen",
  Q: "fa-regular fa-chess-queen",
  k: "fa-solid fa-chess-king",
  K: "fa-regular fa-chess-king",
  p: "fa-solid fa-chess-pawn",
  P: "fa-regular fa-chess-pawn",
  '': '',
};

  return (
    <div className={`piece`} onClick={() => handleSelectPiece(piece)}>
        <div className={ (isLight ? "cell-light-chess" : "cell-dark-chess") + `${possibleMoves.some(move => move[0] === piece.rowIndex && move[1] === piece.cellIndex) ? ' possible-move' : ''}`} >
          {/* {console.log('Piece en formato objeto',piece)} */}
           {piece ?  <i className={PIECES[piece.name]}></i> : <div></div>}
        </div>
    </div>
  ) 
}

export default Piece