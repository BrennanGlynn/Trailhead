(function () {
  'use strict'

  angular
  .module('app')
  .controller('ResumeCtrl', ResumeCtrl)

  ResumeCtrl.$inject = ['$scope', 'ResumeService']

  function ResumeCtrl($scope, ResumeService) {
    $scope.summary = ResumeService.getSummary()
    // $scope.skills = ResumeService.getSkills()
    $scope.experience = ResumeService.getExperience()
    $scope.education = ResumeService.getEducation()
  }
})()