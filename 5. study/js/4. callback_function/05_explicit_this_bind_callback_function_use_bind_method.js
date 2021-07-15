var obj = {
    name: 'obj',
    func: function () {
        console.log(this.name);
    }
};
setTimeout(obj.func.bind(obj), 1000); // obj


var obj1 = {
    name: 'obj1'
};
setTimeout(obj.func.bind(obj1), 1500); // obj1
