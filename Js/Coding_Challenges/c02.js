//! Problem Statement
//! Write a function that takes an array of characters and reverses the words order.
//! Please note that, single word should not be reversed!

//? Examples
//? Input : 'Clarusway' => Output : 'Clarusway'
//? Input : 'days. big make things Little' => Output : 'Little things make big days.'

let sentence = prompt("Entered a sentence: ");
let newSentenceArray = sentence.split(" ").reverse();
let newSentence = "";
for (let i = 0; i < newSentenceArray.length; i++) {
  if (newSentenceArray.length === 1) {
    newSentence += newSentenceArray[i];
    break;
  } else if (i == newSentenceArray.length - 1) {
    newSentence += newSentenceArray[i];
  } else {
    newSentence += newSentenceArray[i] + " ";
  }
}
console.log(newSentence);
