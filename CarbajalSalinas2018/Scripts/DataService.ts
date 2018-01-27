namespace DataServiceModule {
    declare var rootDir: string;
    interface IDataServiceController {
        
    }

    export class DataServiceController implements IDataServiceController {
        static $inject: Array<string> = ['$http', '$q','$rootScope'];
        constructor($http: ng.IHttpService, $q: ng.IQService, $rootScope) {
            var vm = this;
            vm.getLanguage = function () {
                return vm.language;
            };

            vm.setLanguage = function (language) {
                vm.language = language;
                $.cookie("language", vm.language, { expires: 10 });
            };

            vm.readPost = function (postName: any) {
                window.location.href = "./Post/" + postName + "";
                
            };

        }

        public getLanguage;
        public setLanguage;
        public language;
        public readPost;
    }

    angular.module('DataServiceModule', []).service('dataService', DataServiceController)
}