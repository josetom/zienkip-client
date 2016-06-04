'use strict';

angular.module('router', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

        /* Login starts */

        .state('Login', {
            url: "/login",
            templateUrl:"templates/login/abstract-login.html",
            abstract: true
        })

        .state('Login.signin', {
            url:'/signin',
            templateUrl:"templates/login/partial-login-signin.html",
            controller: 'loginController'
        })

        .state('Login.signup', {
            url:'/signup',
            templateUrl:"templates/login/partial-login-signup.html",
            controller: 'loginController'
        })

        /*--------------------------------*/

        /* Home starts*/

        .state('Home', {
            url: "/home",
            templateUrl: "templates/home/abstract-home.html",
            abstract: true

        })

        .state('Home.main', {
            url: '/main',
            templateUrl: "templates/home/partial-home-main.html",
            controller: 'homeController'
        })

        .state('Home.feeds', {
            url: '/feeds',
            templateUrl: "templates/home/partial-home-feeds.html",
            controller: 'homeController'
        })

        /*--------------------------------*/

    $urlRouterProvider.otherwise('/login/signin');
});
