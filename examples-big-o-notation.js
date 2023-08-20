// EXAMPLES OF Types of Big O notation:

// 1. O(1) - Constant: The algorithm's performance does not change as the input size grows. It always takes the same amount of time or space to complete, regardless of the input size.




/////////////////////////////////////////////////////////////////////////////////////////// 

// 2. O(log n) - Logarithmic: The algorithm's performance grows logarithmically as the input size grows. This means that it becomes slower or takes more space as the input size increases, but the rate of increase slows down over time.



/////////////////////////////////////////////////////////////////////////////////////////// 

// 3. O(n) - Linear: The algorithm's performance grows linearly as the input size grows. This means that it takes proportionally longer to complete or of space as the input size increases.


/////////////////////////////////////////////////////////////////////////////////////////// 

// 4. O(n log n) - Log-Linear: The algorithm's performance grows in between linear and logarithmic. It becomes slower or takes more space as the input size increases, but not as much as a purely logarithmic algorithm.


/////////////////////////////////////////////////////////////////////////////////////////// 

// 5. O(n^2) - Quadratic: The algorithm's performance grows exponentially as the input size grows. This means that it becomes significantly slower or takes significant more space as the input size increases.

function removeDuplicates(array) {
  return array.filter((item, index) => array.indexOf(item) === index);
}

console.log(removeDuplicates([1, 2, 3, 4, 4, 5, 2, 2, 1])); // Output: [ 1, 2, 3, 4, 5 ]


//The Big O notation for the removeDuplicates function in JavaScript is O(n^2), where n is the length of the input array. This is because the indexOf method has a time complexity of O(n), and the filter method is applied to each element in the array, resulting in nested iterations. As a result, the overall time complexity is quadratic.

///////////////////////////////////////////////////////////////////////////////////////////

// 6. O(2^n) - Exponential: The algorithm's performance grows exponentially as the input size grows. This means that it becomes extremely slow or takes a lot of space as the input size increases, and is generally considered impractical for large inputs.