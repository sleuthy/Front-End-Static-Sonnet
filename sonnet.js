
// Take the contents of the sonnet div and place it in a variable.
var sonnet = document.getElementById('sonnet').innerHTML;
console.log(sonnet);

// Find and output the starting position of the word "orphans".
var index = sonnet.indexOf("orphans");
console.log("index of orphans", index);

// Output the number of characters in the sonnet.
var length = sonnet.length;
console.log("length of sonnet", length);

// Replace the first occurance of the string "winter" with "yuletide".
sonnet = sonnet.replace("winter", "yuletide");
console.log("replace winter", sonnet);

// Replace all occurances of the string "the" with "a large".
sonnet = sonnet.replace(/the /gi, "a large ");
console.log("replace the", sonnet);

// Set the content of the sonnet div with the new string.
document.getElementById("sonnet").innerHTML = sonnet;

