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

    var BrokenPostResourceFactory = function($resource) {
        return $resource(
            "/api/:id/",
            { id: "@id" },
            { update:
                { method: "put", isArray: false }
            }
        );
    };
    BrokenPostResourceFactory.$inject = ['$resource'];

    var BlogListController = function($scope, $location, $stateParams, $state, posts) {
        this.$scope = $scope;
        this.$location = $location;
        this.$state = $state;
        this.$stateParams = $stateParams;

        this.$scope.posts = posts;
    };
    BlogListController.$inject = ['$scope', '$location', '$stateParams', '$state', 'posts'];


    var BlogDetailsController = function($scope, $location, $stateParams, $state, post) {
        this.$scope = $scope;
        this.$location = $location;
        this.$state = $state;
        this.$stateParams = $stateParams;

        this.$scope.post = post;
    };
    BlogDetailsController.$inject = ['$scope', '$location', '$stateParams', '$state', 'post'];


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
            controller: "BlogDetailsController",
            resolve: {
                post: ["BrokenPostResource", "$stateParams", function(BrokenPostResource, $stateParams) {
                    return BrokenPostResource.get({id: $stateParams.id}).$promise;
                }]
            }
        });
    };
    routesDetails.$inject = ['$stateProvider'];


    angular.module("blog", [])
        .factory("PostResource", PostResourceFactory)
        .factory("BrokenPostResource", BrokenPostResourceFactory)
        .controller("BlogListController", BlogListController)
        .controller("BlogDetailsController", BlogDetailsController)
        .config(routesList)
        .config(routesDetails);
})();