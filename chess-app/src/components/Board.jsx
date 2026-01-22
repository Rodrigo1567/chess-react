import { use, useEffect , useState} from "react";
import { showPossibleMoves } from "../utils/utils";
import Piece from "./Piece";

const boardArray = [
    ['r','n','b','q','k','b','n','r'],
    ['p','p','p','p','p','p','p','p'],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['P','P','P','P','P','P','P','P'],
    ['R','N','B','Q','K','B','N','R'],
];

const turns = {
    white: 'W',
    black: 'B'
};

function Board() {

    const [selectedPiece, setSelectedPiece] = useState('');
    const [boardState, setBoardState] = useState(boardArray);
    const [possibleMoves, setPossibleMoves] = useState([]);
    const [currentTurn, setCurrentTurn] = useState(turns.white);
    const [pieceToMove, setPieceToMove] = useState(null);

    useEffect(() => {
        if (!selectedPiece) return;
        console.log("Selected piece:", selectedPiece);
        if(selectedPiece.name != '') {
            setPossibleMoves(showPossibleMoves(selectedPiece, boardState));
            setPieceToMove(selectedPiece);
        }
        if(possibleMoves.find(move => move[0] === selectedPiece.rowIndex && move[1] === selectedPiece.cellIndex)) {
            let pieceOriginalPosition = {
                originalRowIndex: pieceToMove.rowIndex,
                originalCellIndex: pieceToMove.cellIndex
            }
            console.log('Movimiento válido a', selectedPiece);
            let newBoard = boardState.map(row => row.slice());
            newBoard[selectedPiece.rowIndex][selectedPiece.cellIndex] = selectedPiece.name;
            newBoard[pieceOriginalPosition.originalRowIndex][pieceOriginalPosition.originalCellIndex] = '';
            setBoardState(newBoard);
            setSelectedPiece('');
            setPossibleMoves([]);
            setCurrentTurn(currentTurn === turns.white ? turns.black : turns.white);
            return;
        }
    }, [selectedPiece]);

  return (
    <>
        <h2 className="title-app">Chess App</h2>
        <div className="board-chess">
            {boardArray.map((row, rowIndex) => (
                row.map((cell, cellIndex) => {
                    const isLightCell = (rowIndex + cellIndex) % 2 === 0;
                    const piece = {
                        name: cell,
                        rowIndex: rowIndex,
                        cellIndex: cellIndex,
                        isBlack: cell === cell.toLowerCase() && cell !== '',
                    }
                     return <Piece piece={piece} currentTurn={currentTurn} possibleMoves={possibleMoves} isLight={isLightCell} handleSelectPiece={setSelectedPiece} key={`${rowIndex}-${cellIndex}`}></Piece>
                })
            ))}
        </div>

    </>
  ) 
}

export default Board