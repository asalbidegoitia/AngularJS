var app = angular.module('angularApp', ['ngRoute', 'ngSanitize']);
/**
 * Servicio para constantes
 */
app.constant("servicioConstantes", {
  "titulo": "AngularApp",
  "idioma": "es-Es",
  "version": "1.0",
  "autor": "Asier Salbidegoitia",
  "github": "https://github.com/asalbidegoitia/EjerciciosAngularJS"
});

/**
 * Providers (es como un DAO para el servicio Rest)
 */

app.service("cancionProvider", CancionProvider);
app.service("pokemonProvider", PokemonProvider);


/**
 * Ejemplo servicio a traves de una clase
 */
//clase rectangulo
function Rectangulo() {
  this.ancho = 0;
  this.alto = 0;

  this.setAncho = function (ancho) {
    this.ancho = ancho;
  }

  this.setAlto = function (alto) {
    this.alto = alto;
  }

  this.getArea = function () {
    return this.ancho * this.alto;
  }
}
/**
 * Definir servicio
 */

app.service("rectanguloService", Rectangulo);


/**
 * Definir filtro en la app
 */

// Filtro personalizado para Capitalizar la primera letra de un String
app.filter("capitalizar", function capitalizarFilter(cadena){
  if(cadena != undefined && typeof cadena == 'string'){ 
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
  }else{
    return "";
  }
});

                        
/*Controladores para el componente ejercicio2*/
app.controller(
  'profesorController', //nombre controlador
   function($scope, $timeout){        //la programacion del controlador
      
      //variables del modelo
      $scope.esVisible = false;
      $scope.animacion= ""
      $scope.editando={};
      $scope.profesor = {    //ambito global de la app
          nombre: "Profesor Frink",
          bio: "Saludos estudiante, mi nombre es Frink, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
          edad: 47,
          foto: "img/frink.png"
      };

      //funciones del controlador
      $scope.editar = function(){
          console.trace('click boton editar');
          $scope.esVisible = true;
          $scope.animacion= "animated fadeInUp"
          angular.copy($scope.profesor, $scope.editando);
      }
  
      $scope.cancelar = function(){
          console.trace('click boton cancelar');
          $scope.animacion= "animated fadeInOut"
          $timeout(function(){
              console.debug('esVisible = false');
              $scope.esVisible = false;
          },500);
          $scope.editando={};
      }

      $scope.guardar = function(){
          console.trace('click boton cancelar');
          $scope.animacion= "animated fadeInOut"
          angular.copy($scope.profesor, $scope.editando);
      }
});
//end profesorController

app.controller('videoController', function($scope, $timeout){
  $scope.animacion="";
  $scope.video = {
      id: 1,
      titulo: "Red Hot Chili Peppers - Dark Necessities2",
      codigo: "Q0oIoR9mLwc",
      categoria: {
          id:3,
          nombre: "Musica"
      },
      usuario: {
          id:23,
          nombre: "Ramoncin"
      },
      likes: 5
  };

  $scope.sumarLike= function(){
      console.trace('click boton like');
      $scope.video.likes++;
      $scope.animacion ="animated pulse";
      $timeout(function(){
          $scope.animacion="";
      },1000);
  }
});
//end videoController


app.controller('frutasEjer2Controller', function($scope){
  $scope.frutaSeleccionada = "";
  $scope.frutas=["Manzana","Pera","Kiwi"];
  $scope.frutasJson = {"frutas":[
                          {
                              "nombre":"Manzana",
                              "color":"Rojo"
                          },
                          {
                              "nombre":"Pera",
                              "color":"Verde"   
                          },
                          {
                              "nombre":"Kiwi",
                              "color":"Marron"   
                          }
                      ]};

  $scope.seleccionado = function(fruta){
      console.log('click '+ fruta);
      $scope.frutaSeleccionada = fruta;     
  }   
});
//end frutasController