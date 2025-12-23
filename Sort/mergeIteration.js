function mergeSortIterative(arr) {
    if (arr.length <= 1) {
      return arr; // Base case: An array with 1 or fewer elements is already sorted
    }
  
    let step = 1; // Start with merging sub-arrays of size 1
    const n = arr.length;
  
    // Iterate from small sub-array sizes to larger ones
    while (step < n) {
      let left = 0;
  
      while (left + step < n) {
        // Define the start, mid, and end indices of the current sub-arrays
        const mid = left + step - 1;
        const right = Math.min(left + 2 * step - 1, n - 1);
  
        // Merge the two sub-arrays
        mergeInPlace(arr, left, mid, right);
  
        // Move to the next pair of sub-arrays
        left += 2 * step;
      }
  
      step *= 2; // Double the step size for the next merge stage
    }
  
    return arr;
  }
  
  // Helper function to merge sub-arrays in place
  function mergeInPlace(arr, start, mid, end) {
    const leftArr = arr.slice(start, mid + 1); // Create a copy of the left sub-array
    const rightArr = arr.slice(mid + 1, end + 1); // Create a copy of the right sub-array
  
    let i = 0;
    let j = 0;
    let k = start;
  
    // Merge elements from both sub-arrays back into the original array
    while (i < leftArr.length && j < rightArr.length) {
      if (leftArr[i] <= rightArr[j]) {
        arr[k] = leftArr[i++];
      } else {
        arr[k] = rightArr[j++];
      }
      k++;
    }
  
    // Append the remaining elements from the left sub-array (if any)
    while (i < leftArr.length) {
      arr[k++] = leftArr[i++];
    }
  
    // Append the remaining elements from the right sub-array (if any)
    while (j < rightArr.length) {
      arr[k++] = rightArr[j++];
    }
  }
  
  // Example usage:
  const numbers = [64, 34, 25, 12, 22, 11, 90];
  console.log("Unsorted Array:", numbers);
  console.log("Sorted Array:", mergeSortIterative(numbers));