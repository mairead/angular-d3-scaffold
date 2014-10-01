var productize = (function () {
  'use strict';

  angular
    .module('BigData')
    .filter('productize', productize);

  function productize () {

    //append ID prefix to product IDs
    return function(item){
      return "id: " + item
    }
  }

  return productize;

})();