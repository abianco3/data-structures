

var HashTable = function() {
  this._limit = 8;
  this._elementCounter = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      tuple[1] = v;
      return;
    }
  }
  bucket.push([k, v]);

  this._storage.set(index, bucket);
  this._elementCounter++;
  
  if (this._elementCounter / this._limit >= 0.75) {
    this._limit *= 2;
    this._changeSize(this._limit);    
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
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
  this._elementCounter--;
  // see if elementCount is <= 25% of limit
  if (this._elementCounter / this._limit < 0.25) {
    // half of size of limit counter
    this._limit = Math.floor(this._limit / 2);
    // reduce the storage size by 50%
    this._changeSize(this._limit);
  }
};

HashTable.prototype._changeSize = function(newSize) {
  

  var oldStorage = this._storage;
  this._storage = LimitedArray(newSize);
  this._elementCounter = 0;
  // for each element in current storage

  oldStorage.each(function(bucket) {
    if (bucket) {
      for (var i = 0; i < bucket.length; i++) {
        var index = getIndexBelowMaxForKey(bucket[i][0], newSize);
        this.insert(bucket[i][0], bucket[i][1]);
      }
    }
  }.bind(this));
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

// insert, retrieve remove is on average O(1), worst-case O(n)
// for _changeSize if the hash function sucks, we may have O(n^2). But normally, it should be O(n).

