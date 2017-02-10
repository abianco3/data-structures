

// Instantiate a new graph
var Graph = function() {
  this.vertices = {};
  this.adjList = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // create a object with a value: value pair and an index
  this.vertices[JSON.stringify(node)] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this.vertices) {
    if (this.vertices[key] === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this.vertices) {
    if (this.vertices[key] === node) {
      delete this.vertices[key];
      break;
    }
  }
  if (this.adjList[node]) {
    var edges = this.adjList[node];
    var currentEdge = edges.head;
    while (currentEdge !== null) {
      this.removeEdge(currentEdge.value, node);
      currentEdge = currentEdge.next;
    }
    delete edges;
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.adjList[fromNode].contains(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.adjList[fromNode]) {
    this.adjList[fromNode].addToTail(toNode);
  } else {
    this.adjList[fromNode] = new LinkedList();
    this.adjList[fromNode].addToTail(toNode);
  }

  if (this.adjList[toNode]) {
    this.adjList[toNode].addToTail(fromNode);
  } else {
    this.adjList[toNode] = new LinkedList();
    this.adjList[toNode].addToTail(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.adjList[fromNode].delete(toNode);
  this.adjList[toNode].delete(fromNode);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.vertices) {
    cb(this.vertices[key]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


