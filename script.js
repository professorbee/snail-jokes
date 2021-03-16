var heading = document.getElementById("cool");
var funnyIndex = 0
const jokes = [
  "Why did the slug take a ruler to bed with him? Because he wanted to see how long he slept!",
  "I have a pet snail who can talk. But there's always one word he pronounces wrong! Do you know how that word is spelled? W-R-O-N-G! He pronounces it WRONG every time!",
  "What's the most common thing snails say to each other when they meet? Long time, no see!",
  'A kleptomaniac snail went to the doctor and said, "Doc, do you have anything I can *take* for this?"',
  "A psychic snail went into the store to buy a new shell. The shop keeper said, \"Well, how about this one?\" and the snail said \"Oh, no, that won't fit. That's a small, and I'm a MEDIUM!\""
]

function start() {
  heading.innerHTML = jokes[funnyIndex];
  if (funnyIndex < jokes.length - 1) {
    funnyIndex++;
  } else {
    funnyIndex = 0;
  }
}