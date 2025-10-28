const LIVE = 1, DEAD = 0

class Life {
    constructor(_row, _col) {
        this.row = _row;
        this.col = _col;
        this.grid = []
        //dynamic 2d array
        for (let r = 0; r < _row; r++) {
            this.grid.push([]);
            for (let c = 0; c < _col; c++) {
                this.grid[r].push(DEAD)
            }
        }

    }
    getStatusAt = function (_row, _col) {
        if (_row < 0 || _col < 0 || _row >= this.row || _col >= this.col) {
            return DEAD;
        } else {
            return this.grid[_row][_col]
        }
    }
    neighborCount = function (_row, _col) {
        var count = 0;
        count += this.getStatusAt(_row - 1, _col - 1);//left top
        count += this.getStatusAt(_row - 1, _col);//up
        count += this.getStatusAt(_row - 1, _col + 1);//right top
        count += this.getStatusAt(_row, _col - 1);//left
        count += this.getStatusAt(_row, _col + 1);//right
        count += this.getStatusAt(_row + 1, _col - 1);//left bottom
        count += this.getStatusAt(_row + 1, _col);//bottom
        count += this.getStatusAt(_row + 1, _col + 1);//right bottom
        return count;
    }
    update = function () {
        //duplicate grid
        var nextGrid = JSON.parse(JSON.stringify(this.grid));
        for (let r = 0; r < this.row; r++) {
            for (let c = 0; c < this.col; c++) {
                var nCount = this.neighborCount(r, c);
                //update 
                //exercise 
                //    if(this.grid[r][c]==LIVE && (nCount<2 || nCount>3) ) {
                //         nextGrid[r][c]=DEAD;
                //    }
                //    if(this.grid[r][c]==DEAD && nCount==3){
                //         nextGrid[r][c]=LIVE;
                //    }
                if (nCount < 2 || nCount > 3) {
                    nextGrid[r][c] = (this.grid[r][c] == LIVE) ? DEAD : LIVE;
                }
                if (nCount == 3)
                    nextGrid[r][c] = (this.grid[r][c] == DEAD) ? LIVE : DEAD;
            }
        }
        this.grid = nextGrid;
        //garbage collection
        //gc()

    }

}
//exercise
//預設集
var LifeSet = [
{ name: "Pentomino", maxR: 2, maxC: 2, set: [{ r: 1, c: 0 }, { r: 2, c: 0 }, { r: 0, c: 1 }, { r: 1, c: 1 }, { r: 1, c: 2 }] },
{ name: "Tumbler", maxR: 5, maxC: 5, set: [{ r: 1, c: 0 }, { r: 4, c: 0 }, { r: 1, c: 1 }, { r: 2, c: 1 }, { r: 3, c: 1 }, { r: 4, c: 1 }, { r: 0, c: 2 }, { r: 5, c: 2 }, { r: 0, c: 3 }, { r: 2, c: 3 }, { r: 3, c: 3 }, { r: 5, c: 3 }, { r: 0, c: 4 }, { r: 5, c: 4 }, { r: 1, c: 5 }, { r: 2, c: 5 }, { r: 3, c: 5 }, { r: 4, c: 5 }] },
{ name: "Cheshire Cat", maxR: 6, maxC: 5, set: [{ r: 1, c: 0 }, { r: 2, c: 0 }, { r: 4, c: 0 }, { r: 5, c: 0 }, { r: 1, c: 1 }, { r: 2, c: 1 }, { r: 4, c: 1 }, { r: 5, c: 1 }, { r: 2, c: 2 }, { r: 4, c: 2 }, { r: 0, c: 3 }, { r: 2, c: 3 }, { r: 4, c: 3 }, { r: 6, c: 3 }, { r: 0, c: 4 }, { r: 2, c: 4 }, { r: 4, c: 4 }, { r: 6, c: 4 }, { r: 0, c: 5 }, { r: 1, c: 5 }, { r: 5, c: 5 }, { r: 6, c: 5 }] }
]

Life.prototype.init = function (type) {
    //random
    // var randCount=nLive;
    // while(randCount>0){
    //    var r=Math.floor(Math.random()*this.row);
    //    var c=Math.floor(Math.random()*this.col);
    //    if(this.grid[r][c]==DEAD){
    //        this.grid[r][c]=LIVE;
    //        randCount--;
    //    }
    // }
    if (type > LifeSet.length || type < 0)
        return;
    var offsetRow = Math.floor((this.row - LifeSet[type].maxR) / 2);
    var offsetCol = Math.floor((this.col - LifeSet[type].maxC) / 2);

    //init by LifeSet[]
    for (var i = 0; i < LifeSet[type].set.length; i++) {
        this.grid[offsetRow + LifeSet[type].set[i].r][offsetCol + LifeSet[type].set[i].c] = LIVE;
    }

}
//external
// Life.prototype.getStatusAt = function(_row,_col){
//     if(_row<0 || _col<0 || _row>=this.row || _col>=this.col){
//         return DEAD;
//     }else{
//         this.grid[_row][_col]
//     }
// }

// function getStatusAt(_row,_col){

// }

var myGame1 = new Life(10, 10)
var myGame2 = new Life(5, 5)
myGame1.init(1);
myGame1.update()
console.log(myGame1.grid)
