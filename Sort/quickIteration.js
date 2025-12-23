function quickSortIterative(arr) {
    if (arr.length <= 1) {
      return arr; // Base case: An array with 1 or fewer elements is already sorted.
    }
  
    const stack = []; // Initialize a stack to hold sub-array ranges
    stack.push({ start: 0, end: arr.length - 1 }); // Push the initial range (entire array)
  
    while (stack.length > 0) {
      const { start, end } = stack.pop(); // Get the sub-array range from the stack
  
      if (start >= end) {
        continue; // Skip if the sub-array has one or fewer elements
      }
  
      // Partition the sub-array
      const pivotIndex = partition(arr, start, end);
  
      // Push left and right sub-arrays onto the stack
      stack.push({ start: start, end: pivotIndex - 1 }); // Left side of pivot
      stack.push({ start: pivotIndex + 1, end: end });   // Right side of pivot
    }
  
    return arr; // Return the sorted array
  }
  
  // Partition helper function
  function partition(arr, start, end) {
    const pivot = arr[end]; // Choose the last element as the pivot
    let pivotIndex = start;
  
    for (let i = start; i < end; i++) {
      if (arr[i] < pivot) {
        // Swap elements to position smaller elements before the pivot
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        pivotIndex++;
      }
    }
  
    // Swap the pivot element into its correct position
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
    return pivotIndex;
  }
  
  // Example usage:
  const numbers = [64, 34, 25, 12, 22, 11, 90];
  console.log("Unsorted Array:", numbers);
  console.log("Sorted Array:", quickSortIterative(numbers));