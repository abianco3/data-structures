var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.length = 0;

  _.extend(obj, stackMethods);

  return obj;
};

var stackMethods = {
  push: function(value) {
    var index = this.length;
    this.storage[index] = value;
    this.length++;
  },
  pop: function() {
    if (this.length > 0) {
      this.length--;
      var index = this.length;
      var result = this.storage[index];
      delete this.storage[index];
      return result;
    }
  },
  size: function() {
    return this.length;
  }
};


