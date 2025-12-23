function selectionSort(arr) {
    let n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      // Assume the minimum is the current index
      let minIndex = i;
  
      // Find the index of the smallest element in the remaining array
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j; // Update the index of the smallest element
        }
      }
  
      // Swap the found minimum element with the current element
      if (minIndex !== i) {
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
      console.log(i+"th Step:", arr);
    }
  
    return arr;
  }
  
  // Example usage
  let numbers = [87, 38, 77, 38, 25, 21, 1];
  console.log("Unsorted Array:", numbers);
  selectionSort(numbers);
  console.log("Sorted Array:", numbers);