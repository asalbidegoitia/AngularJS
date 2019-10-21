angular.
module('angularApp'). // nombre App
component('componenteTareas', { //nombre componente
  templateUrl: './components/tareas/template.lista-tareas.html',
  controller: function ListadoTareasController($http, $scope) {
    console.trace('ListadoTareasController');

    //propiedades
    $scope.titulo = "Listado tareas";
    $scope.nuevaTarea = "";
    $scope.mensajeValidacion = "";
    $scope.tareas = [];
    $scope.ENDPOINT = "http://localhost:3000/tareas/";

    //eventos del controlador
    this.$onInit = function () {
      console.trace('ListadoTareasController onInit');

      $http.get($scope.ENDPOINT).
      then(function (response) { //success antiguo
        console.trace('peticion GET %s data=%o', $scope.ENDPOINT, response);
        $scope.tareas = response.data;
      }, function (response) { //gestion de error
        console.warn('Tenemos un error %o', response);
      }); //end onInit
    }

    //funciones
    $scope.crearTarea = function () {
      console.trace('click boton crearTarea con descripcion=' + $scope.nuevaTarea);
      //let define dentro de las llaves el ambito correcto para que no se pueda acceder desde fuera
      let nuevaTarea = $scope.nuevaTarea.trim();
      if (nuevaTarea.length <= 2) {
        $scope.mensajeValidacion = "Por favor escribe una descripcion mas larga";
      } else {
        console.trace('llamada post');
        $scope.mensajeValidacion = '';
        let data = {
          "completada": false,
          "descripcion": $scope.nuevaTarea
        };
        $http.post($scope.ENDPOINT, data).
        then(function (response) { //success antiguo
          console.trace('response OK %s data=%o', $scope.ENDPOINT, response);
        }, function (response) { //gestion de errord
          console.warn('Tenemos un error response: %o', response);
        });
      }
    }; // end crearTarea

    $scope.eliminarTarea = function (tarea) {
      console.trace('click eliminarTarea %o', tarea);
      let url = $scope.ENDPOINT + tarea.id;
      $http.delete(url).then(function (response) {
        console.trace('reponse OK data=%o', response);
      }, function (response) {
        console.warn('Tenemos un ERROR response: %o', response)
      });
    }; // eliminarTarea

    $scope.completarTarea = function (tarea) {
      console.trace('click completarTarea %o', tarea);
      let url = $scope.ENDPOINT + tarea.id;
      let data = {
        "id":tarea.id,
        "completada": !tarea.completada,
        "descripcion": tarea.descripcion
      };
      $http.put(url, data).then(function (response) {
        console.trace('reponse OK data=%o', response);
      }, function (response) {
        console.warn('Tenemos un ERROR response: %o', response)
      });
    }; // completarTarea

    $scope.editarTarea = function (tarea) {
      console.trace('click completarTarea %o', tarea);
      let url = $scope.ENDPOINT + tarea.id;
      $http.patch(url, tarea).then(function (response) {
        console.trace('reponse OK data=%o', response);
      }, function (response) {
        console.warn('Tenemos un ERROR response: %o', response)
      });
    }; // editarTarea

  }
});