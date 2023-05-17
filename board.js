const _BOARD = [
  ['.', '.', '7', '3', '.', '2', '9', '6', '5'],
  ['3', '.', '2', '5', '4', '.', '.', '8', '.'],
  ['1', '6', '5', '.', '.', '.', '.', '2', '.'],

  ['.', '2', '.', '.', '.', '.', '4', '3', '8'],
  ['5', '8', '.', '.', '6', '.', '1', '.', '.'],
  ['.', '.', '.', '2', '.', '7', '.', '9', '.'],

  ['.', '5', '4', '.', '3', '8', '.', '.', '7'],
  ['2', '.', '.', '.', '5', '1', '6', '.', '.'],
  ['6', '.', '.', '.', '.', '.', '8', '.', '3'],
]

const _QUADS = [
  [1, 1, 1, 2, 2, 2, 3, 3, 3],
  [1, 1, 1, 2, 2, 2, 3, 3, 3],
  [1, 1, 1, 2, 2, 2, 3, 3, 3],

  [4, 4, 4, 5, 5, 5, 6, 6, 6],
  [4, 4, 4, 5, 5, 5, 6, 6, 6],
  [4, 4, 4, 5, 5, 5, 6, 6, 6],

  [7, 7, 7, 8, 8, 8, 9, 9, 9],
  [7, 7, 7, 8, 8, 8, 9, 9, 9],
  [7, 7, 7, 8, 8, 8, 9, 9, 9],
]

function getRow(board, row){
    //return an array with all of the array elements from the row
    return board[row];
}

function getColumn(board, col){
    // return an array with all of the array elements from the column
    let inCol = [];
    for(row in board){
        inCol.push(board[row][col]);
    }
    return inCol;
}

function getQuad(board, quadNum){
    // creates an array of all elements in the same quadrant
    let inQuad = [];
    for(row in board){
        for(col in board[row]){
            if(_QUADS[row][col] == quadNum){
                inQuad.push(board[row][col]);
            }
        }
    }
    return inQuad;
}

// for any [row] [col] on the board, you will return the array of all possible numbers
function getPossible(board, row, col){
    let inRow = getRow(board, row);
    let inCol = getColumn(board, col);
    let inQuad = getQuad(board, _QUADS[row][col]);

    let possible = [];
    let used = [];

    // every row element that isn't possible
    // remove any that have already been added to the board
    for(r in inRow){
        let included = false;
        for(u in used){
            if(inRow[r] == used[u]){
                included = true;
                break;
            }
        }
        if(!included){
            used.push(inRow[r]);
        }
    }

    for(c in inCol){
        let included = false;
        for(u in used){
            if(inCol[c] == used[u]){
                included = true;
                break;
            }
        }
        if(!included){
            used.push(inCol[c]);
        }
    }

    for(q in inQuad){
        let included = false;
        for(u in used){
            if(inQuad[q] == used[u]){
                included = true;
                break;
            }
        }
        if(!included){
            used.push(inQuad[q]);
        }
    }
    
    for(u in used){
        if(used[u] == "."){
            used.splice(u,1);
        }
    }

    for(let num=1; num<10; num++){
        if(!used.includes(num+"")){
            possible.push(num+"");
        }
    }
    return possible;
}

let updated = true;

function fillInCell(board, row, col){
    if(board[row][col]=="."){
        let possible = getPossible(board, row, col);

        if(possible.length==1){
            board[row][col] = possible[0];
            updated = true;
        }
    }
}

while(updated){
    updated = false;
    for(row2 in _BOARD){
        for(col in _BOARD[row2]){
            fillInCell(_BOARD,row2,col);
        }
    }
}

console.table(_BOARD);