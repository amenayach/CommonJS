var app = angular.module('myapp');

function nwCascadeSelectController($scope) {

    var ctrl = this;

    ctrl.getData = function () {
        if (!ctrl.nwOptions) {
            return [];
        }
        if (!ctrl.nwParentKey) {
            return ctrl.nwOptions;
        }

        if (ctrl.nwOptions[0].value.indexOf('Level') === 0) {
            var aa = 0;
        }
        return ctrl.nwOptions ? ctrl.nwOptions.filter(function (record) {
            return ctrl.nwParentModel && record[ctrl.nwParentKey] && record[ctrl.nwParentKey].toString() === ctrl.nwParentModel.toString();
        }) : [];
    };

    ctrl.onSelected = function () {
        if (ctrl.nwChange) {
            ctrl.nwChange({ data: ctrl.nwModel });
        }
    };

}

app.component('nwCascadeSelect', {
    templateUrl: 'js/cascade-select.component/cascade-select.component.html',
    controller: nwCascadeSelectController,
    bindings: {
        nwOptions: '<',
        nwModel: '=',
        nwKey: '<',
        nwValue: '<',
        nwName: '<',
        nwEmptyOption: '<',
        nwParentModel: '<',
        nwParentKey: '<',
        nwChange: '&'
    }
});