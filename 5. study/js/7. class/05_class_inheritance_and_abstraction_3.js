var extendClass3 = function (SuperClass, SubClass, subMethod) {
    SubClass.prototype = Object.create(SuperClass.prototype)
    SubClass.prototype.constructor = SubClass;

    if (subMethod) {
        for (var method in subMethod) {
            SubClass.prototype[method] = subMethod[method]
        }
    }

    Object.freeze(SubClass.prototype);
    return SubClass;
};
