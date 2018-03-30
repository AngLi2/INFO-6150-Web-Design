function addNames() {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    for (var i = 0; i < names.length; i++) {
        console.log("The " + (i + 1) + " name " + "is " + names[i]);
    }
}
addNames("Jack", "Bob");
addNames("Wang", "Lee", "Chen", "Zhao", "Liu");
