var extendClass2 = (function () {
    var Bridge = function () {};

    return function (SuperClass, SubClass, subMethod) {
        Bridge.prototype = SuperClass.prototype;
        SubClass.prototype = new Bridge();
        SubClass.prototype.constructor = SubClass;

        if (subMethod) {
            for (var method in subMethod) {
                SubClass.prototype[method] = subMethod[method]
            }
        }

        Object.freeze(SubClass.prototype);
        return SubClass;
    };

})();
