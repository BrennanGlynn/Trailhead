(function() {
    'use strict';

    angular
        .module('app')
        .controller('SummaryCtrl', SummaryCtrl);

    SummaryCtrl.$inject = ['$scope', 'ResumeService'];

    function SummaryCtrl($scope, ResumeService) {

        $scope.summary = ResumeService.getSummary();

        activate();

        function activate() {
            $scope.summary.isEditing = false;
            $scope.summary.edit = editSummary;
            $scope.summary.save = saveSummary;
            $scope.shouldEnumerate = shouldEnumerate;

            function editSummary() {
                $scope.summary.isEditing = true;
            }

            function saveSummary() {
                ResumeService.setSummary($scope.summary);
                $scope.summary.isEditing = false;
            }

            function shouldEnumerate(key) {
              let dontEnum = ['edit', 'save', 'isEditing']
              return dontEnum.indexOf(key) === -1
            }
        }
    }
})();