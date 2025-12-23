function mergeSort(arr) {
    // Base case: if the array has 1 or fewer elements, it's already sorted
    if (arr.length <= 1) {
      return arr;
    }
  
    // Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    // Recursively sort the two halves and merge them
    return merge(mergeSort(left), mergeSort(right));
  }
  
  // Helper function to merge two sorted arrays
  function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;
  
    // Compare elements from left and right arrays and add the smaller one to the result array
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
    // Add any remaining elements from the left array (if any)
    while (i < left.length) {
      result.push(left[i]);
      i++;
    }
  
    // Add any remaining elements from the right array (if any)
    while (j < right.length) {
      result.push(right[j]);
      j++;
    }
  
    return result;
  }
  
  // Example usage
  const numbers = [64, 34, 25, 12, 22, 11, 90];
  console.log("Unsorted Array:", numbers);
  console.log("Sorted Array:", mergeSort(numbers));