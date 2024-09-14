// Lets practice of our Js codes

// Concepts to remember

// -Variables
// -Data types
// -Functions
// -Concatenations
// -

/**
 * This program tells the user
 */

var txt = prompt("Enter you text here");
var display = txt.length;
window.alert(display);

/**
 * Oneliners from the above: almost correct,
 * but there's a small issue with the logic.
 * If the user cancels the prompt or doesn't enter any text,
 * prompt() will return null, which will cause an error when
 * you try to access the length property of null.
 *
 */

window.alert(prompt("Enter you text here").length);

//Corected version of Oneliner.
let userInput = prompt("Enter your text here");
if (userInput !== null) {
  window.alert(userInput.length);
} else {
  window.alert("No input provided.");
}
