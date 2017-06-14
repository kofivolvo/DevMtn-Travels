angular.module('devmtnTravel').controller('packagesCtrl', function($scope, $stateParams, mainSrv){

$scope.test = "ayyyy its lit B"

$scope.travelInfo = mainSrv.packageInfo.filter(function(package){
  if($stateParams.country == package.country){
    return true;
  } else {
    return false;
  }
});

console.log($stateParams);


})
