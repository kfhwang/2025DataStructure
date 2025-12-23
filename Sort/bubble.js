function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
  
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          // Swap elements
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
      // After each pass, the largest element is "bubbled" to the end, 
      // so we can decrease the range of the loop
      n--;
    } while (swapped);
  
    return arr;
  }
  
  // Example usage
//   let numbers = [64, 34, 25, 12, 22, 11, 90];
  let numbers = [ 11, 12, 22,  90];
  console.log("Unsorted Array:", numbers);
  console.log("Sorted Array:", bubbleSort(numbers));