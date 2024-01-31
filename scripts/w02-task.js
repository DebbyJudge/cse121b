/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Deborah Judge";
let currentYear = "2024";
let profilepicture = "images/profile.jpg"; 

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("picture img"); 
const foodElement = document.getElementById("food");

/* Step 4 - Adding Content */
nameElement.innerHTML = "<strong>Deborah Judge</strong>";
imageElement.setAttribute("src", profilepicture);

/* Step 5 - Array */
const favouriteFoods = ['Friedrice', 'Chicken pie', 'pasta', 'Toasted bread', 'plantain',]
foodElement.innerHTML=favouriteFoods
const favFood = ['Pizza']
favouriteFoods.push(favFood);
foodElement.innerHTML += `<br>${favouriteFoods}`;
favouriteFoods.shift(favFood);
foodElement.innerHTML += `<br>${favouriteFoods}`;
favFood.pop();
foodElement.innerHTML += `<br>${favouriteFoods}`;

