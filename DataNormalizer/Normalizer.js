function normalize(data, keyPath, valueEnPath, valueArPath) {
    if (data) {
        return data.map(function (item) {
            return {
                key: eval('item.' + keyPath),
                valueEn: eval('item.' + valueEnPath),
                valueAr: eval('item.' + valueArPath)
            }
        })
    }
}

//test
console.log(
    normalize([
        {
            id: 1,
            InspectioType: {
                name: {
                    en: 'en1',
                    ar: 'ar1'
                }
            }
        }
    ], 'id', 'InspectioType.name.en', 'InspectioType.name.ar')
)