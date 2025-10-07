// function sum(n){
//     var result=0;
//     var i=0;
//     while(i++ < n){
//         result += i;
//     }
//     return result;
// }

function sum(n){
    var result=0;
    var i=1;
    do{
        result += i; //n O(n)
    }while(i++ < n);
    return result;
    //O(1)
    //return (1+n)*n/2
}
//Test
var n=10;
console.log("1+2+...+"+n+"="+sum(n))
