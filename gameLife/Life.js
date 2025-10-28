const LIVE=1, DEAD=0

class Life{
    constructor(_row, _col){
        this.row = _row;
        this.col = _col;
        this.grid=[]
        //dynamic 2d array
        for (let r = 0; r < _row; r++) {
            this.grid.push([]);
            for (let c = 0; c < _col; c++) {
                this.grid[r].push(DEAD)
            }
        }

    }
    getStatusAt = function(_row,_col){
        if(_row<0 || _col<0 || _row>=this.row || _col>=this.col){
            return DEAD;
        }else{
            return this.grid[_row][_col]
        }
    }
    neighborCount=function(_row,_col){
        var count=0;
        count += this.getStatusAt(_row-1, _col-1);//left top
        count += this.getStatusAt(_row-1, _col);//up
        count += this.getStatusAt(_row-1, _col+1);//right top
        count += this.getStatusAt(_row, _col-1);//left
        count += this.getStatusAt(_row, _col+1);//right
        count += this.getStatusAt(_row+1, _col-1);//left bottom
        count += this.getStatusAt(_row+1, _col);//bottom
        count += this.getStatusAt(_row+1, _col+1);//right bottom
        return count;
    }
    update=function(){
        //duplicate grid
        var nextGrid = JSON.parse(JSON.stringify(this.grid));
        for (let r = 0; r < this.row; r++) {
            for (let c = 0; c < this.col; c++) {
               var nCount = this.neighborCount(r, c);
               //update 
               //exercise 
               if(this.grid[r][c]==LIVE && (nCount<2 || nCount>3) ) {
                    nextGrid[r][c]=DEAD;
               }
               if(this.grid[r][c]==DEAD && nCount==3){
                    nextGrid[r][c]=LIVE;
               }
            }
        }
        this.grid = nextGrid;
        //garbage collection
        //gc()

    }
    //exercise
    init=function(nLive){

        var randCount=nLive;
        while(randCount>0){
           var r=Math.floor(Math.random()*this.row);
           var c=Math.floor(Math.random()*this.col);
           if(this.grid[r][c]==DEAD){
               this.grid[r][c]=LIVE;
               randCount--;
           }
        }

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

var myGame1 = new Life(10,10)
var myGame2 = new Life(5,5)
myGame1.init(10);
myGame1.update()
console.log(myGame1.grid)
