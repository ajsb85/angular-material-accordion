var controller = function($mdSidenav) {

  this.toggleNavigation = function() {
    $mdSidenav('navigation-drawer').toggle();
  };

};

angular.module('ngMaterialAccordion').controller('AppController', controller);
