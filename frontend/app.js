"use strict";

var app = angular.module('app', [
    'ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: "index.html"
        });
});