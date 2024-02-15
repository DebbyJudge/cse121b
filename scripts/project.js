const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote-btn');

// Function to fetch a random quote from the external API
async function fetchRandomQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching quote:', error);
    }
}

// Function to display the fetched quote
function displayQuote(quote) {
    quoteElement.textContent = quote.content;
    authorElement.textContent = `- ${quote.author}`;
}

// Event listener for the "New Quote" button
newQuoteBtn.addEventListener('click', async () => {
    const randomQuote = await fetchRandomQuote();
    displayQuote(randomQuote);
});

// Initial call to display a random quote when the page loads
window.onload = async () => {
    const randomQuote = await fetchRandomQuote();
    displayQuote(randomQuote);
};
