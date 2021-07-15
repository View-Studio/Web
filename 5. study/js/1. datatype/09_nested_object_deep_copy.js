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
user2.urls = copyObject(user.urls);

user.urls.portfolio = 'https://portfolio.com';
console.log(user.urls.portfolio === user2.urls.portfolio); // false

user2.urls.blog = {};
console.log(user.urls.blog === user2.urls.blog); // false
