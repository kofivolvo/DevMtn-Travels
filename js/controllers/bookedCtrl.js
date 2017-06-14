angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $stateParams){

  function init() {
    for (var i = 0; i < mainSrv.travelInfo.length; i++) {
      if ($stateParams.id == mainSrv.travelInfo[i].id) {
        $scope.location = mainSrv.travelInfo[i];
      }
    }
  }
  init();



})
