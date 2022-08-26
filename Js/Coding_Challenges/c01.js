//! Write a function that takes an array of characters and reverses the letters in place.

//! Examples:
//! reverse("Clarusway Rocks!") ➞ !skcoR yawsuralC
//! reverse("Happy") ➞ yppaH
// ****Yöntem-1****
// let word = prompt(`Entered a word: `);
// let newWordArray = word.split("").reverse();
// let newWord = "";
// for (let i = 0; i < newWordArray.length; i++) {
//   newWord += newWordArray[i];
// }
// console.log(newWord);

// ***Yöntem-2*****

let word = prompt(`Entered a word: `);
let newWordArray = word.split("").reverse();
newWord = newWordArray.join("");
console.log(newWord);
