var getInformation = function (baseUrl) {    // 서버에 요청할 주소의 기본 URL
  return function (path) {                   // path 값
    return  function (id) {                  // id 값
      return fetch(baseUrl + path + '/' + id);    // 실제 서버에 정보를 요청
    };
  };
};

// ES6
var getInformationES6 = baseUrl => path => id => fetch(baseUrl + path + '/' + id);


var imageUrl = 'http://imageAddress.com/';
var productUrl = 'http://productAddress.com/';

// 이미지 타입별 요청 함수 준비
var getImage = getInformation(imageUrl);        // http://imageAddress.com/
var getEmoticon = getImage('emoticon');        // http://imageAddress.com/emoticon
var geticon = getImage('icon');        // http://imageAddress.com/icon


// 제품 타입별 요청 함수 준비
var getProduct = getInformation(productUrl);        // http://productAddress.com/
var getFruit = getProduct('fruit');        // http://productAddress.com/fruit
var getVegetable = getProduct('vegetable');        // http://productAddress.com/vegetable


// 실제 요청
var emoticon1 = getEmoticon(100);        // http://imageAddress.com/emoticon/100
var emoticon2 = getEmoticon(102);        // http://imageAddress.com/emoticon/102
var icon1 = geticon(205);        // http://imageAddress.com/icon/205
var icon2 = geticon(234);        // http://imageAddress.com/icon/234

var fruit1 = getFruit(300);        // http://productAddress.com/fruit/300
var fruit2 = getFruit(400);        // http://productAddress.com/fruit/400
var vegetable1 = getVegetable(456);        // http://productAddress.com/vegetable/456
var vegetable2 = getVegetable(789);        // http://productAddress.com/vegetable/789
