"use strict";

function Product(name, imagePath) {
  this.name = name;
  this.imagePath = imagePath;
  this.timesShown = 0;
  this.timesclicked = 0;
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

function getRandomProducts(Productarray) {
  // we want to set a randon set randomindex to a random number between 0 and 19
  // look at salmon cookies random # funtion.
  let randomProducts = [];
  let randomIndex1 = Math.random() * Productarray.length; // getting a # between 0 & 19
  randomIndex1 = Math.floor(randomIndex1); //rounding 👇🏽 the #
  let randomIndex2 = Math.random() * Productarray.length;
  randomIndex2 = Math.floor(randomIndex2);
  let randomIndex3 = Math.random() * Productarray.length;
  randomIndex3 = Math.floor(randomIndex3);

  while (randomIndex1 === randomIndex2) {
    randomIndex1 = Math.floor(Math.random() * Productarray.length);
  }
  while (randomIndex3 === randomIndex2) {
    randomIndex1 = Math.floor(Math.random() * Productarray.length);
  }

  // if (randomIndex1 === randomIndex2) {
  //   randomIndex1 = Math.random() * Productarray.length;
  //   randomIndex1 = Math.floor(randomIndex1);
  // } else if (randomIndex2 === randomIndex3) {
  //   randomIndex3 = Math.random() * Productarray.length;
  //   randomIndex3 = Math.floor(randomIndex3);
  // } else if (randomIndex3 === randomIndex1) {
  //   randomIndex1 = Math.random() * Productarray.length;
  //   randomIndex1 = Math.floor(randomIndex1);
  // }

  let randomProduct1 = Productarray[randomIndex1]; //declaring random product 1, 2, and 3 = to a random product
  let randomProduct2 = Productarray[randomIndex2];
  let randomProduct3 = Productarray[randomIndex3];

  randomProducts.push(randomProduct1);
  randomProducts.push(randomProduct2);
  randomProducts.push(randomProduct3);

  return randomProducts;
}

let UserClicks = 0;
let display = document.getElementById("Display");
display.addEventListener("click", ImageEvents);

let img1 = document.getElementById("image1");
let img2 = document.getElementById("image2");
let img3 = document.getElementById("image3");

function displayimage() {
  let RandomProducts = getRandomProducts(Productarray);
  let firstRandomProduct = RandomProducts[0];

  let image1HTML = document.getElementById("image1");
  image1HTML.src = firstRandomProduct.imagePath;
  firstRandomProduct.timesShown = firstRandomProduct.timesShown + 1;

  console.log(UserClicks);

  let secondRandomProduct = RandomProducts[1];

  let image2HTML = document.getElementById("image2");
  image2HTML.src = secondRandomProduct.imagePath;
  secondRandomProduct.timesShown = secondRandomProduct.timesShown + 1;

  let thirdRandomProduct = RandomProducts[2];

  let image3HTML = document.getElementById("image3");
  image3HTML.src = thirdRandomProduct.imagePath;
  thirdRandomProduct.timesShown = thirdRandomProduct.timesShown + 1;
}

function ImageEvents(event) {
  UserClicks++;
  console.log(event);

  if (event.target.nodeName === "IMG") {
    let pickedElement = event.target.getAttribute("src");
    console.log(pickedElement);
    for (let index = 0; index < Productarray.length; index++) {
      if (pickedElement === Productarray[index].imagepath) {
        Productarray[index].timesclicked = Productarray[index].timesclicked + 1;
        console.log(Productarray[index].timesclicked);
      }
    }
  }
  if (UserClicks >= 25) {
    document
      .getElementById("Display")
      .removeEventListener("click", ImageEvents);
    alert("Out of Votes 😵‍💫 ");
  }
}
displayimage();

function Showresults() {
  //create an ul
  //loop through products
  let ul = document.createElement("ul");
  for (let index = 0; index < Productarray.length; index++) {
    let li = document.createElement("li");
    li.innerHTML =
      Productarray[index].productName +
      " got " +
      Productarray[index].timesclicked +
      " votes " +
      " and was shown " +
      Productarray[index].timesShown;
    ul.append(li);
  }
  document.body.append(ul);
  console.log(Showresults);
  console.log(Product);
}
// const ctx = document.getElementById("myChart");
// new Chart(ctx, {
//   type: "bar",
//   data: {
//     labels: [
//       productarray[0].productName,
//       products[1].productName,
//       products[2].productName,
//       products[3].productName,
//       products[4].productName,
//       products[5].productName,
//       products[6].productName,
//       products[7].productName,
//       products[8].productName,
//       products[9].productName,
//       products[10].productName,
//       products[11].productName,
//       products[12].productName,
//       products[13].productName,
//       products[14].productName,
//       products[15].productName,
//       products[16].productName,
//       products[17].productName,
//       products[18].productName,
//     ],
//     datasets: [
//       {
//         label: "# of Votes",
//         data: [
//           products[0].clicks,
//           products[1].clicks,
//           products[2].clicks,
//           products[3].clicks,
//           products[4].clicks,
//           products[5].clicks,
//           products[6].clicks,
//           products[7].clicks,
//           products[8].clicks,
//           products[9].clicks,
//           products[10].clicks,
//           products[11].clicks,
//           products[12].clicks,
//           products[13].clicks,
//           products[14].clicks,
//           products[15].clicks,
//           products[16].clicks,
//           products[17].clicks,
//           products[18].clicks,
//         ],
//         borderWidth: 1,
//       },
//       {
//         label: "# of Times Shown",
//         data: [
//           products[0].timesShown,
//           products[1].timesShown,
//           products[2].timesShown,
//           products[3].timesShown,
//           products[4].timesShown,
//           products[5].timesShown,
//           products[6].timesShown,
//           products[7].timesShown,
//           products[8].timesShown,
//           products[9].timesShown,
//           products[10].timesShown,
//           products[11].timesShown,
//           products[12].timesShown,
//           products[13].timesShown,
//           products[14].timesShown,
//           products[15].timesShown,
//           products[16].timesShown,
//           products[17].timesShown,
//           products[18].timesShown,
//         ],
//         borderWidth: 1,
//       },
//     ],
//   },
//   options: {
//     indexAxis: "y",
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// });
// const myJSON = JSON.stringify(products);
// window.localStorage.setItem("products", myJSON);
// console.log("Local Storage", localStorage);
