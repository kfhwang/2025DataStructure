var data=[
    {name:"amy", age: 15, tel: 5500},
    {name:"bob", age: 17, tel: 5500},
    {name:"coby", age: 10, tel: 5500},
    {name:"durtson", age: 25, tel: 5500},
    {name:"elan", age: 31, tel: 5500},
    {name:"future", age: 29, tel: 5500},
    {name:"gibson", age: 11, tel: 5500},
    {name:"hellen", age: 12, tel: 5500},
];
//key age
data.sort(
    (a,b)=>{
        return b.age-a.age
    }
);

console.log(data)
