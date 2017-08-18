(function () {
    'use strict';

    angular
        .module('app')
        .controller('SkillsCtrl', SkillsCtrl)

    SkillsCtrl.$inject = ['$scope', 'ResumeService']

    function SkillsCtrl($scope, ResumeService) {
        $scope.skills = ResumeService.getSkills()
    }
})()