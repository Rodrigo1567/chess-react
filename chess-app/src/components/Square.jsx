import Piece from './Piece';

function Square({ row, col, piece, isSelected, onClick }) {
  const isDark = (row + col) % 2 === 1;

  return (
    <>
        <div
        className={`square ${isDark ? 'dark' : 'light'} ${isSelected ? 'selected' : ''}`}
        onClick={() => onClick(row, col, piece)}
        >
        {piece && <Piece piece={piece} />}
        </div>
    
    </>
  );
}

export default Square;
