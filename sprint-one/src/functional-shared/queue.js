var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  instance.length = 0;
  instance.nextValue = 0;
  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.length + this.nextValue] = value;
    this.length++;
  },
  dequeue: function() {
    
    if (this.length > 0) {
      var result = this.storage[this.nextValue];
      delete this.storage[this.nextValue];
      this.length--;
      this.nextValue++;
      return result;
    }
  },
  size: function() {
    return this.length;
  }
};


