var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.first = 0;
  instance.last = -1;
  instance.storage = {};
  return instance;
};

var stackMethods = {
  push: function(value) {
    this.storage[++this.last] = value;
  },
  pop: function() {
    if (this.size() > 0) {
      return this.storage[this.last--];
    }
  },
  size: function() {
    return this.last - this.first + 1;
  }
};
