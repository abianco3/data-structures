

// Instantiate a new graph
var Graph = function() {
  this.vertices = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var vertex = {};
  vertex.value = node;
  vertex.edges = [];
  this.vertices[node] = vertex;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var vertex in this.vertices) {
    if (this.vertices[vertex].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var _this = this;
  var edges = this.vertices[node].edges;
  edges.forEach(function(edge) {
    _this.removeEdge(edge, node);
  });
  delete this.vertices[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.vertices[fromNode].edges.indexOf(toNode) > -1;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.vertices[fromNode].edges.push(toNode);
  this.vertices[toNode].edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var edges = this.vertices[fromNode].edges;
  edges.splice(edges.indexOf(toNode), 1);
  edges = this.vertices[toNode].edges;
  edges.splice(edges.indexOf(fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var vertex in this.vertices) {
    cb(this.vertices[vertex].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode, addEdge: O(1)
 contains, remove, hasEdge, removeEdge, forEachNode: O(N)

 */


