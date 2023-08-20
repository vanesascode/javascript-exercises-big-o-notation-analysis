// 2. Find the Largest Number:

//Option 1: using a for loop

function largestNumber(numbers) {
  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
}

console.log(largestNumber([1, -7, 3, 4, -5])); // Output: 4

// The time complexity of the provided code snippet is O(n), where n is the length of the input array. This is because the code iterates through the array once to compare each element with the current largest number. 


// The space complexity of the code is O(1), as it only requires a constant amount of additional space to store the  largest  variable. The space used does not depend on the size of the input array.



//Option 2: using the Math.max() method  

// The time complexity is still O(n), where n is the length of the input array. However, the code is more efficient in terms of readability and simplicity.


function largestNumber(numbers) {
  let largest = Math.max(...numbers)
  return largest;
}

console.log(largestNumber([1, -7, 3, 4, -5])); // Output: 4