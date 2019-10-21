angular.module('angularApp'). //nombreApp
   component('componenteEjercicio1', {//nombre componente, para usarlo <componente-ejercicio1>
    templateUrl: './components/ejercicio1/template-ejercicio1.html',
    controller: function Ejercicio1Controller($scope) {
              $scope.titulo="Ejercicio 1";
    }
  });