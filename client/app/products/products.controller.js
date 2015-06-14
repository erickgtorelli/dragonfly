'use strict';

angular.module('dragonflyApp')
  .controller('ProductsCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];
    var productsMeta = [];
    var array = [];
    var current;
    var productsMeta1 = [];
    var array1 = [];
    var current1=0;
    $http.get('http://productapipqa-vip.bcinfra.net:9000/v1/categories/bcsCat7000003/products?site=bcs&outlet=false&offset=0&limit=10&preview=false&debug=false')
      .success(function(data) {

        array = data.products;
        productsMeta = chunk(array,4);
        $scope.products = productsMeta[0];
        current=0;
      });
    $http.get('http://productapipqa-vip.bcinfra.net:9000/v1/categories/bcsCat110004/products?site=bcs&outlet=false&offset=0&limit=10&preview=false&debug=false')
      .success(function(data) {

        array1 = data.products;
        productsMeta1 = chunk(array1,4);
        $scope.products1 = productsMeta1[0];
        current1=0;
      });

    $scope.nextProduct = function() {
      if(current < productsMeta.length - 1) {
        current = current + 1;
        $scope.products = productsMeta[current];

      }
      else{
        current = 0;
        $scope.products = productsMeta[current];
      }
    };
    $scope.nextProduct1 = function(){
      if(current1 < productsMeta1.length - 1) {
        current1 = current1 + 1;
        $scope.products1 = productsMeta1[current1];

      }
      else{
        current1 = 0;
        $scope.products1 = productsMeta1[current1];
      }
    };
    var chunk = function(arr, size) {
      var newArr = [];
      for (var i=0; i<arr.length; i+=size) {
        newArr.push(arr.slice(i, i+size));
      }
      return newArr;
    };

    console.log(array);
  });

