function quickSort(arr) {
    // Base case: If the array has 0 or 1 element, it's already sorted
    if (arr.length <= 1) {
      return arr;
    }
  
    // Choose a pivot (typically the first element)
    const pivot = arr[0];
    const left = [];
    const right = [];
  
    // Partition the array into two sub-arrays: elements less than pivot go to "left",
    // and elements greater than or equal to pivot go to "right"
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    // Recursively sort the sub-arrays and concatenate them with the pivot
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  // Example usage
  const numbers = [64, 34, 25, 12, 22, 11, 90];
  console.log("Unsorted Array:", numbers);
  console.log("Sorted Array:", quickSort(numbers));