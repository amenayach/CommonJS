// ex: range(3) --> [0, 1, 2]
function range(itemCount) {
	return [...Array(itemCount).keys()];
}

// ex: rangeMap(3, x => ({id: x})) --> [{"id":0},{"id":1},{"id":2}]
function rangeMap(itemCount, mapCallback) {
	return [...Array(itemCount).keys()].map(x => mapCallback(x));
}

// ex var arr = [{name: 'n1', age: 25}, {name: 'n2', age: 18}]; arr.filterMap(m => m.age > 20, m => m.age) --> [25];
if (!Array.prototype.filterMap) {
	Array.prototype.filterMap = function (predicate, selector) {
		if (this == null) throw new TypeError('this is null or not defined');
		if (/function/i.test(typeof predicate) !== true) throw new TypeError(predicate + ' is not a function');
		if (/function/i.test(typeof selector) !== true) throw new TypeError(selector + ' is not a function');

		var obj, res, k, len, kval, mapval, c;

		obj = Object(this);
		len = obj.length >>> 0;

		res = Array(len);
		k = c = 0;

		while (k < len) {
			if (k in obj) {
				kval = obj[k];
				if (predicate(kval, k, obj) === true) {
					mapval = selector(kval, k, obj);
					res[c] = mapval;
					c++;
				}
			}
			k++;
		}

		res.length = c;

		return res
	};
}