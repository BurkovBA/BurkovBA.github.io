(function () {

//@ngInject
function navigation() {
    return {
        restrict: "E",
        templateUrl: "/dist/navigation.html",
        link: ["scope", "element", function(scope, element) {}]
    }
}
navigation.$inject = [];


/**
 * sideNavigation - Directive for run metisMenu on sidebar navigation
 */
//@ngInject
function sideNavigation($timeout) {
    return {
        restrict: "A",
        link: ["scope", "element", function(scope, element) {
            // Call the metsiMenu plugin and plug it to sidebar navigation
            element.metisMenu();

            // Collapse menu in mobile mode after click on element
            var menuElement = $('#side-menu a:not([href$="\\#"])');
            menuElement.click(function(){

                if ($(window).width() < 769) {
                    $("body").toggleClass("show-sidebar");
                }
            });
        }]
    };
}
sideNavigation.$inject = ["$timeout"];


/**
 * minimalizaSidebar - Directive for minimalize sidebar
 */
//@ngInject
function minimalizaMenu($rootScope) {
    return {
        restrict: "EA",
        template: '<div class="header-link hide-menu" ng-click="minimalize()"><i class="fa fa-bars"></i></div>',
        controller: ["$scope", "$element", function ($scope, $element) {

            $scope.minimalize = function () {

                // Originally it was:
                /*
                if ($(window).width() < 769) {
                    $("body").toggleClass("show-sidebar");
                } else {
                    $("body").toggleClass("hide-sidebar");
                }
                */

                // But I left just unconditional hide-sidebar
                $("body").toggleClass("hide-sidebar");
            };
        }]
    };
}
minimalizaMenu.$inject = ["$rootScope"];


angular.module("navigation", [])
    .directive("sideNavigation", sideNavigation)
    .directive("minimalizaMenu", minimalizaMenu)
    .directive("navigation", navigation);

})();
