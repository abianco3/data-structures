var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var first = 0;

  var last = -1;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[++last] = value;
  };

  someInstance.dequeue = function() {
    if (someInstance.size() > 0) {
      return storage[first++];
    }
  };

  someInstance.size = function() {
    return last - first + 1;
  };

  return someInstance;
};