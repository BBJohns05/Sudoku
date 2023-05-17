const _BOARD = [
  ['.', '9', '.', '.', '4', '2', '1', '3', '6'],
  ['.', '.', '.', '9', '6', '.', '4', '8', '5'],
  ['.', '.', '.', '5', '8', '1', '.', '.', '.'],

  ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
  ['5', '1', '7', '2', '.', '.', '9', '.', '.'],
  ['6', '.', '2', '.', '.', '.', '3', '7', '.'],

  ['1', '.', '.', '8', '.', '4', '.', '2', '.'],
  ['7', '.', '6', '.', '.', '.', '8', '1', '.'],
  ['3', '.', '.', '.', '9', '.', '.', '.', '.'],
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

function getRow(board,row){
    //return an array with all of the array elements from the row
    return board[row]
}

function getColumn(board, col){
    //returns an array with all of the array elements from column
    let inCol=[]
    for(row in board){
        inCol.push(board[row][col])//adding to array
    }
    return inCol
}

function getQuad(board, quadNum){
    //creates an array of all the elements in teh same equadrant
    let inQuad=[]
    for(row in board){
        for(col in board[row]){
            if(_QUADS[row][col]==quadNum){
                inQuad.push(board[row][col])
            }
        }
    }
    return inQuad
}
//For any [row] [col] on the board you will return the array of all possible numbers

function getPossible(board,row, col){
    let inRow=getRow(board,row)
    let inCol=getCol(board,col)
    let inQuid=getQuad(board, _QUADS[row][col])

    let possible = []
    let used = []

    //every row element that isnt possible 
    //remove any that have already been added to the board

    for (r in inRow){
        let included=false
        for (u in used){
            if(inRow[r]==used[u]){
                included = true;
                break;
            }
        }
        if(!included){
            used.push(inROw[r])
        }
    }

    for(c in inCol){
        let included = false
        for(u in used){
            if(inCol[c]==used[u]){
                included = true;
                break;
            }
        }
        if(!included){
            used.push(inCol[c])
        }
    }

    for(u in used){
        if(used[u]=="."){
            used.splice(u,1)
        }
    }
}