var app = angular.module('myapp', []);

app.directive('atDir', function () {

    var res = {
        scope: {
            ngModel: '='
        },
        link: function (scope, elem, attrs, ctrls) {

            console.log(scope.ngModel);

        }
    };

    return res;

});

app.controller('mainCtrl', function ($scope) {

    var vm = this;

    vm.data = {
        name: 'Tester',
        id: 1
    };

    var categories = [];
    var dropData = [];
    var dropData2 = [];

    for (var i = 1; i < 3; i++) {
        categories.push({ id: i, title: 'Categ' + i });
    }
    for (var i = 1; i < 10; i++) {
        dropData.push({ key: i, value: 'Value' + i, desc: 'Desc' + i, parentId: (i % 3) + 1 });
    }
    for (var i = 1; i < 20; i++) {
        dropData2.push({ key: i, value: 'Level2 Value' + i, desc: 'Desc' + i, parentId: (i % 10) + 1 });
    }

    vm.dropData = dropData;
    vm.dropData2 = dropData2;
    vm.categories = categories;

    vm.optionSelected = function (modelData) {
        console.log(modelData);
    };

    vm.filterData = [{
        name: "Username",
        type: "text",
        label: 'User name'
    },
    {
        name: "Count",
        type: "number",
        label: 'The count'
    },
    {
        name: "todos",
        type: "select",
        label: 'Tasks',
        dataUrl: "js/todos.json"
    },
    {
        name: "Categ",
        type: "select",
        label: 'Category',
        data: [{ key: "1", value: "Categ1" }, { key: "2", value: "Categ2" }, { key: "3", value: "Categ3" }]
    }];


});