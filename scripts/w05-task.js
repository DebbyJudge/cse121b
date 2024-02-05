/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
const templeList = [];


const displayTemples = (temples) => {
    
    reset();
    
    temples.forEach((temple) => {
        
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        const img = document.createElement("img");

        
        h3.textContent = temple.templeName;
        img.src = temple.imageUrl;
        img.alt = temple.location;

        
        article.appendChild(h3);
        article.appendChild(img);

        
        templesElement.appendChild(article);
    });
};


const getTemples = async () => {
    try {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/"); 
        const templeData = await response.json();
        templeList.push(...templeData);
        displayTemples(templeList);
    } catch (error) {
        
    }
};


const reset = () => {
    templesElement.innerHTML = ""; 
};


const filterTemples = (temples) => {
    reset();

    const filter = document.querySelector("#filtered").value;

    switch (filter) {
        case "utah":
            displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
            break;
        case "nonutah":
            displayTemples(temples.filter((temple) => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter((temple) => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)));
            break;
        case "all":
        default:
            displayTemples(temples);
            break;
    }
};


document.querySelector("#filtered").addEventListener("change", () => filterTemples(templeList));

getTemples();
