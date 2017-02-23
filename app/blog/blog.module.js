(function() {
    function BlogListController($scope, $location, $stateParams, $state) {
        this.$scope = $scope;
        this.$location = $location;
        this.$state = $state;
        this.$stateParams = $stateParams;
    }
    BlogListController.$inject = ['$scope', '$location', '$stateParams', '$state'];


    function BlogDetailsController($scope, $location, $stateParams, $state) {
        this.$scope = $scope;
        this.$llocation = $location;
        this.$state = $state;
        this.$stateParams = $stateParams;
    }
    BlogDetailsController.$inject = ['$scope', '$location', '$stateParams', '$state'];


    // @ngInject
    function routesList($stateProvider) {
        $stateProvider.state("blog-list", {
            url: "/",
            templateUrl: "/dist/blog.list.html",
            controller: "BlogListController",
            controllerAs: "vm"
        });
    }
    routesList.$inject = ['$stateProvider'];


    // @ngInject
    function routesDetails($stateProvider) {
        $stateProvider.state("blog-details", {
            url: "/:id",
            templateUrl: "/dist/blog.details.html",
            controller: "BlogDetailsController",
            controllerAs: "vm"
        });
    }
    routesDetails.$inject = ['$stateProvider'];


    angular.module("blog", [])
        .controller("BlogListController", BlogListController)
        .controller("BlogDetailsController", BlogDetailsController)
        .config(routesList)
        .config(routesDetails);
})();