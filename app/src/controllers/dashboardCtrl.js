var Dashboard = (function () {
  'use strict';

  angular
	  .module('BigData')
	  .controller('Dashboard', Dashboard);

  function Dashboard ($scope) {
	  this.newTodo = 'hello';

	  this.yesplz = 'wut?';

	  this.awesomeThings = [0,0,0];
	}

	Dashboard.$inject = ['$scope'];

	return Dashboard;

})();