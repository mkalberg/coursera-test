(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];

function LunchController($scope) {

  $scope.calcNumItems = function () {
    if ($scope.foodList === undefined) {
      $scope.themessage = "Please enter data first";
    } else if ($scope.foodList === '') {
      $scope.themessage = "Please enter data first";
    } else {
      var numItems = $scope.foodList.split(",");
      if (numItems.length <= 3) {
        $scope.themessage = "Enjoy!"
      } else {
        $scope.themessage = "Too Much!"
      }
    }
  };
}
})();
