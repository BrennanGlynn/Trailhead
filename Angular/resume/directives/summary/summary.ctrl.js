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
            $scope.isEditing = false;
            $scope.edit = editSummary;
            $scope.save = saveSummary;

            function editSummary() {
                $scope.isEditing = true;
            }

            function saveSummary() {
                ResumeService.setSummary($scope.summary);
                $scope.isEditing = false;
            }
        }
    }
})();