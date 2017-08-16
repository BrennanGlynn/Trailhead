(function () {
    'use strict'

    angular
        .module('app')
        .config(config)

    config.$inject = ['$stateProvider']

    function config($stateProvider) {
        $stateProvider
            .state('resume', {
                url: '/resume',
                templateUrl: 'resume/resume.tpl.html',
                controller: 'ResumeCtrl'
            })
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