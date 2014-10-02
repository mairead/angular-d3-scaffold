(function () {
  'use strict';

  angular
  .module('BigData', ['ngAnimate','nvd3','jsonFactory', 'd3Factory', 'chartFactory'])
  .config(function($logProvider){
    $logProvider.debugEnabled(true);
	});
  

})();
