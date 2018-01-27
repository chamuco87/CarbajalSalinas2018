/// <reference path="../Scripts/typings/angularjs/angular.d.ts"/>
namespace Home {
    'use strict'
    declare var rootDir: string;
    interface IHomeController {
        
    }

    export class HomeController implements IHomeController {
        static $inject: Array<string> = ['$scope', '$rootScope', '$timeout', '$state', 'dataService', 'ngMeta'];
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, $timeout, $state: ng.ui.IStateService, DataService, ngMeta) {
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
            vm.scope.$on('languageChanged', ($event: any, data: any) => {
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
                    vm.featuredText = "FEATURED WORK"
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
                    vm.newText = "New Modern Functions"
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
                    vm.visitText = "Visit"
                    vm.carbajalText1 = "CarbajalSalinas.com";
                    vm.anyText = "Any Time You Have a New Project";
                    vm.takeText = "Take new challenges is my passion, building your projects is how I build my dreams.";
                    vm.buyText = "buy a Project";
                    vm.learnText = "learn more";

                };

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
                    vm.featuredText = "TRABAJO DESTACADO"
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
                    vm.newText = "Nuevas funciones modernas"
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
                    vm.visitText = "Visita"
                    vm.carbajalText1 = "CarbajalSalinas.com";
                    vm.anyText = "cada vez que tengas un nuevo proyecto";
                    vm.takeText = "Tomar nuevos retos es mi pasión, la construcción de tu proyecto es como construir mis sueños";
                    vm.buyText = "comprar un proyecto";
                    vm.learnText = "aprender mas";
                };
            };


            vm.rootScope.$broadcast('stateChanged', { data: null });
            vm.renderLanguage();
        }
        scope: any;
        rootScope: any;
        state: ng.ui.IStateService;
        rootDir: string;
        language: string;
        renderLanguage: () => void;
        oneText: string;
        netText: string;
        developersText: string;
        highlyText: string;
        carbajalText: string;
        hasText: string;
        powerfulText: string;
        imText: string;
        readText: string;
        freshText: string;
        usingText: string;
        moreText: string;
        cleanText: string;
        withText: string;
        readText1: string;
        doText: string;
        theText: string;
        readText2: string;
        featuredText: string;
        salinasText: string;
        magicText: string;
        stronglyText: string;
        passionText: string;
        iText: string;
        topText: string;
        inText: string;
        professionalText: string;
        usingText1: string;
        bestText: string;
        amText: string;
        whatText: string;
        joseText: string;
        philippText: string;
        bmwText: string;
        heText: string;
        raviText: string;
        infosysText: string;
        aText: string;
        letText: string;
        greatText: string;
        toText: string;
        readyText: string;
        neverText: string;
        newText: string;
        beText: string
        supportText: string;
        youText: string;
        awesomeText: string;
        nowText: string;
        latestText: string;
        withText1: string;
        spareText: string;
        palletizingText: string;
        walmartText: string;
        clusterText: string;
        infosysText1: string;
        seniorText: string;
        shymponyText: string;
        reportingText: string;
        thomsonText: string;
        netText1: string;
        westlawText: string;
        frontText: string;
        councurseText: string;
        andText: string;
        visitText: string
        carbajalText1: string;
        anyText: string;
        takeText: string;
        buyText: string;
        learnText: string;
    }
    

    angular.module('Home', []).controller('HomeController', HomeController)
}