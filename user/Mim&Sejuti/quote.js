// quote.js
const quotes = [
"A best friend is like a rare gem, cherished for their uniqueness and valued for their unwavering presence in your life.",
"In the storybook of life, a best friend is the character who adds the most colorful and meaningful chapters.",
"True friendship is a journey of shared laughter, wiped tears, and endless support—a bond only a best friend can offer.",
"A best friend is the one who knows your flaws and loves you for them, making imperfections the most beautiful part of your connection.",
"With a best friend by your side, every moment becomes an adventure, and every challenge becomes an opportunity for growth and shared strength."
       
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function displayRandomQuote() {
  const quoteElement = document.getElementById("quote");
  const quoteText = getRandomQuote();
  quoteElement.textContent = quoteText;
}

displayRandomQuote();
