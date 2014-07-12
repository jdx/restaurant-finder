var app = angular.module('app', [])
app.controller('RestaurantCtrl', function ($scope, $http) {
  $scope.addresses = function () {
    return $scope.restaurants.map(function (restaurant) {
      return restaurant.address
    }).join('|')
  }
  $http.get('/restaurants').success(function (restaurants) {
    $scope.restaurants = restaurants
  })
  $scope.addRestaurant = function () {
    $http.post('/restaurants', $scope.restaurant).success(function (restaurant) {
      $scope.restaurants.push(restaurant)
      $scope.restaurant = {}
    })
  }
})
