var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);
    if (list.head === null) {
      list.head = node;
    } else {
      list.tail.next = node;
    }
    list.tail = node;
  };

  list.removeHead = function() {
    var result = list.head.value;
    list.head = list.head.next;
    return result;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  list.insertAfter = function(value, target) {
    var currentNode = list.head;
    while (currentNode !== null) {
      if (currentNode.value === target) {
        break;
      }
    }
    if (currentNode !== null) {
      var newNode = new Node(value);
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    } else {
      console.log('Target value doesn\'t exist!');
    }
    
  };
//can remove every node except the last one
  list.delete = function(value) {
    var currentNode = list.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        break;
      }
    }
    if (currentNode !== null) {
      currentNode.value = currentNode.next.value;
      currentNode.next = currentNode.next.next;
    } else {
      console.log('Target value does not exist!');
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
