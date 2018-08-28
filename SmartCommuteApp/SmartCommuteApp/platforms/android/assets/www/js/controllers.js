angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});
   
    // Form data for the login modal
    $scope.loginData = {};
    $scope.searchData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function () {
            $scope.closeLogin();
        }, 1000);
    };
})

.controller('LocationCtrl', function ($scope, $ionicLoading, $timeout) {
    $ionicLoading.show({
        template: 'Searching for location...'
    });
    $timeout(function () {
        $ionicLoading.hide();
    }, 1000);
    $scope.cities = [
   { title: 'Pune', id: 1 },
   { title: 'Mumbai', id: 2 },
   { title: 'Delhi', id: 3 },
   { title: 'Chennai', id: 4 },
   { title: 'Kolkata', id: 5 }
    ];
    navigator.geolocation.getCurrentPosition(function (position) {
        console.log('altitude:- ' + position.coords.altitude);
        console.log('latitude:- ' + position.coords.latitude);
    });
})
.controller('PlaylistsCtrl', function ($scope) {
    $scope.playlists = [
      { title: 'Reggae', id: 1 },
      { title: 'Chill', id: 2 },
      { title: 'Dubstep', id: 3 },
      { title: 'Indie', id: 4 },
      { title: 'Rap', id: 5 },
      { title: 'Cowbell', id: 6 }
    ];
})
.controller('SearchCtrl', function ($scope, $stateParams) {
    console.log($stateParams.city);
    $scope.searchData =
        { Current: $stateParams.city };

    
})
.controller('BookingCtrl', function($scope, $ionicLoading) {

    $scope.positions = [{
        lat: 18.5204,
        lng: 73.8567
    }];

    $scope.$on('mapInitialized', function(event, map) {
        $scope.map = map;
    });

    $scope.centerOnMe= function(){
        $scope.positions = [];
    
    
        $ionicLoading.show({
            template: 'Loading. Map..'
        });


        navigator.geolocation.getCurrentPosition(function (position) {

            var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            $scope.positions.push({lat: pos.k,lng: pos.B});
            console.log(pos);
            $scope.map.setCenter(pos);
            $ionicLoading.hide();
        });

    };

})

.controller('PlaylistCtrl', function ($scope, $stateParams) {
});

