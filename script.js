// Words to cycle, each appears once
const words = ["workflows", "systems", "processes", "tools"];
const highlight = document.querySelector(".highlight");
const landingText = document.querySelector(".landing-text");
let wordIndex = 0;

// Animate letters in
function showWord(word) {
  highlight.innerHTML = "";
  for (let i = 0; i < word.length; i++) {
    const letter = document.createElement("span");
    letter.textContent = word[i];
    letter.style.animationDelay = `${i * 0.1}s`;
    highlight.appendChild(letter);
  }
}

// Animate letters out for last word
function fadeOutLetters(callback) {
  const letters = highlight.querySelectorAll("span");
  letters.forEach((letter, i) => {
    setTimeout(() => {
      letter.classList.add("fade-out");
    }, i * 50);
  });

  setTimeout(callback, letters.length * 50 + 500);
}

// Show first word
showWord(words[wordIndex]);

// Show next word
function nextWord() {
  wordIndex++;
  if (wordIndex < words.length) {
    showWord(words[wordIndex]);
  } else {
    // Last word done: fade letters
    fadeOutLetters(() => {
      // Slide-up and fade entire landing text
      landingText.classList.add("slide-up-fade");

      // Fade out container slightly later for smooth transition
      const container = document.querySelector(".landing-container");
      setTimeout(() => {
        container.style.opacity = 0;
      }, 500);

      // Redirect after animation completes
      setTimeout(() => {
        window.location.href = "main.html"; // replace with your main page
      }, 1500);
    });

    clearInterval(wordInterval);
  }
}

// Rotate words every 2 seconds
const wordInterval = setInterval(nextWord, 2000);
