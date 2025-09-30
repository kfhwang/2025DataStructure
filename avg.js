// function avg(score){
//     var sum=0, average=0;//1
//     for(var i=0;i<score.length;i++){//n+1
//         sum += score[i];  //n
//     }
//     if(score.length>0)//1
//         average=sum/score.length;
//     return average;//1
// }

function avg(score){
    var sum=0;//1
    for(var i=0;i<score.length;i++){//n+1
        sum += score[i];  //n
    }
    return (score.length>0) ? sum/score.length : 0;
}

//Test
var Score=[50,20,30,15,16,21,33,11,-9,27];
//var Score=[];
console.log(Score.toString()+" average:"+ avg(Score))

