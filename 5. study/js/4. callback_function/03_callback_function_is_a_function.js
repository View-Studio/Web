var obj = {
    vals: [1, 2, 3],
    logValues: function (v, i) {
        console.log(this, v, i);
    }
};


obj.logValues(1, 2); // {vals: [1, 2, 3], logValues: ƒ} 1 2

[4, 5, 6].forEach(obj.logValues); // Window {0: Window, window: Window, self: Window, document: document, name: "", location: Location, …} 4 0
// Window {0: Window, window: Window, self: Window, document: document, name: "", location: Location, …} 5 1
// Window {0: Window, window: Window, self: Window, document: document, name: "", location: Location, …} 6 2
