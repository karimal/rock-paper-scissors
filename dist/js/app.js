angular.module('RPSG')
.config(function ($locationProvider, $routeProvider) {

   $locationProvider.html5Mode({ enabled: true, requireBase: false });

   $routeProvider.when('/', {
       templateUrl: 'partials/home.html',
       controller: 'gameController'
   });

});
