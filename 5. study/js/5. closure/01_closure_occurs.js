var outer = function () {
    var a = 1;
    var inner = function () {
        return ++a;
    };
    return inner;
};

var outPack = outer();
console.log(outPack()); // 2
console.log(outPack()); // 3
