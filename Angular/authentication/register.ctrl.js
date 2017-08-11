(function () {
    'use strict'

    angular
        .module('app')
        .controller('RegisterCtrl', RegisterCtrl)

    RegisterCtrl.$inject = ['$scope']

    function RegisterCtrl($scope) {

        $scope.submit = submit

        function submit() {
            console.log($scope.email, $scope.password)
        }
    }
})()