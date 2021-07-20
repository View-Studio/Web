Object.defineProperty(window, '_', {
  value: 'EMPTY_SPACE',
  writable: false,
  configurable: false,
  enumerable: false
})

var partial = function () {
  var originalPartialArgs = arguments;
  var func = originalPartialArgs[0];
  if (typeof func !== 'function') {
    throw new Error('첫 번째 인수가 함수가 아닙니다.')
  }
  return function () {
    var partialArgs = Array.prototype.slice.call(originalPartialArgs, 1);
    var restArgs = Array.prototype.slice.call(arguments);
    for (var i = 0; i < partialArgs.length; i++) {
      if (partialArgs[i] === _ ){
        partialArgs[i] = restArgs.shift()
      }
    }
    return func.apply(this, partialArgs.concat(restArgs));
  }
}


var add = function () {
  var result = 0;
  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
};
var addPartial = partial(add, 1, 2, _, 4, 5, _, _, 8, 9);
console.log(addPartial(3, 6, 7, 10));


var dog = {
  name: '강아지',
  greet: partial(function (prefix, suffix) {
    return prefix + this.name + suffix;
  }, '왈왈, ')
};
dog.greet('입니다!');
