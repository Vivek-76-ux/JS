console.log('vivek');

//object create

// let rectangle = {
//     length:1,
//     breadth:2,

//     draw: function(){
//         console.log('drawing rectangle');
//     }
// }; 

// function createRectangle(len,bre){
//     return rectangle = {
//         length:len,
//         breadth:bre,
    
//         draw: function(){
//             console.log('drawing rectangle');
//         }
//     }; 
// }

// let rectangleObj1 = createRectangle(5,4);
// let rectangle2 = createRectangle(2,3);
// let rectangle3 = createRectangle(6,4);

// function Rectangle(len,bre){
//     this.length = len;
//     this.breadth = bre;
//     this.draw = function(){
//         console.log('drawing');
//     }
// }

//object creation using constructor fucntion

// let rectangleObject = new Rectangle(4,6);
// rectangleObject.color = 'yellow';
// console.log(rectangleObject);

// delete rectangleObject.color;
// console.log(rectangleObject);

// let Rectangle1  = new Function(
//     'length', 'breadth',
//     'this.length = length;
//     this.length = breadth;
//     this.draw = function(){
//         console.log('drawing');

//     }');

    // object creation using Rectangle
    // let rect = new Rectangle(2,3);

    // console.log(rect);

// use in consol
// rectangle.breadth;
// rectangle.length;
// rectangle.draw;

//primitive

// let a = 10;
// let b = a;  
// a++;
// console.log(a);
// console.log(b);

//refrence

// let a = {value:10};
// let b = a;
// a.value++;
// console.log(a);
// console.log(b);

// let rectangle ={
//     length:2,
//     breadth:4
// };

// for-in loop

// for(let key in rectangle){
//     console.log(key,rectangle[key]);
// }

// //for-of loop

// for(let key of Object.entries(rectangle)){
//     console.log(key);
// }

// if('length' in rectangle){
//     console.log('present');
// } 
// else{
//     console.log('Absent');
// }

//object cloning 1

// let src ={
//     a:10,
//     b:20,
//     c:30
//  }   
//     let dest = {};
// for(let key in src){
//     dest[key] = src[key];
// }    
// console.log(dest);

// src.a++;
// console.log(dest);

//object clone  2

// let src ={
//     a:10,
//     b:20,
//     c:30
//  };
//  let dest = Object.assign({},src);
//  console.log(dest);
//  src.a++;
//  console.log(dest);

//object clone 3

let src = {
    a:10,
    b:20,
    c:30
};
let dest = {...src};
console.log(dest);
src.a++;
console.log(dest);
