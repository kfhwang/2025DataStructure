var ary=[1,2,3];
var ary2=ary;//point to the same array

ary2[1]=5;

console.log("ary="+JSON.stringify(ary))
ary[1]=2;
//duplicate array
var ary3 = JSON.parse(JSON.stringify(ary))
ary3[1]=5;
console.log("ary="+JSON.stringify(ary))

ary[0]={"name":"John","age":20,"subject":"MD"}
//structureClone
var  ary4=structuredClone(ary);
ary4[0].name="Tracy";
console.log("ary="+JSON.stringify(ary))