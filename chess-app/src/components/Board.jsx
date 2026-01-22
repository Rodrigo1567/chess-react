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
function Board() {

    const [selectedPiece, setSelectedPiece] = useState('');
    const [boardState, setBoardState] = useState(boardArray);
    const [possibleMoves, setPossibleMoves] = useState([]);


    useEffect(() => {
    if (!selectedPiece) return;
    console.log("Selected piece:", selectedPiece);
    const possibleMoves = showPossibleMoves(selectedPiece, boardState);
    setPossibleMoves(possibleMoves);
    console.log('Movimientos posibles',possibleMoves);
    }, [selectedPiece]);

  return (
    <>
        <h2 className="title-app">Chess App</h2>
        <div className="board-chess">
            {boardArray.map((row, rowIndex) => (
                row.map((cell, cellIndex) => {
                    const isLight = (rowIndex + cellIndex) % 2 === 0;
                    const piece = {
                        name: cell,
                        rowIndex: rowIndex,
                        cellIndex: cellIndex
                    }
                     return <Piece piece={piece} possibleMoves={possibleMoves} isLight={isLight} handleSelectPiece={setSelectedPiece} key={`${rowIndex}-${cellIndex}`}></Piece>
                })
            ))}
        </div>

    </>
  ) 
}

export default Board