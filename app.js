"use strict";

function Product(name, imagePath) {
  this.name = name;
  this.imagePath = imagePath;
  this.timesShown = 0;
}

let bag = new Product("bag", "./images/bag.jpg");
let bananas = new Product("bananas", "./images/banana.jpg");
let bathroom = new Product("Gbathroom", "./images/bathroom.jpg");
let boots = new Product("boots", "./images/boots.jpg");
let breakfast = new Product("breakfast", "./images/breakfastjpg");
let bubbleGum = new Product("bubbleGum", "./images/bubbleGum.jpg");
let chair = new Product("chair", "./images/chair.jpg");
let hulu = new Product("hulu", "./images/hulu.jpg");
let dog = new Product("dog", "./images/dog.jpg");
let dragon = new Product("dragon", "./images/dragon.jpg");
let pen = new Product("pen", "./images/pen.jpg");
let pet = new Product("pet", "./images/pet.jpg");
let scissors = new Product("scissors", "./images/scissors.jpg");
let shark = new Product("shark", "./images/shark.jpg");
let sweep = new Product("sweep", "./images/sweep.jpg");
let tauntaun = new Product("tauntaun", "./images/tauntaun.jpg");
let unicorn = new Product("unicorn", "./images/unicorn.jpg");
let water = new Product("water", "./images/water.jpg");

let product = new state.allproductArray.push(
  bag,
  bananas,
  bathroom,
  boots,
  breakfast,
  bubbleGum,
  chair,
  hulu,
  dog,
  dragon,
  pen,
  pet,
  scissors,
  shark,
  sweep,
  tauntaun,
  unicorn,
  water,
  wine
);

product1.timesShown++;

function selectProduct() {
  let randomIndex = Math.floor(Math.random() * products.length);
  let product = products[randomIndex];
  if (!selectedProducts.includes(product)) {
    selectedProducts.push(product);
  } else {
    selectProduct();
  }
}

// function renderduck() {
//   // call the getRandomNumber
//   let duck1 = getRandomNumber();
//   let duck2 = getRandomNumber();
//   let duck3 = getRandomNumber();

//   while (duck1 === duck2 || duck3) {
//     duck2 = getRandomNumber();
//   }

// // function handleDuckClick(event) {
//   if (event.target === duckContainer) {
//     alert("Please click on an image");
//   }
//   clicks++;
//   let clickDuck = event.target.alt;
//   for (let i = 0; i < state.allDuckArray.length; i++) {
//     if (clickDuck === state.allDuckArray[i].name) {
//       state.allDuckArray[i].clicks++;
//       break;
//     }
//   }
//   if (click s === maxClicksAllowed) {
//     duckContainer.removeEventListener("click", handleDuckClick);
//     // give the button an event lister and styles so the user
//     // knows its an active button:
//     resultButton.addEventListener("click", renderResults);
//     resultButton.className = "clicks-allowed";
//     duckContainer.className = "no-voting";
//   } else {
//     renderGoats();
//   }
// }

// function renderResults() {
//   let ul = document.querySelector("ul");
//   for (let i = 0; i < state.allDuckArray.length; i++) {
//     let li = document.createElement("li");
//     li.textContent = `${state.allGoatsDuck[i].name} had ${state.allDuckArray[i].views} view and was clicked ${state.allDuckArray[i].clicks} times.`;
//     ul.appendChild(li);
//   }
// }

// executable code
// let bag = new Duck("bag", "./images/bag.jpg");
// let bananas = new Duck("bananas", "./images/banana.jpg");
// let bathroom = new Duck("Gbathroom", "./images/bathroom.jpg");
// let boots = new Duck("boots", "./images/boots.jpg");
// let breakfast = new Duck("breakfast", "./images/breakfastjpg");
// let bubbleGum = new Duck("bubbleGum", "./images/bubbleGum.jpg");
// let chair = new Duck("chair", "./images/chair.jpg");
// let hulu = new Duck("hulu", "./images/hulu.jpg");
// let dog = new Duck("dog", "./images/dog.jpg");
// let dragon = new Duck("dragon", "./images/dragon.jpg");
// let pen = new Duck("pen", "./images/pen.jpg");
// let pet = new Duck("pet", "./images/pet.jpg");
// let scissors = new Duck("scissors", "./images/scissors.jpg");
// let shark = new Duck("shark", "./images/shark.jpg");
// let sweep = new Duck("sweep", "./images/sweep.jpg");
// let tauntaun = new Duck("tauntaun", "./images/tauntaun.jpg");
// let unicorn = new Duck("unicorn", "./images/unicorn.jpg");
// let water = new Duck("water", "./images/water.jpg");

// let product = new state.allproductArray.push(
//   bag,
//   bananas,
//   bathroom,
//   boots,
//   breakfast,
//   bubbleGum,
//   chair,
//   hulu,
//   dog,
//   dragon,
//   pen,
//   pet,
//   scissors,
//   shark,
//   sweep,
//   tauntaun,
//   unicorn,
//   water,
//   wine
// );

// render();

// Container.addEventListener("click", handledDuckClick);

// function Product(productName, images, timesBeenshown);{
//     name:
// }
