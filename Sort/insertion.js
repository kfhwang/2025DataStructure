function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i]; // The current element to be compared
      let j = i - 1;
  
      // Move elements of arr[0..i-1] that are greater than key
      // one position ahead of their current position
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      // Insert the element at the correct position
      arr[j + 1] = key;
      console.log(i+"th Step:", arr);
    }
  
    return arr;
  }
  
  // Example usage
  let numbers = [25, 37, 18, 21, 5, 21];
  console.log("Unsorted Array:", numbers);
  insertionSort(numbers);
  console.log("Sorted Array:", numbers);