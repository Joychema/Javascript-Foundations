// Arrays are data structures that store multiple values in a single variable.

// Example of an array
// let fruits = ["Apple", "Banana", "Cherry"];

// // Accessing elements in an array
// console.log(fruits[0]); // Output: Apple
// console.log(fruits[1]); // Output: Banana
// console.log(fruits[2]); // Output: Cherry

// // Adding elements to an array
// fruits.push("Orange");
// console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Orange"]

// // Removing elements from an array
// fruits.pop();
// console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// // Iterating over an array
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// // Using forEach method
// fruits.forEach(function(fruit) {
//     console.log(fruit);
// });

// const cars = [];
// cars[0] = 'audi',
// cars[1] = 'bmw',
// cars[2] = 'mercedes',

// console.log(cars)

// const Cars = ['audi', 'bmw', 'mercedes'];
// console.log(Cars[0]); // Output: audi
// Cars[0] = 'toyota';
// console.log(Cars[0]); // Output: toyota
// Cars.length; // Output: 3

// for(let i=0; i<Cars.length; i++){
//     console.log(Cars[i]);
// }

// // for loop
// const cats =["Jaguar ", "Lion ", "Leopard ", "Puma ", "Cheetah "];
// let myFavouriteCat = "My favourite cats are ";

// for(i=0; i<cats.length; i++){
//     if(cats === cats.length -1){
//         myFavouriteCat += `and ${cats[i]}.`
//     } else{
//         myFavouriteCat += `${cats[i]}`
//     }

// }
// console.log(myFavouriteCat);


// while loop
// i=0;

// while(i<cats.length){
//     if (cats === cats.length -1){
//         myFavouriteCat += `and ${cats[i]}.`
//     } else{
//         myFavouriteCat += `${cats[i]}.`
//     }
//     i++;
// }
// console.log(myFavouriteCat);


// do while loop
// i=0;

// do{
//     if(cats === cats.length-1){
//         myFavouriteCat += `and ${cats[i]}.`
//     }else{
//         myFavouriteCat += `${cats[i]}`
//     }
//     i++;
// } while(i<cats.length);

// dom manipulation
const container= document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the text-content!';
container.appendChild(content);
// In the JavaScript file, first we get a reference to the container div that already exists in our HTML. 
// Then we create a new div and store it in the variable content. 
// We add a class and some text to the content div and finally append that div to container. 


// a <p> with red text that says “Hey I’m red!”
const p = document.createElement('p');
p.style.color = 'red';
p.textContent = 'Hey I am red';
container.appendChild(p);

// an <h3> with blue text that says “I’m a blue h3!”
const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = 'I am a blue h3';
container.appendChild(h3);

// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// const container = document.querySelector(#container);
const div = document.createElement('div')
div.style.border = '1px solid black';
div.style.backgroundColor = 'pink';
const h1 = document.createElement('h1');
const p1 = document.createElement('p1');
div.appendChild(h1);
div.appendChild(p1);
h1.textContent ='I m in a div';
p1.textContent ='ME TOO!';
container.appendChild(div);

// const btn = document.querySelector('#btn');
// btn.onclick = () => alert('Hello World');
// The onclick property can be used to set the click event handler on any DOM element.
// In this case, we are setting the click event handler on the button element with the id btn.
// The alert function is called when the button is clicked, displaying the message "Hello World".

const btn = document.querySelector('#btn');
// btn.addEventListener('click', () => {
    // alert ('Hello World');
// })
function alertFunction(){
    alert('Hello World');
}
btn.addEventListener('click', alertFunction);
// The addEventListener method is used to attach an event handler to a DOM element.
// In this case, we are attaching a click event handler to the button element with the id btn.
// The alert function is called when the button is clicked, displaying the message "Hello World".

const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        alert(button.id);
    });
})