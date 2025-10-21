var readline= require("readline-sync");

var row = readline.questionInt("How many row?");
var col = readline.questionInt("How many col?");

//2d Array row x col
var aryRowCol=[];
for (let r = 0; r < row; r++) {
    aryRowCol.push([]);
    for (let c = 0; c < col; c++) {
        aryRowCol[r].push(r*7+c)
    }
}
aryRowCol[1][1]
//2d->1d: r*col+c
//1d->2d: 8->1,1 8/col, 8%col
//1d->2d: 25->3,4 25/col, 25%col

console.log(JSON.stringify(aryRowCol))