var ES5 = function (name) {
    this.name = name;
};

ES5.staticMethod = function () {
    return this.name + ' staticMethod';
};

ES5.prototype.method = function () {
    return this.name + ' method';
}





var ES6 = class {
    constructor(name) {
        this.name = name;
    }
    static staticMethod() {
        return this.name + ' staticMethod';
    }
    method() {
        return this.name + ' method';
    }
};
