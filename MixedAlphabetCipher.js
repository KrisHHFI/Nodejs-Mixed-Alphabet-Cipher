// Simple shift cipher encryption and decryption program. Created by Kristopher Pepper, in 2022.
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(" ________________________________________________________________________\n|                           __       __             __             __    |\n" +
"|                          |     ___   |           |                 |   |\n|            _____         |    |__ |  |           |                 |   |\n" + 
"|    /\\          /   ___   |     _/ |  |           |                 |   |\n|   /__\\  __   /     ___   |    |__/   |   __|__   |                 |   |\n" + 
"|  /    \\    /____         |     _     |     |     |    _   _   _    |   |\n|                          |    |_|    |           |   |_| |_| |_|   |   |\n" + 
"|                          |__       __|           |__             __|   |\n|________________________________________________________________________|\n" + 
"                   _____________________________________\n                  |    Mixed Alphabet Cipher Program    |\n" + 
"                  | Created by Kristopher Pepper, 2023. |\n                   ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾\n" + 
"Note:\n - The user is prompted to enter a word which shifts the alphabet.  \n");
MixedAlphabetCipher();

function ProcessString(stringValue) {
  stringValue = stringValue.toLowerCase();
  stringValue = stringValue.replace(/ /g, ''); // Removes spaces
  stringArray = stringValue.split("");
  stringArray = [...new Set(stringArray)]; // Removes duplicates
  return stringValue;
}

function ShiftedAlphabetCreation(stringArray, shiftedAlphabetLetters) {
  stringArray.forEach(shiftedAlphabetCreation);

  function shiftedAlphabetCreation(item, index) {
    index = shiftedAlphabetLetters.indexOf(item);
    if (index > -1) {
      shiftedAlphabetLetters.splice(index, 1);
    }
  }
  return shiftedAlphabetLetters;
}

function MixedAlphabetCipher() {
  const message = [];
  let shiftedAlphabetLetters = [];
  shiftedAlphabetLetters.push(...alphabetLetters);
  readline.question('Create cipher = c | Decrypt cipher = d | Exit = e : ', userPrompt => {
    if (userPrompt == 'c') {
      readline.question('\nEnter shift word (up to 26 letters long): ', stringValue => {
        // If shiftString length is proper
        if (stringValue.length >= 1 && stringValue.length <= 26) {
          ProcessString(stringValue);
          ShiftedAlphabetCreation(stringArray, shiftedAlphabetLetters);
          shiftedAlphabetLetters = stringArray.concat(shiftedAlphabetLetters);
          console.log("\n" + alphabetLetters + "\n↓,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓\n" + shiftedAlphabetLetters + "\n");
          readline.question('Enter text: ', enteredString => {
            const stringArray = enteredString.split("");
            stringArray.forEach(encryptMessage);

            function encryptMessage(item, index) {
              for (let i = 0; i < alphabetLetters.length; i++) {
                if (item == alphabetLetters[i] || item.toLowerCase() == alphabetLetters[i]) {
                  message.push(shiftedAlphabetLetters[i]);
                  break;
                }
              }
            }
            console.log('Encrypted text: ' + message.join('') + '\n');
            MixedAlphabetCipher();
          });
        } else {
          console.log('Incorrect value.\n');
          MixedAlphabetCipher();
        }
      });
    } else if (userPrompt == 'd') {
      readline.question('\nEnter shift word (up to 26 letters long): ', stringValue => {
        // If shiftString length is proper
        if (stringValue.length >= 1 && stringValue.length <= 26) {
          ProcessString(stringValue);
          ShiftedAlphabetCreation(stringArray, shiftedAlphabetLetters);
          shiftedAlphabetLetters = stringArray.concat(shiftedAlphabetLetters);
          console.log("\n" + shiftedAlphabetLetters + "\n↓,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓,↓\n" + alphabetLetters + "\n");
          readline.question('Enter cipher: ', enteredCipher => {
            const stringArray = enteredCipher.split("");
            stringArray.forEach(decryptText);

            function decryptText(item, index) {
              for (let i = 0; i < alphabetLetters.length; i++) {
                if (item == shiftedAlphabetLetters[i] || item.toLowerCase() == shiftedAlphabetLetters[i]) {
                  message.push(alphabetLetters[i]);
                  break;
                }
              }
            }
            console.log('Decrypted text: ' + message.join('') + '\n');
            MixedAlphabetCipher();
          });
        } else {
          console.log('Incorrect value\n');
          MixedAlphabetCipher();
        }
      });
    } else if (userPrompt == 'e') {
      readline.close();
      return;
    }
    else {
      console.log('Incorrect value\n');
      MixedAlphabetCipher();
    }
  });
}