"use strict";

// global varriables

let goatContainer = document.querySelector("section");
let resultButton = document.querySelector("section + div");
// let image1 = document.querySelector("section img:first-child");
// let image2 = document.querySelector("section img:nth-child(2)");
// let image3 = document.querySelector("section img:rd-child(3)");

let clicks = 0;
let maxClicksAllowed = 9;

// State object holds the holds the current state of the application (all existing Goats)
const state = {
  allDuckArray: [],
};

// functional logic

function product(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.clicks = 0;
}

function getRandomNumber() {
  return Math.floor(Math.random() * state.allduckArray.length);
}

function renderduck() {
  // call the getRandomNumber
  let duck1 = getRandomNumber();
  let duck2 = getRandomNumber();
  let duck3 = getRandomNumber();

  while (duck1 === duck2 || duck3) {
    duck2 = getRandomNumber();
  }
  image1.src = state.allduckArray[duck1].src;
  image2.src = state.allduckArray[duck2].src;
  image3.src = state.allDuckArray[duck3].src;
  image1.alt = state.allduckArray[duck1].name;
  image2.alt = state.allduckArray[duck2].name;
  image3.alt = state.allduckArray[duck3].name;
  state.allDuckArray[duck1].views++;
  state.allDuckArray[duck2].views++;
  state.allDuckArray[duck3].views++;
}

function handleDuckClick(event) {
  if (event.target === duckContainer) {
    alert("Please click on an image");
  }
  clicks++;
  let clickDuck = event.target.alt;
  for (let i = 0; i < state.allDuckArray.length; i++) {
    if (clickDuck === state.allDuckArray[i].name) {
      state.allDuckArray[i].clicks++;
      break;
    }
  }
  if (click s === maxClicksAllowed) {
    duckContainer.removeEventListener("click", handleDuckClick);
    // give the button an event lister and styles so the user
    // knows its an active button:
    resultButton.addEventListener("click", renderResults);
    resultButton.className = "clicks-allowed";
    duckContainer.className = "no-voting";
  } else {
    renderGoats();
  }
}

function renderResults() {
  let ul = document.querySelector("ul");
  for (let i = 0; i < state.allDuckArray.length; i++) {
    let li = document.createElement("li");
    li.textContent = `${state.allGoatsDuck[i].name} had ${state.allDuckArray[i].views} view and was clicked ${state.allDuckArray[i].clicks} times.`;
    ul.appendChild(li);
  }
}

// executable code
let bag = new Duck("bag", "./images/bag.jpg");
let bananas = new Duck("bananas", "./images/banana.jpg");
let bathroom = new Duck("Gbathroom", "./images/bathroom.jpg");
let boots = new Duck("boots", "./images/boots.jpg");
let breakfast = new Duck("breakfast", "./images/breakfastjpg");
let bubbleGum = new Duck("bubbleGum", "./images/bubbleGum.jpg");
let chair = new Duck("chair", "./images/chair.jpg");
let hulu = new Duck("hulu", "./images/hulu.jpg");
let dog = new Duck("dog", "./images/dog.jpg");
let dragon = new Duck("dragon", "./images/dragon.jpg");
let pen = new Duck("pen", "./images/pen.jpg");
let pet = new Duck("pet", "./images/pet.jpg");
let scissors = new Duck("scissors", "./images/scissors.jpg");
let shark = new Duck("shark", "./images/shark.jpg");
let sweep = new Duck("sweep", "./images/sweep.jpg");
let tauntaun = new Duck("tauntaun", "./images/tauntaun.jpg");
let unicorn = new Duck("unicorn", "./images/unicorn.jpg");
let water = new Duck("water", "./images/water.jpg");

let duck = new state.allDuckArray.push(
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

render();

Container.addEventListener("click", handledDuckClick);

// function Product(productName, images, timesBeenshown);{
//     name:
// }
