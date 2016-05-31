describe('HomeController', function () {
    var testScope;

    beforeEach(function () {
        module('myApp.home');
        inject(function ($controller, $rootScope) {
            testScope = $rootScope.$new();
            $controller('myApp.home.HomeController', {
                $scope: testScope
            });
        });
    });

    it('should successfully initiate data', function () {
        expect(testScope.titleText).toBe('Welcome!');
    });
});
