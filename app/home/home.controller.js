(function () {
    "use strict";

    angular.module('myApp.home')
        .controller('myApp.home.HomeController', HomeController);

    HomeController.$inject = ['$scope', 'myApp.common.commonService'];
    function HomeController($scope, commonService) {
        $scope.titleText = commonService.getHomeText();
    }
})();
