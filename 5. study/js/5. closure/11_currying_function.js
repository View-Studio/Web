var curry3 = function (func) {
  return function (a) {
    return function (b) {
      return func(a, b);
    };
  };
};

var getMaxWith10 = curry3(Math.max)(10);
console.log(getMaxWith10(8));    // 10
console.log(getMaxWith10(25));    // 25

var getMinWith10 = curry3(Math.min)(10);
console.log(getMinWith10(8));    // 8
console.log(getMinWith10(25));    // 10







var curry5 = function (func) {
  return function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (e) {
            return func(a, b, c, d, e);
          };
        };
      };
    };
  };
};

var getMax5 = curry5(Math.max);
console.log(getMax(1)(2)(3)(4)(5));    // 5






// ES6
var curry7 = func => a => b => c => d => e => f => g => func(a, b, c, d, e, f, g);

var getMax7 = curry7(Math.max);
console.log(getMax(1)(2)(3)(4)(5)(6)(7));
