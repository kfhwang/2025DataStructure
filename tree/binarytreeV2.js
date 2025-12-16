const readline = require("readline");
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

// Function to build a binary tree from input array representation.
const buildTreeFromArray = (arr) => {
  if (!arr || arr.length === 0) return null;
  return arr.map((val) => (val === "null" || val === null ? null : val));
};

// Iterative Preorder Traversal: Root -> Left -> Right
const preorderTraversal = (treeArray) => {
  if (!treeArray || treeArray.length === 0 || treeArray[0] === null) return [];
  
  let result = [];
  let stack = [0]; // Start with the root node's index (0).

  while (stack.length > 0) {
    const currentIndex = stack.pop();
    console.log("Current:"+treeArray[currentIndex]);
    if (treeArray[currentIndex] === null) continue;

    // Visit the current node (add its value to the result).
    result.push(treeArray[currentIndex]);

    // Calculate the right and left child indices.
    const rightChildIndex = 2 * currentIndex + 2;
    const leftChildIndex = 2 * currentIndex + 1;

    // Push right child first, so left child is processed first (LIFO stack).
    if (rightChildIndex < treeArray.length) {
      stack.push(rightChildIndex);
    }
    if (leftChildIndex < treeArray.length) {
      stack.push(leftChildIndex);
    }
  }

  return result;
};

// Get user input.
rl.question(
  "Enter binary tree elements as comma-separated values (use 'null' for empty positions): ",
  (input) => {
    // Convert input into an array.
    const inputArray = input.split(",").map((item) => item.trim());

    // Build binary tree (one-dimensional array representation).
    const tree = buildTreeFromArray(inputArray);

    // Perform iterative preorder traversal.
    const traversalResult = preorderTraversal(tree);

    // Display result.
    console.log("Preorder Traversal of Binary Tree:", traversalResult.join(" -> "));
    

    // Close the input stream.
    rl.close();
  }
);

//a,b,c,d,null,e,f,null,g,null,null,h,i