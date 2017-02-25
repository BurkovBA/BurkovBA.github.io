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

function run($rootScope, PostResource) {
    // $rootScope.$on("$stateChangeSuccess", function(event, currentState) {
    //     console.log("State change success");
    // });
    //
    // $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
    //     console.log('$stateChangeStart to '+toState.to+'- fired when the transition begins. toState,toParams : \n',toState, toParams);
    // });
    //
    // $rootScope.$on('$stateChangeError',function(event, toState, toParams, fromState, fromParams){
    //     console.log('$stateChangeError - fired when an error occurs during transition.');
    //     console.log(arguments);
    // });
    //
    // $rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
    //     console.log('$stateChangeSuccess to '+toState.name+'- fired once the state transition is complete.');
    // });
    //
    // $rootScope.$on('$viewContentLoaded',function(event){
    //     console.log('$viewContentLoaded - fired after dom rendered',event);
    // });
    //
    // $rootScope.$on('$stateNotFound',function(event, unfoundState, fromState, fromParams){
    //     console.log('$stateNotFound '+unfoundState.to+'  - fired when a state cannot be found by its name.');
    //     console.log(unfoundState, fromState, fromParams);
    // });
}
run.$inject = ["$rootScope", "PostResource"];


angular.module("app", [
    // third-party modules
    "ngAnimate",
    "ngMessages",
    "ngResource",
    "ngSanitize",
    "ngCookies",
    "validation.match",
    "ui.router",
    "ui.bootstrap",

    // components
    "header",
    "navigation",

    // routes
    "blog"
]).config(config).run(run);

})();