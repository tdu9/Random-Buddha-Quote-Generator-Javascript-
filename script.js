let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quote = [
    '“Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.”',
'“It is better to conquer yourself than to win a thousand battles. Then the victory is yours. It cannot be taken from you, not by angels or by demons, heaven or hell.”',
'“It is better to travel well than to arrive.”',
'“Peace comes from within. Do not seek it without.”',
'“The only real failure in life is not to be true to the best one knows.”',
'“The way is not in the sky. The way is in the heart.”',
'“There is nothing more dreadful than the habit of doubt. Doubt separates people. It is a poison that disintegrates friendships and breaks up pleasant relations. It is a thorn that irritates and hurts; it is a sword that kills.”',
'“Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.”',
'“We are what we think. All that we are arises with our thoughts. With our thoughts, we make the world.”',
'“What we think, we become.“',
];

btn.addEventListener('click', function(){
let randomQuote = quote[Math.floor(Math.random() * quote.length)]
output.innerHTML = randomQuote;
})