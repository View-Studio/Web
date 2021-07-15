var copyObject = function (target) {
    var result = {};
    for (var prop in target) {
        result[prop] = target[prop];
    }
    return result;
};

var user = {
    name: 'kyungmin',
    urls: {
        portfolio: 'https://github.com/code-MIM',
        blog: 'https://blog.com',
        facebook: 'https://facebook.com/code-MIM'
    }
};
var user2 = copyObject(user);

user2.name = 'Kim';
console.log(user.name === user2.name); // false

user.urls.blog = 'https://blog.com/code-MIM';
console.log(user.urls.blog === user2.urls.blog); // true

user2.urls.facebook = '';
console.log(user.urls.facebook === user2.urls.facebook); // true
