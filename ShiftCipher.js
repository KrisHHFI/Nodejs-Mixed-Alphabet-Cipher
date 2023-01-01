// Simple shift cipher encryption and decryption program. Created by Kristopher Pepper, in 2022.
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log("--- Shift Cipher Encryption ---\n");
ShiftCipher();

function ShiftCipher() {
  const message = [];

  readline.question('Create cipher = c | Decrypt cipher = d | Exit = e : ', userPrompt => {
    if (userPrompt == 'c') {

      readline.question('\nEnter rotation value (between 1 and 25): ', enteredValue => {
        const rotationValue = parseInt(enteredValue);

        if (enteredValue > 0 && enteredValue < 26) {

          readline.question('Enter text: ', enteredString => {
            const stringArray = enteredString.split("");
            stringArray.forEach(encryptMessage);

            function encryptMessage(item, index) {
              let letterNotFound = true;
              for (let i = 0; i < 40; i++) {
                if (item == alphabetLetters[i] || item.toLowerCase() == alphabetLetters[i]) {
                  message.push(alphabetLetters[i + rotationValue]);
                  letterNotFound = false;
                  break;
                }
              }
              if (letterNotFound == true) {
                message.push(item);
              }
            }
            console.log('Encrypted text: ' + message.join('') + '\n');
            ShiftCipher();
          });
        } else {
          console.log('Incorrect value\n');
          ShiftCipher();
        }
      });
    } else if (userPrompt == 'd') {

      readline.question('\nEnter rotation value (between 1 and 25): ', enteredValue => {
        const rotationValue = parseInt(enteredValue);
        if (enteredValue > 0 && enteredValue < 26) {
          readline.question('Enter cipher: ', enteredCipher => {
            const stringArray = enteredCipher.split("");
            stringArray.forEach(decryptText);

            function decryptText(item, index) {
              let letterNotFound = true;
              for (let i = alphabetLetters.length; i > 0; i--) {
                if (item == alphabetLetters[i] || item.toLowerCase() == alphabetLetters[i]) {
                  message.push(alphabetLetters[i - rotationValue]);
                  letterNotFound = false;
                  break;
                }
              }
              if (letterNotFound == true) {
                message.push(item);
              }
            }
            console.log('Decrypted text: ' + message.join('') + '\n');
            ShiftCipher();
          });
        } else {
          console.log('Incorrect value\n');
          ShiftCipher();
        }
      });
    } else if (userPrompt == 'e') {
      readline.close();
      return;
    }
    else {
      console.log('Incorrect value\n');
      ShiftCipher();
    }
  });
}