/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Deborah Judge";
let currentYear = "2024";
let profilepicture = "images/profile.jpg"; // Replace with the actual path to your profile picture

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("picture img"); // Assuming you have an img element inside the picture
const foodElement = document.getElementById("food");

/* Step 4 - Adding Content */
nameElement.innerHTML = "<strong>Deborah Judge</strong>";
imageElement.setAttribute("src", profilepicture);

/* Step 5 - Array */
let favoriteFoods = ['Pizza', 'Sushi', 'Chocolate', 'Chicken pie', 'Ice Cream', 'Friedrice', 'Pasta & Chicken', 'Toast bread with stock egg', ];
let newFavoriteFood = 'Burger';
favoriteFoods.push(newFavoriteFood);

foodElement.innerHTML = "<strong>Favorite Foods:</strong>";
favoriteFoods.forEach((food) => {
    foodElement.innerHTML += `<br>${food}`;
});
