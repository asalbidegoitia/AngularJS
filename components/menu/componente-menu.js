angular.
module('angularApp'). // nombre App
component('componenteMenu', { //nombre componente, para usarlo <componente-menu>
  templateUrl: './components/menu/menu.html',
  controller: function MenuController($scope) {
    console.trace('MenuController');

    $scope.rutas = [{
        "nombre": "Inicio",
        "url": "#!/",
        "active": true,
        "icono": "fas fa-home"
      },
      {
        "nombre": "Frutas",
        "url": "#!/frutas",
        "active": false,
        "icono": "fas fa-apple-alt"
      },
      {
        "nombre": "Alumnos",
        "url": "#!/alumnos",
        "active": false,
        "icono": "fas fa-user-graduate"
      },
      {
        "nombre": "Creditos",
        "url": "#!/creditos",
        "active": false,
        "icono": "fab fa-creative-commons"
      },
      {
        "nombre": "Componentes",
        "url": "#!/componente",
        "active": false,
        "icono": "fas fa-cogs"
      },
      {
        "nombre": "Promesas",
        "url": "#!/promesas",
        "active": false,
        "icono": "fas fa-pray"
      },
      {
        "nombre": "Filter, Map, Reduce",
        "url": "#!/programacionfuncional",
        "active": false,
        "icono": "fas fa-cogs"
      },
      {
        "nombre": "Servicios",
        "url": "#!/servicios",
        "active": false,
        "icono": "fas fa-concierge-bell"
      },
      {
        "nombre": "Ejercicio Crud",
        "url": "#!/ejercicioCrud",
        "active": false,
        "icono": "fas fa-cross"
      },
      {
        "nombre": "Pokemon",
        "url": "#!/pokemon",
        "active": false,
        "icono": "fas fa-gamepad"
      }
    ]

    //funcion
    $scope.cambiarActivo = function (ruta) {
      console.trace('cambiar activo %o',ruta);
      //desactivar activo a todas las rutas
      $scope.rutas.forEach(element => {
        element.active = false;
      });
      //activar solo sobre la que hemos hecho click
      ruta.active = true;
    }// end cambiarActivo
  } // end MenuController
});