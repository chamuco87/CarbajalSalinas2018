/// <reference path="../Scripts/typings/angularjs/angular.d.ts"/>
namespace CarbajalSalinasApp {
    'use strict'
    declare var rootDir: string;
    interface IPostController {
        
    }

    export class PostController implements IPostController {
        static $inject: Array<string> = ['$scope', '$rootScope', '$timeout', 'dataService', '$templateCache', '$http', 'ngMeta'];
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, $timeout, DataService, $templateCache, $http, ngMeta) {
            var vm = this;
            vm.scope = $scope;
            vm.rootScope = $rootScope;
            vm.language = DataService.getLanguage();

            ngMeta.init();
            ngMeta.setTitle('Angular 2: ¿Cómo funciona, qué necesita y a dónde se dirige? - CarbajalSalinas.com');
            ngMeta.setTag('og:url', 'http://carbajalsalinas.com/#!/Post?postId=angularjs');
            ngMeta.setTag('og:title', 'Angular 2: ¿Cómo funciona, qué necesita y a dónde se dirige?');
            ngMeta.setTag('og:type', 'website');
            ngMeta.setTag('og:image', 'http://carbajalsalinas.com/Content/PostImages/angularjs.png');
            ngMeta.setTag('og:image:height', '300');
            ngMeta.setTag('og:image:width', '300');
            ngMeta.setTag('og:description', 'Angular 2: El sucesor de la plataforma completa del marco de aplicaciones web google “angular 1” anunciado por...');
            ngMeta.setTag('description', 'Angular 2: El sucesor de la plataforma completa del marco de aplicaciones web google “angular 1” anunciado por...'); 

            vm.rootScope.$broadcast('stateChanged', { data: null });

            var data = {
                subTitle: { English: "Posts", Spanish: "Posts" },
                subTitleDescription1: { English: "Where you get all the information you need,", Spanish: "La informacion que necesitas," },
                subTitleDescription2: { English: "at the time you want it.", Spanish: "al momento que la requieres." }
            }
            vm.rootScope.$broadcast('dataViewChanged', { data: data });


            if (vm.scope.$parent.postId) {
                $http.get('/Posts/' + vm.scope.$parent.postId + '.html').then(function (response) {
                    $("#postId").append(response.data);
                });
            }
        }

        scope: any;
        rootScope: any;
        language: string;
    }

    angular.module('PostApp', []).controller('PostController', PostController)
}