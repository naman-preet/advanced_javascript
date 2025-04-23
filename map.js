//map can have key of any datatype
// const fruits= new Map([
//     ['apples',500],//it initializes the value of objects to constructor
//     ['bananas',300],
//     ['oranges',200]
// ]);
// console.log(fruits)
const fruits=new Map();
fruits.set('apples',500);//using set functionality you can create object after creation of function
fruits.set('bananas',300);
fruits.set('oranges',200);
console.log(fruits);
//change existing value
fruits.set('apples',600);
console.log(fruits);
//get value of key
console.log(fruits.get('apples'));
// typeoffruits;//it will return object.
//object are not directly iterable
//map are iterable
//object can have only string key datatype
//map can have any datatype as key
//JAVASCRIPT MAP METHODS
console.log(fruits.size);
// console.log(fruits.delete('apples'));
// console.log(fruits);
// console.log(fruits.clear());
// console.log(fruits);
console.log(fruits.has('apples'));
console.log(fruits.has('bananas'));
let text=""
fruits.forEach(function(value,key){
    text+=key+"="+value+" "
})
console.log(text);
let Text=""
for(const x of fruits.entries()){
    Text+=x;
}
console.log(Text);
let Text1=""
for(const x of fruits.keys()){
    Text1+=x+" ";
}
console.log(Text1);
let Text2=""
for(const x of fruits.values()){
    Text2+=x+" ";
}
console.log(Text2);
//sum
let sum=0; 
for(const x of fruits.values()){
    sum+=x;
}
console.log(sum);