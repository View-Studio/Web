var Person = function (name) {
    this._name = name;
};

Person.prototype.getName = function () {
    return this._name;
};

var suzi = new Person('Suzi');




suzi.__proto__.getName(); // undefined


Person.prototype === suzi.__proto__ // true


suzi.__proto__._name = 'SUZI__proto__';
suzi.__proto__.getName(); // SUZI__proto__


var iu = new Person('Jieun', 28);
iu.getName(); // Jieun

var v = new Person('Teahyung', 25);
v.getName(); // Teahyung


/*  iu.__proto__.getName  ->  iu.getName  */
