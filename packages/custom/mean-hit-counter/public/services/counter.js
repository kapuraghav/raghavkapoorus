'use strict'

// Articles service used for articles REST endpoint
// Note how it returns a resource and that is where the .$save in the controller above comes from.
angular.module('mean.system').factory('Counter', ['$resource',
  function ($resource) {
    return $resource('api/counter', {}, {
      get: {
        method: 'GET'
      }
    })
  }
])
