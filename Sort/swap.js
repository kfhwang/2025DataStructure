// function swap(a, b){
//     var temp=a[0];
//     a[0]=b[0];
//     b[0]=temp;
//     return ;
// }
function swap(a,b){
     var temp=a;
     a=b;
     b=temp;
     return [a,b];
}
// var t=[6], y=[1];
var t=6, y=1;
console.log("t:"+t+", y="+y);
//swap(t,y);
[t,y]=swap(t,y);
console.log("t:"+t+", y="+y);
