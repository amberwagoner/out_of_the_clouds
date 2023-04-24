#!/usr/bin/node

import * as caesarCipher from './caesarCipher.mjs';
import { encode } from './caesarCipher.mjs';
import phrases from './phrases.js';

/**
 * Randomly selects a phrase from an array and encodes it using the Caesar cipher with a key of 3.
 * @param {array} phrases - An array of phrases to choose from.
 * @returns {string} - The encoded phrase.
 */
function selectRandomPhrase(phrases) {
  // Select a random phrase from the array
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  // Encode the phrase using the Caesar cipher with a key of 3
  let encodedPhrase = caesarCipher.encode(randomPhrase, 3);
  return encodedPhrase;
}

selectRandomPhrase(phrases) = PhraseOnScreen;

let PhraseOnScreen = document.getElementById("encryptedPhrase").innerHTML;

// Get the phrase-box element from the DOM
const phraseBox = document.querySelector('#phrase-box');

// Create a new element to hold the phrase
const phraseElement = document.createElement('div');
phraseElement.id = 'phrase';
phraseElement.textContent = caesarCipher.decode(encodedPhrase, 3);

// Add the phrase element to the phrase-box element
phraseBox.insertBefore(phraseElement, phraseBox.firstChild);

export { PhraseOnScreen };
export { randomPhrase };
