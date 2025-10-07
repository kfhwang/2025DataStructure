function fact(n){
    if(n==1)
        return 1;
    else  
       return n*(fact(n-1));
}
//recursive sum 1+2+3+...+n
function sum(n){
    if(n==1)
        return 1;
    else  
        return n+sum(n-1);
}

//test
var n=3;
console.log(n+"!="+fact(n));