'use strict';

angular.module('dragonflyApp')
  .controller('TravelsCtrl', function ($scope, $http) {
    $scope.awesomeTravels = [{
      name: "Cerro Chirripó",
      img: "app/img/chirripo.jpg",
      activities:["app/img/trail.jpg","app/img/hike.jpg","app/img/bike.jpg"]
    },{
      name:"Arenal",
      img: "app/img/arenal.jpg",
      activities:["app/img/hike.jpg","app/img/bike.jpg"]
    }];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.toActivities = function($index) {

    }
        $scope.custom = true;
        $scope.toggleCustom = function($index) {
          $scope.custom = $scope.custom === false ? true: false;
        };

  });
