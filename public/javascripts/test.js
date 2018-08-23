'use strict';

var myapp = angular.module('myapp', []);

myapp.controller('HeadController', ['$scope', '$http',
function($scope, $http) {

    console.log(angular.version);

    $scope.versions = [];

    $scope.testGet = function(cb) {
        $http.get("/read").then(function(res) {
            $scope.people = res.data;
            cb('success')
        }, function(err) {
            console.log("Error contacting API");
            console.dir(err);
            cb(err.data.name);
        });
    };

    $scope.testCreate= function(cb) {
        $http.get("/create").then(function(res) {
            $scope.people.push(res.data);
            cb('success');
        }, function(err) {
            console.log("Error contacting API");
            console.dir(err);
            cb(err.data.name)
        });
    };

    $scope.getVersions= function(cb) {
        $http.get("/version").then(function(res) {
            $scope.versions = res.data;
            $scope.versions['AngularJS'] =  angular.version.full;
            cb('success');
        }, function(err) {
            console.log("Error contacting API");
            console.dir(err);
            cb(err.data.name);
        });
    };

    $scope.tests = [
        {label: 'API Read', test: $scope.testGet, status: 'waiting'},
        {label: 'API Create', test: $scope.testCreate, status: 'waiting'},
        {label: 'Getting Software Versions', test: $scope.getVersions, status: 'waiting'}
    ];

    angular.forEach($scope.tests, function(t){
        t.status = 'running...';
        t.test(function(status){
            t.status = status;
        });
    });

}]);