import Piece from './Piece';

function Square({ row, col, piece, isSelected, onClick, isPossibleMove, turn }) {
  const isDark = (row + col) % 2 === 1;

  return (
    <>
        <div
        className={`square ${isDark ? 'dark' : 'light'} ${isSelected ? 'selected' : ''} ${isPossibleMove ? 'possible-move' : ''} ${isPossibleMove && (piece && piece.color != turn ? 'possible-move-enemy' : '')} ${piece != null && turn == (piece ? piece.color : null) ? 'clickable' : 'not-clickable'}`}
        onClick={() => {
          // if(turn === (piece ? piece.color : null) || piece === null)
            onClick(row, col, piece);
        }}
        >
        {piece && <Piece piece={piece} />}
        </div>
    
    </>
  );
}

export default Square;
