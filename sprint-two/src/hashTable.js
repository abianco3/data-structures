

var HashTable = function() {
  this._limit = 8;
  this._elementCounter = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  if (this._elementCounter / this._limit >= 0.75) {
    this._limit *= 2;
    this.doubleSize(this._limit);    
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, [k, v]);
  this._elementCounter++;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var res = this._storage.get(index);
  if (res) {
    for (var i = 0; i < res.length; i++) {
      if (res[i][0] === k) {
        return res[i][1];
      }
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var res = this._storage.get(index);
  for ( var i = 0; i < res.length; i++) {
    if (res[i][0] === k) {
      res.splice(i, 1);
    }
  }
  this._storage.set(index, [undefined, undefined]);
};

HashTable.prototype.doubleSize = function(newSize) {
  var newLimitedArray = new LimitedArray(newSize);
  // for each element in current storage
  this._storage.each(function(value) {
    if (value) {
      for (var i = 0; i < value.length; i++) {
        var index = getIndexBelowMaxForKey(value[i][0], newSize);
        newLimitedArray.set(index, value[i]);
      }
    }
  });
    // insert each element into new limited array
  this._storage = newLimitedArray;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


