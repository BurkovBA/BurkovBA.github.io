(function() {
    var PostResourceFactory = function($resource) {
        return $resource(
            "/api/blog/:id/",
            { id: "@id" },
            { update:
                { method: "put", isArray: false }
            }
        );
    };
    PostResourceFactory.$inject = ['$resource'];


    var BlogListController = function($scope, $location, $stateParams, $state, posts) {
        this.$scope = $scope;
        this.$location = $location;
        this.$state = $state;
        this.$stateParams = $stateParams;

        this.$scope.posts = posts;
    };
    BlogListController.$inject = ['$scope', '$location', '$stateParams', '$state', 'posts'];


    var BlogDetailsController = function($scope, $location, $stateParams, $state) {
        this.$scope = $scope;
        this.$location = $location;
        this.$state = $state;
        this.$stateParams = $stateParams;
    };
    BlogDetailsController.$inject = ['$scope', '$location', '$stateParams', '$state'];


    var routesList = function($stateProvider) {
        $stateProvider.state("blog-list", {
            url: "/",
            templateUrl: "/dist/blog.list.html",
            controller: "BlogListController",
            resolve: {
                posts: ["PostResource", function (PostResource) {
                    return PostResource.query().$promise;
                }]
            }
        });
    };
    routesList.$inject = ['$stateProvider'];


    var routesDetails = function($stateProvider) {
        $stateProvider.state("blog-details", {
            url: "/:id",
            templateUrl: "/dist/blog.details.html",
            controller: "BlogDetailsController"
        });
    };
    routesDetails.$inject = ['$stateProvider'];


    angular.module("blog", [])
        .factory("PostResource", PostResourceFactory)
        .controller("BlogListController", BlogListController)
        .controller("BlogDetailsController", BlogDetailsController)
        .config(routesList)
        .config(routesDetails);
})();