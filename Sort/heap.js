//input Array
//1 construction heap: end=Array.length
//2 heap sort=> end--

//siftDown(ary, pos, end)

Array.prototype.siftDown=function(pos,end){
     while(pos*2+1 <= end){
        var left=pos*2+1;
        var right=pos*2+2;
        var maxChild=left;
        if(right<=end && this[right]>this[left]){
            maxChild=right;
        }
        if(this[pos]<this[maxChild]){
            //swap
            // var temp=this[pos];
            // this[pos]=this[maxChild];
            // this[maxChild]=temp;
            [this[pos], this[maxChild]] = [this[maxChild],this[pos]];
            pos=maxChild;

        }else return;
     }
}

Array.prototype.heap=function(){
  //construction heap
  for(var internal=Math.floor(this.length/2)-1; internal>=0; internal--){
      this.siftDown(internal, this.length-1);
  }
  //sort
  for(var last=this.length-1; last>0; last--){
    //swap root <-> last
    // var temp=this[0];
    // this[0]=this[last];
    // this[last]=temp;
    [this[0],this[last]] = [this[last],this[0]];
    this.siftDown(0, last-1);
  }

}

var ary=[7,15,10,18,28,17,12,21,35,32];
ary.heap();
console.log(ary)