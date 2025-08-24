 
//  document.addEventListener('click',function(){
//     console.log('I have clicked on the document');
//  });

//  const content = document.quarySelector('#wrapper');

//  content.addEventListener('click',function(event){
//     console.log(event);
//  })

// function newFunction() {
//     let links = document.querySelectorAll('a');
//     let thirdLink = links[2];
//     thirdLink.addEventListener('click', function (event) {
//         event.preventDefault();
//         console.log('maza aaya, kaisa laga');
//     });
// }

// let myDiv = document.createElement('div');
// function paraStatus(event){
//     console.log('para' +event.target.testContent);
// }
// myDiv.addEventListener('click',paraStatus);
// for(let i=1;i<=100;i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para' +i;

//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

let element = document.querySelector('#wrapper');
element.addEventListener('click',function(event){
    if(event.target.nodeName === 'SPAN'){
          console.log('span pr click kia hai');  
    }

});