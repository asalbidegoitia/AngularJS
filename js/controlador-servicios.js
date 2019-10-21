app.controller('serviciosController', ['$scope', '$http', '$log','servicioConstantes', 'rectanguloService',
    function ($scope, $http, $log, servicioConstantes, rectanguloService) {
        console.trace('serviciosController');
        $log.info('serviciosController con $log');
        $scope.titulo = "Servicios " + servicioConstantes.titulo;

        //declarar esta variable para poder usarlo en HTML
        $scope.constantes= servicioConstantes;
  
        //usamos el servicio rectangulo
        rectanguloService.setAncho(2);
        rectanguloService.setAlto(3);

        $scope.area=rectanguloService.getArea();

}]);