<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function () {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    const newQuoteBtn = document.getElementById('new-quote-btn');

    let quotes = []; // Array to store fetched quotes

    async function fetchRandomQuote() {
      try {
        const response = await fetch('https://api.quotable.io/random');
        if (!response.ok) {
          throw new Error('Failed to fetch quote');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error.message);
        return null;
      }
    }

    async function fetchMultipleQuotes(numQuotes) {
      try {
        const responses = await Promise.all(Array.from({ length: numQuotes }, () => fetchRandomQuote()));
        quotes = responses.map(response => response.content);
      } catch (error) {
        console.error(error);
      }
    }

    function getRandomQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];
      if (randomQuote) {
        quoteElement.textContent = `"${randomQuote.content}"`;
        authorElement.textContent = `- ${randomQuote.author}`;
      } else {
        quoteElement.textContent = 'Failed to fetch quote. Please try again later.';
        authorElement.textContent = '';
      }
    }

    newQuoteBtn.addEventListener('click', getRandomQuote);

    // Fetch multiple quotes and populate the quotes array
    fetchMultipleQuotes(10); // Fetch 10 quotes initially

    getRandomQuote(); // Display a random quote initially
});
=======
document.addEventListener('DOMContentLoaded', function () {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    const newQuoteBtn = document.getElementById('new-quote-btn');

    async function fetchRandomQuote() {
      try {
        const response = await fetch('https://api.quotable.io/random');
        if (!response.ok) {
          throw new Error('Failed to fetch quote');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error.message);
        return null;
      }
    }

    function displayQuote(quoteData) {
      if (quoteData) {
        quoteElement.textContent = `"${quoteData.content}"`;
        authorElement.textContent = `- ${quoteData.author}`;
      } else {
        quoteElement.textContent = 'Failed to fetch quote. Please try again later.';
        authorElement.textContent = '';
      }
    }

    function getRandomQuote() {
      fetchRandomQuote()
        .then(quoteData => displayQuote(quoteData))
        .catch(error => console.error(error));
    }

    newQuoteBtn.addEventListener('click', getRandomQuote);

    getRandomQuote();
  });
>>>>>>> 1ac2dc4f9844033b5d29bc1d0f752d1d64ec6fad
