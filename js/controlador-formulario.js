app.controller('formularioController', ['$scope', '$http', '$log',
    function ($scope, $http, $log) {
        console.trace('formularioController');
        $log.info('formularioController con $log');

        $scope.titulo = "Formulario";
        $scope.fromData={};

        $scope.guardarDatos = function(){
              console.log('Guardando...');
        }

    } //end controller
]);