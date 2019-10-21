angular.
  module('angularApp'). // nombre App
  component('componenteBoton', {  //nombre componente
    templateUrl: './components/boton/template.html',
    controller: function BotonController() {
      console.trace('BotonController');
      this.nombre="Pulsar boton";
      this.contador=0;

      //funcion
      this.sumar = function(){
        console.trace('click sumar');
        this.contador++;
      }
    }
  });