import { use, useEffect , useState} from "react";
import Square from "./Square";


function Board({board, onSquareClick, selected, possibleMoves, turn}) {

  return (
    <>
    {console.log('Posibles movimientos',possibleMoves)}
        <h2 className="title-app">Chess App</h2>
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

    </>
  ) 
}

export default Board