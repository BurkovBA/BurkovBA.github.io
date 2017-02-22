(function() {

function config($urlRouterProvider, $locationProvider, $stateProvider, $httpProvider, $resourceProvider) {
    // In production router may use html5 history API instead of hash routing:
    $locationProvider.html5Mode(true);

    // Make $http ajax requests send django csrf token
    $httpProvider.defaults.xsrfCookieName = "csrftoken";
    $httpProvider.defaults.xsrfHeaderName = "X-CSRFToken";

    // Django backend expects trailing slashes in URLs,
    // e.g. '/api/user/', not '/api/user'. If django sees request to
    // '/api/user', it would redirect request to '/api/user/', unless that's
    // a POST request - POST will just fail.
    // For instructions on re-configuration of django backend see:
    // http://masnun.com/2013/09/18/django-rest-framework-angularjs-resource-trailing-slash-problem.html
    $resourceProvider.defaults.stripTrailingSlashes = false;

    // Just a test state
    $stateProvider.state("test", {
        url: "/test",
        template: "This is a test"
    });
}
config.$inject = ["$urlRouterProvider", "$locationProvider", "$stateProvider", "$httpProvider", "$resourceProvider"];

function run($rootScope) {
    // Set special class on landing page <body> - it has some modifications
    // in css and those require '.landing-page' - see index.html and sass
    // in assets/styles/_landing.scss.
    $rootScope.$on("$stateChangeSuccess", function(event, currentState) {
        if (currentState.name === "about") {
            $rootScope.specialClass = "landing-page";
        }
        else {
            $rootScope.specialClass = "";
        }
    });
}
run.$inject = ["$rootScope"];


angular.module("app", [
    "ngAnimate",
    "ngMessages",
    "ngResource",
    "ngSanitize",
    "ngCookies",
    "validation.match",
    "ui.router",
    "ui.bootstrap",

    "header"
]).config(config).run(run);

})();