var func = function (x) {
    console.log(this, x);
};
func(1); // Window { ... } 1

var obj = {
    method: func
};
obj.method(2); // { method: f } 2
obj['method'](3); // { method: f } 3
