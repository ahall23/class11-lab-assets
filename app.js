"use strict";

function Product(name, imagePath) {
  this.name = name;
  this.imagePath = imagePath;
  this.timesShown = 0;
}

let bag = new Product("bag", "./images/bag.jpg");
let bananas = new Product("bananas", "./images/banana.jpg");
let bathroom = new Product("bathroom", "./images/bathroom.jpg");
let boots = new Product("boots", "./images/boots.jpg");
let breakfast = new Product("breakfast", "./images/breakfastjpg");
let bubbleGum = new Product("bubbleGum", "./images/bubbleGum.jpg");
let chair = new Product("chair", "./images/chair.jpg");
let cthulhu = new Product("cthulhu", "./images/cthulhu.jpg");
let dog = new Product("dog", "./images/dog.jpg");
let dragon = new Product("dragon", "./images/dragon.jpg");
let pen = new Product("pen", "./images/pen.jpg");
let pet = new Product("pet", "./images/pet-sweep.jpg");
let scissors = new Product("scissors", "./images/scissors.jpg");
let shark = new Product("shark", "./images/shark.jpg");
let sweep = new Product("sweep", "./images/sweep.jpg");
let tauntaun = new Product("tauntaun", "./images/tauntaun.jpg");
let unicorn = new Product("unicorn", "./images/unicorn.jpg");
let water = new Product("water", "./images/water.jpg");
let wine = new Product("wine", "./images/wine-glass.jpg");
let Productarray = [
  bag,
  bananas,
  bathroom,
  boots,
  breakfast,
  bubbleGum,
  chair,
  cthulhu,
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
  wine,
];

function getRandomproduct(Productarray) {
  // we want to set a randon set randomindex to a random number between 0 and 19
  // look at salmon cookies random # funtion.
  let randomProducts = [];
  let randomIndex1 = Math.random() * Productsarray.length;
  randomIndex1 = Math.floor(randomIndex1);
  let randomIndex2 = Math.random() * Productsarray.length;
  randomIndex2 = Math.floor(randomIndex2);
  let randomIndex3 = Math.random() * Productsarray.length;
  randomIndex3 = Math.floor(randomIndex3);

  if (randomIndex1 === randomIndex2) {
    randomIndex1 = Math.random() * Productarray.length;
    randomIndex1 = Math.floor(randomIndex1);
  } else if (randomIndex2 === randomIndex3) {
    randomIndex3 = Math.random() * Productarray.length;
    randomIndex3 = Math.floor(randomIndex3);
  } else if (randomIndex3 === randomIndex1) {
    randomIndex1 = Math.random() * Productarray.length;
    randomIndex1 = Math.floor(randomIndex1);
  }

  let randomProduct1 = Productarray[randomIndex];
  let randomProduct2 = Productarray[randomIndex];
  let randomProduct3 = Productarray[randomIndex];

  randomProducts.push(randomProduct1);
  randomProducts.push(randomProduct2);
  randomProducts.push(randomProduct3);
  return randomProducts;
}
let UserClicks = 0;
letdisplay = document.getElementById("Display");
displayimages.addEventListener("click", ImageEvents);
let img1 = document.getElementById("image1");

function displayimages(image1, image2, image3) {
  let image1HTML = document.getElementById("image1");
  image1HTML.setAttribute("src", image1);
  let image2HTML = document.getElementById("image2");
  image2HTML.setAttribute("src", image2);
  let image3HTML = document.getElementById("image3");
  image3HTML.setAttribute("src", image3);
}

// let product1 = getRandomproduct();
// console.log(product1);
// displayimages(
//   product1.imagePath,
//   "./images/chair.jpg",
//   "./images/bubbleGum.jpg"
// );

// function selectProduct() {
//   let randomIndex = Math.floor(Math.random() * products.length);
//   let product = products[randomIndex];
//   if (!selectedProducts.includes(product)) {
//     selectedProducts.push(product);
//   } else {
//     selectProduct();
//   }
