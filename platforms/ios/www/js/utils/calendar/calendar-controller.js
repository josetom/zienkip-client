'use strict';

var app = angular.module('calendar', ['calendar-factory']);

app.controller('calendarController',
  ['$scope', '$http', 'calendarData','calendarFactory',
  function ($scope, $http, calendarData, calendarFactory) {

    $scope.calendar = calendarData.calendar;
    $scope.monthNyear = calendarData.monthNyear;
    $scope.month = calendarData.month;

    $scope.updateCalendar = function(month) {
        $scope.calendar = calendarData.updateCalendar(month);
        $scope.monthNyear = calendarData.updateMonthAndYear(month);
        $scope.month = month;
    }

    $scope.onDateClick = function(object) {
        var div = document.getElementById('details-div');
        if(div) {
            div.parentNode.removeChild(div);
        }
        div = calendarFactory.drawDetailsDiv(object.date);
        var week = document.getElementById('week'+object.date.row);
        week.appendChild(div);
    }


}]);
