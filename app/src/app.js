(function () {
  'use strict';

  angular
  .module('BigData', ['ngAnimate', 'BigDataFactories'])
  .config(function($logProvider){
    $logProvider.debugEnabled(true);
	});
  

})();
