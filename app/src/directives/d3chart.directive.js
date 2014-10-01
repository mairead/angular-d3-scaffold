var headChart = (function () {
  'use strict';

  angular
    .module('BigData')
    .directive('headChart', headChart);

  function headChart () {

    var directive = {
      link: link,
      restrict: 'A'    
    }

    return directive;

    function link(scope, element){

      scope.options = {
        chart: {
          type: 'discreteBarChart',
          height: 150,
          margin : {
              top: 20,
              right: 20,
              bottom: 60,
              left: 55
          },
          x: function(d){ return d.dataItem; },
          y: function(d){ return d.dataValue; },
          showValues: true,
          valueFormat: function(d){
              return d3.format(',.4f')(d);
          },
          transitionDuration: 500,
          xAxis: {
              axisLabel: 'X Axis'
          },
          yAxis: {
              axisLabel: 'Y Axis',
              axisLabelDistance: 30
          }
        }
      };
    }
  }

  return headChart;
})();