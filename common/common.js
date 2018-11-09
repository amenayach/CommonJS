// ex: range(3) --> [0, 1, 2]
function range(itemCount) {
	return [...Array(itemCount).keys()];
}

// ex: rangeMap(3, x => ({id: x})) --> [{"id":0},{"id":1},{"id":2}]
function rangeMap(itemCount, mapCallback) {
	return [...Array(itemCount).keys()].map(x => mapCallback(x));
}