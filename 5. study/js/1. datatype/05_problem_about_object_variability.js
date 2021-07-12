var user = {
  name: 'kyungmin',
  gender: 'male'
}

var changeName = function (usr, newName) {
  var newUser = usr;
  newUser.name = newName;
  return newUser;
}

var user2 = changeName(user, 'Kim');

if (user !== user2) {
  console.log('유저 정보가 변경되었습니다.');
}
console.log(user.name, user2.name);    // Kim Kim
console.log(user === user2);    // true
