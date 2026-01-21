import { use, useEffect , useState} from "react";
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

    useEffect(() => {
    if (!selectedPiece) return;
    console.log("Selected piece:", selectedPiece);
    //showPossibleMoves(selectedPiece, boardArray);
    }, [selectedPiece]);

  return (
    <>
        <h2 className="title-app">Chess App</h2>
        <div className="board-chess">
            {boardArray.map((row, rowIndex) => (
                row.map((cell, cellIndex) => {
                    const isLight = (rowIndex + cellIndex) % 2 === 0;
                     return <Piece piece={cell} isLight={isLight} handleSelectPiece={setSelectedPiece} key={`${rowIndex}-${cellIndex}`}></Piece>
                })
            ))}
        </div>

    </>
  ) 
}

export default Board