/**
 * Configuracion de las rutas de la app
 * @see components/menu
 */
app.config( function( $routeProvider ){

  $routeProvider
    .when('/',{
        templateUrl: 'parciales/home.html'
    })
    .when('/alumnos',{
        templateUrl: 'parciales/alumnos.html'
    })
    .when('/frutas',{
      template: '<componente-frutas></componente-frutas>'
    })
    .when('/creditos',{
      templateUrl: 'parciales/creditos.html'
    })
    .when('/componente',{
      templateUrl: 'parciales/componente.html'
    })
    .when('/componente2',{
      template: '<componente-boton></componente-boton>'
      //template en vez de templateUrl porque es no es una URL
    })
    .when('/promesas',{
      templateUrl: 'parciales/promesas.html'
    })
    .when('/servicios',{
      templateUrl: 'parciales/servicios.html'
    })
    .when('/programacionfuncional',{
      templateUrl: 'parciales/programacion-funcional.html'
    })
    .when('/ejercicioCrud',{
      templateUrl: 'parciales/ejercicio-crud.html'
    })
    .when('/formulario',{
      templateUrl: 'parciales/formulario.html'
    })
    .when('/detalle/:id', {
      templateUrl: 'parciales/detalle.html',
      controller: 'detalleController'
    })
    .when('/pokemon', {
      templateUrl: 'parciales/pokemon.html',
      controller: 'pokemonController'
    })
    .when('/pokemon/:name',{ //detalle de pokemon
      templateUrl: 'parciales/detalle-pokemon.html',
      controller:'detallePokemonController'
    })
    .when('/ejercicio1',{
      template: '<componente-ejercicio1></componente-ejercicio1>',
    })
    .when('/ejercicio2',{
      template: '<componente-ejercicio2></componente-ejercicio2>',
    })
    .when('/ejercicio3',{
      template: '<componente-ejercicio3></componente-ejercicio3>',
    })
    .when('/tareas',{
      template: '<componente-tareas></componente-tareas>',
    })
    .when('/httpRequest',{
      template: '<componente-http-request></componente-http-request>',
    })
    .when('/Jsonp',{
      template: '<componente-jsonp></componente-jsonp>',
    })
    .otherwise({
      redirectTo: '/'
    })

})
