var app = angular.module('QApp', ['ngMaterial', 'angular-loading-bar', 'ngAnimate']);

//Angular loading bar spinner off
app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
}]);

app.controller('QCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.videos = null;

    //Called on form submit
    $scope.search = function() {
        var url = 'https://www.googleapis.com/youtube/v3/search?id=7lCDEYXw3mM&key=AIzaSyCrOV6HpmkcJe9LyZoQalPwyZXEfGtPjvU&part=snippet&q=';

        //Add URL encoded search keywords
        url += encodeURI($scope.query);
        $http.get(url)
            .success(function(data, status, headers, config) {
                $scope.videos = data.items;
            }).error(function(data, status, headers, config) {
                alert('Something broke! Might as well derp somewhere else.');
            });
    };

    //Reset the modal when a keypress happens on the search box
    $scope.clear = function() {
        $scope.videos = null;
    }
}]);
