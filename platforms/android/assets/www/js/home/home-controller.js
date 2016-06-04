'use strict';

var app = angular.module('home', []);

app.controller('homeController', function ($scope, $http, $state, $ionicNavBarDelegate, $location,$ionicModal) {
    // $ionicNavBarDelegate.showBackButton(false);

    $scope.profileManagement = function (eventObj) {

        alert($location.path());
        $state.go('tabs_profile.basic');
        closeModal();

    }

    $ionicModal.fromTemplateUrl('templates/modal_animals.html', {
        scope: $scope,
        animation: 'slide-in-up',
        focusFirstInput: true
    }).then(function (modal) {
        $scope.modal = modal;
//        $scope.modal.show();
    });


    $scope.openModal = function () {
        $scope.modal.show();
    };

    $scope.closeModal = function () {
        $scope.modal.hide();
    };


    $scope.$on('$destroy', function () {
        $scope.modal.remove();
    });

    $scope.$on('modal.hidden', function () {
        // Execute action
    });

    $scope.$on('modal.removed', function () {
        // Execute action
    });


});
