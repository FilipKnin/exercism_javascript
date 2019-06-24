

export function encode(notEncryptedString) {

if (notEncryptedString === '') {
   return '';
}

let notEncryptedInput = notEncryptedString.split('');
let encryptedOutput = []
let firstNotEncryptedItem = notEncryptedInput[0];
let counter = 0;
let finalStringOutput = null;
console.log('notEncryptedInput:', notEncryptedInput);
console.log('firstNotEncryptedItem initially:', firstNotEncryptedItem);

if (notEncryptedInput.length > 1) {
  for (let i = 1; i < notEncryptedInput.length; i++) {
    let notEncryptedItem = notEncryptedInput[i];
    if (notEncryptedItem != firstNotEncryptedItem) {
      encryptedOutput.push(i + firstNotEncryptedItem);
      notEncryptedInput.splice(0, i);
      firstNotEncryptedItem = notEncryptedInput[0];
      console.log('encryptedOutput:', encryptedOutput);
      console.log('notEncryptedInput:', notEncryptedInput);
      console.log('i:', i);
    }
  }
  console.log('notEncryptedInput 2:', notEncryptedInput);
  console.log('firstNotEncryptedItem after manipulation:', firstNotEncryptedItem);
  encryptedOutput.push(notEncryptedInput.length + notEncryptedInput[0]);

  finalStringOutput = encryptedOutput.join('');

}
console.log('finalStringOutput:', finalStringOutput);
return finalStringOutput;


}
