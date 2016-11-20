var angularApp = angular.module('angularApp', ['ngRoute', 'ngAnimate']);

angularApp.config(function($routeProvider) {
    $routeProvider
    	.when('/', {
    		templateUrl: 'pages/page-home.html',
            controller: 'mainController'
    	})
    	.when('/about', {
    		templateUrl: 'pages/page-about.html',
            controller: 'aboutController'
    	})
    	.when('/details', {
    		templateUrl: 'pages/page-details.html',
            controller: 'detailsController'
    	});

});

angularApp.controller('mainController', function($scope) {
    $scope.pageClass = 'page-home';
});

angularApp.controller('aboutController', function($scope) {
    $scope.pageClass = 'page-about';
});

angularApp.controller('detailsController', function($scope) {
    $scope.pageClass = 'page-details';
});
