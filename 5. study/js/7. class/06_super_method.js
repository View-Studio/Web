var extendClass3 = function (SuperClass, SubClass, subMethod) {
    SubClass.prototype = Object.create(SuperClass.prototype)
    SubClass.prototype.constructor = SubClass;

    SubClass.prototype.super = function (propName) {
        var self = this;
        if (!propName) return function () {
            SuperClass.apply(self, arguments);
        };
        var prop = SuperClass.prototype[propName];
        if (typeof prop !== 'function') return prop;
        return function () {
            return prop.apply(self, arguments);
        };
    };

    if (subMethod) {
        for (var method in subMethod) {
            SubClass.prototype[method] = subMethod[method]
        }
    }

    Object.freeze(SubClass.prototype);
    return SubClass;
};
