var app = angular.module("GetFetch", []);

app.controller("MyCtrl", function ($scope, $http) {
    $scope.awesome = function () {

        $http.post("api/Response", { "name": "Andi", "class": "E3" })
        .success(function (response) {
            alert("Heck yeah!");
        })
        .error(function (response) {
            alert("NOPE");
        })
        
    };

});