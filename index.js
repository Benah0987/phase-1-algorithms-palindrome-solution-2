function isPalindrome(word) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  const cleanedStr = word.toLowerCase().replace(/[^a-z0-9]/g, '');
  // Reverse the cleaned string and compare to original string
  return cleanedStr === cleanedStr.split('').reverse().join('');
}
 {
  /* Write your algorithm here
  1. Define a function called isPalindrome that takes a single argument, a string word.
2. Convert the word to lowercase using the toLowerCase() method.
3. Remove any non-alphanumeric characters from the word using the replace() method with a regular expression /[^a-z0-9]/g to match any characters that are not letters or numbers.
4. Assign the cleaned string to a variable called cleanedStr.
5. Reverse the cleaned string by splitting it into an array of characters using the split() method, reversing the array using the reverse() method, and then joining the array back into a string using the join() method.
6. Check if the cleaned string is equal to the reversed string.
7. If the cleaned string is equal to the reversed string, return true. Otherwise, return false.

}

/* 
  Add your pseudocode here
  function isPalindrome(word):
    // Convert the string to lowercase and remove non-alphanumeric characters
    cleanedStr = word.toLowerCase().replace(/[^a-z0-9]/g, '')
    // Reverse the cleaned string and compare to original string
    reversedStr = reverseString(cleanedStr)
    return cleanedStr == reversedStr

function reverseString(str):
    // Split the string into an array of characters
    charArray = str.split('')
    // Reverse the order of the elements in the array
    reversedArray = charArray.reverse()
    // Join the elements of the array back into a string
    reversedStr = reversedArray.join('')
    return reversedStr

*/

/*

  Add written explanation of your solution here
  This pseudocode defines a function called isPalindrome that takes a single argument, word, and returns true if word is a palindrome and false otherwise. The function first cleans the input string by converting it to lowercase and removing any non-alphanumeric characters using a regular expression. It then calls a helper function called reverseString to reverse the cleaned string, and compares the reversed string to the original cleaned string to determine whether the word is a palindrome or not.

The reverseString function takes a single argument, str, and returns the reversed version of the string. It first splits the string into an array of characters, reverses the order of the elements in the array using the reverse method, and then joins the elements of the array back into a string using the join method. By using this helper function, we can avoid duplicating the code to reverse the string inside the isPalindrome function.

Overall, this pseudocode describes the same logic as the JavaScript code provided earlier, but using more natural language and without relying on any specific programming syntax or constructs.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
