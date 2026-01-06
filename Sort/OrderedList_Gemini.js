class OrderedList {
    constructor() {
      this.items = [];
    }
  
    /**
     * Finds the index of an item or where it should be placed.
     * Uses a binary search algorithm.
     * @param {*} target - The value to search for.
     * @returns {Object} - The index and whether the item was found.
     */
    _binarySearch(target) {
      let low = 0;
      let high = this.items.length - 1;
  
      while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const guess = this.items[mid];
  
        if (guess === target) {
          return { index: mid, found: true };
        }
        if (guess > target) {
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      }
  
      // If not found, 'low' is the correct insertion point to maintain order
      return { index: low, found: false };
    }
  
    /**
     * Inserts a value into the correct sorted position.
     * @param {*} value 
     */
    insert(value) {
      const { index } = this._binarySearch(value);
      // Use splice to insert at the specific index without replacing elements
      this.items.splice(index, 0, value);
    }
  
    /**
     * Searches for a value in the list.
     * @param {*} value 
     * @returns {number} - The index of the item, or -1 if not found.
     */
    search(value) {
      const { index, found } = this._binarySearch(value);
      return found ? index : -1;
    }
  
    // Helper to view the list
    display() {
      console.log(this.items);
    }
  }

var myOrderList = new OrderedList();
myOrderList.insert(9);
myOrderList.insert(19);
myOrderList.insert(2);
myOrderList.insert(13);
myOrderList.insert(5);
myOrderList.insert(15);
myOrderList.insert(6);
myOrderList.insert(8);
myOrderList.insert(11);
myOrderList.insert(7);
console.log("Binary Search: 20=>"+myOrderList.search(20));
console.log("Binary Search: 13=>"+myOrderList.search(13));