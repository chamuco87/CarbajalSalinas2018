var CarbajalSalinasApp;
(function (CarbajalSalinasApp) {
    'use strict';
    var CarbajalSalinasAppController = (function () {
        function CarbajalSalinasAppController($scope, $rootScope, $timeout, $state, DataService) {
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
            vm.scope.$on('stateChanged', function ($event, data) {
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
                        });
                    });
                    $('#style-switcher a.color-box').each(function (i) {
                        var a = $(this);
                        a.css({
                            backgroundRepeat: "repeat",
                            backgroundPosition: "49% 50%"
                        });
                    });
                    var switcher_skins = $('#style-switcher a.color-box');
                    var switcher_link = $('#main-color');
                    switcher_skins.each(function (i) {
                        var color = $(this).attr('data-rel');
                    });
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
                        $.cookie("portable_cookie_pattern", patternUrl);
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
                    }
                    else {
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
                        });
                    });
                    $('#style-switcher a.bg-box').click(function (e) {
                        e.preventDefault();
                        var backgroundUrl = 'url(img/bg/' + $(this).attr('data-rel') + '.png)';
                        $('body').css({
                            backgroundImage: backgroundUrl,
                            backgroundRepeat: "repeat",
                            backgroundAttachment: "local",
                            backgroundSize: "auto"
                        });
                        $.cookie("portable_cookie_pattern", backgroundUrl);
                    });
                    var pattern = $.cookie("portable_cookie_bgimage");
                    if (pattern) {
                        $('body').css({
                            backgroundImage: pattern,
                            backgroundRepeat: "repeat",
                            backgroundPosition: "49% 50%",
                            backgroundSize: "auto"
                        });
                    }
                    else {
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
                        });
                    });
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
                        $.cookie("portable_cookie_bgimage", backgroundUrl);
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
        return CarbajalSalinasAppController;
    }());
    CarbajalSalinasAppController.$inject = ['$scope', '$rootScope', '$timeout', '$state', 'dataService'];
    CarbajalSalinasApp.CarbajalSalinasAppController = CarbajalSalinasAppController;
    angular.module('CarbajalSalinasApp', ['ui.router', 'kendo.directives', 'ui.bootstrap', 'PostApp', 'ContactApp', 'ngMeta', 'ngRoute', 'Index', 'Home', 'DataServiceModule', 'PostSummaryApp', 'ngMap', 'ngTouch']).controller('CarbajalSalinasAppController', CarbajalSalinasAppController);
})(CarbajalSalinasApp || (CarbajalSalinasApp = {}));
var CarbajalSalinasPosts;
(function (CarbajalSalinasPosts) {
    'use strict';
    var CarbajalSalinasPostsController = (function () {
        function CarbajalSalinasPostsController($scope, $rootScope, $timeout, DataService) {
            var vm = this;
            vm.scope = $scope;
            vm.rootScope = $rootScope;
            vm.rootDir = rootDir;
            if (window.location.pathname.split("/")[window.location.pathname.split("/").length - 1].indexOf("Eng") > 0) {
                vm.language = "English";
                DataService.setLanguage(vm.language);
            }
            else {
                vm.language = "Spanish";
                DataService.setLanguage(vm.language);
            }
            vm.displayAlert = false;
            vm.redirect = function (event, state) {
                var data = null;
                $($(".active")[0]).removeClass("active");
                $("#" + state + "").addClass("active");
            };
            vm.tinyBarManager = function () {
                $("#tinynav1").change(function ($event) {
                    var selectedState = "";
                    var data = null;
                    if ($event.target.value == "Contact") {
                        selectedState = "contact";
                        data = null;
                    }
                    else if ($event.target.value == "Posts") {
                        selectedState = "postSummary";
                        data = null;
                    }
                    else if ($event.target.value == "Home") {
                        selectedState = "home";
                        data = null;
                    }
                    if (selectedState) {
                    }
                });
            };
            vm.getMessages = function (errorType) {
                var messages = new Array();
                if (errorType == "contactFormError") {
                    if (vm.language == "Spanish") {
                        messages = ["Favor de llenar todos los campos necesarios."];
                    }
                    else {
                        messages = ["Please fill all the fiels are required."];
                    }
                }
                else if (errorType == "contactFormSuccess") {
                    if (vm.language == "Spanish") {
                        messages = ["Tu mensaje ha sido enviado.", "En breve nos comunicaremos contigo"];
                    }
                    else {
                        messages = ["Your message has been sent.", "We will contact you soon."];
                    }
                }
                return messages;
            };
            vm.validateErrors = function () {
                var errors = vm.scope.contact_form.$error;
                if (!vm.scope.contact_form.$valid) {
                    $(".errorBorder").removeClass("errorBorder");
                    for (var i = 0; i < errors['required'].length; i++) {
                        var id = errors['required'][i].$name;
                        $("#" + id + "").addClass("errorBorder");
                    }
                    var data = {
                        alertType: "danger",
                        messages: vm.getMessages("contactFormError"),
                        displayAlert: true
                    };
                    vm.rootScope.$broadcast('showAlert', { data: data });
                }
                else {
                    var data = {
                        alertType: "danger",
                        messages: vm.getMessages("contactFormError"),
                        displayAlert: false
                    };
                    $(".errorBorder").removeClass("errorBorder");
                    vm.rootScope.$broadcast('showAlert', { data: data });
                }
            };
            vm.submitContact = function () {
                if (vm.scope.contact_form.$valid) {
                    $(".errorBorder").removeClass("errorBorder");
                    vm.contactForm["contact_name"] = "";
                    vm.contactForm["contact_email"] = "";
                    vm.contactForm["contact_message"] = "";
                    vm.scope.contact_form.$setPristine();
                    var data = {
                        alertType: "success",
                        messages: vm.getMessages("contactFormSuccess"),
                        displayAlert: true
                    };
                    $(".errorBorder").removeClass("errorBorder");
                    vm.rootScope.$broadcast('showAlert', { data: data });
                }
                else {
                    vm.validateErrors();
                }
            };
            vm.detectLanguage = function () {
                var langCode = navigator.language.split("-")[0];
                if (langCode == "en") {
                    vm.language = "English";
                    DataService.setLanguage(vm.language);
                }
                else if (langCode == "es") {
                    vm.language = "Spanish";
                    DataService.setLanguage(vm.language);
                }
                else {
                    vm.language = "English";
                    DataService.setLanguage(vm.language);
                }
            };
            vm.showAlert = function (data) {
                vm.alertType = data.alertType;
                vm.messages = data.messages;
                vm.displayAlert = data.displayAlert;
                $timeout(function () {
                    vm.displayAlert = false;
                }, 5000);
            };
            vm.updateFields = function (data) {
                if (vm.language == "Spanish") {
                    vm.subTitle = data.subTitle.Spanish;
                    vm.subTitleDescription1 = data.subTitleDescription1.Spanish;
                    vm.subTitleDescription2 = data.subTitleDescription2.Spanish;
                }
                else if (vm.language == "English") {
                    vm.subTitle = data.subTitle.English;
                    vm.subTitleDescription1 = data.subTitleDescription1.English;
                    vm.subTitleDescription2 = data.subTitleDescription2.English;
                }
                $(".semitransparentbg").children().addClass("ng-hide");
                $timeout(function () {
                    $(".semitransparentbg").children().addClass("ng-show");
                    $(".semitransparentbg").children().removeClass("ng-hide");
                }, 50);
            };
            vm.changeLanguage = function ($event, language) {
                if (language) {
                    vm.language = language;
                    var data = vm.language;
                    vm.renderLanguage();
                    DataService.setLanguage(vm.language);
                    vm.rootScope.$broadcast('languageChanged', { data: data });
                }
            };
            vm.sendEmail = function ($event) {
                if (vm.language == "Spanish") {
                    window.location.href = "mailto:jose@carbajalsalinas.com?subject=Contacto&body=EscribeAqui";
                }
                else if (vm.language == "English") {
                    window.location.href = "mailto:jose@carbajalsalinas.com?subject=Contact&body=WriteHere";
                }
            };
            vm.scope.$on('dataViewChanged', function ($event, data) {
                vm.updateFields(data.data);
            });
            vm.scope.$on('showAlert', function ($event, data) {
                vm.showAlert(data.data);
            });
            vm.renderLanguage = function () {
                if (vm.language == "English") {
                    vm.languageOption1 = "English";
                    vm.languageOption2 = "Spanish";
                    vm.phone = " Phone: (856) 832 7998 ";
                    vm.email = " Email: ";
                    vm.emailId = "jose@carbajalsalinas.com";
                    vm.homeMenu = "Home";
                    vm.postsMenu = "Posts";
                    vm.postId = "Post Example";
                    vm.contactMenu = "Contact";
                    vm.description1 = ".NET & Javascript Developer";
                    vm.description2 = ".NET 4.5 & Javascript";
                    vm.description3 = "AngularJS & Backbone";
                    vm.description4 = "SQL & Entity Framework";
                    vm.description5 = "Bootstrap";
                    vm.description11 = "The Most POWERFUL Applications For You";
                    vm.description12 = "Any Kind of Project";
                    vm.description13 = "Offshore Model Available";
                    vm.description14 = "Latest Technologies";
                    vm.description15 = "The Best";
                    vm.description16 = "Developer";
                    vm.description17 = "to Build your";
                    vm.description18 = "Applications";
                    vm.description111 = "Types of Projects";
                    vm.description112 = "Applications";
                    vm.description113 = "Design";
                    vm.description114 = "Development";
                    vm.description115 = "Support";
                    vm.subTitle = "Posts";
                    vm.subTitleDescription1 = "Where you get all the information you need,";
                    vm.subTitleDescription2 = "at the time you want it.";
                    vm.footerText1 = "The best .NET and Javascript Developer available to build any kind of Application.";
                    vm.footerText2 = "Using the latest technologies I'm sure you will get the best result.";
                    vm.footerText3 = "Made with ";
                    vm.footerText4 = "by CarbajalSalinas.com.";
                    vm.footerText5 = "F";
                    vm.footerText6 = "ind ";
                    vm.footerText7 = "Me";
                    vm.footerText8 = "Address: ";
                    vm.footerText9 = "80 Yorkshire Cir, Ewing NJ.";
                    vm.footerText10 = "Phone: ";
                    vm.footerText11 = "+ 1 (856) 832 7998";
                    vm.footerText12 = "Skype: ";
                    vm.footerText13 = "chamucolol87";
                    vm.footerText14 = "Email: ";
                    vm.footerText15 = "jose@carbajalsalinas.com";
                    vm.footerText16 = "C";
                    vm.footerText17 = "lients' ";
                    vm.footerText18 = "Voice";
                    vm.footerText19 = "Before turning to those moral and mental aspects of the matter which present the greatest difficulties, let the inquirer begin by mastering more elementary problems.";
                    vm.footerText20 = "Jesse T, Los Angeles ";
                    vm.footerText21 = "How often have I said to you that when you have eliminated the impossible, whatever remains, however improbable, must be the truth?";
                    vm.footerText22 = "Ralph G. Flowers ";
                    vm.footerText23 = "Q";
                    vm.footerText24 = "uick";
                    vm.footerText25 = "Message";
                    vm.footerText26 = "Your message has been sent. Thank you!";
                    vm.footerText27 = "Copyright 2017 CarbajalSalinas.com";
                    vm.footerText28 = "Home";
                    vm.footerText29 = "Posts";
                    vm.footerText30 = "Contact";
                    vm.footerText31 = "Sitemap";
                    vm.switcher1 = "Theme Options";
                    vm.switcher2 = "Layout Styles";
                    vm.switcher3 = "BOXED";
                    vm.switcher4 = "SEMIBOXED";
                    vm.switcher5 = "WIDE";
                    vm.switcher6 = "Color Schemes";
                    vm.headerTitle1 = "Welcome to ";
                    vm.domainName = "CarbajalSalinas.com";
                }
                else if (vm.language == "Spanish") {
                    vm.languageOption1 = "Ingles";
                    vm.languageOption2 = "Español";
                    vm.phone = " Teléfono: (856) 832 7998 ";
                    vm.email = " Email: ";
                    vm.emailId = "jose@carbajalsalinas.com";
                    vm.homeMenu = "Home";
                    vm.postsMenu = "Posts";
                    vm.postId = "Ejemplo";
                    vm.contactMenu = "Contacto";
                    vm.description1 = " Desarrollador.NET & Javascript";
                    vm.description2 = ".NET 4.5 & Javascript";
                    vm.description3 = "AngularJS & Backbone";
                    vm.description4 = "SQL & Entity Framework";
                    vm.description5 = "Bootstrap";
                    vm.description11 = "Las Más PODEROSAS Aplicaciones Para Ti";
                    vm.description12 = "Cualquier Tipo de Proyecto";
                    vm.description13 = "Modelo Offshore Disponible";
                    vm.description14 = "Las Últimas Tecnologías";
                    vm.description15 = "El Mejor";
                    vm.description16 = "Desarrollador";
                    vm.description17 = "Para Construir";
                    vm.description18 = "Aplicaciones";
                    vm.description111 = "Tipos de Proyectos";
                    vm.description112 = "Aplicaciones";
                    vm.description113 = "Diseño";
                    vm.description114 = "Desarrollo";
                    vm.description115 = "Apoyo";
                    vm.subTitle = "Posts";
                    vm.subTitleDescription1 = "La informacion que necesitas,";
                    vm.subTitleDescription2 = "al momento que la requieres.";
                    vm.footerText1 = "El mejor desarrollador .NET y Javascript disponible para construir cualquier tipo de aplicacion.";
                    vm.footerText2 = "Con el uso de las ultimas tecnologias seguramente conseguira el mejor resultado.";
                    vm.footerText3 = "Hecho";
                    vm.footerText4 = "por CarbajalSalinas.com.";
                    vm.footerText5 = "E";
                    vm.footerText6 = "ncuentrame ";
                    vm.footerText7 = "";
                    vm.footerText8 = "Direccion: ";
                    vm.footerText9 = "80 Yorkshire Cir, Ewing NJ.";
                    vm.footerText10 = "Telefono: ";
                    vm.footerText11 = "+ 1 (856) 832 7998";
                    vm.footerText12 = "Skype: ";
                    vm.footerText13 = "chamucolol87";
                    vm.footerText14 = "Email: ";
                    vm.footerText15 = "jose@carbajalsalinas.com";
                    vm.footerText16 = "L";
                    vm.footerText17 = "os' ";
                    vm.footerText18 = "Clientes";
                    vm.footerText19 = "Sin lugar a dudas un magnifico desarrollador.";
                    vm.footerText20 = "Jesse T, Los Angeles ";
                    vm.footerText21 = "La atencion mas personal y profesional.";
                    vm.footerText22 = "Ralph G. Flowers ";
                    vm.footerText23 = "M";
                    vm.footerText24 = "ensaje";
                    vm.footerText25 = "Rapido";
                    vm.footerText26 = "Tu mensaje ha sido enviado. Gracias!";
                    vm.footerText27 = "Copyright 2017 CarbajalSalinas.com";
                    vm.footerText28 = "Home";
                    vm.footerText29 = "Posts";
                    vm.footerText30 = "Contacto";
                    vm.footerText31 = "Sitemap";
                    vm.switcher1 = "Opciones";
                    vm.switcher2 = "Estilos de Layout";
                    vm.switcher3 = "CUADRADO";
                    vm.switcher4 = "SEMICUADRADO";
                    vm.switcher5 = "COMPLETO";
                    vm.switcher6 = "Colores";
                    vm.headerTitle1 = "Bienvenido a ";
                    vm.domainName = "CarbajalSalinas.com";
                }
                ;
                vm.setLanguage();
            };
            vm.setLanguage = function () {
                if (vm.language == "Spanish") {
                    $(".English").removeClass("languageSelected");
                    $(".Spanish").addClass("languageSelected");
                }
                else if (vm.language == "English") {
                    $(".Spanish").removeClass("languageSelected");
                    $(".English").addClass("languageSelected");
                }
            };
            if (vm.language) {
                var data = vm.language;
                DataService.setLanguage(vm.language);
                vm.rootScope.$broadcast('languageChanged', { data: data });
            }
            else {
                vm.detectLanguage();
            }
            vm.renderLanguage();
            $timeout(function () {
                vm.tinyBarManager();
            }, 200);
            vm.configureView = function () {
                angular.element(document.getElementsByClassName("pageheader-default")).addClass("ng-show");
                angular.element(document.getElementsByClassName("pageheader-default")).removeClass("ng-hide");
                angular.element(document.getElementsByClassName("carousel-fade")).addClass("ng-hide");
                angular.element(document.getElementsByClassName("carousel-fade")).removeClass("ng-show");
                angular.element($(document)).scrollTop(0);
            };
            vm.scope.$on('stateChanged', function ($event, data) {
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
                        });
                    });
                    $('#style-switcher a.color-box').each(function (i) {
                        var a = $(this);
                        a.css({
                            backgroundRepeat: "repeat",
                            backgroundPosition: "49% 50%"
                        });
                    });
                    var switcher_skins = $('#style-switcher a.color-box');
                    var switcher_link = $('#main-color');
                    switcher_skins.each(function (i) {
                        var color = $(this).attr('data-rel');
                    });
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
                        $.cookie("portable_cookie_pattern", patternUrl);
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
                    }
                    else {
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
                        });
                    });
                    $('#style-switcher a.bg-box').click(function (e) {
                        e.preventDefault();
                        var backgroundUrl = 'url(img/bg/' + $(this).attr('data-rel') + '.png)';
                        $('body').css({
                            backgroundImage: backgroundUrl,
                            backgroundRepeat: "repeat",
                            backgroundAttachment: "local",
                            backgroundSize: "auto"
                        });
                        $.cookie("portable_cookie_pattern", backgroundUrl);
                    });
                    var pattern = $.cookie("portable_cookie_bgimage");
                    if (pattern) {
                        $('body').css({
                            backgroundImage: pattern,
                            backgroundRepeat: "repeat",
                            backgroundPosition: "49% 50%",
                            backgroundSize: "auto"
                        });
                    }
                    else {
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
                        });
                    });
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
                        $.cookie("portable_cookie_bgimage", backgroundUrl);
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
        return CarbajalSalinasPostsController;
    }());
    CarbajalSalinasPostsController.$inject = ['$scope', '$rootScope', '$timeout', 'dataService'];
    CarbajalSalinasPosts.CarbajalSalinasPostsController = CarbajalSalinasPostsController;
    angular.module('CarbajalSalinasPosts', ['ui.bootstrap', 'DataServiceModule', 'ngTouch']).controller('CarbajalSalinasPostsController', CarbajalSalinasPostsController);
})(CarbajalSalinasPosts || (CarbajalSalinasPosts = {}));
var CarbajalSalinasApp;
(function (CarbajalSalinasApp) {
    'use strict';
    var ContactController = (function () {
        function ContactController($scope, $rootScope, $timeout, DataService, ngMeta) {
            var vm = this;
            vm.scope = $scope;
            vm.rootScope = $rootScope;
            vm.rootDir = rootDir;
            vm.language = DataService.getLanguage();
            ngMeta.init();
            ngMeta.setTitle('Contact - CarbajalSalinas.com');
            ngMeta.setTag('og:image', "http://carbajalsalinas.com/Content/Calypso/slide1-2.png");
            ngMeta.setTag('og:description', 'Feel free to contact us any time you have a project.');
            ngMeta.setTag('og:url', 'http://www.carbajalsalinas.com/');
            ngMeta.setTag('og:title', 'Contact - CarbajalSalinas.com');
            ngMeta.setTag('og:locale', 'US');
            ngMeta.setTag('author', 'CarbajalSalinas.com');
            ngMeta.setTag('description', 'Feel free to contact us any time you have a project.');
            vm.rootScope.$broadcast('stateChanged', { data: null });
            vm.scope.$on('languageChanged', function ($event, data) {
                if (data.data) {
                    vm.language = data.data;
                    vm.renderLanguage();
                }
            });
            vm.getMessages = function (errorType) {
                var messages = new Array();
                if (errorType == "contactFormError") {
                    if (vm.language == "Spanish") {
                        messages = ["Favor de llenar todos los campos necesarios."];
                    }
                    else {
                        messages = ["Please fill all the fiels are required."];
                    }
                }
                else if (errorType == "contactFormSuccess") {
                    if (vm.language == "Spanish") {
                        messages = ["Tu mensaje ha sido enviado.", "En breve nos comunicaremos contigo"];
                    }
                    else {
                        messages = ["Your message has been sent.", "We will contact you soon."];
                    }
                }
                return messages;
            };
            vm.validateErrors = function () {
                var errors = vm.scope.contact_form1.$error;
                if (!vm.scope.contact_form1.$valid) {
                    $(".errorBorder").removeClass("errorBorder");
                    for (var i = 0; i < errors['required'].length; i++) {
                        var id = errors['required'][i].$name;
                        $("#" + id + "").addClass("errorBorder");
                    }
                    var data = {
                        alertType: "danger",
                        messages: vm.getMessages("contactFormError"),
                        displayAlert: true
                    };
                    vm.rootScope.$broadcast('showAlert', { data: data });
                }
                else {
                    var data = {
                        alertType: "danger",
                        messages: vm.getMessages("contactFormError"),
                        displayAlert: false
                    };
                    $(".errorBorder").removeClass("errorBorder");
                    vm.rootScope.$broadcast('showAlert', { data: data });
                }
            };
            vm.submitContact = function () {
                if (vm.scope.contact_form1.$valid) {
                    $(".errorBorder").removeClass("errorBorder");
                    vm.contactForm1["contact_name1"] = "";
                    vm.contactForm1["contact_email1"] = "";
                    vm.contactForm1["contact_message1"] = "";
                    vm.scope.contact_form1.$setPristine();
                    var data = {
                        alertType: "success",
                        messages: vm.getMessages("contactFormSuccess"),
                        displayAlert: true
                    };
                    $(".errorBorder").removeClass("errorBorder");
                    vm.rootScope.$broadcast('showAlert', { data: data });
                }
                else {
                    vm.validateErrors();
                }
            };
            vm.renderLanguage = function () {
                if (vm.language == "English") {
                    vm.getText = "Get in Touch";
                    vm.messageText = "Your message has been sent. Thank you!";
                    vm.ifText = "If you want we can give you a personal treatment, don't hesitate to contact us. We will give you the most professional and fast attention.";
                    vm.officeText = "The Office";
                    vm.addressText = "Address: 80 Yorkshire Cir, Ewing, NJ, 08628";
                    vm.phoneText = "Phone: (856) 832-7998";
                    vm.emailText = "Email: joses@carbajalsalinas.com";
                    vm.businessText = "Business Hours";
                    vm.mondayText = "Monday - Friday 9am to 5pm";
                    vm.saturdayText = "Saturday - 9am to 2pm";
                    vm.sundayText = "Sunday - Closed";
                    vm.visitText = "Visit";
                    vm.carbajalText = "CarbajalSalinas.com";
                    vm.anyText = "Any Time You Have a New Project";
                    vm.takeText = "Take new challenges is my passion, building your projects is how I build my dreams.";
                    vm.buyText = "buy a Project";
                    vm.learnText = "learn more";
                }
                ;
                if (vm.language == "Spanish") {
                    vm.getText = "Mantentente en Contacto";
                    vm.ifText = "Si lo que buscas es un trato mas personal, no dudes en contactarnos.Te atenderemos de una manera profesional y expedita.";
                    vm.messageText = "Tu mensaje ha sido enviado. Gracias!";
                    vm.officeText = "La Oficina";
                    vm.addressText = "Direccion: 80 Yorkshire Cir, Ewing, NJ, 08628";
                    vm.phoneText = "Telefono: (856) 832-7998";
                    vm.emailText = "Correo Electronico: jose.carbajal.salinas@gmail.com";
                    vm.businessText = "Horario de Negocios";
                    vm.mondayText = "Lunes - Viernes 9am a 5pm";
                    vm.saturdayText = "Sabado - 9am a 2pm";
                    vm.sundayText = "Domingo - Cerrado";
                    vm.visitText = "Visita";
                    vm.carbajalText = "carbajalsalinas.com";
                    vm.anyText = "Cada Vez Que Tengas Un Nuevo Proyecto";
                    vm.takeText = "Tomar nuevos retos es mi pasion, la construccion de tu proyecto es como construir mis sueños.";
                    vm.buyText = "comprar un proyecto";
                    vm.learnText = "aprender mas";
                }
                ;
            };
            var data = {
                subTitle: { English: "Contact", Spanish: "Contacto" },
                subTitleDescription1: { English: "If you have any doubt or any query,", Spanish: "Si tienes alguna duda o consulta," },
                subTitleDescription2: { English: "don't hesitate to contact us.", Spanish: "no dudes en contactarnos." }
            };
            vm.rootScope.$broadcast('dataViewChanged', { data: data });
            vm.renderLanguage();
        }
        return ContactController;
    }());
    ContactController.$inject = ['$scope', '$rootScope', '$timeout', 'dataService', 'ngMeta'];
    CarbajalSalinasApp.ContactController = ContactController;
    angular.module('ContactApp', []).controller('ContactController', ContactController);
})(CarbajalSalinasApp || (CarbajalSalinasApp = {}));
var DataServiceModule;
(function (DataServiceModule) {
    var DataServiceController = (function () {
        function DataServiceController($http, $q, $rootScope) {
            var vm = this;
            vm.getLanguage = function () {
                return vm.language;
            };
            vm.setLanguage = function (language) {
                vm.language = language;
                $.cookie("language", vm.language, { expires: 10 });
            };
            vm.readPost = function (postName) {
                window.location.href = "./Post/" + postName + "";
            };
        }
        return DataServiceController;
    }());
    DataServiceController.$inject = ['$http', '$q', '$rootScope'];
    DataServiceModule.DataServiceController = DataServiceController;
    angular.module('DataServiceModule', []).service('dataService', DataServiceController);
})(DataServiceModule || (DataServiceModule = {}));
var Home;
(function (Home) {
    'use strict';
    var HomeController = (function () {
        function HomeController($scope, $rootScope, $timeout, $state, DataService, ngMeta) {
            var vm = this;
            vm.scope = $scope;
            vm.rootScope = $rootScope;
            vm.state = $state;
            vm.rootDir = rootDir;
            vm.language = DataService.getLanguage();
            ngMeta.init();
            ngMeta.setTitle('Home - CarbajalSalinas.com');
            ngMeta.setTag('og:image', "http://carbajalsalinas.com/Content/Calypso/desktop3.png");
            ngMeta.setTag('og:description', 'Highly-professional & modern website can be created for you and your business prosperity.');
            ngMeta.setTag('og:url', 'http://www.carbajalsalinas.com/');
            ngMeta.setTag('og:title', 'Home - CarbajalSalinas.com');
            ngMeta.setTag('og:locale', 'US');
            ngMeta.setTag('author', 'CarbajalSalinas.com');
            ngMeta.setTag('description', 'Highly-professional & modern website can be created for you and your business prosperity.');
            window["prerenderReady"] = true;
            vm.scope.$on('languageChanged', function ($event, data) {
                if (data.data) {
                    vm.language = data.data;
                    vm.renderLanguage();
                }
            });
            vm.renderLanguage = function () {
                if (vm.language == "English") {
                    vm.oneText = "ONE OF THE BEST";
                    vm.netText = ".NET & JAVASCRIPT";
                    vm.developersText = "DEVELOPERS";
                    vm.highlyText = "Highly-professional & modern website can be created for you and your business prosperity.";
                    vm.carbajalText = "CarbajalSalinas.com";
                    vm.hasText = "has all the flexibility and features needed for building a top-notch business website.";
                    vm.powerfulText = "Powerful & Beautiful";
                    vm.imText = "I'm very focus in the performance and in the look and fell.";
                    vm.readText = "Read More";
                    vm.freshText = "Fresh & Modern";
                    vm.usingText = "Using latest technologies like AngularJs and Backbone you will be up to date.";
                    vm.moreText = "Read More";
                    vm.cleanText = "Clean Coded";
                    vm.withText = "With highly code standars you will get a easy support and very clean code.";
                    vm.readText1 = "Read More";
                    vm.doText = "DO IT WITH THE BEST";
                    vm.theText = "I'm one of the best developers around the world, my secret is HARDWORK.";
                    vm.readText2 = "Read More";
                    vm.featuredText = "FEATURED WORK";
                    vm.salinasText = "CarbajalSalinas.com offers multiple options and ways of displaying your content in a manner that best suits for you and your customer. Make beautiful and eye catching site with CarbajalSalinas.com today!";
                    vm.magicText = "Magic Code Expert";
                    vm.stronglyText = "I'm strongly oriented to the front end development that will allow you to choose any effect.";
                    vm.passionText = "Passion with App";
                    vm.iText = "I can ensure you custommer will love the app at first sight.";
                    vm.topText = "Top Social Media";
                    vm.inText = "In days like these the development is oriented to the social media, I'm the best creating interactions between your app and the social media.";
                    vm.professionalText = "Professional modern Website";
                    vm.usingText1 = "Using the latest technologies I'm goint to give you the most professional and modern mix to your website.";
                    vm.bestText = "Best choice for your Web";
                    vm.amText = "I am the best option between quality and price, If you choose me your project will be a success for sure.";
                    vm.whatText = "WHAT THEY SAY";
                    vm.joseText = "Jose is one the best resources that I have been working with, he is hard worker and he will make the things happen to make your project succesful .";
                    vm.philippText = "Philipp Lindemann / Project Manager at";
                    vm.bmwText = "BMW";
                    vm.heText = "He is really brilliant to propouse solutions, and he is able to work in team or alone depending on the project, he has a strog commitment with the projects, I can say he can be the difference in a team.";
                    vm.raviText = "Ravi Kumar / Director of";
                    vm.infosysText = "Infosys";
                    vm.aText = "A Playground for Web";
                    vm.letText = "Let me make your web application a exiting experience for the users and this will help you to get a successful bussiness.";
                    vm.greatText = "Great Project, Great Clients";
                    vm.toText = "To achieve important goals in your projects you have to get the bes developers, I am here waiting to hear new offers.";
                    vm.readyText = "Ready to Use Application";
                    vm.neverText = "Never experienced and bug or rework after the release of your app.";
                    vm.newText = "New Modern Functions";
                    vm.beText = "Be sure I will always use the lates technologies to buil the app, with me you will always get any feature you want.";
                    vm.supportText = "Support";
                    vm.youText = "If you have a support project I'm the best managing the offshore and the onsite teams, I will be ensure to accomplish all the SLA's required.";
                    vm.awesomeText = "Awesome Animations";
                    vm.nowText = "Now days the user experience has been enhanced, be sure I am going to do the most exiting experience to the user.";
                    vm.latestText = "LATEST PROJECTS";
                    vm.withText1 = "With 5 plus years of professional experience I have been working for a big companies like BMW, P&G, Infosys, Walmart, Shympony Health Solutions and Thomson Reuters, working in countries like Mexico, Costa Rica and US alway working with the offshore team located in different parts of India.";
                    vm.spareText = "Spare Parts App";
                    vm.palletizingText = "Palletizing App";
                    vm.walmartText = "Walmart";
                    vm.clusterText = "Cluster Lead";
                    vm.infosysText1 = "Infosys";
                    vm.seniorText = "Senior Developer";
                    vm.shymponyText = "Shympony Health";
                    vm.reportingText = "Reporting Tool";
                    vm.thomsonText = "Thomson Reuters";
                    vm.netText1 = ".NET Developer";
                    vm.westlawText = "WestLaw Next";
                    vm.frontText = "Front-end developer";
                    vm.councurseText = "Councurse";
                    vm.andText = ".NET and Front-end Developer";
                    vm.visitText = "Visit";
                    vm.carbajalText1 = "CarbajalSalinas.com";
                    vm.anyText = "Any Time You Have a New Project";
                    vm.takeText = "Take new challenges is my passion, building your projects is how I build my dreams.";
                    vm.buyText = "buy a Project";
                    vm.learnText = "learn more";
                }
                ;
                if (vm.language == "Spanish") {
                    vm.oneText = "Uno de los mejores";
                    vm.netText = "Desarrolladores en .NET y Javascript";
                    vm.developersText = "DESARROLLADORES";
                    vm.highlyText = "Altamente profesional y moderno sitio web puede ser creado para ti y la prosperidad de tu negocio";
                    vm.carbajalText = "CarbajalSalinas.com";
                    vm.hasText = "tiene toda la flexibilidad y características necesarias para construir una página web de negocios de primera categoría.";
                    vm.powerfulText = "HERMOSAS Y PODEROSAS";
                    vm.imText = "Estoy muy enfocado en el rendimiento y en el aspecto.";
                    vm.readText = "Leer Mas";
                    vm.freshText = "FRESCO Y MODERNO";
                    vm.usingText = "Usando últimas tecnologías como “AngularJs” y  “Backbone” estarás al día";
                    vm.moreText = "Leer Mas";
                    vm.cleanText = "LIMPIO CODIFICADO";
                    vm.withText = "Con estándares de alto código obtendrás un soporte fácil y código muy limpio.";
                    vm.readText1 = "Leer Mas";
                    vm.doText = "HAZLO CON EL MEJOR";
                    vm.theText = "Soy uno de los mejores desarrolladores alrededor del mundo, mi secreto es el TRABAJO DURO.";
                    vm.readText2 = "Leer Mas";
                    vm.featuredText = "TRABAJO DESTACADO";
                    vm.salinasText = "Carbajalsalinas.com ofrece múltiples opciones y formas de mostrar su contenido de la manera que mejor se adapte a usted y sus clientes. ¡haga hermoso y llamativo con carbajalsalinas.com hoy!";
                    vm.magicText = "Experto en Magic Code";
                    vm.stronglyText = "Estoy fuertemente orientado al desarrollo de interfaz que le permitirá elegir cualquier efecto.";
                    vm.passionText = "Pasión con las APLICACIONES";
                    vm.iText = "Puedo asegurarle que su cliente amara la aplicación a primera vista.";
                    vm.topText = "Top Social Media";
                    vm.inText = "En días como hoy el desarrollo es orientado asía las redes sociales. soy el mejor creando interacciones entre tus aplicaciones y las redes sociales.";
                    vm.professionalText = "Sitio web moderno y profesional";
                    vm.usingText1 = "Usando las últimas tecnologías, voy a darte la mezcla más moderna y profesional a tu sitio web.";
                    vm.bestText = "La mejor elección para tu sitio web";
                    vm.amText = "Soy la mejor opción entre calidad y precio, si tú me eliges tu proyecto será un éxito de seguro.";
                    vm.whatText = "QUE DICEN ELLOS";
                    vm.joseText = "José es uno de los mejores recursos con los que he estado trabajando, es trabajador y hará que las cosas sucedan para que tu proyecto sea exitoso.";
                    vm.philippText = "Philipp Lindemann / Gerente de Proyectos en.";
                    vm.bmwText = "BMW";
                    vm.heText = "Es realmente brillante para propugnar soluciones, y es capaz de trabajar en equipo o solo dependiendo del proyecto, tiene un fuerte compromiso con los proyectos, puedo decir que puede ser la diferencia en un equipo.";
                    vm.raviText = "Ravi Kumar / Director de";
                    vm.infosysText = "Infosys";
                    vm.aText = "Un patio de recreo para la web";
                    vm.letText = "Permítanme hacer su aplicación web una emocionante experiencia para los usuarios y esto le ayudara a tener un negocio exitoso.";
                    vm.greatText = "Gran proyecto, Grandes clientes";
                    vm.toText = "Para alcanzar metas importantes en sus proyectos usted tiene conseguir a los mejores desarrolladores. Estoy aquí esperando oír nuevas ofertas.";
                    vm.readyText = "Aplicación lista para usar";
                    vm.neverText = "Nunca rexperimentando, errores o reelaboración después del lanzamiento de su aplicación.";
                    vm.newText = "Nuevas funciones modernas";
                    vm.beText = "Confíe que yo siempre usare las últimas tecnologías para construir las aplicaciones, conmigo siempre obtendrá cualquier característica que desee.";
                    vm.supportText = "Apoyo";
                    vm.youText = "Si usted tiene un proyecto de apoyo que soy la mejor gestión de offshore y los equipos en el lugar, me aseguraré de cumplir con todos los SLA necesarios.";
                    vm.awesomeText = "Impresionantes animaciones";
                    vm.nowText = "Hoy en día la experiencia del usuario se ha mejorado, confié que de que voy a hacer la experiencia mas emocionante para el usuario.";
                    vm.latestText = "ÚLTIMOS PROYECTOS";
                    vm.withText1 = "Con más de 5 años de experiencia profesional, he estado trabajando para compañías como BMW, P & G, Infosys, Walmart, Shympony Health Solutions y Thomson Reuters trabajando en países como México, Costa Rica y EE.UU. Siempre trabajando con el equipo offshore ubicado en diferentes partes de la India.";
                    vm.spareText = "Spare Parts App";
                    vm.palletizingText = "Palletizing App";
                    vm.walmartText = "Walmart";
                    vm.clusterText = "Cluster Lead";
                    vm.infosysText1 = "Infosys";
                    vm.seniorText = "Senior Developer";
                    vm.shymponyText = "Shympony Health";
                    vm.reportingText = "Reporting Tool";
                    vm.thomsonText = "Thomson Reuters";
                    vm.netText1 = ".NET Desarrollador";
                    vm.westlawText = "WestLaw Next";
                    vm.frontText = "Front-end developer";
                    vm.councurseText = "Councurse";
                    vm.andText = ".NET and Front-end Developer";
                    vm.visitText = "Visita";
                    vm.carbajalText1 = "CarbajalSalinas.com";
                    vm.anyText = "cada vez que tengas un nuevo proyecto";
                    vm.takeText = "Tomar nuevos retos es mi pasión, la construcción de tu proyecto es como construir mis sueños";
                    vm.buyText = "comprar un proyecto";
                    vm.learnText = "aprender mas";
                }
                ;
            };
            vm.rootScope.$broadcast('stateChanged', { data: null });
            vm.renderLanguage();
        }
        return HomeController;
    }());
    HomeController.$inject = ['$scope', '$rootScope', '$timeout', '$state', 'dataService', 'ngMeta'];
    Home.HomeController = HomeController;
    angular.module('Home', []).controller('HomeController', HomeController);
})(Home || (Home = {}));
var Index;
(function (Index) {
    'use strict';
    var IndexController = (function () {
        function IndexController($scope, $rootScope, $timeout, $state, DataService) {
            var vm = this;
            vm.scope = $scope;
            vm.rootScope = $rootScope;
            vm.state = $state;
            vm.rootDir = rootDir;
            vm.language = $.cookie("language");
            vm.displayAlert = false;
            vm.redirect = function (event, state) {
                var data = null;
                $($(".active")[0]).removeClass("active");
                $("#" + state + "").addClass("active");
                vm.state.go("" + state + "", { data: data });
            };
            vm.tinyBarManager = function () {
                $("#tinynav1").change(function ($event) {
                    var selectedState = "";
                    var data = null;
                    if ($event.target.value == "Contact") {
                        selectedState = "contact";
                        data = null;
                    }
                    else if ($event.target.value == "Posts") {
                        selectedState = "postSummary";
                        data = null;
                    }
                    else if ($event.target.value == "Home") {
                        selectedState = "home";
                        data = null;
                    }
                    if (selectedState) {
                        vm.state.go("" + selectedState + "", { data: data });
                    }
                });
            };
            vm.getMessages = function (errorType) {
                var messages = new Array();
                if (errorType == "contactFormError") {
                    if (vm.language == "Spanish") {
                        messages = ["Favor de llenar todos los campos necesarios."];
                    }
                    else {
                        messages = ["Please fill all the fiels are required."];
                    }
                }
                else if (errorType == "contactFormSuccess") {
                    if (vm.language == "Spanish") {
                        messages = ["Tu mensaje ha sido enviado.", "En breve nos comunicaremos contigo"];
                    }
                    else {
                        messages = ["Your message has been sent.", "We will contact you soon."];
                    }
                }
                return messages;
            };
            vm.validateErrors = function () {
                var errors = vm.scope.contact_form.$error;
                if (!vm.scope.contact_form.$valid) {
                    $(".errorBorder").removeClass("errorBorder");
                    for (var i = 0; i < errors['required'].length; i++) {
                        var id = errors['required'][i].$name;
                        $("#" + id + "").addClass("errorBorder");
                    }
                    var data = {
                        alertType: "danger",
                        messages: vm.getMessages("contactFormError"),
                        displayAlert: true
                    };
                    vm.rootScope.$broadcast('showAlert', { data: data });
                }
                else {
                    var data = {
                        alertType: "danger",
                        messages: vm.getMessages("contactFormError"),
                        displayAlert: false
                    };
                    $(".errorBorder").removeClass("errorBorder");
                    vm.rootScope.$broadcast('showAlert', { data: data });
                }
            };
            vm.submitContact = function () {
                if (vm.scope.contact_form.$valid) {
                    $(".errorBorder").removeClass("errorBorder");
                    vm.contactForm["contact_name"] = "";
                    vm.contactForm["contact_email"] = "";
                    vm.contactForm["contact_message"] = "";
                    vm.scope.contact_form.$setPristine();
                    var data = {
                        alertType: "success",
                        messages: vm.getMessages("contactFormSuccess"),
                        displayAlert: true
                    };
                    $(".errorBorder").removeClass("errorBorder");
                    vm.rootScope.$broadcast('showAlert', { data: data });
                }
                else {
                    vm.validateErrors();
                }
            };
            vm.detectLanguage = function () {
                var langCode = navigator.language.split("-")[0];
                if (langCode == "en") {
                    vm.language = "English";
                    DataService.setLanguage(vm.language);
                }
                else if (langCode == "es") {
                    vm.language = "Spanish";
                    DataService.setLanguage(vm.language);
                }
                else {
                    vm.language = "English";
                    DataService.setLanguage(vm.language);
                }
            };
            vm.showAlert = function (data) {
                vm.alertType = data.alertType;
                vm.messages = data.messages;
                vm.displayAlert = data.displayAlert;
                $timeout(function () {
                    vm.displayAlert = false;
                }, 5000);
            };
            vm.updateFields = function (data) {
                if (vm.language == "Spanish") {
                    vm.subTitle = data.subTitle.Spanish;
                    vm.subTitleDescription1 = data.subTitleDescription1.Spanish;
                    vm.subTitleDescription2 = data.subTitleDescription2.Spanish;
                }
                else if (vm.language == "English") {
                    vm.subTitle = data.subTitle.English;
                    vm.subTitleDescription1 = data.subTitleDescription1.English;
                    vm.subTitleDescription2 = data.subTitleDescription2.English;
                }
                $(".semitransparentbg").children().addClass("ng-hide");
                $timeout(function () {
                    $(".semitransparentbg").children().addClass("ng-show");
                    $(".semitransparentbg").children().removeClass("ng-hide");
                }, 50);
            };
            vm.changeLanguage = function ($event, language) {
                if (language) {
                    vm.language = language;
                    var data = vm.language;
                    vm.renderLanguage();
                    DataService.setLanguage(vm.language);
                    vm.rootScope.$broadcast('languageChanged', { data: data });
                }
            };
            vm.sendEmail = function ($event) {
                if (vm.language == "Spanish") {
                    window.location.href = "mailto:jose@carbajalsalinas.com?subject=Contacto&body=EscribeAqui";
                }
                else if (vm.language == "English") {
                    window.location.href = "mailto:jose@carbajalsalinas.com?subject=Contact&body=WriteHere";
                }
            };
            vm.scope.$on('dataViewChanged', function ($event, data) {
                vm.updateFields(data.data);
            });
            vm.scope.$on('showAlert', function ($event, data) {
                vm.showAlert(data.data);
            });
            vm.renderLanguage = function () {
                if (vm.language == "English") {
                    vm.languageOption1 = "English";
                    vm.languageOption2 = "Spanish";
                    vm.phone = " Phone: (856) 832 7998 ";
                    vm.email = " Email: ";
                    vm.emailId = "jose@carbajalsalinas.com";
                    vm.homeMenu = "Home";
                    vm.postsMenu = "Posts";
                    vm.postId = "Post Example";
                    vm.contactMenu = "Contact";
                    vm.description1 = ".NET & Javascript Developer";
                    vm.description2 = ".NET 4.5 & Javascript";
                    vm.description3 = "AngularJS & Backbone";
                    vm.description4 = "SQL & Entity Framework";
                    vm.description5 = "Bootstrap";
                    vm.description11 = "The Most POWERFUL Applications For You";
                    vm.description12 = "Any Kind of Project";
                    vm.description13 = "Offshore Model Available";
                    vm.description14 = "Latest Technologies";
                    vm.description15 = "The Best";
                    vm.description16 = "Developer";
                    vm.description17 = "to Build your";
                    vm.description18 = "Applications";
                    vm.description111 = "Types of Projects";
                    vm.description112 = "Applications";
                    vm.description113 = "Design";
                    vm.description114 = "Development";
                    vm.description115 = "Support";
                    vm.subTitle = "Posts";
                    vm.subTitleDescription1 = "Where you get all the information you need,";
                    vm.subTitleDescription2 = "at the time you want it.";
                    vm.footerText1 = "The best .NET and Javascript Developer available to build any kind of Application.";
                    vm.footerText2 = "Using the latest technologies I'm sure you will get the best result.";
                    vm.footerText3 = "Made with ";
                    vm.footerText4 = "by CarbajalSalinas.com.";
                    vm.footerText5 = "F";
                    vm.footerText6 = "ind ";
                    vm.footerText7 = "Me";
                    vm.footerText8 = "Address: ";
                    vm.footerText9 = "80 Yorkshire Cir, Ewing NJ.";
                    vm.footerText10 = "Phone: ";
                    vm.footerText11 = "+ 1 (856) 832 7998";
                    vm.footerText12 = "Skype: ";
                    vm.footerText13 = "chamucolol87";
                    vm.footerText14 = "Email: ";
                    vm.footerText15 = "jose@carbajalsalinas.com";
                    vm.footerText16 = "C";
                    vm.footerText17 = "lients' ";
                    vm.footerText18 = "Voice";
                    vm.footerText19 = "Before turning to those moral and mental aspects of the matter which present the greatest difficulties, let the inquirer begin by mastering more elementary problems.";
                    vm.footerText20 = "Jesse T, Los Angeles ";
                    vm.footerText21 = "How often have I said to you that when you have eliminated the impossible, whatever remains, however improbable, must be the truth?";
                    vm.footerText22 = "Ralph G. Flowers ";
                    vm.footerText23 = "Q";
                    vm.footerText24 = "uick";
                    vm.footerText25 = "Message";
                    vm.footerText26 = "Your message has been sent. Thank you!";
                    vm.footerText27 = "Copyright 2017 CarbajalSalinas.com";
                    vm.footerText28 = "Home";
                    vm.footerText29 = "Posts";
                    vm.footerText30 = "Contact";
                    vm.footerText31 = "Sitemap";
                    vm.switcher1 = "Theme Options";
                    vm.switcher2 = "Layout Styles";
                    vm.switcher3 = "BOXED";
                    vm.switcher4 = "SEMIBOXED";
                    vm.switcher5 = "WIDE";
                    vm.switcher6 = "Color Schemes";
                    vm.headerTitle1 = "Welcome to ";
                    vm.domainName = "CarbajalSalinas.com";
                }
                else if (vm.language == "Spanish") {
                    vm.languageOption1 = "Ingles";
                    vm.languageOption2 = "Español";
                    vm.phone = " Teléfono: (856) 832 7998 ";
                    vm.email = " Email: ";
                    vm.emailId = "jose@carbajalsalinas.com";
                    vm.homeMenu = "Home";
                    vm.postsMenu = "Posts";
                    vm.postId = "Ejemplo";
                    vm.contactMenu = "Contacto";
                    vm.description1 = " Desarrollador.NET & Javascript";
                    vm.description2 = ".NET 4.5 & Javascript";
                    vm.description3 = "AngularJS & Backbone";
                    vm.description4 = "SQL & Entity Framework";
                    vm.description5 = "Bootstrap";
                    vm.description11 = "Las Más PODEROSAS Aplicaciones Para Ti";
                    vm.description12 = "Cualquier Tipo de Proyecto";
                    vm.description13 = "Modelo Offshore Disponible";
                    vm.description14 = "Las Últimas Tecnologías";
                    vm.description15 = "El Mejor";
                    vm.description16 = "Desarrollador";
                    vm.description17 = "Para Construir";
                    vm.description18 = "Aplicaciones";
                    vm.description111 = "Tipos de Proyectos";
                    vm.description112 = "Aplicaciones";
                    vm.description113 = "Diseño";
                    vm.description114 = "Desarrollo";
                    vm.description115 = "Apoyo";
                    vm.subTitle = "Posts";
                    vm.subTitleDescription1 = "La informacion que necesitas,";
                    vm.subTitleDescription2 = "al momento que la requieres.";
                    vm.footerText1 = "El mejor desarrollador .NET y Javascript disponible para construir cualquier tipo de aplicacion.";
                    vm.footerText2 = "Con el uso de las ultimas tecnologias seguramente conseguira el mejor resultado.";
                    vm.footerText3 = "Hecho";
                    vm.footerText4 = "por CarbajalSalinas.com.";
                    vm.footerText5 = "E";
                    vm.footerText6 = "ncuentrame ";
                    vm.footerText7 = "";
                    vm.footerText8 = "Direccion: ";
                    vm.footerText9 = "80 Yorkshire Cir, Ewing NJ.";
                    vm.footerText10 = "Telefono: ";
                    vm.footerText11 = "+ 1 (856) 832 7998";
                    vm.footerText12 = "Skype: ";
                    vm.footerText13 = "chamucolol87";
                    vm.footerText14 = "Email: ";
                    vm.footerText15 = "jose@carbajalsalinas.com";
                    vm.footerText16 = "L";
                    vm.footerText17 = "os' ";
                    vm.footerText18 = "Clientes";
                    vm.footerText19 = "Sin lugar a dudas un magnifico desarrollador.";
                    vm.footerText20 = "Jesse T, Los Angeles ";
                    vm.footerText21 = "La atencion mas personal y profesional.";
                    vm.footerText22 = "Ralph G. Flowers ";
                    vm.footerText23 = "M";
                    vm.footerText24 = "ensaje";
                    vm.footerText25 = "Rapido";
                    vm.footerText26 = "Tu mensaje ha sido enviado. Gracias!";
                    vm.footerText27 = "Copyright 2017 CarbajalSalinas.com";
                    vm.footerText28 = "Home";
                    vm.footerText29 = "Posts";
                    vm.footerText30 = "Contacto";
                    vm.footerText31 = "Sitemap";
                    vm.switcher1 = "Opciones";
                    vm.switcher2 = "Estilos de Layout";
                    vm.switcher3 = "CUADRADO";
                    vm.switcher4 = "SEMICUADRADO";
                    vm.switcher5 = "COMPLETO";
                    vm.switcher6 = "Colores";
                    vm.headerTitle1 = "Bienvenido a ";
                    vm.domainName = "CarbajalSalinas.com";
                }
                ;
                vm.setLanguage();
            };
            vm.setLanguage = function () {
                if (vm.language == "Spanish") {
                    $(".English").removeClass("languageSelected");
                    $(".Spanish").addClass("languageSelected");
                }
                else if (vm.language == "English") {
                    $(".Spanish").removeClass("languageSelected");
                    $(".English").addClass("languageSelected");
                }
            };
            if (vm.language) {
                var data = vm.language;
                DataService.setLanguage(vm.language);
                vm.rootScope.$broadcast('languageChanged', { data: data });
            }
            else {
                vm.detectLanguage();
            }
            vm.renderLanguage();
            $timeout(function () {
                vm.tinyBarManager();
            }, 200);
        }
        return IndexController;
    }());
    IndexController.$inject = ['$scope', '$rootScope', '$timeout', '$state', 'dataService'];
    Index.IndexController = IndexController;
    angular.module('Index', []).controller('IndexController', IndexController);
})(Index || (Index = {}));
var CarbajalSalinasApp;
(function (CarbajalSalinasApp) {
    'use strict';
    var PostController = (function () {
        function PostController($scope, $rootScope, $timeout, DataService, $templateCache, $http, ngMeta) {
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
            };
            vm.rootScope.$broadcast('dataViewChanged', { data: data });
            if (vm.scope.$parent.postId) {
                $http.get('/Posts/' + vm.scope.$parent.postId + '.html').then(function (response) {
                    $("#postId").append(response.data);
                });
            }
        }
        return PostController;
    }());
    PostController.$inject = ['$scope', '$rootScope', '$timeout', 'dataService', '$templateCache', '$http', 'ngMeta'];
    CarbajalSalinasApp.PostController = PostController;
    angular.module('PostApp', []).controller('PostController', PostController);
})(CarbajalSalinasApp || (CarbajalSalinasApp = {}));
var CarbajalSalinasApp;
(function (CarbajalSalinasApp) {
    'use strict';
    var PostSummaryController = (function () {
        function PostSummaryController($scope, $rootScope, $timeout, DataService, $state, ngMeta) {
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
            vm.scope.$on('languageChanged', function ($event, data) {
                if (data.data) {
                    vm.language = data.data;
                    vm.renderLanguage();
                }
            });
            var data = {
                subTitle: { English: "Posts", Spanish: "Posts" },
                subTitleDescription1: { English: "Where you get all the information you need,", Spanish: "La informacion que necesitas," },
                subTitleDescription2: { English: "at the time you want it.", Spanish: "al momento que la requieres." }
            };
            vm.rootScope.$broadcast('dataViewChanged', { data: data });
            vm.readMoreClick = function ($event) {
                var postId = null;
                if (vm.language == "English") {
                    postId = "" + $event.currentTarget.id + "Eng";
                }
                else if (vm.language == "Spanish") {
                    postId = $event.currentTarget.id;
                }
                ;
                DataService.readPost(postId);
            };
            vm.renderLanguage = function () {
                if (vm.language == "English") {
                    vm.readText = "Read More";
                }
                else if (vm.language == "Spanish") {
                    vm.readText = "Leer Mas";
                }
                ;
            };
            vm.pageCliked = function ($event, action) {
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
                else if (action == 'Next') {
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
                vm.pages = Array();
                vm.totalNumberPosts = vm.postArrayOriginal.length;
                vm.totalNumberPages = Math.ceil((vm.totalNumberPosts / 6));
                for (var i = 1; i <= vm.totalNumberPages; i++) {
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
            };
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
        return PostSummaryController;
    }());
    PostSummaryController.$inject = ['$scope', '$rootScope', '$timeout', 'dataService', '$state', 'ngMeta'];
    CarbajalSalinasApp.PostSummaryController = PostSummaryController;
    angular.module('PostSummaryApp', []).controller('PostSummaryController', PostSummaryController);
})(CarbajalSalinasApp || (CarbajalSalinasApp = {}));
var CarbajalSalinasApp;
(function (CarbajalSalinasApp) {
    angular.module("CarbajalSalinasApp")
        .config([
        "$locationProvider",
        "$stateProvider",
        "$urlRouterProvider",
        function ($locationProvider, $stateProvider, $urlRouterProvider) {
            'use strict';
            $stateProvider.
                state('home', {
                url: "/",
                templateUrl: './UIViews/Home.html',
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
            });
            $urlRouterProvider.otherwise("/");
            $locationProvider.html5Mode(true);
            $locationProvider.hashPrefix('!');
        }
    ]);
})(CarbajalSalinasApp || (CarbajalSalinasApp = {}));
//# sourceMappingURL=BulkScripts.js.map