angular.module('MathHammer')
.controller('TableCtrl', ['$scope','localStorageService',function($scope, localStorageService){

  $scope.bs=1;
  $scope.s=1;
  $scope.shots=1;
  $scope.hit=false;
  $scope.wound=false;
  $scope.armor_pen=false;
  $scope.melta=false;
  $scope.Math = Math;
  $scope.fnp_val = 0;
  localStorageService.bind($scope, 'bs',1);
  localStorageService.bind($scope, 's',1);
  localStorageService.bind($scope, 'shots',1);
  localStorageService.bind($scope, 'fnp_val',0);


  $scope.saves = {
    ' 2+':1/6,
    ' 3+':2/6,
    ' 4+':3/6,
    ' 5+':4/6,
    ' 6+':5/6,
    '-':6/6
  };

  $scope.bs_array = [1/6, 2/6, 3/6, 4/6, 5/6, 5/6+(1/6*1/6), 5/6+(1/6*2/6), 5/6+(1/6*3/6), 5/6+(1/6*4/6), 5/6+(1/6*5/6)];
  $scope.ST = [
        [3/6, 2/6, 1/6, 1/6, 0, 0, 0, 0, 0, 0],
        [4/6, 3/6, 2/6, 1/6, 1/6, 0, 0, 0, 0, 0],
        [5/6, 4/6, 3/6, 2/6, 1/6, 1/6, 0, 0, 0, 0],
        [5/6, 5/6, 4/6, 3/6, 2/6, 1/6, 1/6, 0, 0, 0],
        [5/6, 5/6, 5/6, 4/6, 3/6, 2/6, 1/6, 1/6, 0, 0],
        [5/6, 5/6, 5/6, 5/6, 4/6, 3/6, 2/6, 1/6, 1/6, 0],
        [5/6, 5/6, 5/6, 5/6, 5/6, 4/6, 3/6, 2/6, 1/6, 1/6],
        [5/6, 5/6, 5/6, 5/6, 5/6, 5/6, 4/6, 3/6, 2/6, 1/6],
        [5/6, 5/6, 5/6, 5/6, 5/6, 5/6, 5/6, 4/6, 3/6, 2/6],
        [5/6, 5/6, 5/6, 5/6, 5/6, 5/6, 5/6, 5/6, 4/6, 3/6],
    ];
    $scope.melta_array = [1,1,1,.9722,.9166,.8333,.7222,.5833,.4166,.2777,.1666,.0833,.0277,0,0,0];

    $scope.toShoot = function(bs, hit){
      if(hit){
        return $scope.bs_array[bs-1] + (1-$scope.bs_array[bs-1])*$scope.bs_array[bs-1];
      }
      return $scope.bs_array[bs-1];
    }

    $scope.toWound = function(ST, wound){
      if(wound){
        return (ST + wound*((1-ST)*ST))
      }
      return ST;
    }

    $scope.armor = function (str, arm, rr, m){
      var toReturn = 0;
      if(!m){
        toReturn = (7-(arm-str))/6 + (rr*(1-((7-(arm-str))/6))*(7-(arm-str))/6)
      } else {
        toReturn = $scope.melta_array[(arm-str)] + (rr*(1-$scope.melta_array[(arm-str)])*$scope.melta_array[(arm-str)])
      }

      return Math.min(1,Math.max(0,toReturn));
    }

    $scope.fnp = function(s,t,fnp){
      if(s/2 >= t){
        return 1;
      }
      return ((6-fnp)/6);
    }
}]);
