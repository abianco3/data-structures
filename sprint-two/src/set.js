var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = new HashTable(); // fix me
  return set;
};

var setPrototype = {};
//the hashTable implementation:
setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage.insert(item, item);
  }
};

setPrototype.contains = function(item) {
  return !!this._storage.retrieve(item);
};

setPrototype.remove = function(item) {
  this._storage.remove(item);
};


//the original array implementation:
// setPrototype.add = function(item) {
//   if (!this._storage.indexOf(item) > -1) {
//     this._storage.push(item);
//   }
// };

// setPrototype.contains = function(item) {
//   return this._storage.indexOf(item) > -1;
// };

// setPrototype.remove = function(item) {
//   // iterate through items
//   for (var i = 0; i < this._storage.length; i++) {
//     // when find item
//     if (this._storage[i] === item) {
//       // shift array one position down
//       for (var j = i + 1; j < this._storage.length; j++) {
//         this._storage[j - 1] = this._storage[j];
//       }
//       break;
//       // shorten length by one
//     }
//   }
//   this._storage.length = this._storage.length - 1;
// };

/*
 * Complexity: What is the time complexity of the above functions?
 */

 // with hashTable the average case for add, contains, remove is O(1)
