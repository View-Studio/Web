var copyObjectDeep = function (target) {
    var result = {};
    if (typeof target === 'object' && target !== null) {
        for (var prop in target) {
            result[prop] = copyObjectDeep(target[prop]);
        }
    } else {
        result = target;
    }
    return result;
};

var obj = {
    alpha: 1,
    beta: {
        gamma: null,
        delta: [1, 2]
    }
};
var obj2 = copyObjectDeep(obj);

obj2.alpha = 3;
obj2.beta.gamma = 4;
obj.beta.delta[1] = 3;

console.log(obj); // { alpha: 1, beta: { gamma: null, delta: [1, 3] } };
console.log(obj2); // { alpha: 3, beta: { gamma: 4, delta: {0:1, 1:2} } };
