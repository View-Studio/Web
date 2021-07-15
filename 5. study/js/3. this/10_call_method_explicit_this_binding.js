var func = function (a, b, c) {
    console.log(this, a, b, c);
}

func(1, 2, 3); // Window {0: Window, window: Window, self: Window, document: document, name: "", location: Location, …}  1 2 3
func.call({
    x: 1
}, 4, 5, 6); // {x: 1} 4 5 6




var obj = {
    a: 1,
    method: function (x, y) {
        console.log(this.a, x, y);
    }
};

obj.method(2, 3); // 1 2 3
obj.method.call({
    a: 4
}, 5, 6) // 4 5 6
