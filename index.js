function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = new Set();

  for (const number of array) {
    const complement = target - number;
    if (seenNumbers.has(complement)) {
      return true; // Pair found
    }
    seenNumbers.add(number);
  }

  return false; // No pair found
}

/* 
  The time complexity of this function is O(n), where n is the number of elements in the array. 
  This is because each element is processed once, and each lookup/add operation in a set is O(1) on average.

  The space complexity is also O(n) due to the additional space used by the set.
*/

/* 
  Pseudocode:
  1. Create a set to keep track of numbers seen so far.
  2. Iterate through each number in the array.
     a. Calculate the complement (target - current number).
     b. If the complement is in the set, return true.
     c. Otherwise, add the current number to the set.
  3. If no pair is found by the end of the loop, return false.
*/

/*
  Explanation:
  - The function uses a set to store numbers that have been processed.
  - For each number in the array, it calculates what number would be needed to reach the target sum with that number.
  - It then checks if this required number has already been seen (i.e., is in the set).
  - If so, it returns true as a pair has been found.
  - If not, it adds the current number to the set and continues.
  - If the loop finishes without finding a pair, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
