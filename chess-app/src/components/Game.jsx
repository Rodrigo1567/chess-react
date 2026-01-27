import { showPossibleMoves } from '../logic/rules';
import Board from './Board';
import GameInfo from './GameInfo';
import { useEffect, useState } from 'react';
import { useGame } from '../contexts/GameContext.jsx';

const initialBoard = [
  [
    { type: 'rook', color: 'black' },
    { type: 'knight', color: 'black' },
    { type: 'bishop', color: 'black' },
    { type: 'queen', color: 'black' },
    { type: 'king', color: 'black' },
    { type: 'bishop', color: 'black' },
    { type: 'knight', color: 'black' },
    { type: 'rook', color: 'black' },
  ],
  Array.from({ length: 8 }, () => ({
  type: 'pawn',
  color: 'black',
  hasMoved: false,
  })),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  Array.from({ length: 8 }, () => ({
    type: 'pawn',
    color: 'white',
    hasMoved: false,
  })),
  [
    { type: 'rook', color: 'white' },
    { type: 'knight', color: 'white' },
    { type: 'bishop', color: 'white' },
    { type: 'queen', color: 'white' },
    { type: 'king', color: 'white' },
    { type: 'bishop', color: 'white' },
    { type: 'knight', color: 'white' },
    { type: 'rook', color: 'white' },
  ],
];


function Game() {
const [board, setBoard] = useState(initialBoard);
const {turn, nextTurn} = useGame();
console.log('Turn from context:', turn);
const [selected, setSelected] = useState(null);
const [moves, setMoves] = useState([]);

const handleSquareClick = (row, col, piece) => {
  console.log('Square clicked:', row, col, piece);
  if(selected == null && turn != (piece ? piece.color : null)){
    return;
  }
  if(selected != null && selected.piece != null && isAPossibleMove(row, col, moves)) {
      console.log('Move executed');
      updateBoard(row, col);
      return;
  }
  setSelected({ piece, row, col });
};

const isAPossibleMove = (row, col, moves) => {
    return moves.some(move => move[0] === row && move[1] === col);
}

function updateBoard(row, col) {
  const newBoard = board.map((r) => r.slice());
  newBoard[row][col] = selected.piece;
  newBoard[row][col].type == 'pawn' ? newBoard[row][col].hasMoved = true : null;
  newBoard[selected.row][selected.col] = null;
  setBoard(newBoard);
  setSelected(null);
  setMoves([]);
  nextTurn();
}

useEffect(() => {
  if(!selected) return;
    console.log('Selected piece changed:', selected);
    if(selected.piece != null && selected.piece.color !== turn) {
        setSelected(null);
        setMoves([]);
        return;
    }
    let position = selected ? { row: selected.row, col: selected.col } : null;
    const moves = selected ? showPossibleMoves(selected.piece, position, board) : [];
    setMoves(moves);
    console.log('Possible moves:', moves);
}, [selected]);

  return (
    <div className="game">
        {console.log('Tablero',board)}
      <Board
        board={board}
        onSquareClick={handleSquareClick}
        selected={selected}
        possibleMoves={moves}
        turn={turn}
      />
      <GameInfo turn={turn} />
    </div>
  );
}

export default Game;
