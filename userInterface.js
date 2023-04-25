// User Interface Interactions
import { phrases } from './phrases.js';
import * as caesarCipher from './caesarCipher.js';
import { selectRandomPhrase } from './gameState.mjs';

/**
 * Displays the encoded phrase and encryption type on the web page,
 * and sets the content of the phrase element to the unencoded phrase.
 * 
 * @param {array} phrases - An array of phrases to choose from.
 */
import * as gameState from './gameState.js';
import * as caesarCipher from './caesarCipher.js';

function displayPhrase(phrases) {
  const phraseBox = document.getElementById('phrase-box');
  const encryption = document.getElementById('encryption');
  const encodedPhraseBox = document.getElementById('encoded-phrase');
  const phrase = gameState.selectrandomPhrase(phrases);
  const encodedPhrase = caesarCipher.encode(phrase, 3);

  encryption.textContent = 'Encryption: Caesar Cipher, key = 3';
  encodedPhraseBox.textContent = encodedPhrase;
  phraseBox.style.display = 'block';
}

export { displayPhrase };


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
