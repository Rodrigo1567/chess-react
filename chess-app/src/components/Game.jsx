import { showPossibleMoves, isCheckmate } from '../logic/rules';
import Board from './Board';
import GameInfo from './GameInfo';
import { useEffect, useState } from 'react';
import { useGame } from '../contexts/GameContext.jsx';
import { WinnerModal } from './WinnerModal.jsx';
import { ConfirmReset } from './ConfirmReset.jsx';
import Button from '@mui/material/Button';

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
const [selected, setSelected] = useState(null);
const [moves, setMoves] = useState([]);
const [winner, setWinner] = useState(null);
const [open, setOpen] = useState(false);
const [resetGame, setResetGame] = useState(false);
const [droppedPieces, setDroppedPieces] = useState({ white: [], black: [] });

const onResetGame = (confirm) => {
  if(confirm) {
    setBoard(initialBoard);
    setSelected(null); 
    setMoves([]);
    setWinner(null);
    setOpen(false);
    setResetGame(false);
    setDroppedPieces({ white: [], black: [] });
  }
}

const handleClose = () => {
  setOpen(false);
  setBoard(initialBoard);
}

const handleCloseConfirm = () => {
  setResetGame(false);
}

const handleSquareClick = (row, col, piece) => {
  if(selected == null && turn != (piece ? piece.color : null)){
    return;
  }
  if(selected != null && selected.piece != null && isAPossibleMove(row, col, moves)) {
      updateBoard(row, col);
      return;
  }
  setSelected({ piece, row, col });
};

function isNotKing(row, col) {
    const piece = board[row][col];
    if(!piece) return true;
    return piece.type !== 'king';
}

function removeKingForPossibleMoves(moves) {
    return moves.filter(move => isNotKing(move[0], move[1]));
}

const isAPossibleMove = (row, col, moves) => {
    return (moves.some(move => move[0] === row && move[1] === col) && isNotKing(row,col));
}

function updateBoard(row, col) {
  const newBoard = board.map((r) => r.slice());
  let pieceToDrop = newBoard[row][col];
  if(pieceToDrop != null) {
    let color = pieceToDrop.color;
    setDroppedPieces((prev) => ({
      ...prev,
      [color]: [...prev[color], pieceToDrop],
    }));
  }
  console.log('Dropped pieces:', droppedPieces);
  newBoard[row][col] = selected.piece;
  newBoard[row][col].type == 'pawn' ? newBoard[row][col].hasMoved = true : null;
  newBoard[selected.row][selected.col] = null;
  setBoard(newBoard);
  nextTurn();
}

useEffect(() => {
  if (!board || !turn) return;
  setSelected(null);
  setMoves([]);
  
  let checkMate = isCheckmate(board, turn);
  console.log('Is checkmate:', checkMate, 'Turn:', turn);
  
  
  if (checkMate) {
    setWinner(turn === 'white' ? 'black' : 'white');
    setOpen(true);
    return
  }
  
}, [turn]);

useEffect(() => {
  if(!selected) return;
    if(selected.piece != null && selected.piece.color !== turn) {
        setSelected(null);
        setMoves([]);
        return;
    }
    let position = selected ? { row: selected.row, col: selected.col } : null;
    let moves = selected ? showPossibleMoves(selected.piece, position, board) : [];
    moves = removeKingForPossibleMoves(moves);
    setMoves(moves);
}, [selected]);

  return (
    <div className="game">
      <div className='header'>
        <h2 className="title-app">Chess App</h2>
        <button className="winner-button reset" onClick={() => setResetGame(true)}>Resetear juego</button>
        <GameInfo turn={turn} />
      </div>
      <Board
        board={board}
        droppedPieces={droppedPieces}
        onSquareClick={handleSquareClick}
        selected={selected}
        possibleMoves={moves}
        turn={turn}
      />
      <br />
      <WinnerModal
        open={open}
        onClose={handleClose}
        winner={winner}
      />
      <ConfirmReset resetGame={resetGame} onResetGame={onResetGame} onClose={handleCloseConfirm} />
    </div>
  );
}

export default Game;
