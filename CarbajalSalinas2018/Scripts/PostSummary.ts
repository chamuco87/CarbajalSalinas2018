/// <reference path="../Scripts/typings/angularjs/angular.d.ts"/>
namespace CarbajalSalinasApp {
    'use strict'
    declare var rootDir: string;
    interface IPostSummaryController {
        
    }

    export class PostSummaryController implements IPostSummaryController {
        static $inject: Array<string> = ['$scope', '$rootScope', '$timeout', 'dataService', '$state', 'ngMeta'];
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, $timeout, DataService, $state, ngMeta) {
            var vm = this;
            vm.scope = $scope;
            vm.state = $state;
            vm.rootScope = $rootScope;
            vm.language = DataService.getLanguage();

            ngMeta.init();
            ngMeta.setTitle('Posts - CarbajalSalinas.com');
            ngMeta.setTag('og:image', "http://carbajalsalinas.com/Content/Calypso/slide1-3.png");
            ngMeta.setTag('og:description', 'Where you get all the information you need, at the time you want it.');
            ngMeta.setTag('og:url', 'http://www.carbajalsalinas.com/');
            ngMeta.setTag('og:title', 'Posts - CarbajalSalinas.com');
            ngMeta.setTag('og:locale', 'US');
            ngMeta.setTag('author', 'CarbajalSalinas.com');
            ngMeta.setTag('description', 'Where you get all the information you need, at the time you want it.');

            vm.rootScope.$broadcast('stateChanged', { data: null });

            vm.scope.$on('languageChanged', ($event: any, data: any) => {
                if (data.data) {
                    vm.language = data.data;
                    vm.renderLanguage();
                }
            });

            var data = {
                subTitle: { English: "Posts", Spanish: "Posts" },
                subTitleDescription1: { English: "Where you get all the information you need,", Spanish: "La informacion que necesitas," },
                subTitleDescription2: { English: "at the time you want it.", Spanish: "al momento que la requieres." }
            }
            vm.rootScope.$broadcast('dataViewChanged', { data: data });

            vm.readMoreClick = function ($event: any) {
                var postId = null;
                if (vm.language == "English") {
                    postId = ""+$event.currentTarget.id+"Eng";

                }
                else if (vm.language == "Spanish") {
                    postId = $event.currentTarget.id;
                };
                
                DataService.readPost(postId);
            };

            vm.renderLanguage = function () {
                if (vm.language == "English") {
                    vm.readText = "Read More";

                }
                else if (vm.language == "Spanish") {
                    vm.readText = "Leer Mas";
                };
            };

            vm.pageCliked = function ($event: any,action: any) {
                var doIt = function () {
                    vm.postArray = [];
                    var final = 6 * action;
                    var initial = final - 6;
                    for (var i = initial; i < final; i++) {
                        vm.postArray.push(vm.postArrayOriginal[i]);
                    }

                    $("#page" + vm.currentPage + "").removeClass("active");
                    $("#page" + action + "").addClass("active");
                    vm.fromPager = initial;
                    vm.toPager = final;
                    vm.currentPage = action;
                };
                if (action != 'Next' && action != 'Previous') {
                    doIt();
                }
                else if (action == 'Next')
                {
                    if (vm.currentPage < vm.totalNumberPages) {
                        action = vm.currentPage + 1;
                        doIt();
                    }
                }
                else if (action == 'Previous') {
                    if (vm.currentPage > 1) {
                        action = vm.currentPage - 1;
                        doIt();
                    }
                }
                  
            };

            vm.createPageNumbers = function () {
                vm.pages = Array<number>();
                vm.totalNumberPosts = vm.postArrayOriginal.length;
                vm.totalNumberPages = Math.ceil((vm.totalNumberPosts / 6));
                for (var i = 1; i <= vm.totalNumberPages; i++)
                {
                    vm.pages.push(i);
                }
                if (vm.totalNumberPosts > 6) {
                    vm.fromPager = 1;
                    vm.toPager = 6;
                }
                else {
                    vm.fromPager = 1;
                    vm.toPager = vm.totalNumberPosts;
                }
                vm.currentPage = 1;
                $timeout(function () {
                    $("#page1").addClass("active");
                }, 100);

            };

            vm.locatePager = function () {
                var pad = (angular.element($(".wrapsemibox"))[0].clientWidth - (angular.element($("#pager").find("nav").find("a"))[0].clientWidth * angular.element($("#pager").find("nav").find("a")).length)) / 2;
                $("#pager").css("margin-left", "" + pad + "px");
            };

            vm.postArrayOriginal = [
                {
                    imageSrc: "https://carbajalsalinas.files.wordpress.com/2017/01/rq2t5fm.png?w=384&h=216",
                    placeHolder: "Angular 2: ¿Cómo funciona, qué necesita y a dónde se dirige?",
                    spanishTitle: "Angular 2: ¿Cómo funciona, qué necesita y a dónde se dirige?",
                    englishTitle: "Angular 2: What is it?",
                    spanishDesc: "Angular 2: El sucesor de la plataforma completa del marco de aplicaciones web google “angular 1” anunciado por...",
                    englishDesc: "Angular 2, the full-platform successor to Google’s Angular 1 Web application framework first announced in October 2014, was released in September 2016...",
                    link: "AngularJs",
                    date: "01/29/2017"
                },
                {
                    imageSrc: "https://cnnespanol2.files.wordpress.com/2015/08/donald-trump-debate.jpg?quality=90&strip=all",
                    placeHolder: "Que pasara con la visa H1B con la llegada de Trump a la presidencia.",
                    spanishTitle: "H1B & Donald Trump.",
                    englishTitle: "H1B & Donald Trump.",
                    spanishDesc: "Como sabemos desde que Donald Trump anuncio su candidatura a la presidencia de los Estados Unidos ha causado gran indignación en la población latina, ya que el ahora ha hecho...",
                    englishDesc: "As we know since Donald Trump announced his candidacy for the presidency of the United States has caused great indignation in the Latino population...",
                    link: "VisaH1B",
                    date: "01/29/2017"
                },
                {
                    imageSrc: "https://carbajalsalinas.files.wordpress.com/2017/01/lbpdlp.jpg?w=400&h=243",
                    placeHolder: "Yo estaba equivocado sobre TypeScript. Aquí el por qué:",
                    spanishTitle: "Yo estaba equivocado sobre TypeScript. Aquí el por qué:",
                    englishTitle: "I was wrong about TypeScript. Because...",
                    spanishDesc: "Cuando se anuncia algo nuevo, la gente tiende a elegir lados. Cuando se anunció TypeScript, escogí erróneamente algunos conceptos clave que...",
                    englishDesc: "When something new is announced, people have a tendency to choose sides. When TypeScript was announced, I wrongfully picked a few key concepts...",
                    link: "Typescript",
                    date: "01/29/2017"
                },
                {
                    imageSrc: "https://i2.wp.com/ichef.bbci.co.uk/news/660/cpsprodpb/3A54/production/_92423941_c8af3686-2524-4e60-9371-0bb11ed5d162.jpg",
                    placeHolder: "Que es la VISA TN?",
                    spanishTitle: "Que es la VISA TN?",
                    englishTitle: "What's TN Visa?",
                    spanishDesc: "La visa TN (Trade NAFTA por sus siglas en inglés) es una visa especial “no migrante” (de residencia mientas la visa no expire) expedida en los Es...",
                    englishDesc: "The TN (Trade NAFTA) visa is a special “non-migrant” visa (residence while the visa does not expire) issued in the United States for Mexican...",
                    link: "VisaTN",
                    date: "01/29/2017"
                },
                {
                    imageSrc: "https://i0.wp.com/atraura.com/wp-content/uploads/2016/04/angularjs.png",
                    placeHolder: "Angular JS",
                    spanishTitle: "Angular JS",
                    englishTitle: "Angular JS",
                    spanishDesc: "Es un proyecto de código abierto que contiene un conjunto de librerías útiles para el desarrollo de aplicaciones web y propone una serie de patrones...",
                    englishDesc: "It is an open source project that contains a set of useful libraries for the development of web applications and proposes a series of design...",
                    link: "Angular",
                    date: "01/29/2017"
                },
            ];

            vm.postArray = [];
            if (vm.postArrayOriginal.length >= 6) {
                for (var i = 0; i < 6; i++) {
                    vm.postArray.push(vm.postArrayOriginal[i]);
                }
            }
            else {
                for (var i = 0; i < vm.postArrayOriginal.length; i++) {
                    vm.postArray.push(vm.postArrayOriginal[i]);
                }
            }

            var data = {
                subTitle: { English: "PostSummarys", Spanish: "PostSummarys" },
                subTitleDescription1: { English: "Where you get all the information you need,", Spanish: "La informacion que necesitas," },
                subTitleDescription2: { English: "at the time you want it.", Spanish: "al momento que la requieres." }
            }
            vm.rootScope.$broadcast('dataViewChanged', { data: data });
            vm.renderLanguage();
            vm.createPageNumbers();
            window.onresize = function (event) {
                vm.locatePager();
            };
            $timeout(function () {
                vm.locatePager();
            }, 100);

        }

        scope: any;
        rootScope: any;
        state: any;
        stateParams: any;
        language: string;
        renderLanguage: () => void;
        postArrayOriginal: any;
        postArray: any;
        locatePager: () => void;
        createPageNumbers: () => void;
        pages: Array<number>;
        totalNumberPages: number;
        totalNumberPosts: number;
        fromPager: number;
        toPager: number;
        pageCliked: ($event, action: any) => void;
        currentPage: number;
        readMoreClick: (event:any) => void
        
        readText: string;
    }

    angular.module('PostSummaryApp', []).controller('PostSummaryController', PostSummaryController)
}