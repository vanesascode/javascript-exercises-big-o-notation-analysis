# Javascript interview exercises and their Big O notation

## Exercises:

1. Reverse a String: Write a function that takes a string as input and returns the reverse of that string. This exercise tests your understanding of string manipulation and time complexity.

2. Find the Largest Number: Given an array of numbers, write a function that finds and returns the largest number in the array. This exercise tests your knowledge of array manipulation and the concept of finding the maximum value.

3. Remove Duplicates: Write a function that takes an array as input and returns a new array with all duplicates removed. This exercise tests your understanding of array manipulation and the efficiency of your solution.

4. Fibonacci Sequence: Write a function that generates the Fibonacci sequence up to a given number 'n'. This exercise tests your understanding of recursion and the time complexity of your solution.

5. Sorting Algorithms: Implement a sorting algorithm (such as Bubble Sort, Insertion Sort, or Quick Sort) to sort an array of numbers in ascending order. This exercise tests your understanding of different sorting algorithms and their time complexity.

For each exercise, it's important to analyze the time complexity (Big O notation) of your solution and optimize it if possible. This demonstrates your ability to write efficient code.

---

## Big O notation:

Big O notation is a way to describe the performance or efficiency of an algorithm. It represents the upper bound or worst-case scenario of how the runtime or space requirements of an algorithm grow as the input size increases.

Big O notation helps us analyze and compare the scalability and efficiency of different algorithms.

## Types of Big O notation:

It is denoted using the letter "O" followed by a function that represents the relationship between the input size and the algorithm's performance:

## Time and Space Complexity:

### Time Complexity:

Time complexity measures the amount of time an algorithm takes to run as a function of the input size. It helps us understand how the algorithm's performance scales with larger inputs. Time complexity is usually expressed using Big O notation, which provides an upper bound on the growth rate of the algorithm's runtime.

For example, if an algorithm has a time complexity of O(n), it means that the runtime grows linearly with the input size. If the input size doubles, the runtime also doubles. Common time complexity classes include O(1) (constant time), O(log n) (logarithmic time), O(n) (linear time), O(n^2) (quadratic time), and more.

### Space Complexity:

Space complexity measures the amount of memory an algorithm requires as a function of the input size. It helps us understand how the algorithm's memory usage scales with larger inputs. Space complexity is also expressed using Big O notation.

For example, if an algorithm has a space complexity of O(n), it means that the memory usage grows linearly with the input size. If the input size doubles, the memory usage also doubles. Similarly, space complexity can be O(1) (constant space), O(log n) (logarithmic space), O(n) (linear space), O(n^2) (quadratic space), and more.

It's important to analyze both time complexity and space complexity to ensure that an algorithm is both efficient in terms of runtime and uses an acceptable amount of memory.

## Types of Big O notation:

1. O(1) - Constant: The algorithm's performance does not change as the input size grows. It always takes the same amount of time or space to complete, regardless of the input size.

2. O(log n) - Logarithmic: The algorithm's performance grows logarithmically as the input size grows. This means that it becomes slower or takes more space as the input size increases, but the rate of increase slows down over time.

3. O(n) - Linear: The algorithm's performance grows linearly as the input size grows. This means that it takes proportionally longer to complete or of space as the input size increases.

4. O(n log n) - Log-Linear: The algorithm's performance grows in between linear and logarithmic. It becomes slower or takes more space as the input size increases, but not as much as a purely logarithmic algorithm.

5. O(n^2) - Quadratic: The algorithm's performance grows exponentially as the input size grows. This means that it becomes significantly slower or takes significant more space as the input size increases.

6. O(2^n) - Exponential: The algorithm's performance grows exponentially as the input size grows. This means that it becomes extremely slow or takes a lot of space as the input size increases, and is generally considered impractical for large inputs.
