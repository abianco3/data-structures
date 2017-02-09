var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.first = 0;
  this.last = -1;

};

Stack.prototype.push = function(value) {
  this.storage[++this.last] = value;
};

Stack.prototype.pop = function() {
  if (this.size() > 0) {
    return this.storage[this.last--];
  }
};

Stack.prototype.size = function() {
  return this.last - this.first + 1;
};


