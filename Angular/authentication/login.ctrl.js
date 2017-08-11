(function () {
    'use strict'

    angular
        .module('app')
        .controller('LoginCtrl', LoginCtrl)

    LoginCtrl.$inject = ['$scope']

    function LoginCtrl($scope) {
        $scope.submit = submit

        ////////////////////////

        function submit() {
            console.log($scope.email, $scope.password)
        }
    }
})()