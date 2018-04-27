var app = angular.module('FoodApp', []);

app.controller('FoodController', [
  '$http',
  function($http) {
    console.log('FoodController loaded');
    var self = this; // holds the value of this

    self.foodList = [];
    getFood();
    self.newFood = {};

    self.food = [
      {
        name: 'Apple',
        rating: '9',
        is_hot: 'No'
      }
    ];

    self.createFoodEntry = function() {
      $http({
        method: 'POST', //for delete button method will be delete
        url: '/foods',
        data: self.newFood //params for delete
      })
        .then(function(response) {
         getFood();
        console.log(response);
        })
        .catch(function(error) {
          console.log('error on /food POST', error);
        });
    };

    function getFood() {
      $http({
        method: 'GET', // will be PUT for save
        url: '/foods'
      })
        .then(function(response) {
          self.foodList = response.data;
        })
        .catch(function(error) {
          console.log('error on /food GET', error);
        });
    };
    
  }
  
]);

// self.saveFood = function (foodToSave) {
//   console.log('write an http request to delete this!', foodToSave);
//   console.log('Use the _id from mongo!');

// }

// self.deleteFood = function (foodToDelete) {
//   console.log('write an http request to save this!', foodToDelete);
//   console.log('Use the _id from mongo!');
// }
