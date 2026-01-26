import { showPossibleMoves } from '../logic/rules';
import Board from './Board';
import GameInfo from './GameInfo';
import { useEffect, useState } from 'react';

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
  Array(8).fill({ type: 'pawn', color: 'black' }),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill({ type: 'pawn', color: 'white' }),
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

const TURNS = {
  WHITE: 'white',
  BLACK: 'black',
};

function Game() {
const [board, setBoard] = useState(initialBoard);
const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.WHITE
})
const [selected, setSelected] = useState(null);
const [moves, setMoves] = useState([]);

const handleSquareClick = (row, col, piece) => {
  console.log('Square clicked:', row, col, piece);
    if(selected != null && selected.piece != null && isAPossibleMove(row, col, moves)) {
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
  newBoard[selected.row][selected.col] = null;
  setBoard(newBoard);
  setSelected(null);
  setMoves([]);
  setTurn(turn === 'white' ? 'black' : 'white');
}

useEffect(() => {
  if(!selected) return;
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
