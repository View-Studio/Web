var Rectangle = function (width, height) {
    this.width = width;
    this.height = height;
};

Rectangle.prototype.getArea = function () {
    return this.width * this.height;
};

var rect1 = new Rectangle(3, 4);
console.log(rect1); // Rectangle {width: 3, height: 4}





var Square = function (width) {
    Rectangle.call(this, width, width);
};

Square.prototype = new Rectangle();
var sq = new Square(5);
console.log(sq); // Square {width: 5, height: 5}




var rect2 = new sq.constructor(2, 3);
console.log(rect2); // Rectangle {width: 2, height: 3}
