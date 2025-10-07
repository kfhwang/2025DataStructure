function fib(n){
    //prevent n<0
    if(n==0||n==1)
        return n;
    else
       return fib(n-1)+fib(n-2);
}
//test
var n=3
console.log("fibonacci "+n+"="+fib(n));