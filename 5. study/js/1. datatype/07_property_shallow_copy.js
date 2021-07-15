var copyObject = function (target) {
    var result = {};
    for (var prop in target) {
        result[prop] = target[prop];
    }
    return result;
};

var user = {
    name: 'kyungmin',
    gender: 'male'
};

var user2 = copyObject(user);
user2.name = 'Kim';

if (user !== user2) {
    console.log('유저 정보가 변경되었습니다.'); // 유저 정보가 변경되었습니다.
}
console.log(user.name, user2.name); // kyungmin Kim
console.log(user === user2); //false
