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