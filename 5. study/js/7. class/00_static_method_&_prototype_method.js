var Rectangle = function (width, height) {
    this.width = width;
    this.height = height;
};



Rectangle.prototype.getArea = function () {
    return this.width * this.height;
};



Rectangle.isRectangle = function (instance) {
    return instance instanceof Rectangle && instance.width > 0 && instance.height > 0;
}



var rect1 = new Rectangle(3, 4)
console.log(rect1.getArea()); // 12    // prototype method
console.log(rect1.isRectangle(rect1)); // Uncaught TypeError: rect1.isRectangle is not a function    // undefined를 실행하라는 명령과 같다
console.log(Rectangle.isRectangle(rect1)); // true    // static method
