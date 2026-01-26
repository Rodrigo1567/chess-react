export function showPossibleMoves(piece, position, board) {
    if(!piece) return [];
    switch (piece.type) {   
        case 'pawn': // black pawn
            return possibleMovesForPawn(position,piece.color,board); // Example moves
        case 'rook': // black rook
            return possibleMovesForRook(position,piece.color,board); // Example moves
        case 'knight': // black knight
            return possibleMovesForKnight(position,piece.color,board); // Example moves
        case 'bishop': // black bishop
            return possibleMovesForBishop(position,piece.color,board); // Example moves 
        case 'queen': // black queen
            return possibleMovesForQueen(position,piece.color,board); // Example moves
        case 'king': // black king
            return possibleMovesForKing(position,piece.color,board); // Example moves

    }

    return [];
}

function possibleMovesForPawn(position, color) {
    if(color === 'white') {
        if(position.row == 0) return [];
        return [[position.row - 1, position.col]];
    }

    if(position.row == 8 || position.col == 8) return [];
    return [[position.row + 1, position.col]];

}

function possibleMovesForRook(position, color, board) {
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
        while (canExecuteMove(board, r, c, color)) {
            moves.push([r, c]);
            r += dr;
            c += dc;
        }
    }
    return moves
}

function possibleMovesForKnight(position, color,board) {
    let actualPosition = {
        row: position.row,
        col: position.col
    };

    const jumps = [
        { dr: 2, dc: 1 },
        { dr: 2, dc: -1 },
        { dr: -2, dc: 1 },
        { dr: -2, dc: -1 },
        { dr: 1, dc: 2 },
        { dr: 1, dc: -2 },
        { dr: -1, dc: 2 },
        { dr: -1, dc: -2 },
    ];
    let moves = [];
    
    for (const { dr, dc } of jumps) {
        const r = actualPosition.row + dr;
        const c = actualPosition.col + dc;
        if (canExecuteMove(board, r, c, color)) {
            moves.push([r, c]);
        }
    }

    return moves;
}
function possibleMovesForBishop(position, color,board) {
    let actualPosition = { 
        row: position.row,
        col: position.col
    };
    let moves = [];
    let directions = [[1,1], [1,-1], [-1,1], [-1,-1]];
    for (let [dr, dc] of directions) {
        let r = actualPosition.row + dr;
        let c = actualPosition.col + dc;
        while (canExecuteMove(board, r, c, color)) {
            moves.push([r, c]);
            r += dr;
            c += dc;
        }
    }
    return moves;
}

function possibleMovesForQueen(position, color, board) {
    let actualPosition = { 
        row: position.row,
        col: position.col
    };
    let moves = [];
    moves.push(...possibleMovesForRook(position, color));
    moves.push(...possibleMovesForBishop(position, color));
    return moves;   
}

function possibleMovesForKing(position, color, board) {
    let actualPosition = {
        row: position.row,
        col: position.col
    };
    let moves = [];

    for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
            if (dr === 0 && dc === 0) continue;
            let r = actualPosition.row + dr;
            let c = actualPosition.col + dc;
            if(canExecuteMove(board, r, c, color)) {
                moves.push([r, c]);
            }
        }
    }
    return moves;
}


const isInsideBoard = (row, col) =>
  row >= 0 && row < 8 && col >= 0 && col < 8;

const isEmpty = (board, row, col) => {
    console.log('Checking if position is empty:', row, col, 'Value:', board[row][col]);
    return board[row][col] == null;
}

const isEnemy = (board, row, col, color) =>{
    return board[row][col] && board[row][col].color !== color;
}

const canExecuteMove = (board, row, col, color) => {
    return isInsideBoard(row, col) && !isEnemy(board, row, col, color) && isEmpty(board, row, col);
}