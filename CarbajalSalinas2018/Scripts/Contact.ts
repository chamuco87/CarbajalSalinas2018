/// <reference path="../Scripts/typings/angularjs/angular.d.ts"/>
namespace CarbajalSalinasApp {
    'use strict'
    declare var rootDir: string;
    interface IContactController {
        
    }

    export class ContactController implements IContactController {
        static $inject: Array<string> = ['$scope', '$rootScope', '$timeout', 'dataService', 'ngMeta'];
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, $timeout, DataService, ngMeta) {
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

            vm.scope.$on('languageChanged', ($event: any, data: any) => {
                if (data.data) {
                    vm.language = data.data;
                    vm.renderLanguage();
                }
            });

            vm.getMessages = function (errorType: string) {
                var messages = new Array<string>();
                if (errorType == "contactFormError")
                {
                    if (vm.language == "Spanish") {
                        messages = ["Favor de llenar todos los campos necesarios."];
                    }
                    else {
                        messages = ["Please fill all the fiels are required."];
                    }
                }
                else if (errorType == "contactFormSuccess") {
                    if (vm.language == "Spanish") {
                        messages = ["Tu mensaje ha sido enviado.","En breve nos comunicaremos contigo"];
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
                if (vm.scope.contact_form1.$valid)
                {
                    $(".errorBorder").removeClass("errorBorder");
                    vm.contactForm1["contact_name1"] = "";
                    vm.contactForm1["contact_email1"] = "";
                    vm.contactForm1["contact_message1"] = "";
                    vm.scope.contact_form1.$setPristine();
                    var data = {
                        alertType: "success",
                        messages: vm.getMessages("contactFormSuccess"),
                        displayAlert: true
                    }
                    $(".errorBorder").removeClass("errorBorder");
                    vm.rootScope.$broadcast('showAlert', { data: data });
                }
                else
                {
                    
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

                };

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
                };
            };

            var data = {
                subTitle: { English: "Contact", Spanish:"Contacto"},
                subTitleDescription1: { English: "If you have any doubt or any query,", Spanish: "Si tienes alguna duda o consulta,"},
                subTitleDescription2: { English: "don't hesitate to contact us.", Spanish: "no dudes en contactarnos."}
            }
            vm.rootScope.$broadcast('dataViewChanged', { data: data });
            vm.renderLanguage();
        }

        scope: any;
        rootScope: any;
        rootDir: string;
        language: string;
        renderLanguage: () => void;
        submitContact: () => void;
        contactForm1: ng.IFormController;
        showMessage: () => void;
        getMessages: (errorType: string) => Array<string>;
        validateErrors: () => void;

        getText: string;
        messageText: string;
        ifText: string;
        officeText: string;
        addressText: string;
        phoneText: string;
        emailText: string;
        businessText: string;
        mondayText: string;
        saturdayText: string;
        sundayText: string;
        visitText: string;
        carbajalText: string;
        anyText: string;
        takeText: string;
        buyText: string;
        learnText: string;

    }

    angular.module('ContactApp', []).controller('ContactController', ContactController)
}