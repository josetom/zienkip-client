'use strict';

var app = angular.module('calendar-factory',[]);

app.factory('calendarFactory', function($window){

  var calendar = {};

  calendar.createElement = function(tagName, className, innerText) {
      var ele = document.createElement(tagName);
      if(className) {
        ele.className = className;
      }
      if(innerText) {
        ele.innderText = ele.textContent = innerText;
      }
      return ele;
  };


  calendar.drawDetailsDiv = function(date) {

      var div = calendar.createElement('div', "details in");
      div.id = "details-div";

      var arrow = calendar.createElement('div', "arrow");
      arrow.style = "left: "+ (date.column*60 + 27)+ "px;"

      var events = calendar.createElement('div', "events in new");

      calendar.addEventsToDiv(events, date.events)

      div.appendChild(arrow);
      div.appendChild(events);

      return div;

  };

  calendar.addEventsToDiv = function(div, events) {

      events.forEach(function(eventObj) {

            var event = calendar.createElement('div', "event");
            var square = calendar.createElement('div', "event-category " + eventObj.color);
            var span = calendar.createElement('span', '', eventObj.eventName);

            event.appendChild(square);
            event.appendChild(span);

            div.appendChild(event);
      });
  };

return calendar;

});

app.factory('calendarData', function() {

    var eventData = [
        { eventName: 'Lunch Meeting w/ Mark', calendar: 'Work', color: 'orange' },
        { eventName: 'Interview - Jr. Web Developer', calendar: 'Work', color: 'orange' },
        { eventName: 'Demo New App to the Board', calendar: 'Work', color: 'orange' },
        { eventName: 'Dinner w/ Marketing', calendar: 'Work', color: 'orange' },

        { eventName: 'Game vs Portalnd', calendar: 'Sports', color: 'blue' },
        { eventName: 'Game vs Houston', calendar: 'Sports', color: 'blue' },
        { eventName: 'Game vs Denver', calendar: 'Sports', color: 'blue' },
        { eventName: 'Game vs San Degio', calendar: 'Sports', color: 'blue' },

        { eventName: 'School Play', calendar: 'Kids', color: 'yellow' },
        { eventName: 'Parent/Teacher Conference', calendar: 'Kids', color: 'yellow' },
        { eventName: 'Pick up from Soccer Practice', calendar: 'Kids', color: 'yellow' },
        { eventName: 'Ice Cream Night', calendar: 'Kids', color: 'yellow' },

        { eventName: 'Free Tamale Night', calendar: 'Other', color: 'green' },
        { eventName: 'Bowling Team', calendar: 'Other', color: 'green' },
        { eventName: 'Teach Kids to Code', calendar: 'Other', color: 'green' },
        { eventName: 'Startup Weekend', calendar: 'Other', color: 'green' }
      ];

    var data = {};
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    data.updateCalendar = function(month) {

            if(!month) {
                month = moment().month();
            }

            var classStyle;
            var day1Index = moment().month(month).date(1).day(); // first day of current month's index
            var calendar = new Array(5);

            for (var i = 0; i < 5; i++) {
                calendar[i] = new Array(7);
            }

            for(var i=0-day1Index; i<35-day1Index; i++) {
                if(i+1 < 1 || i+1 > moment().month(month).date(i+1).date()) {
                    classStyle = 'other';
                } else if (moment().isSame(moment().month(month).date(i+1))) {
                    classStyle = 'today';
                } else {
                    classStyle = '';
                }

                calendar[Math.floor((i+day1Index)/7)][moment().month(month).date(i+1).day()]
                = {date:moment().month(month).date(i+1).date()
                   , day:days[moment().month(month).date(i+1).day()]
                   , row:Math.floor((i+day1Index)/7)
                   , column:moment().month(month).date(i+1).day()
                   , class:classStyle
                   , events:[eventData[moment().month(month).date(i+1).day()], eventData[moment().month(month).date(i+1).day()*2],
                             eventData[moment().month(month).date(i+1).day()+1], eventData[moment().month(month).date(i+1).day()*2+1],
                             eventData[moment().month(month).date(i+1).day()+2], eventData[moment().month(month).date(i+1).day()*2+2]]
                   };
            }

        return calendar;

    };

    data.updateMonthAndYear = function(month) {
        var mny = moment().month(month);
        return  months[mny.month()] + " " + mny.year();
    };

    // defaults
    data.month = moment().month();
    data.monthNyear = data.updateMonthAndYear(moment().month());
    data.calendar = data.updateCalendar(moment().month());

    return data;
});
