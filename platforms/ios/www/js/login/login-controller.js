'use strict';

var app = angular.module('login', []);

app.controller('loginController', function ($scope, $http, $state, $location) {
    $scope.username = "John21";
    $scope.password = "Doe1";
    $scope.clickLogin = function (eventObj) {
        alert("Login Clicked" + eventObj.clientX);
        alert($location.path());
        $state.go('Home.main');


    }

    //
    //    $http.get("http://169.254.225.0:3001/getData", { /* params: { "key1": "value1", "key2": "value2" }*/ }).then(function (response) {
    //        $scope.myData = response.data;
    //        alert(response.data)
    //    }, function (reponse) {
    //        alert("ERROR");
    //    });;
});
