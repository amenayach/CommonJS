// ex: range(3) --> [0, 1, 2]
function range(itemCount) {
	return [...Array(itemCount).keys()];
}

// ex: rangeMap(3, x => ({id: x})) --> [{"id":0},{"id":1},{"id":2}]
function rangeMap(itemCount, mapCallback) {
	return [...Array(itemCount).keys()].map(x => mapCallback(x));
}

/**
 * Benchmark:
 * var data = [ array with 10 000 000 item ]
 * 
 * console.time('filter');
 * data
 *      .filter(m => m.age > 20)
 *      .map(m => {return {name: m.first_name + ' ' + m.last_name};});
 * console.timeEnd('filter');
 * 
 * console.time('filterMap');
 * data
 *      .filterMap(m => m.age > 20,
 *                 m => {return {name: m.first_name + ' ' + m.last_name};}
 *       );
 * console.timeEnd('filterMap');
 * 
 * Result:
 * filter: 4102ms
 * filterMap: 2554ms
 * 
 * use example:
 * var arr = [{name: 'n1', age: 25}, {name: 'n2', age: 18}, {name: 'n3', age: 33}]; 
 * arr.filterMap(m => m.age > 20, m => m.age) --> [25, 33];
 */
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

/**
 * var arr = [{id: 1, name: 'bilal'}, {id: 2, name: 'amen'}];
 * var arr2 = [{id: 2, name: 'amen'}, {id: 4, name: 'bob'}, {id: 1, name: 'bilal'}];
 * 
 * arr.union(arr2);
 * returns
 * [{id: 1, name: 'bilal'}, {id: 2, name: 'amen'}, {id: 4, name: 'bob'}]
 */
if (!Array.prototype.union) {
    Array.prototype.union = function (arr2, comparer) {
        if (arr2 == null || arr2.length == 0) {
            return this;
        }

        if (comparer == null) {
            comparer = (val1, val2) => val1 == val2;
        }

        const allitems = this.concat(arr2);

        const result = [];

        allitems.forEach(item => {
            var exist = result.find(m => comparer(m, item));
            if (!exist) {
                result.push(item);
            }
        });

        return result;
    };
}
