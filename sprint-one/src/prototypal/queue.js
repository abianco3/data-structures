var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.length = 0;
  instance.nextValue = 0;
  instance.storage = {};
  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.length + this.nextValue] = value;
    this.length++;
  },
  dequeue: function() {
    if (this.length > 0) {
      this.length--;
      var result = this.storage[this.nextValue];
      delete this.storage[this.nextValue];
      this.nextValue++;
      return result;
    }
  },
  size: function() {
    return this.length;
  }
};


