// console.log('Hello jee');

// let lastName = 'Kumar';

// let firstName = new string('Vivek');

// let message = 'This is \n my first \n message';
// use of bactic -output same as written
// let message = 
// `This $(lastName),
// is my 
// first 
// message`;
// console.log(message);

// let words = message.split(' ');
// console.log(words); 

// let date = new Date();
// console.log(date);

// let Day2 = new Date('June 20 1998 07:15');
// console.log(Day3);

//insertion...................

// let numbers = [1,4,5,7];
// numbers.push(9);                       //add end
// numbers.unshift(8);                   //add start
// numbers.splice(2,0,'a','b','c','d');  //add middle
// console.log(numbers);

//searching

// console.log(numbers);
// console.log(numbers.indexOf(9));

//exist or not

// console.log(numbers.includes(7));
// console.log(numbers.indexOf(4,2));

// let course = [
//     {no:1,name:'vivek'},
//     {no:2,name:'Rahul'}
// ];
// console.log(course);
// console.log(course.includes({no:1,name:'vivek'})); 

// function(course){
//     return course.name ==='vivek';
// }
// console.log(course);

//deletion.....................

// let number = [1,2,3,4,5,6,7];
// number.pop();           //end
// number.shift();         //start
// number.splice(2,1);     //middle
// console.log(number);

// let numbers = [1,2,3,4,5];
// let numbers2 = numbers;

// numbers=[];
// numbers.length = 0;
// numbers.splice(0,numbers.length);

// console.log(numbers);
// console.log(numbers2);

//for combined

//   let first = [1,2,3];
// let second = [4,5,6];

// let conbined = first.concat(second);
// console.log(conbined);

// let  marks = [10,20,30,40,50,60,70,80];
// let sliced = marks.slice(2);
// let sliced = marks.slice(2,6);
// console.log(sliced);

// let combined = [...first,'a',...second,'b'];
// console.log(combined);

//use of copy

// let another = [...combined];
// console.log(another); 

// let arr = [10,20,30,40,50];

// for(let value of arr){
//     console.log(value);
// }

// arr.forEach(number=> console.log(number));

//joining of array

// let numbers = [10,20,30,40,50];
// const joined = numbers.join (',');
// console.log(joined);

//splitting of array

// let message = 'This is my first message';
// let parts = message.split(' ');
// console.log(parts);

// let joined = parts.join('_');
// console.log(joined);

// sorting ->ascending and descending
// let numbers = [50,30,10,20,40];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

//filtering

// let numbers = [1,2,-1,-4];
// let filtered = numbers.filter(value => value>= 0);
// console.log(filtered);

//mapping

// let numbers = [7,8,9,10];
// console.log(numbers);
// let items = numbers.map(function(value){
//     return 'student_no' +value;
// }) 
// console.log(items); 

let numbers = [1,2,-6,-9];
let filtered = numbers.filter(value => value >= 0);
let items = filtered.map(num => {value:num});
console.log(items);
