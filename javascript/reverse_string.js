function reverseString(string) {
  const reversedString = [];
  for (let i = 0; i < string.length; i++) {
    reversedString.unshift(string[i]);
  }
  return reversedString.join('')
}

if (require.main === module) {
  // add your own tests in here
  console.log("TEST 1 - Expecting: 'ih'");
  console.log("Result:", reverseString("hi"));

  console.log("TEST 2 - Expecting: 'ybabtac'");
  console.log("Result:", reverseString("catbaby"));

  console.log("TEST 3 - Expecting: '!dlrow olleH'");
  console.log("Result:", reverseString("Hello world!"));

  console.log("TEST 4 - Expecting: '12345'");
  console.log("Result:", reverseString("54321"));
}

module.exports = reverseString;

/* The Objective:
Using javascript, write a function reverseString that reverses the characters in a string. This function will receive one argument, a string, and return the reversed string.

Input: "Hello world!"
Output: "!dlrow olleH"

Note: For the sake of practicing our algorithmic problem solving, we won't be using any type of built-in reverse methods!
*/


/* Pseudocode:
Declare function that takes in string argument (string)
    create new empty array reversedString
    iterate over each element of string
    add each index to the front of reversedString (unshift)
    return reversedString
*/



// And a written explanation of your solution

