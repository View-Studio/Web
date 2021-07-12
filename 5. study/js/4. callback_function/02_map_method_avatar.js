Array.prototype.map = function (callback, thisArg) {

  var mappedArr = [];
  
  for (var i = 0; i < this.length; i++) {
    var mappedValue = callback.call(thisArg || window, this[i], i, this);
    mappedArr[i] = mappedValue;
  }

  return mappedArr;

};
