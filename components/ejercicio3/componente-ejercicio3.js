angular.module('angularApp'). //nombreApp
   component('componenteEjercicio3', {
    templateUrl: './components/ejercicio3/template-ejercicio3.html',
    controller: function Ejercicio1Controller($scope) {
              $scope.titulo="Ejercicio 3";
              $scope.total = 0;
              $scope.frutasJson = { "frutas":[
                  {
                      "nombre" : "Manzana",
                      "img" : "https://supermercado.eroski.es/images/2388676.jpg",
                      "color": "rojo",
                      "precio": 3.25,
                      "cantidad": 0
                  },
                  {
                      "nombre" : "Pera",
                      "img" : "https://supermercado.eroski.es/images/17210.jpg",
                      "color": "verde",
                      "precio": 2.68,
                      "cantidad": 0
          
                  },
                  {
                      "nombre" : "Fresa",
                      "img" : "https://supermercado.eroski.es/images/17640137.jpg",
                      "color": "rojo",
                      "precio": 6.98,
                      "cantidad": 0
                  }
              ]};
          
              $scope.sumar = function(fj){
                  console.log('click sumar %o', fj);
                  fj.cantidad++;
                  
              };
              $scope.restar = function(fj){
                  console.log('click restar %o', fj);
                  if(fj.cantidad>0){
                      fj.cantidad--;
                  }
                  
              };
              $scope.comprar = function(fj){
                  console.log('click realizar la operacion cantidad * precio');
                  $scope.total += fj.precio * fj.cantidad; 
                  fj.cantidad = 0;       
              };
              $scope.borrar = function(fj){
                  console.log('click borrado');
                  $scope.total = 0;
              };
              $scope.filtro = function(columna){
                  console.log('columna %o', columna);
                  $scope.columna=columna;
                  $scope.orden= !$scope.orden;
                  $scope.flechaNombre= "fa-minus";
                  $scope.flechaPrecio= "fa-minus";
                  if($scope.orden && columna == 'nombre'){
                      $scope.flechaNombre = "fa-sort-alpha-up-alt";
                  } else{
                      $scope.flechaNombre = "fa-sort-alpha-down";
                  }
                  if($scope.orden && columna == 'precio'){
                      $scope.flechaPrecio = "fa-sort-numeric-down-alt";
                  } else{
                      $scope.flechaPrecio = "fa-sort-numeric-up";
                  }
              };
    }
  }); //endController