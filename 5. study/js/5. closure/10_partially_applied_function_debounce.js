var debounce = function (eventName, func, wait) {
  var timeoutId = null;
  return function (event) {
    var self = this;
    console.log(eventName, 'event 발생');
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func.bind(self, event), wait);
  };
};



var moveHandler = function (e) {
  console.log('move event 처리');
}

var wheelHandler = function (e) {
  console.log('wheel event 처리');
}


document.body.addEventListener('mousemove', debounce('move', moveHandler, 500));

document.body.addEventListener('mousewheel', debounce('wheel', wheelHandler, 700));
