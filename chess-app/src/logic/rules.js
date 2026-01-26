export function showPossibleMoves(piece, position, board) {
    if(!piece) return [];
    switch (piece.name) {   
        case 'p': // black pawn
            return possibleMovesForPawn(position,piece.color,board); // Example moves
        case 'P': // white pawn
            return possibleMovesForPawn(position,piece.color,board);
        case 'r': // black rook
            return possibleMovesForRook(position,piece.color,board); // Example moves
        case 'R': // white rook
            return possibleMovesForRook(position,piece.color,board); // Example moves
        case 'n': // black knight
            return possibleMovesForKnight(position,piece.color,board); // Example moves
        case 'N': // white knight  
            return possibleMovesForKnight(position,piece.color,board); // Example moves
        case 'b': // black bishop
            return possibleMovesForBishop(position,piece.color,board); // Example moves
        case 'B': // white bishop
            return possibleMovesForBishop(position,piece.color,board); // Example moves 
        case 'q': // black queen
            return possibleMovesForQueen(position,piece.color,board); // Example moves
        case 'Q': // white queen
            return possibleMovesForQueen(position,piece.color,board); // Example moves
        case 'k': // black king
            return possibleMovesForKing(position,piece.color,board); // Example moves
        case 'K': // white king
            return possibleMovesForKing(position,piece.color,board); // Example moves
    }

    return [];
}

function possibleMovesForPawn(position, color, board) {
    if(!piece) return [];
    if(color === 'white') {
        if(position.row == 0) return [];
        return [[position.row - 1, position.col]];
    }

    if(position.row == 8 || position.col == 8) return [];
    return [[position.row + 1, position.col]];

}

function possibleMovesForRook(position, color, board) {
    if(!piece) return [];
    let moves = [];
    const directions = [
        { dr: 1, dc: 0 },
        { dr: -1, dc: 0 },
        { dr: 0, dc: 1 },
        { dr: 0, dc: -1 },
    ];
    
    for (let { dr, dc } of directions) {
        let r = position.row + dr;
        let c = position.col + dc;
        while (isInsideofBoard(r, c)) {
            
        }
    }
}

function possibleMovesForKnight(position, color, board) {
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
function possibleMovesForBishop(position, color, board) {
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

function possibleMovesForQueen(position, color, board) {
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

function possibleMovesForKing(position, color, board) {
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