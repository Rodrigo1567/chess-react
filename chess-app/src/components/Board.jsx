import { use, useEffect , useState} from "react";
import Square from "./Square";
import Piece from "./Piece";

function Board({board, droppedPieces, onSquareClick, selected, possibleMoves, turn}) {
  let droppedWhitePieces = droppedPieces.white;
  let droppedBlackPieces = droppedPieces.black;

  return (
    <div className="chess-container">
        <div className="dropped-white-pieces">
            {droppedWhitePieces.map((piece, index) => (
                <div key={index} className="dropped-piece">
                    <Piece piece={piece}/>
                </div>
            ))}
        </div>
        <div className="board-chess">
            {board.map((row, rowIndex) => (
                row.map((piece, colIndex) => {
                    return <Square  key={`${rowIndex}-${colIndex}`}
                             row={rowIndex}
                             col={colIndex}
                             piece={piece}
                             isSelected={selected && selected.row === rowIndex && selected.col === colIndex}
                             isPossibleMove={possibleMoves.some(move => move[0] === rowIndex && move[1] === colIndex)}
                             onClick={onSquareClick}
                             turn={turn}>
                     </Square>

                })
            ))}
        </div>
        <div className="dropped-black-pieces">
            {droppedBlackPieces.map((piece, index) => (
                <div key={index} className="dropped-piece">
                     <Piece piece={piece}/>
                </div>
            ))}
        </div>

    </div>
  ) 
}

export default Board