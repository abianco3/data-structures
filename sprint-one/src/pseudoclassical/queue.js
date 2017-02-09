var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.first = 0;
  this.last = -1;
  this.storage = {};

};

Queue.prototype.enqueue = function(value) {
  this.storage[++this.last] = value;
};

Queue.prototype.dequeue = function() {
  if (this.size() > 0) {
    return this.storage[this.first++];
  }
};

Queue.prototype.size = function() {
  return this.last - this.first + 1;
};
