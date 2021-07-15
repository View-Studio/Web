var obj = {
    name: 'obj',
    func: function () {
        var self = this;
        return function () {
            console.log(self.name);
        };
    }
};

var callback = obj.func();
setTimeout(callback, 1000); // obj





var obj1 = {
    name: 'obj1',
    func: function () {
        console.log(obj1.name);
    }
};

setTimeout(obj1.func, 1000); // obj1







var obj2 = {
    name: 'obj2',
    func: obj.func
};

var callback2 = obj2.func();
setTimeout(callback2, 1500); // obj2







var obj3 = {
    name: 'obj3'
};
var callback3 = obj.func.call(obj3);
setTimeout(callback3, 2000); // obj3
