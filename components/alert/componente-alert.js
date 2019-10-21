angular.
  module('angularApp'). // nombre App
  component('componenteAlert', {  //nombre componente
    templateUrl: './components/alert/template-alert.html',
    bindings:{
        clase: '@',
        texto: '@'
    },
    controller: function AlertController() {    
      console.trace('AlertController');
    } //end controller
  });

 