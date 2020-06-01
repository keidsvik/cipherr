
// prompt user to enter a sentence
function userInput(yourMessage) {
  prompt("Enter a sentence!!!!");
};
 
const yourSentence = prompt("NOTHING")
 

console.log(yourSentence);

function firstLast(yourSentence) {
  return yourSentence.charAt(0).toUpperCase() + yourSentence.charAt(yourSentence.length - 1).toUpperCase();
};

console.log(firstLast(yourSentence));

const reverseFirstLast = function reverse(yourSentence){
  return str.split("").reverse().join("");
};

console.log(reverseFirstLast);
