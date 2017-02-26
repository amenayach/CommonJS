var range = function(start, end, step) {
    var range = [];
    var typeofStart = typeof start;
    var typeofEnd = typeof end;

    if (step === 0) {
        throw TypeError("Step cannot be zero.");
    }

    if (typeofStart == "undefined" && typeofEnd == "undefined") {
        throw TypeError("Must pass start argument at least.");
    } else if (typeofEnd !== "undefined" && typeofStart != typeofEnd) {
        throw TypeError("Start and end arguments must be of same type.");
    }

    /*
        if start is the only pass parameter, the function will return [0...start]
        ex: range(3) -> [ 0, 1, 2 ]
    */
    if(typeofStart !== "undefined" && typeof end === "undefined") {
        end = start - 1;
        start = 0;
    }

    typeof step === "undefined" && (step = 1);

    if (end < start) {
        step = -step;
    }

    if (typeofStart == "number") {

        while (step > 0 ? end >= start : end <= start) {
            range.push(start);
            start += step;
        }

    } else if (typeofStart == "string") {

        if (start.length != 1 || end.length != 1) {
            throw TypeError("Only strings with one character are supported.");
        }

        start = start.charCodeAt(0);
        end = end.charCodeAt(0);

        while (step > 0 ? end >= start : end <= start) {
            range.push(String.fromCharCode(start));
            start += step;
        }

    } else {
        throw TypeError("Only string and number types are supported");
    }

    return range;

}

//test
console.log(range(3, 7))
console.log(range(0, 7))
console.log(range(7, 7))
console.log(range(3)) // [ 0, 1, 2 ]