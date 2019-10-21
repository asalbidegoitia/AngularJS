angular.
module('angularApp'). // nombre App
component('componenteHttpRequest', { //nombre componente
    templateUrl: './components/httpRequest/template-httpRequest.html',
    controller: function HttpRequestController($scope, $http, $timeout) {
        console.trace('HttpRequestController');
        $scope.profesores = {}
        $scope.ocultar = false;

        // peticion httpRequest mediante ajax, es ASINCRONA(Asincrona: hace la peticion, espera codigo y cuando reciba respuesta ejecuta)
        console.debug('llamada asincrona');
        $timeout(function () {
            $http.get('./json/profesores.json').
            then(function (data) {
                console.trace('response OK %o', data);
                $scope.ocultar = true;
                $scope.profesores = data;
            });
        }, 3000);

        console.debug('segumos ejecutando otras sentencias');


    } //end controller
});

