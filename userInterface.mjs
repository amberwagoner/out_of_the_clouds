// User Interface Interactions
import { phrases } from './phrases.mjs';
import * as caesarCipher from './caesarCipher.mjs';

/**
 * Displays the encoded phrase and encryption type on the web page,
 * and sets the content of the phrase element to the unencoded phrase.
 * 
 * @param {array} phrases - An array of phrases to choose from.
 */
function displayEncodedPhrase(phrases) {
  // Get the elements that display the encryption type and encoded phrase
  const encryption = document.querySelector('#encryption');
  const encodedPhraseBox = document.querySelector('#encoded-phrase');

  // Select a random phrase from the array
  const phraseIndex = Math.floor(Math.random() * phrases.length);
  const currentPhrase = phrases[phraseIndex];

  // Encode the phrase using the Caesar cipher with a key of 3
  const encodedPhrase = caesarCipher.encode(currentPhrase, 3);

  // Set the content of the encryption and encoded phrase elements
  encryption.textContent = "Encryption: Caesar Cipher, key = 3";
  encodedPhraseBox.textContent = encodedPhrase;

  // Get the element that displays the unencoded phrase
  const phraseText = document.getElementById('phrase');

  // If the element exists, set its content to the unencoded phrase
  if (phraseText) {
    phraseText.textContent = currentPhrase;
  }
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