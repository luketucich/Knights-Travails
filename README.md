# Knight's Travails ♞

A JavaScript project that brings the knight's movement on a chessboard to life! This project uses graphs with adjacency lists and implements the Breadth-First Search (BFS) algorithm to find the shortest path for a knight.

## What is Knight's Travails?

- This project solves the puzzle of moving a knight from one spot to another on a chessboard in the shortest possible path.
- It uses graphs, represented by an adjacency list, to map out every move a knight can make.
- By employing the Breadth-First Search (BFS) algorithm, we efficiently find the shortest path from the starting position to the target.

## Key Takeaways

Creating this project was an enriching experience. Here are some highlights:

- **Graph Theory In Action:** I explored graph theory by using adjacency lists to represent the chessboard and the knight's potential moves.
- **Mastering BFS:** Implementing BFS to navigate the chessboard and find the shortest path was a great way to enhance my problem-solving skills.
- **Dynamic Pathfinding:** The algorithm dynamically adjusts as it explores different routes, demonstrating real-world applications of graph traversal and search problems.
- **Clean Code:** Writing modular and maintainable code to handle the complex logic of graph representation and pathfinding.
- **Optimizing for Efficiency:** Learning and applying optimization techniques to ensure the algorithm runs smoothly and efficiently.
- **Hands-On Algorithms:** Getting hands-on experience with graph traversal and search algorithms solidified my theoretical knowledge through practical application.

Overall, this project was a fantastic opportunity to deepen my understanding of graph theory, BFS, and JavaScript, inspired by The Odin Project.

## Usage Example:

```javascript
// Usage Example
knightMoves([0, 0], [3, 3]);
// Output:
// You made it in 2 moves! Here's your path:
// [0, 0]
// [1, 2]
// [3, 3]
