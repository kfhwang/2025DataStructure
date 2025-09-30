const readline = require("readline-sync")

// var MAX = 120, MIN = 5, value = 60, key;
// console.log('\n\n' + (new Array(20)).join(' ') +
//   '[Z] <- -> [X]  FIX: [SPACE]\n');
// while (true) {
//   console.log('\x1B[1A\x1B[K|' +
//     (new Array(value + 1)).join('-') + 'O' +
//     (new Array(MAX - value + 1)).join('-') + '| ' + value);
//   key = readline.keyIn('',
//     {hideEchoBack: true, mask: '', limit: 'zx '});
//   if (key === 'z') { if (value > MIN) { value--; } }
//   else if (key === 'x') { if (value < MAX) { value++; } }
//   else { break; }
// }
// console.log('\nA value the user requested: ' + value);

var weight=0;
while(weight<10 || weight>120){
    weight=readline.questionInt("Ur weight? (10~120KG)");
}
var height=readline.questionInt("Ur height? (cm)",{limit:'$<70-200>'});
var bmi=weight/((height/100)**2)


console.log("Hello! Your BMI is:" + bmi)
//promlem: only input Height, output?