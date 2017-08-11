(function () {
    'use strict'

    angular
        .module('app')
        .config(config)

    config.$inject = ['$stateProvider']

    function config($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'authentication/login.tpl.html',
                controller: 'LoginCtrl'
            })
            .state('register', {
                url: '/register',
                templateUrl: 'authentication/register.tpl.html',
                controller: 'RegisterCtrl'
            })
    }
})()