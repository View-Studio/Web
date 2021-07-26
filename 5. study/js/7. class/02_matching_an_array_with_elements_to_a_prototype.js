var Grade = function () {
    var args = Array.prototype.slice.call(arguments);
    for (var i = 0; i < args.length; i++) {
        this[i] = args[i];
    }
    this.length = args.length;
};

Grade.prototype = ['a', 'b', 'c', 'd'];

var g = new Grade(100, 80);


g.push(90);
console.log(g); // Grade(3) [100, 80, 90]  length: 3

delete g.length;
g.push(70);
console.log(g); // Grade(5) [100, 80, 90, empty, 70]  length: 5
