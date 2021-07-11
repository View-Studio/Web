setTimeout(function () {
  console.log(this);     // Window {0: global, window: Window, self: Window, document: document, name: "", location: Location, …}
}, 300);




var arr = [1, 2, 3, 4, 5];

arr.forEach(function (x) {
  console.log(this, x);     // Window {0: global, window: Window, self: Window, document: document, name: "", location: Location, …}   1
});                         // Window {0: global, window: Window, self: Window, document: document, name: "", location: Location, …}   2
                            // Window {0: global, window: Window, self: Window, document: document, name: "", location: Location, …}   3
                            // Window {0: global, window: Window, self: Window, document: document, name: "", location: Location, …}   4
                            // Window {0: global, window: Window, self: Window, document: document, name: "", location: Location, …}   5





document.body.innerHTML += '<button id = "a">클릭</button>';

var elem = document.body.querySelector('#a');

elem.addEventListener('click', function (e) {
  console.log(this, e);     // <button id = "a">클릭</button>    MouseEvent {isTrusted: true, screenX: 26, screenY: 1024, clientX: 26, clientY: 921, …}
})
