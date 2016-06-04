var retrieve = (function () {
  "use strict";
   return {
      moment: (function () {
        return moment();
      }()),
      test2: (function () {
        return console.log('test 2');
      })
   };
}());