var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.storage = {};
  this.nextValue = 0;

};

Queue.prototype.enqueue = function(value) {
  this.storage[this.nextValue + this.length] = value;
  this.length++;
};

Queue.prototype.dequeue = function() {
  if (this.length > 0) {
    var result = this.storage[this.nextValue];
    delete this.storage[this.nextValue];
    this.length--;
    this.nextValue++;
    return result;
  }
};

Queue.prototype.size = function() {
  return this.length;
};
