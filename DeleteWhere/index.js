function removeWhere(items, predicate) {
    if (items) {
        return items.filter(predicate);
    }
    return [];
}

//test
var items = [{ id: 1 }, { id: 2 }, { id: 1 }]
console.log(removeWhere(items, function (rec) {

    return rec.id != 2;

}))