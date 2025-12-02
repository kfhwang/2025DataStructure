class Queue {
    constructor(maxElements) {
        this.queue = [];            // Array to store queue elements
        this.maxElements = maxElements; // Maximum number of elements allowed
    }

    // Add an element to the queue (enqueue operation)
    enqueue(value) {
        if (this.queue.length >= this.maxElements) {
            this.dequeue(); // Ensure the queue doesn't exceed the maximum size
        }
        this.queue.push(value); // Add the new element to the end
    }

    // Remove an element from the front of the queue (dequeue operation)
    dequeue() {
        if (this.queue.length === 0) {
            console.log("Queue is empty!");
            return null; // Return null if the queue is empty
        }
        return this.queue.shift(); // Remove the first element and return it
    }

    // Get the front element without removing it
    peek() {
        if (this.queue.length === 0) {
            console.log("Queue is empty!");
            return null;
        }
        return this.queue[0];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.queue.length === 0;
    }

    // Check the current size of the queue
    size() {
        return this.queue.length;
    }

    // Print the queue elements (for debugging)
    printQueue() {
        console.log(this.queue);
    }
}

// Example Usage:

// Create a queue with a maximum size of 3 elements
const myQueue = new Queue(3);

// Enqueue elements into the queue
myQueue.enqueue(10); // Queue: [10]
myQueue.enqueue(20); // Queue: [10, 20]
myQueue.enqueue(30); // Queue: [10, 20, 30]

// Exceeding the max size automatically removes the oldest element
myQueue.enqueue(40); // Queue: [20, 30, 40] (10 removed due to max size)

myQueue.printQueue(); // Output: [20, 30, 40]

// Peek the front of the queue
console.log("Front element:", myQueue.peek()); // Output: Front element: 20

// Dequeue (remove) elements
console.log("Removed element:", myQueue.dequeue()); // Output: Removed element: 20
myQueue.printQueue(); // Output: [30, 40]

// Check the queue properties
console.log("Queue is empty:", myQueue.isEmpty()); // Output: Queue is empty: false
console.log("Queue size:", myQueue.size());       // Output: Queue size: 2