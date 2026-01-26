import { showPossibleMoves } from '../logic/rules';
import Board from './Board';
import GameInfo from './GameInfo';
import { useState } from 'react';

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

function Game() {
const [board, setBoard] = useState(initialBoard);
const [turn, setTurn] = useState('white');
const [selected, setSelected] = useState(null);


const handleSquareClick = (row, col, piece) => {
    // lógica principal (más adelante)
    const moves = selected ? showPossibleMoves(piece, {row, col}, board) : [];
    console.log('Possible moves:', moves);
    setSelected({ row, col });
};

  return (
    <div className="game">
        {console.log('Tablero',board)}
      <Board
        board={board}
        onSquareClick={handleSquareClick}
        selected={selected}
      />
      <GameInfo turn={turn} />
    </div>
  );
}

export default Game;
