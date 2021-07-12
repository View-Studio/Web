var func = function (a, b, c, d) {
  console.log(this, a, b, c, d);
};
func(1, 2, 3, 4);    // Window {window: Window, self: Window, document: document, name: "", location: Location, …} 1 2 3 4

var bindFunc1 = func.bind({ x: 1 });
bindFunc1(5, 6, 7, 8);    // {x: 1} 5 6 7 8

var bindFunc2 = func.bind({ x: 1 }, 4, 5);
bindFunc2(6, 7);    // {x: 1} 4 5 6 7
bindFunc2(8, 9);    // {x: 1} 4 5 8 9
