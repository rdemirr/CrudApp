var app = angular.module('app', []);

app.controller('PersonListCtrl', function($scope,$http) {

	
	$http.get('http://localhost:8080/personApp/webapi/persons/').
    success(function(data) {
        $scope.persons = data;
    });
	

});
