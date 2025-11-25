
var MAZE = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];//8,10

class Point{
    constructor(_row,_col){
        this.row= _row;
        this.col=_col;
    }
}

var start=new Point(1,1);
var end = new Point(8,10);
var Stack=[];


var CP=start;//currentPosition
do{
    MAZE[CP.row][CP.col]=2;
    //4 directions
    if(MAZE[CP.row-1][CP.col]==0){//up
        Stack.push(CP);
        CP = new Point(CP.row-1,CP.col);
    }else if(MAZE[CP.row][CP.col-1]==0){ //left
        Stack.push(CP);
        CP = new Point(CP.row,CP.col-1);
    }else if(MAZE[CP.row+1][CP.col]==0){//down
        Stack.push(CP);
        CP = new Point(CP.row+1,CP.col);
    }else if(MAZE[CP.row][CP.col+1]==0){//right
        Stack.push(CP);
        CP = new Point(CP.row,CP.col+1);
    }else{
        if(Stack.length>0){
            //pop
            CP=Stack.pop();
        }
        else{
            //no solution
            console.log("No solution!");
            break;
        }
    }
//}while(!(CP.row==end.row && CP.col==end.col));
}while(CP.row!=end.row || CP.col!=end.col);

if(Stack.length>0){
  //print path 
  Stack.push(end);
  Stack.forEach((item,index)=>{
       console.log("Step "+(index+1)+" to ["+item.row+"]["+item.col+"]");
  })

}
