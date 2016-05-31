(function () {
    "use strict";

    angular.module('myApp.home')
        .config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];
    function routeConfig($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'home/home.html',
                controller: 'myApp.home.HomeController'
            });
    }
})();
