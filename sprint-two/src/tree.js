var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children[this.children.length] = child;
};

treeMethods.contains = function(target) {
  return this._searchNode(this, target);
};

treeMethods._searchNode = function (subTree, target) {
  
  if (subTree.value === target) {
    return true;
  }

  for (var i = 0; i < subTree.children.length; i++) {
    if (subTree._searchNode(subTree.children[i], target)) {
      return true;
    }
  }

  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
 // addChild O(1)
 // contains, _searchNode: O(n)
