// Queue implementation using array
class Queue {
    constructor() {
        this.items = [];
    }
    
    // Add element to end of queue
    enqueue(element) {
        this.items.push(element);
        return this.items.length;
    }
    
    // Remove and return first element
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.shift();
    }
    
    // View first element without removing
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[0];
    }
    
    // Check if queue is empty
    isEmpty() {
        return this.items.length === 0;
    }
    
    // Get size of queue
    size() {
        return this.items.length;
    }
    
    // Clear the queue
    clear() {
        this.items = [];
    }
}
  
  
// Stack implementation using array
class Stack {
    constructor() {
        this.items = [];
    }
    
    // Add element to top of stack
    push(element) {
        this.items.push(element);
        return this.items.length;
    }
    
    // Remove and return top element
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }
    
    // View top element without removing
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }
    
    // Check if stack is empty
    isEmpty() {
        return this.items.length === 0;
    }
    
    // Get size of stack
    size() {
        return this.items.length;
    }
    
    // Clear the stack
    clear() {
        this.items = [];
    }
}
  
  
class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
  
    addEdge(vertex1, vertex2) {
      this.addVertex(vertex1);
      this.addVertex(vertex2);
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  
    removeEdge(vertex1, vertex2) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }
  
    removeVertex(vertex) {
      while (this.adjacencyList[vertex].length) {
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacentVertex);
      }
      delete this.adjacencyList[vertex];
    }
}
  
const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");

// MY WORK
const bfsGraph = new Graph();

bfsGraph.addVertex("1");
bfsGraph.addVertex("2");
bfsGraph.addVertex("3");
bfsGraph.addVertex("4");
bfsGraph.addVertex("5");
bfsGraph.addVertex("6");
bfsGraph.addVertex("7");

bfsGraph.addEdge("1", "2");
bfsGraph.addEdge("2", "4");
bfsGraph.addEdge("2", "5");
bfsGraph.addEdge("1", "3");
bfsGraph.addEdge("3", "6");
bfsGraph.addEdge("3", "7");

function bfsSearch(graph) {
    const q = new Queue();
    q.enqueue(graph.adjacencyList[1]);
    while (!q.isEmpty()) {
      console.log("------------------");
      let dequeued = q.dequeue();
      for (let i = 0; i < dequeued.length; i++) {
        q.enqueue(dequeued[i]);
      }
      console.log(q);
      console.log("------------------");
    }
  }
  
  bfsSearch(bfsGraph);