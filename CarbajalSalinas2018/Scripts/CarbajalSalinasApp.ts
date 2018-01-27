/// <reference path="../Scripts/typings/angularjs/angular.d.ts"/>
namespace CarbajalSalinasApp {
    'use strict'
    declare var rootDir: string;
    interface ICarbajalSalinasAppController {
        
    }

    export class CarbajalSalinasAppController implements ICarbajalSalinasAppController {
        static $inject: Array<string> = ['$scope', '$rootScope', '$timeout', '$state', 'dataService'];
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, $timeout, $state: ng.ui.IStateService, DataService) {
            var vm = this;
            vm.scope = $scope;
            vm.rootScope = $rootScope;
            vm.state = $state;
            vm.rootDir = rootDir;
                        
            vm.configureView = function () {
                if (vm.state.current.name != 'home' && vm.state.current.name) {
                    angular.element(document.getElementsByClassName("pageheader-default")).addClass("ng-show");
                    angular.element(document.getElementsByClassName("pageheader-default")).removeClass("ng-hide");
                    angular.element(document.getElementsByClassName("carousel-fade")).addClass("ng-hide");
                    angular.element(document.getElementsByClassName("carousel-fade")).removeClass("ng-show");
                }
                else if (vm.state.current.name) {
                    angular.element(document.getElementsByClassName("carousel-fade")).addClass("ng-show");
                    angular.element(document.getElementsByClassName("carousel-fade")).removeClass("ng-hide");
                    angular.element(document.getElementsByClassName("pageheader-default")).addClass("ng-hide");
                    angular.element(document.getElementsByClassName("pageheader-default")).removeClass("ng-show");
                }

                $("#" + vm.state.current.name + "").addClass("active");
                angular.element($(document)).scrollTop(0);
            };

            vm.scope.$on('stateChanged', ($event: any, data: any) => {
                vm.configureView();
            });

            vm.switcher = function () {
                $(document).ready(function () {
                    $(".demobutton").click(function () {
                        $("#style-switcher").slideToggle();
                    });
                });



                jQuery(document).ready(function ($) {


                    $('#style-switcher a.color-box').each(function (i) {
                        var a = $(this);
                        a.css({
                            backgroundColor: '#' + a.attr('data-rel')
                        })
                    })


                    $('#style-switcher a.color-box').each(function (i) {
                        var a = $(this);
                        a.css({

                            backgroundRepeat: "repeat",
                            backgroundPosition: "49% 50%"
                        })
                    })

                    var switcher_skins = $('#style-switcher a.color-box');
                    var switcher_link = $('#main-color');
                    switcher_skins.each(function (i) {
                        var color = $(this).attr('data-rel');
                    });

                    /*STYLESHEETS LOAD STARTS*/
                    switcher_skins.click(function (e) {
                        var color = $(this).attr('data-rel');
                        var skins;
                        var defaultPattern = $.cookie("portable_cookie_defaultBg");

                        if (color == "2ac4ea") {
                            switcher_link.attr('href', "./Content/Calypso/skin-blue.css");
                            var atrrHref = switcher_link.attr('href');
                        }


                        if (color == "be9869") {
                            switcher_link.attr('href', "./Content/Calypso/skin-brown.css");
                            var atrrHref = switcher_link.attr('href');
                        }


                        if (color == "7f8c8d") {
                            switcher_link.attr('href', "./Content/Calypso/skin-gray.css");
                            var atrrHref = switcher_link.attr('href');
                        }

                        if (color == "1abc9c") {
                            switcher_link.attr('href', "./Content/Calypso/skin-green.css");
                            var atrrHref = switcher_link.attr('href');
                        }


                        if (color == "b4ad7f") {
                            switcher_link.attr('href', "./Content/Calypso/skin-khaki.css");
                            var atrrHref = switcher_link.attr('href');
                        }



                        if (color == "ff8100") {
                            switcher_link.attr('href', "./Content/Calypso/skin-orange.css");
                            var atrrHref = switcher_link.attr('href');
                        }

                        if (color == "f54828") {
                            switcher_link.attr('href', "./Content/Calypso/skin-red.css");
                            var atrrHref = switcher_link.attr('href');

                        }


                        if (color == "00aaaa") {
                            switcher_link.attr('href', "./Content/Calypso/skin-teal.css");
                            var atrrHref = switcher_link.attr('href');
                        }


                        if (color == "f0b70c") {
                            switcher_link.attr('href', "./Content/Calypso/skin-yellow.css");
                            var atrrHref = switcher_link.attr('href');
                        }


                        if (color == "semiboxed") {
                            switcher_link.attr('href', "./Content/Calypso/layout-semiboxed.css");
                            var atrrHref = switcher_link.attr('href');
                        }

                        if (color == "boxed") {
                            switcher_link.attr('href', "./Content/Calypso/layout-boxed.css");
                            var atrrHref = switcher_link.attr('href');
                        }

                        if (color == "wide") {
                            switcher_link.attr('href', "./Content/Calypso/layout-wide.css");
                            var atrrHref = switcher_link.attr('href');
                        }

                        /*STYLESHEETS LOAD ENDS*/

                        $.cookie("portable_cookie_pattern", null);
                        $.cookie("portable_cookie_bgimage", null);

                        $.cookie("portable_cookie_color", color);
                        $.cookie("portable_cookie_skins", atrrHref);
                        $.cookie("portable_cookie_defaultBg", defaultPattern);
                        return false;

                    });

                    var color = $.cookie("portable_cookie_color");
                    var portable_skins = $.cookie("portable_cookie_skins");
                    var defaultPattern = $.cookie("portable_cookie_defaultBg");
                    var pattern = $.cookie("portable_cookie_pattern");

                    if (portable_skins) {
                        $("#main-color").attr("href", portable_skins);

                        $('body').css({
                            backgroundRepeat: "repeat",
                            backgroundPosition: "49% 50%"
                        });

                    }



                    $('#style-switcher a.bg-box').click(function (e) {
                        e.preventDefault();
                        var patternUrl = 'url(img/bg/' + $(this).attr('data-rel') + '.png)';
                        $('body').css({
                            backgroundImage: patternUrl,
                            backgroundRepeat: "repeat"
                        });
                        $.cookie("portable_cookie_bgimage", null);
                        $.cookie("portable_cookie_pattern", patternUrl)
                    });

                    var defaultPattern = $.cookie("portable_cookie_defaultBg");
                    var color = $.cookie("portable_cookie_color");
                    var background = $.cookie("portable_cookie_bgimage");
                    if (color) {
                        $('body').css({
                            backgroundColor: '#' + color,
                            backgroundImage: defaultPattern
                        });
                    }
                    var pattern = $.cookie("portable_cookie_pattern");
                    if (pattern) {
                        $('body').css({
                            backgroundImage: pattern,
                            backgroundRepeat: "repeat",
                            backgroundPosition: "49% 50%",
                            backgroundSize: "auto"


                        });
                    } else {
                        if (background) {
                            $('body').css({
                                backgroundImage: background,
                                backgroundRepeat: "repeat",
                                backgroundPosition: "49% 50%",
                                backgroundSize: "cover"

                            });
                        }
                    }

                    $('#style-switcher a.bg-box').each(function (i) {
                        var backgroundUrl = 'url(img/bg/' + $(this).attr('data-rel') + '.png)';
                        var a = $(this);
                        a.css({
                            backgroundImage: backgroundUrl,
                            backgroundRepeat: "repeat",
                            backgroundAttachment: "local",
                            backgroundSize: "auto"
                        })
                    })

                    $('#style-switcher a.bg-box').click(function (e) {
                        e.preventDefault();
                        var backgroundUrl = 'url(img/bg/' + $(this).attr('data-rel') + '.png)';
                        $('body').css({
                            backgroundImage: backgroundUrl,
                            backgroundRepeat: "repeat",
                            backgroundAttachment: "local",
                            backgroundSize: "auto"


                        });
                        $.cookie("portable_cookie_pattern", backgroundUrl)
                    });

                    var pattern = $.cookie("portable_cookie_bgimage");
                    if (pattern) {
                        $('body').css({
                            backgroundImage: pattern,
                            backgroundRepeat: "repeat",
                            backgroundPosition: "49% 50%",
                            backgroundSize: "auto"


                        });
                    } else {
                        if (background) {
                            $('body').css({
                                backgroundImage: background,
                                backgroundRepeat: "repeat",
                                backgroundPosition: "49% 50%",
                                backgroundSize: "cover"

                            });
                        }
                    }

                    $('#style-switcher a.bgimg-box').each(function (i) {
                        var backgroundUrl = 'url(img/bg/' + $(this).attr('data-rel') + '.jpg)';
                        var a = $(this);
                        a.css({
                            backgroundImage: backgroundUrl,
                            backgroundRepeat: "no-repeat",
                            backgroundAttachment: "fixed",
                            backgroundSize: "cover",
                            backgroundPosition: "49% 50%"
                        })
                    })

                    $('#style-switcher a.bgimg-box').click(function (e) {
                        e.preventDefault();
                        var backgroundUrl = 'url(img/bg/' + $(this).attr('data-rel') + '.jpg)';
                        $('body').css({
                            backgroundImage: backgroundUrl,
                            backgroundRepeat: "no-repeat",
                            backgroundAttachment: "fixed",
                            backgroundSize: "cover",
                            backgroundPosition: "49% 50%"



                        });
                        $.cookie("portable_cookie_bgimage", backgroundUrl)
                    });
                    
                    var background = $.cookie("portable_cookie_bgimage");
                    if (background) {
                        $('body').css({
                            backgroundImage: background,
                            backgroundRepeat: "no-repeat",
                            backgroundAttachment: "fixed",
                            backgroundSize: "cover",
                            backgroundPosition: "49% 50%"


                        });
                    }

                });   
            };

            vm.configureView();
            vm.switcher();
           
        }
        scope: any;
        rootScope: any;
        redirect: (event: any, state: string) => void;
        state: ng.ui.IStateService;
        rootDir: string;
        switcher: () => void;
        configureView: () => void;
    }

    angular.module('CarbajalSalinasApp', ['ui.router', 'kendo.directives', 'ui.bootstrap', 'PostApp', 'ContactApp', 'ngMeta', 'ngRoute', 'Index', 'Home', 'DataServiceModule', 'PostSummaryApp', 'ngMap', 'ngTouch']).controller('CarbajalSalinasAppController', CarbajalSalinasAppController)
}