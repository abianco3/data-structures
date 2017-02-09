var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  
  var first = 0;

  var last = -1;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[++last] = value;
  };

  someInstance.pop = function() {
    
    if (someInstance.size() > 0) {
      return storage[last--];
    }
  };

  someInstance.size = function() {
    return last - first + 1;
  };

  return someInstance;
};
