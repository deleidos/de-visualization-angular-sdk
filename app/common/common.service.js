(function () {
    "use strict";

    angular.module('myApp.common')
        .factory('myApp.common.commonService', commonService);

    commonService.$inject = [];
    function commonService() {
        return {
            getHomeText: getHomeText
        };

        function getHomeText() {
            return 'Welcome!';
        }
    }
})();
