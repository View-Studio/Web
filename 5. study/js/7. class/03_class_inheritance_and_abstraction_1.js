var extendClass1 = function (SuperClass, SubClass, subMethod) {
    SubClass.prototype = new SuperClass();

    for (var prop in SubClass.prototype) {
        if (SubClass.prototype.hasOwnProperty(prop)) {
            delete SubClass.prototype[prop];
        }
    }

    SubClass.prototype.constructor = SubClass;

    if (subMethod) {
        for (var method in subMethod) {
            SubClass.prototype[method] = subMethod[method]
        }
    }

    Object.freeze(SubClass.prototype);
    return SubClass;
};
