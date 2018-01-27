/// <reference path="../Scripts/typings/angularjs/angular.d.ts"/>
namespace Index {
    'use strict'
    declare var rootDir: string;
    interface IIndexController {

    }

    export class IndexController implements IIndexController {
        static $inject: Array<string> = ['$scope', '$rootScope', '$timeout', '$state', 'dataService'];
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, $timeout, $state: ng.ui.IStateService, DataService) {
            var vm = this;
            vm.scope = $scope;
            vm.rootScope = $rootScope;
            vm.state = $state;
            vm.rootDir = rootDir;
            vm.language = $.cookie("language");
            vm.displayAlert = false;
            vm.redirect = function (event: any, state) {
                var data = null;
                $($(".active")[0]).removeClass("active");
                $("#" + state + "").addClass("active");

                vm.state.go("" + state + "", { data: data });

            };

            vm.tinyBarManager = function () {
                $("#tinynav1").change(function ($event: any) {
                    var selectedState = "";
                    var data = null;
                    if ($event.target.value == "Contact")
                    {
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

                    if (selectedState)
                    {
                        vm.state.go("" + selectedState + "", { data: data });
                    }

                });

            };

            vm.getMessages = function (errorType: string) {
                var messages = new Array<string>();
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
                    }
                    vm.rootScope.$broadcast('showAlert', { data: data });
                }
                else {
                    var data = {
                        alertType: "danger",
                        messages: vm.getMessages("contactFormError"),
                        displayAlert: false
                    }
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
                    }
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

            vm.showAlert = function (data: any) {
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
                else if (vm.language == "English")  {
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

            vm.changeLanguage = function ($event: any, language: string)
            {
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
                else if (vm.language == "English")
                {
                    window.location.href = "mailto:jose@carbajalsalinas.com?subject=Contact&body=WriteHere";
                }
                

            };

            vm.scope.$on('dataViewChanged', ($event: any, data: any) => {
                vm.updateFields(data.data);
            });

            vm.scope.$on('showAlert', ($event: any, data: any) => {
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
                vm.email = " Email: "
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
                };
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
            }

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
            },200);

        }
        scope: any;
        rootScope: any;
        redirect: (event: any, state: string) => void;
        state: ng.ui.IStateService;
        rootDir: string;
        updateFields: (data: any) => void;
        sendEmail: ($event: any) => void;
        changeLanguage: ($event: any, language: string) => void;
        renderLanguage: () => void;
        setLanguage: () => void;
        detectLanguage: () => void;
        showLanguageSelectionPopUp: () => void;
        showAlert: (data: string) => void;
        alertType: string;
        messages: Array<string>;
        displayAlert: boolean;
        submitContact: () => void;
        contactForm: ng.IFormController;
        showMessage: () => void;
        getMessages: (errorType: string) => Array<string>;
        validateErrors: () => void;
        tinyBarManager: () => void;

        headerTitle1: string;
        domainName: string;
        language: string;
        phone: string;
        email: string;
        emailId: string;
        homeMenu: string;
        postsMenu: string;
        postId: string;
        contactMenu: string;
        description1: string;
        description2: string;
        description3: string;
        description4: string;
        description5: string;
        description11: string;
        description12: string;
        description13: string;
        description14: string;
        description15: string;
        description16: string;
        description17: string;
        description18: string;
        description111: string;
        description112: string;
        description113: string;
        description114: string;
        description115: string;
        subTitle: string;
        subTitleDescription1: string;
        subTitleDescription2: string;
        footerText1: string;
        footerText2: string;
        footerText3: string;
        footerText4: string;
        footerText5: string;
        footerText6: string;
        footerText7: string;
        footerText8: string;
        footerText9: string;
        footerText10: string;
        footerText11: string;
        footerText12: string;
        footerText13: string;
        footerText14: string;
        footerText15: string;
        footerText16: string;
        footerText17: string;
        footerText18: string;
        footerText19: string;
        footerText20: string;
        footerText21: string;
        footerText22: string;
        footerText23: string;
        footerText24: string;
        footerText25: string;
        footerText26: string;
        footerText27: string;
        footerText28: string;
        footerText29: string;
        footerText30: string;
        footerText31: string;
        switcher1: string;
        switcher2: string;
        switcher3: string;
        switcher4: string;
        switcher5: string;
        switcher6: string;
        languageOption1: string;
        languageOption2: string;
    }


    angular.module('Index', []).controller('IndexController', IndexController)
}