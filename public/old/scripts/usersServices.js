// initialise the service - Users
var UsersServices = angular.module('Users.services', ['ngResource']);

// id is the parameter
UsersServices.factory('User', function ($resource) {
    return $resource('/members/:id', {}, {
        get: { method: 'POST' ,params: {id: '@id'}},
        post: { method: 'GET' ,params: {id: '@id'}},
        delete: { method: 'DELETE' ,params: {id: '@id'}}
    })
});

// no parameter and request
UsersServices.factory('Users', function ($resource) { 
    return $resource('/members/', {}, {
        get: { method: 'GET', isArray:true},
        create: { method: 'POST' }
    })
})
 