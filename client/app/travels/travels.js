'use strict';

angular.module('dragonflyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('travels', {
        url: '/travels',
        templateUrl: 'app/travels/travels.html',
        controller: 'TravelsCtrl'
      });
  });
