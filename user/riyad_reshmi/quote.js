// quote.js
const quotes = [
"In the tapestry of life, love is the most vibrant and intricate thread.","Love is a language spoken by the heart and understood by souls.","Just as sunlight warms the earth, love nourishes the depths of our being.","In every smile exchanged, love finds its reflection in two hearts.","Like a steady flame, love burns brightly even in the darkest of times.","In the garden of emotions, love is the most delicate and cherished bloom.","Love is the bridge that connects two souls, transcending time and distance.","In the realm of emotions, love is the crown jewel that reigns supreme.","Love is the symphony that plays a melody only two hearts can hear.","Like raindrops on a window, love leaves traces of beauty in its wake.","In the silence of connection, love speaks volumes without uttering a word.","In the constellation of feelings, love shines brightest among the stars.","Love is the anchor that keeps us steady amidst the storms of life.","Like a book with endless chapters, love unfolds its story through time.","In the dance of emotions, love is the graceful waltz that sweeps us off our feet.","Love is the melody that lingers long after the song has ended.","In the realm of possibilities, love is the one that defies all odds.","Love is the whisper in the wind that carries the secrets of two hearts.","Like a mirror reflecting souls, love reveals the truest versions of ourselves.","In the gallery of feelings, love is the masterpiece that takes our breath away.","Love is the flame that warms our hearts and lights up our lives.","In the garden of connections, love is the most radiant and colorful blossom.","Love is the treasure map that leads us to the riches of the heart.","Like footprints in the sand, love leaves an indelible mark on our souls.","Love is the ink that writes the story of a lifetime on the pages of existence.","Love is the sunrise that bathes our world in warmth and hope.","In the vastness of emotions, love is the constellation that guides us home.","Love is the melody that plays on, even when the song has changed.","Like a gentle breeze, love caresses our spirits and soothes our souls.","In the tapestry of connections, love is the strongest and most enduring thread.","Love is the puzzle piece that completes the picture of our lives.","Love is the echo that reverberates in the chambers of the heart.","In the grand symphony of existence, love is the most enchanting note.","Love is the key that unlocks the door to a world of boundless possibilities.","Love is the compass that guides us through the maze of emotions.","In the book of relationships, love is the story that captivates every page.","Love is the gentle rain that nurtures the garden of our hearts.","In the realm of feelings, love is the masterpiece painted by two souls.","Love is the moonlight that illuminates our path on the darkest nights.","Love is the symphony that harmonizes the melodies of two distinct lives.","In the tapestry of connections, love is the golden thread that never fades.","Love is the mirror that reflects the beauty and depth of our souls.","Love is the glue that binds two hearts, creating an unbreakable bond.","In the realm of eternity, love is the timeless force that continues to bloom."
       
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
