/* LESSON 3 - Programming Tasks */

/* Profile Object  */




/* Populate Profile Object with placesLive objects */




/* DOM Manipulation - Output */

/* Name */
let myProfile = {
    name: "Deborah Judge",
    photo: "images/profile.jpg",
    favoriteFoods: [
      'Rice',
      'Plantain & Egg',
      'Pizza',
      'Pasta',
      'Chicken pie'
    ],
    hobbies: ['AI Development', 'Gaming', 'Coding'], 
    placesLived: []
  };
  

  myProfile.placesLived.push(
    {
      place: 'Oyo State, Nigeria',
      length: '17 year'
    }
   
  );
  
  let profilepicture = "images/profile.jpg";
document.querySelector('#name').textContent = myProfile.name;
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});

// Repeat the process for hobbies
myProfile.hobbies.forEach(hobby => {
  let li = document.createElement('li');
  li.textContent = hobby;
  document.querySelector('#hobbies').appendChild(li);
});

// Iterate over placesLived and append <dt> and <dd> elements to the HTML <dl> with ID 'places-lived'
myProfile.placesLived.forEach(place => {
  let dt = document.createElement('dt');
  dt.textContent = place.place;

  let dd = document.createElement('dd');
  dd.textContent = place.length;

  document.querySelector('#places-lived').appendChild(dt);
  document.querySelector('#places-lived').appendChild(dd);
});
  
