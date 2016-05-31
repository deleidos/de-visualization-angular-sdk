(function () {
    "use strict";

    angular.module('myApp', [
            /* add any defined modules here */
            'ngRoute',
            'myApp.home',
            'myApp.common'
        ])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.otherwise({redirectTo: '/home'});
        }]);
})();
