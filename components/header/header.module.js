(function() {
    "use strict";

    // @ngInject
    function header() {
        return {
            restrict: "E",
            scope: true,
            templateUrl: "/dist/header.html",
            controller: ['$scope', function($scope) {

            }]
        }
    }
    header.$inject = [];

    angular.module("header", [])
        .directive("header", header);

})();