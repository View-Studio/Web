/* Browser */
console.log(this);    // Window {window: Window, self: Window, document: document, name: "", location: Location, …}
console.log(window);    // Window {window: Window, self: Window, document: document, name: "", location: Location, …}
console.log(this === window);    //true


/* Node.js */
console.log(this);    // { process: { title: 'node', version: 'v10.13.0', …}}
console.log(global);    // { process: { title: 'node', version: 'v10.13.0', …}}
console.log(this === global);    //true
