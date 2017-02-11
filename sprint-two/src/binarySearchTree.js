var BinarySearchTree = function(value) {
  var bst = Object.create(BinarySearchTree.prototype);
  bst.value = value;
  bst.right = null; 
  bst.left = null;

  return bst;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
/*
var insertHelper = function(treeNode, value) {

  if (value < treeNode.value) {
    if (treeNode.left !== null) {
      insertHelper(treeNode.left, value);
    } else {
      treeNode.left = BinarySearchTree(value);
    }
  } else {
    if (treeNode.right !== null) {
      insertHelper(treeNode.right, value);
    } else {
      treeNode.right = BinarySearchTree(value);
    }
  }
};*/
/*
var containsHelper = function(treeNode, value) {
  if (treeNode === null) {
    return false;
  }
  if (treeNode.value === value) {
    return true;
  }

  return treeNode.value > value ? containsHelper(treeNode.left, value) : containsHelper(treeNode.right, value);
};*/
/*
var logHelper = function(treeNode, cb) {
  // if node is null
  if (treeNode === null) {
    return;
  }
  // call callback on node's value
  cb.call(null, treeNode.value);
  // call loghelper recursively on left child
  // call loghelper recursively on right child
  logHelper(treeNode.left, cb);
  logHelper(treeNode.right, cb);
};*/

BinarySearchTree.prototype.insert = function(value) {
  
  if (value < this.value) {
    if (this.left !== null) {
      this.left.insert(value);
    } else {
      this.left = BinarySearchTree(value);
    }
  } else {
    if (this.right !== null) {
      this.right.insert(value);
    } else {
      this.right = BinarySearchTree(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if (this === null) {
    return false;
  }
  if (this.value === value) {
    return true;
  } else if (this.value > value) {
    if (this.left === null) {
      return false;
    } else {
      return this.left.contains(value);
    }
  } else {
    if (this.right === null) {
      return false;
    } else {
      return this.right.contains(value);
    }
  }
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  if (this === null) {
    return;
  }

  cb(this.value);
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
  if (this.left) {
    this.left.depthFirstLog(cb); 
  }
};

/*complexity:
insert, contains: O(log(n))
depthFirstLog: O(n)
*/