// Caesar Cipher Function

/**
 * Encodes a plaintext string using the Caesar cipher with a given key.
 * 
 * @param {string} plaintext - The plaintext string to be encoded.
 * @param {number} key - The key for the Caesar cipher.
 * @returns {string} The encoded ciphertext string.
 */
function encode(plaintext, key) {
  let ciphertext = '';
  for (let i = 0; i < plaintext.length; i++) {
    let charCode = plaintext.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      ciphertext += String.fromCharCode(((charCode - 65 + key) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      ciphertext += String.fromCharCode(((charCode - 97 + key) % 26) + 97);
    } else {
      ciphertext += plaintext.charAt(i);
    }
  }
  return ciphertext;
}

// test data
const input = "HELLO WORLD";
const shift = 3;
const output = encode(input, shift);
console.log(output);

