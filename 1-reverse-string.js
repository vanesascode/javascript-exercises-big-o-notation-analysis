// 1. Reverse a String:

//Option 1: Using a for loop

function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

const inputString = 'Hello, World!';
const reversedString = reverseString(inputString);
console.log(reversedString); // Output: !dlroW ,olleH


// This solution has a time complexity of O(n), where n is the length of the input string. This is because we iterate over each character of the string once.

//The space complexity of the provided solution for reversing a string is O(n), where n is the length of the input string. This is because we create a new string,  reversed , to store the reversed version of the input string. The space required for the  reversed  string is directly proportional to the length of the input string.


//Option 2: Using a while loop

// We can improve the time complexity to O(n/2) or simply O(n) by making a small modification. Instead of iterating from the last index to the first index, we can iterate from both ends simultaneously and swap the characters until we reach the middle of the string. 


function reverseString(str) {
  const arr = str.split('');
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }

  return arr.join('');
}

const inputString2 = 'Hello, World!';
const reversedString2 = reverseString(inputString2);
console.log(reversedString2); // Output: !dlroW ,olleH