/// <reference path="../Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="../Scripts/typings/angular-ui-router/index.d.ts"/>
namespace CarbajalSalinasApp {
    declare var rootDir: string;
    angular.module("CarbajalSalinasApp")
        .config([
            "$locationProvider",
            "$stateProvider",
            "$urlRouterProvider",
            (
                $locationProvider: angular.ILocationProvider,
                $stateProvider: angular.ui.IStateProvider,
                $urlRouterProvider: angular.ui.IUrlRouterProvider) => {
                'use strict';

                $stateProvider.
                    state('home', {
                        url: "/",
                        templateUrl:  './UIViews/Home.html',
                    }).
                    state('post', {
                        url: "/Post?postId",
                        templateUrl: './UIViews/Post.html',
                        controller: function ($scope, $stateParams) {
                            $scope.postId = $stateParams.postId;
                        },
                    }).
                    state('contact', {
                        url: "/Contact",
                        templateUrl: './UIViews/Contact.html',
                    }).
                    state('postSummary', {
                        url: "/PostSummary",
                        templateUrl: './UIViews/PostSummary.html',
                    }).
                    state('siteMap', {
                        url: "/siteMap",
                        templateUrl: './UIViews/Sitemap.html',
                    })
                $urlRouterProvider.otherwise("/");
                $locationProvider.html5Mode(true);
                $locationProvider.hashPrefix('!');
            }
        ])
}