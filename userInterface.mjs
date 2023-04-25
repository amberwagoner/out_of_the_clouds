// User Interface Interactions
import { phrases } from './phrases.js';
import * as caesarCipher from './caesarCipher.js';

/**
 * Displays the encoded phrase and encryption type on the web page,
 * and sets the content of the phrase element to the unencoded phrase.
 * 
 * @param {array} phrases - An array of phrases to choose from.
 */
function displayPhrase() {
  // Choose a random phrase from the phrases array
  let randomIndex = Math.floor(Math.random() * phrases.length);
  let phrase = phrases[randomIndex];

  // Encrypt the phrase using the caesarCipher function with a random shift value
  const shift = 3;
  let encodedPhrase = caesarCipher(phrase, shift);

  // Display the encoded phrase on the page
  let encodedPhraseElement = document.getElementById("encoded-phrase");
  encodedPhraseElement.textContent = encodedPhrase;
}

/**
 * Handles the submission of the phrase form.
 * 
 * @param {Event} event - The submit event.
 */
function handlePhraseFormSubmit(event) {
  event.preventDefault();

  const phraseInput = document.querySelector('#phrase-input');
  const encodedPhraseBox = document.querySelector('#encoded-phrase');

  const guess = phraseInput.value;
  const encodedPhrase = encodedPhraseBox.textContent;

  if (caesarCipher.decode(encodedPhrase, 3) === guess) {
    const cloud = document.querySelector('.cloud:not(.hidden)');
    if (cloud) {
      cloud.classList.add('hidden');
      displayEncodedPhrase(phrases);
      if (document.querySelectorAll('.cloud:not(.hidden)').length === 0) {
        alert('Congratulations! You have cleared the sky!');
      }
    }
  } else {
    alert('Sorry, your guess is incorrect. Please try again.');
  }
}

// Add an event listener to the phrase form
const phraseForm = document.querySelector('#phrase-form');
phraseForm.addEventListener('submit', handlePhraseFormSubmit);

// Display the initial encoded phrase
displayEncodedPhrase(phrases);
console.log(currentPhrase);
