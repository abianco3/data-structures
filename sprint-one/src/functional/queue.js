var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0;

  var nextValue = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[nextValue + size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    if (size > 0) {
      size--;
      var result = storage[nextValue];
      delete storage[nextValue];
      nextValue++;
      return result;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};