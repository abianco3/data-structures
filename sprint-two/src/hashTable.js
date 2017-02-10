

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, [k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var res = this._storage.get(index);
  for (var i = 0; i < res.length; i++) {
    if (res[i][0] === k) {
      return res[i][1];
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



/*
 * Complexity: What is the time complexity of the above functions?
 */


