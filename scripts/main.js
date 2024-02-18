
document.addEventListener("DOMContentLoaded", function() {
    // Update the text content of the element with id "year" to the current year
    document.querySelector('#year').textContent = new Date().getFullYear();

    // Define a function to toggle the "open" class on the element with id "menu"
    const toggleMenu = () => {
        document.querySelector('#menu').classList.toggle('open');
    }

    // Add an event listener to the element with id "toggleMenu" to trigger the toggleMenu function when clicked
    document.querySelector('#toggleMenu').addEventListener('click', toggleMenu);
});
