var headPie = (function () {
  'use strict';

  angular
    .module('BigData')
    .directive('headPie', headPie);

  function headPie () {

    var directive = {
      link: link,
      controller: controller,
      restrict: 'E',
      scope: { 
        data: '=',
        chart: '=' 
      }    
    }

    return directive;

    function controller($scope){

      $scope.getName = function(index){
        //retrieve name from character list with index
        return d3.values($scope.data)[0][index].name
      }
    };

    function link(scope, element, attr){
      var svg = d3.select(element[0]).append('svg');
  
      //using lo-dash here to massage data object/sanitise data
      var characterArray = d3.values(scope.data)[0];
      var data = _.pluck(characterArray, 'strength');

      var color = d3.scale.category10();
      var width = 200;
      var height = 200;
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
      var arcs = g.selectAll('path').data(pie(data));

      var text;

      arcs
        .enter().append('path')
        .style('stroke', 'white')
        .attr('d', arc)
        .attr('fill', function(d, i){ return color(i) })
        .on("mouseenter", function(d, i) {
          // text = d3.select(this)
          text = g
            .append("text")
            .attr("dy", ".5em")
            .style("text-anchor", "middle")
            .style("fill", "black")
            .text(scope.getName(i));
        })
        .on("mouseout", function(d) {
          text.remove();
          //Need to remove text if user moves around path not just off path
        });
      
      //udpate pie chart when sliders are moved
      scope.$watch('data',function(){
        characterArray = d3.values(scope.data)[0];
        data = _.pluck(characterArray, 'strength');
      
        // console.log(data.length, scope.data)
        var arcs = g.selectAll('path').data(pie(data))
        
        arcs.attr('d', arc)
          .enter().append('path') //enter here doesn't trigger colour being added?
          .style('stroke', 'white')
          .attr('fill', function(d, i){ return color(i) })
          
          arcs.exit().remove()
          
        
          //enter should be adding new DOM item to be styled with fill attr

          //need to read up on enter and exit phase. 
          //to see how these can be used to update data/charts

          //don't want sub selections from enter and exit. 
          
          //enter phase adds the colour here, 
          //but is only taking up the new areas and not the whole circle
          //because its only rendering part of the

      },true)
    }
  }

  return headPie;
})();