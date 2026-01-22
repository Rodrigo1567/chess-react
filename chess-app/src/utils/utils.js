export function showPossibleMoves(piece, board) {
    // Placeholder logic for possible moves
    console.log(`Calculating possible moves for piece: `, piece, board);
    // This function would contain the actual logic to calculate and return possible moves

    switch (piece.name) {   
        case 'p': // black pawn
            return possibleMovesForPawn(piece,board); // Example moves
        case 'P': // white pawn
            return possibleMovesForPawn(piece,board);
        case 'r': // black rook
            return possibleMovesForRook(piece,board); // Example moves
        case 'R': // white rook
            return possibleMovesForRook(piece,board); // Example moves
        case 'n': // black knight
            return possibleMovesForKnight(piece,board); // Example moves
        case 'N': // white knight  
            return possibleMovesForKnight(piece,board); // Example moves
        case 'b': // black bishop
            return possibleMovesForBishop(piece,board); // Example moves
        case 'B': // white bishop
            return possibleMovesForBishop(piece,board); // Example moves 
        case 'q': // black queen
            return possibleMovesForQueen(piece,board); // Example moves
        case 'Q': // white queen
            return possibleMovesForQueen(piece,board); // Example moves
        case 'k': // black king
            return possibleMovesForKing(piece,board); // Example moves
        case 'K': // white king
            return possibleMovesForKing(piece,board); // Example moves
    }

    return [];
}

function possibleMovesForPawn(piece) {
    if(!piece) return [];
    let actualPosition = {
        row: piece.rowIndex,
        col: piece.cellIndex
    }
    if(actualPosition.row == 8 || actualPosition.col == 8) return [];
    return [[actualPosition.row + 1, actualPosition.col]];

}

function possibleMovesForRook(piece) {
    if(!piece) return [];
    let actualPosition = {
        row: piece.rowIndex,
        col: piece.cellIndex
    }
    let moves = [];
    while(actualPosition.row < 8) {
        moves.push([actualPosition.row + 1, actualPosition.col]);
        actualPosition.row++;
    }
    actualPosition.row = piece.rowIndex;
    while(actualPosition.row > 0) {
        moves.push([actualPosition.row - 1, actualPosition.col]);
        actualPosition.row--;
    }
    while(actualPosition.col < 8) {
        moves.push([actualPosition.row, actualPosition.col + 1]);
        actualPosition.col++;
    }
    actualPosition.col = piece.cellIndex;
    while(actualPosition.col > 0) {
        moves.push([actualPosition.row, actualPosition.col - 1]);
        actualPosition.col--;
    }
    return moves;
}

function possibleMovesForKnight(piece) {
    if(!piece) return [];
    let actualPosition = {
        row: piece.rowIndex,
        col: piece.cellIndex
    }
    let moves = [];
    // Knight moves in an L-shape: 2 squares in one direction and 1 square perpendicular
    moves.push([actualPosition.row + 2, actualPosition.col + 1]);
    moves.push([actualPosition.row + 2, actualPosition.col - 1]);
    moves.push([actualPosition.row - 2, actualPosition.col + 1]);
    moves.push([actualPosition.row - 2, actualPosition.col - 1]);
    moves.push([actualPosition.row + 1, actualPosition.col + 2]);
    moves.push([actualPosition.row + 1, actualPosition.col - 2]);
    moves.push([actualPosition.row - 1, actualPosition.col + 2]);
    moves.push([actualPosition.row - 1, actualPosition.col - 2]);

    return moves;
}
function possibleMovesForBishop(piece) {
    if(!piece) return [];
    let actualPosition = { 
        row: piece.rowIndex,
        col: piece.cellIndex
    };
    let moves = [];
    let directions = [[1,1], [1,-1], [-1,1], [-1,-1]];
    for (let [dr, dc] of directions) {
        let r = actualPosition.row + dr;
        let c = actualPosition.col + dc;
        while (r >= 0 && r < 8 && c >= 0 && c < 8) {
            moves.push([r, c]);
            r += dr;
            c += dc;
        }
    }
    return moves;
}

function possibleMovesForQueen(piece) {
    if(!piece) return [];
    let actualPosition = {
        row: piece.rowIndex,
        col: piece.cellIndex
    };
    let moves = [];
    moves.push(...possibleMovesForRook(piece));
    moves.push(...possibleMovesForBishop(piece));
    return moves;   
}

function possibleMovesForKing(piece) {
    if(!piece) return [];
    let actualPosition = {
        row: piece.rowIndex,
        col: piece.cellIndex
    };
    let moves = [];

    for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
            if (dr === 0 && dc === 0) continue;
            let r = actualPosition.row + dr;
            let c = actualPosition.col + dc;
            if (r >= 0 && r < 8 && c >= 0 && c < 8) {
                moves.push([r, c]);
            }
        }
    }
    return moves;
}