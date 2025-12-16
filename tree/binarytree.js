const readline = require("readline");

// Create an interface to read user input.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to create a binary tree from array representation.
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Helper function to build binary tree from array.
const buildTreeFromArray = (arr) => {
  if (!arr.length) return null;

  const nodes = arr.map((val) =>
    val === "null" || val === null ? null : new BinaryTreeNode(val)
  );

  for (let i = 0, j = 1; j < nodes.length; i++) {
    // Set left child.
    if (nodes[i] !== null && j < nodes.length) {
      nodes[i].left = nodes[j++];
    }
    // Set right child.
    if (nodes[i] !== null && j < nodes.length) {
      nodes[i].right = nodes[j++];
    }
  }

  return nodes[0];
};

// Preorder traversal function: Root -> Left -> Right.
const preorderTraversal = (node) => {
  if (!node) return [];
  let result = [];
  result.push(node.value); // Visit root
  result = result.concat(preorderTraversal(node.left)); // Visit left subtree
  result = result.concat(preorderTraversal(node.right)); // Visit right subtree
  return result;
};

// Get user input.
rl.question(
  "Enter binary tree elements as comma-separated values (use 'null' for empty positions): ",
  (input) => {
    // Convert input into an array.
    const inputArray = input.split(",").map((item) => item.trim());

    // Build binary tree.
    const root = buildTreeFromArray(inputArray);

    // Perform preorder traversal.
    const traversalResult = preorderTraversal(root);

    // Display result.
    console.log("Preorder Traversal of Binary Tree:", traversalResult.join(" -> "));

    // Close the input stream.
    rl.close();
  }
);