var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.first = 0;
  instance.last = -1;
  instance.storage = {};
  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[++this.last] = value;
  },
  dequeue: function() {
    if (this.size() > 0) {
      return this.storage[this.first++];
    }
  },
  size: function() {
    return this.last - this.first + 1;
  }
};


