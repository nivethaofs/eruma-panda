angular.module('myApp')
.controller('index', function($scope, qaservices) {
	var init = function init() {
		$scope.questionid = {};
		$scope.question = {};
		$scope.questionlike = {};
		$scope.questiontech = {};
		$scope.questiontime = {};
		
		qaservices.getAllQuestionAndSolution(qasuccess);
		
	
	};
	
	function qasuccess (qasuccessdata) {
		$scope.qa = qasuccessdata.response;
		console.log($scope.qa);
	}
	init();
});
