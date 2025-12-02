
var MAZE = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];//8,10

class Point {
    constructor(_row, _col) {
        this.row = _row;
        this.col = _col;
    }
}

var start = new Point(1, 1);
var end = new Point(8, 10);
var Stack = [];
var Direction = [[-1, 0], [0, -1], [1, 0], [0, 1]].sort((a, b) => { return Math.random() - 0.5 });//permutation

var CP = start;//currentPosition

go();

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function go() {
    do {
        MAZE[CP.row][CP.col] = 2;
        await(delay(500));
        drawBoard();


        //4 directions
        if (MAZE[CP.row + Direction[0][0]][CP.col + Direction[0][1]] == 0) {//dir0
            Stack.push(CP);
            CP = new Point(CP.row + Direction[0][0], CP.col + Direction[0][1]);
        } else if (MAZE[CP.row + Direction[1][0]][CP.col + Direction[1][1]] == 0) { //dir1
            Stack.push(CP);
            CP = new Point(CP.row + Direction[1][0], CP.col + Direction[1][1]);
        } else if (MAZE[CP.row + Direction[2][0]][CP.col + Direction[2][1]] == 0) {//dir2
            Stack.push(CP);
            CP = new Point(CP.row + Direction[2][0], CP.col + Direction[2][1]);
        } else if (MAZE[CP.row + Direction[3][0]][CP.col + Direction[3][1]] == 0) {//dir3
            Stack.push(CP);
            CP = new Point(CP.row + Direction[3][0], CP.col + Direction[3][1]);
        } else {
            if (Stack.length > 0) {
                //pop
                CP = Stack.pop();
            }
            else {
                //no solution
                console.log("No solution!");
                break;
            }
        }
        //}while(!(CP.row==end.row && CP.col==end.col));
    } while (CP.row != end.row || CP.col != end.col);
    
    if (Stack.length > 0) {
        MAZE[CP.row][CP.col] = 2;
        drawBoard();
        //print path 
        Stack.push(end);
        // Stack.forEach((item, index) => {
        //     //console.log("Step "+(index+1)+" to ["+item.row+"]["+item.col+"]");
        //     await(delay(500));
        //     drawPoint(item.row, item.col, "#ff0000");
            
            
        // })
        do{
            //var item=Stack.pop();
            var item = Stack.shift();  //push <-> unshift
            await(delay(500));
            drawPoint(item.row, item.col, "#ff0000");
        }while(Stack.length>0);

    }
}

function drawPoint(row, col, color) {
    var canvas = document.getElementById("board").getContext("2d");
    var size = Math.floor(Math.min(canvas.canvas.height / MAZE.length, canvas.canvas.width / MAZE[0].length));

    canvas.fillStyle = color;

    canvas.fillRect(col * size, row * size, size, size);
    canvas.strokeRect(col * size, row * size, size, size);
}

function drawBoard() {
    var canvas = document.getElementById("board").getContext("2d");
    var size = Math.floor(Math.min(canvas.canvas.height / MAZE.length, canvas.canvas.width / MAZE[0].length));
    for (let row = 0; row < MAZE.length; row++) {
        for (let col = 0; col < MAZE[0].length; col++) {
            // if(MAZE[row][col]==0){

            // }else if(MAZE[row][col]==1){

            // }else if(MAZE[row][col]==2){

            // }else{

            // }
            switch (MAZE[row][col]) {
                case 0:
                    canvas.fillStyle = "#ffffff";
                    break;
                case 1:
                    canvas.fillStyle = "#000000";
                    break;
                case 2:
                    canvas.fillStyle = "#00ff00";
                    break;
                default:

            };
            canvas.fillRect(col * size, row * size, size, size);
            canvas.strokeRect(col * size, row * size, size, size);

        }

    }
}
