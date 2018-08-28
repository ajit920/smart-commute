// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ngMap'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (cordova.platformId === 'ios' && window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
       // navigator.splashscreen.show()
        //setTimeout(function () {
        //    navigator.splashscreen.hide();
        //}, 2000);
    });
})

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'templates/menu.html',
          controller: 'AppCtrl'
      })

    .state('app.search', {
        url: '/search/:city',
        views: {
            'menuContent': {
                templateUrl: 'templates/search.html',
                controller: 'SearchCtrl'
            }
        }
    })
 .state('app.splash', {
     url: '/splash',
     views: {
         'menuContent': {
             templateUrl: 'templates/splash.html'
           
         }
     }
 })

    .state('app.browse', {
        url: '/browse',
        views: {
            'menuContent': {
                templateUrl: 'templates/browse.html',
                controller: 'LocationCtrl'
            }
        }
    })
      .state('app.playlists', {
          url: '/playlists',
          views: {
              'menuContent': {
                  templateUrl: 'templates/playlists.html',
                  controller: 'PlaylistsCtrl'
              }
          }
      })
      .state('app.booking', {
          url: '/booking',
          views: {
              'menuContent': {
                  templateUrl: 'templates/booking.html',
                  controller: 'BookingCtrl'
              }
          }
      })
    //.state('app.search', {
    //    url: '/search/:cityId',
    //    views: {
    //        'menuContent': {
    //            templateUrl: 'templates/search.html',
    //            ontroller: 'SearchCtrl'
    //        }
    //    }
    //});
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/splash');
});
