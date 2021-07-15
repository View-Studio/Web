var user = {
    name: 'kyungmin',
    gender: 'male'
};

var changeName = function (usr, newName) {
    return {
        name: newName,
        gender: usr.gender
    };
};

var user2 = changeName(user, 'Kim');

if (user !== user2) {
    console.log('유저 정보가 변경되었습니다.'); // 유저 정보가 변경되었습니다.
}
console.log(user.name, user2.name); // kyungmin Kim
console.log(user === user2); //false
