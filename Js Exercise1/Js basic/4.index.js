// function run(){
//     console.log('running');
// }
// run();   //function call or invoke

//function assignment

// let stand = function walk(){
//     console.log('walking');
// };
// stand();

// let jump = stand;
// jump();

//annonymous function assignment

// let stand2 = function (){
//     console.log('walking');
// };
// stand();

// let jump = stand;
// jump();
// stand2();

// let x = 1;
// x = 'a';
// console.log(x);

// function sum (){
//     let total = 0;
//     for(let value of arguments)
//     total = total + value;
//     return total;
// }
// console.log(sum(1,2));
// console.log(sum(1));
// console.log(sum());
// console.log(sum(4,5,6,7,8));

// let ans = sum(1,2,3,4,5,6); 
// console.log(ans);

//rest operator

// function sum(num,...args){
//     console.log(args);
// }
// sum(1,2,3,4,5,6,7);

//default parameter

// function interest(p,q,r){
//     return p*q*r/100;
// }
// console.log(interest(100,10,5));

//getter - to access properties
//setter - to change or mutate properties

// let person = {
//     fName : 'vivek',
//     lName : 'kumar',
//     get fullName(){
//         return `${person.fName} ${person.lName}`;

//     },
//     set fullName(value){
//         if(typeof value !== String){
//             throw new Error("You have not sent a string");

//         }
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
// };
// console.log(person.fullName);  

//try and catch

// try{
//     person.fullName = true;
// }
// catch(e){
//     alert(e);
// }
// console.log(person.fullName);

// scope
 
//  for(var i=0;i<10;i++){

//  }
//  console.log(i);

//  if(true){
//     var a= 5;
//  }
//  console.log(a);

//  function a(){
//     const ab = 5;
//  }
//  const ab =5;
//  function b(){
//     const ab = 5;   
//  }

//reducing array

let arr = [1,2,3,4];
let total = 0;
for(let value of arr)
    total = total + value;
console.log(total);

let totalSum = arr.reduce((accumulator,currentValue) => accumulator + currentValue, 0);
console.log("Printing total sum:")
console.log(totalSum);
