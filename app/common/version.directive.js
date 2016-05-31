(function () {
    "use strict";

    angular.module('myApp.common')
        .directive('appVersion', appVersion);

    appVersion.$inject = ['version'];
    function appVersion(version) {
        return {
            restrict: 'EA',
            link: function (scope, elem) {
                elem.text(version);
            }
        };
    }
})();
