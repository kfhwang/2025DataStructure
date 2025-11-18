class Stack {
    constructor(_max) {
        this.max = _max;
        this.container = [];
    }
    push = function (data) {
        this.container.push(data);
    }
    pop = function () {
        //isEmpty
        return this.container.pop();
    }
    isEmpty = function () {
        return this.container.length == 0;
    }
    isFull = function () {
        return this.container.length == this.max;
    }
}


var str = "{a = (1 + v(b[3 + <c[4]]))>"
// console.log(str.charAt(0));
console.log(bracketMatch(str));
var open= "{[(<";//["{","[","("]
var close="}])>";//["}","]",")"]

function bracketMatch(str) {
    var bmStack = new Stack(100);
    for (let i = 0; i < str.length; i++) {
        console.log(i + " Char: " + str[i]);
        //if (str[i] == '{' || str[i] == '[' || str[i] == '(') {
        if(open.indexOf(str[i])>=0){
            bmStack.push(str[i]);
        }
        //else if (str[i] == '}' || str[i] == ']' || str[i] == ')') {
        else if(close.indexOf(str[i])>=0){
            //isEmpty 
            if(bmStack.isEmpty()){
                return "unMatch";
            }
            var openning = bmStack.pop();
           // if ((str[i] == '}' && openning == "{") || (str[i] == ']' && openning == "[") || (str[i] == ')' && openning == "(")) {
            if(open.indexOf(openning)==close.indexOf(str[i])){
                console.log("Open:"+openning+" Close:"+str[i]);
            } else {
                return "unMatch";
            }
        }
       
    }
    if(bmStack.isEmpty())
        return "Match";//?
    else
        return "unMatch";
}
 