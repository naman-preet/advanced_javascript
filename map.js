// //map can have key of any datatype
// // const fruits= new Map([
// //     ['apples',500],//it initializes the value of objects to constructor
// //     ['bananas',300],
// //     ['oranges',200]
// // ]);
// // console.log(fruits)
// const fruits=new Map();
// fruits.set('apples',500);//using set functionality you can create object after creation of function
// fruits.set('bananas',300);
// fruits.set('oranges',200);
// console.log(fruits);
// //change existing value
// fruits.set('apples',600);
// console.log(fruits);
// //get value of key
// console.log(fruits.get('apples'));
// // typeoffruits;//it will return object.
// //object are not directly iterable
// //map are iterable
// //object can have only string key datatype
// //map can have any datatype as key
// //JAVASCRIPT MAP METHODS
// console.log(fruits.size);
// // console.log(fruits.delete('apples'));
// // console.log(fruits);
// // console.log(fruits.clear());
// // console.log(fruits);
// console.log(fruits.has('apples'));
// console.log(fruits.has('bananas'));
// let text=""
// fruits.forEach(function(value,key){
//     text+=key+"="+value+" "
// })
// console.log(text);
// let Text=""
// for(const x of fruits.entries()){
//     Text+=x;
// }
// console.log(Text);
// let Text1=""
// for(const x of fruits.keys()){
//     Text1+=x+" ";
// }
// console.log(Text1);
// let Text2=""
// for(const x of fruits.values()){
//     Text2+=x+" ";
// }
// console.log(Text2);
// //sum
// let sum=0; 
// for(const x of fruits.values()){
//     sum+=x;
// }
// console.log(sum);
// const apples={name:'apples'};
// const bananas={name:'bananas'};
// const oranges={name:'oranges'};
// const fruits= new Map();
// fruits.set(apples,500);
// fruits.set(bananas,300);
// fruits.set(oranges,200);
// console.log(fruits);    
// fruits.get("apples");
// console.log(fruits.get(apples));
//CREATION OF ARRAY
// const fruits=[
//     {name:'apples',quantity:500},
//     {name:'bananas',quantity:300},
//     {name:'oranges',quantity:200},
//     {name:'kiwi',quantity:100}
// ];
// //destructuring
// function myCallback({quantity}){
//     return quantity>200?"ok":"low";
// }
// const result=Map.groupBy(fruits,myCallback);
// console.log(result);
//JAVASCRIPT DESTRUCTURING
// const person={
//     firstName:'John',
//     lastName:'Doe',
//     age:30
// };
// let {firstName,lastName}=person;
// console.log(firstName,lastName);
// console.log(lastName,firstName);
//DESTRUCTURING IS NOT DESTRUCTIVE
// let {firstName, lastName, country = 'USA'} = person;
// console.log(firstName,lastName,country);
// let{lastName:name}=person;
// console.log(name);
// console.log(lastName)
//STRING DESTRUCTURING
// let name="GurukulTheSchools";
// let[a1,a2,a3,a4,a5]=name;
// console.log(a1,a2,a3,a4,a5);
//CREATION OF ARRAY
// const fruits=["apples","bananas","oranges","kiwi"];
// let[fruit1,fruit2]=fruits;
// console.log(fruit1,fruit2);
// let[fruit1,,,fruit2]=fruits;
// console.log(fruit1,fruit2);
//INDEXING IN ARRAY
// const fruits=["apples","bananas","oranges","kiwi"];
// let{[0]:fruit1,[1]:fruit2}=fruits;
// console.log(fruit1,fruit2);
// let{[0]:fruit1,[2]:fruit2,[3]:fruit3}=fruits;
// console.log(fruit1,fruit2,fruit3);
//REST PROPERTY
// const numbers=[10,20,30,40,50,60,70,80,90,100];
// const [a, b, ...rest] = numbers;
// console.log(a); 
// console.log(b);
// console.log(rest);
// //DESTRUCTURING MAP
//  const fruits= new Map([
//     ['apples',500],
//     ['bananas',300],
//     ['oranges',200]
// ]);
// let text="";
// for(const[key,value] of fruits){
//     text+=key+" "+"is"+value+" ";
// }
// console.log(text);
// let firstName="John";
// let lastName="Doe";
// [firstName,lastName]=[lastName,firstName];
// console.log(firstName,lastName);
//JAvascript exponential operator
// let x=5;
// let z=x**2;
// console.log(z);
// let y=Math.pow(x,2);
// console.log(y);
// x**=2;//complex assignment
// console.log(x);
//ARRAY INCLUDES
// const fruits=["apples","bananas","oranges","kiwi"];
// console.log(fruits.includes("apples"));
// console.log(fruits.includes("oranges",3));
//TRAILING COMMAS
//ALSO KNOWN AS DANGLING COMMAS
//a comma symbol at the end of the last element in an array or object literal.
// const arr=[
//     "one",
//     "two",
//     "three",,//this comma is trailing comma
// ];
// console.log(arr);
// console.log(arr.length);
// const sparsearray=[1,,,4,5,,];
// console.log(sparsearray);
// console.log(sparsearray.length);
// const arr=[,];
// console.log(arr.length);
// const person={
//     firstName:'John',
//     lastName:'Doe',
//     age:30,
// }
// let {firstName,lastName}=person;
// console.log(firstName,lastName,age);
function createRectangularPrism(w, h, d) {
    // Example function body: calculate the volume of the rectangular prism
    return w * h * d;
}