var SampleModule =  angular.module('Sample.controllers',[]);
				// angular.module('movieApp.controllers', []).
				// controller('MovieListController', function($scope, $state, popupService, $window, Movie) {
//  Appreciation delte
SampleModule.controller('TestController', function($scope)
{
    console.log('TestController Loaded');

}) 

var UserModule =  angular.module('User.controllers',[]);
				// angular.module('movieApp.controllers', []).
				// controller('MovieListController', function($scope, $state, popupService, $window, Movie) {
//  Appreciation delte
UserModule.controller('AddUserController', function($scope)
{
    console.log('AddUserController Loaded');

}) 

 //  user login details
UserModule.controller('UserLoginController', function($scope)
{
    console.log('UserLoginController Loaded');

}) 

 