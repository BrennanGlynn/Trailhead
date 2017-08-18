(function () {
    'use strict';

    angular
        .module('app')
        .directive('skills', Skills)

    Skills.$inject = []

    function Skills() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'resume/directives/skills/skills.tpl.html',
            controller: 'SkillsCtrl'
        }
    }
})()