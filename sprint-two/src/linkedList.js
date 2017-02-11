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
      node.previous = list.tail;
    }
    list.tail = node;
  };

  list.addToHead = function(value) {
    var node = new Node(value);
    if (list.tail === null) {
      list.tail === node;
    } else {
      list.head.previous = node;
      node.next = list.head;
    }
    list.head = node;
  };

  list.removeHead = function() {
    var result = list.head.value;
    if (list.head === list.tail) {
      list.head = null;
      list.tail = null;
    } else {
      list.head = list.head.next;
      list.head.previous = null;
    }
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
      currentNode = currentNode.next;
    }
    if (currentNode !== null) {
      var newNode = new Node(value);
      currentNode.next.previous = newNode;
      newNode.next = currentNode.next;
      currentNode.next = newNode;
      newNode.previous = currentNode;
    } else {
      console.log('Target value doesn\'t exist!');
    }
    
  };
//
  list.delete = function(value) {
    var currentNode = list.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        break;
      }
      currentNode = currentNode.next;
    }
    if (currentNode === list.head) {
      list.removeHead();
    } else if (currentNode === list.tail) {
      if (list.tail === list.head) {
        list.tail = null;
        list.head = null;
      } else {
        list.tail = list.tail.previous;
        list.tail.next = null;
      }
    } else {
      currentNode.next.previous = currentNode.previous;
      currentNode.previous.next = currentNode.next;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
 // addToHead, addToTail, remove: O(1)
 // contains, delete, insertAfter: O(n)
