// console.log('how are you');

// function sync(){
//     console.log ('first');
// }
// sync();
// console.log('second');

// setTimeout(function(){
//     console.log('third');
// },2000)
// console.log('how are you');  
// function sync(){
//     console.log ('first');
// }
// sync();
// console.log('second');

// let meraPromise2 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('I am inside Promise2');
//     },3000);
//         // resolve(3345);
//         reject(new Error('Bhaisahab error aaya hai'))   
//     });   

//     meraPromise2.then((value) => {console.log(value)}, (error) => {console.log("Recieved an error")});

// let meraPromise1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('I am inside Promise1');
//     },3000);
//         // resolve(3345);
//         reject(new Error('Bhaisahab error aaya hai'))   
//     });

    // console.log('pehla');


// let waadaa1 = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log('setTimeout1 started');
//     },2000);
//     resolve(true);
// })

// let output = waadaa1.then(()=>{
//     let waadaa2 = new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log('setTimeout2 started');
//         },3000);
        
//     })
//     return waadaa2;
// })
// output.then((value) => console.log(value));

// async function abcd(){
//     // return 7;
//     return "kya hua tera";
// }
// console.log(abcd());

//fetch API 
// let obj ={
//     heading:"head"
// };
// async function utility(){
//     let content = await fetch('http://jsonplaceholder.typicode.com/posts/1');
//     let output = await content.json();
//     console.log(output);
// }
// utility();

//post call
// async function helper() {

//     let options = {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'Babbar',
//           body: 'Tagdi Body ',
//           userId: 1998,
//           weight: 90,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//     };
    
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
//     let response = content.json();
//     return response;
// }


// async function utility() {
//     let ans = await helper();
//     console.log(ans);
// }

// utility();


//closures
function init() {
    let name = "Mozilla"; 
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    return displayName;
}
let a = init();
a();

  