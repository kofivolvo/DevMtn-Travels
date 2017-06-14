angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainSrv){

 $scope.test = "ayyy it lit"


$scope.travelInfo = mainSrv.travelInfo;

})
