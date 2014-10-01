var headPie = (function () {
  'use strict';

  angular
    .module('BigData')
    .directive('headPie', headPie);

  function headPie () {

    var directive = {
      link: link,
      restrict: 'E',
      scope: { data: '=' }    
    }

    return directive;

    function link(scope, element, attr){

      var svg = d3.select(element[0]).append('svg');

      //using lo-dash here to massage data object
      var data = _.pluck(scope.data, 'strength');
      var color = d3.scale.category10();
      var width = 300;
      var height = 300;
      var min = Math.min(width, height);

      var pie = d3.layout.pie().sort(null);
      var arc = d3.svg.arc()
        .outerRadius(min / 2 * 0.9)
        .innerRadius(min / 2 * 0.5);

      svg.attr({width: width, height: height});

      var g = svg.append('g')
      // center the donut chart
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

      // add the <path>s for each arc slice
      g.selectAll('path').data(pie(data))
      .enter().append('path')
      .style('stroke', 'white')
      .attr('d', arc)
      .attr('fill', function(d, i){ return color(i) });

      //udpate pie chart when sliders are moved
      scope.$watch('data',function(){
        data = _.pluck(scope.data, 'strength')
        g.selectAll('path').data(pie(data)).attr('d', arc);
      },true)
    }
  }

  return headPie;
})();