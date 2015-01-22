(function() {
  'use strict';

  angular.module( 'CvApp', [ 'ngSanitize','ngMaterial' ] )
    .config(AppConfig)
    .controller("MainController", MainController );


  AppConfig.$inject = ['$mdThemingProvider'];
  function AppConfig($mdThemingProvider) {
    $mdThemingProvider.setDefaultTheme('indigo');
  }


  MainController.$inject = ['$http', '$mdSidenav'];
  function MainController($http, $mdSidenav) {
    var vm = this;
    vm.cv = {};
    vm.toggleContact=toggleContact;

    init();

    function init(){
      $http.get('martin-le-bas.en.json').
        success(function(data, status, headers, config) {
          vm.cv=data;
          vm.ready=true;
        }).
        error(function(data) {
        });
    }

    function toggleContact(){
      $mdSidenav('contact').toggle();
    }
  }


})();





