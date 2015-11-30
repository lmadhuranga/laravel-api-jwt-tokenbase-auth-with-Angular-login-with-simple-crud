
// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp',['ui.router', 'satellizer','Sample.controllers']);

myApp.config(function($stateProvider, $urlRouterProvider, $authProvider){

    // Satellizer configuration that specifies which API
    // route the JWT should be retrieved from
    $authProvider.loginUrl = 'api_jokes/public/api/v1/authenticate';

    // Redirect to the auth state if any other states
    // are requested other than users
    $urlRouterProvider.otherwise('/auth');

    $stateProvider
        .state('auth', {
            url: '/auth',
            templateUrl: 'views/authView.html',
            controller: 'TestController as auth'
        })
        .state('users', {
            url: '/users',
            templateUrl: 'views/userView.html',
            controller: 'UserController as user'
        });
});

