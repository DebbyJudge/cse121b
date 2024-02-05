/* W05: Programming Tasks */




/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples"); 
const templeList = [];


/* async displayTemples Function */
const displayTemples = (temples) => {
    // Reset the displayed list of temples
    reset();
        // Process each temple in the array
        temples.forEach((temple) => {
            // Create HTML elements
            const article = document.createElement("article");
            const h3 = document.createElement("h3");
            const img = document.createElement("img");
    
            // Add temple data to elements
            h3.textContent = temple.templeName;
            img.src = temple.imageUrl;
            img.alt = temple.location;
    
            // Append elements to the article
            article.appendChild(h3);
            article.appendChild(img);
    
            // Append article to templesElement
            templesElement.appendChild(article);
        });
    };

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
        const response = await fetch("URL_TO_YOUR_TEMPLE_JSON_FILE"); // Replace with the actual URL
        const templeData = await response.json();
        templeList.push(...templeData);
        displayTemples(templeList);
    } catch (error) {
        console.error("Error fetching temple data:", error);
    }
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = ""; // Clear the content of templesElement
};

/* filterTemples Function */
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


getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => filterTemples(templeList));

// Call getTemples at the end of your JavaScript file to test the code
getTemples();
