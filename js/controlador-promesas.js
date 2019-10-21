app.controller('promesasController', ['$scope', '$http', '$q', '$timeout', function ($scope, $http, $q, $timeout) {
    console.trace('promesasController');
    $scope.titulo = "Promesas - Ejercicio";
    $scope.sumar1 = 0;
    $scope.resultado1 = "Sumando....";
    $scope.resultado2 = "Sumando....";
    $scope.resultadoTotal = "Esperando...";

    /**
     * Funcion Asincrona que retorna una promesa
     * usamos $q para el asincronismo, puesto que JS es sincrono
     * @param numero1: entero a sumar
     * @param numero2: entero a sumar
     * @param fallo: boolean para hacer que funcione o falle la promesa   
     * @param espera: tiempo en milisegundos para retardo
     */
    $scope.sumar = function (numero1, numero2, fallo, espera) {
        console.trace('sumar');
        var q = $q.defer();
        $timeout(function () {
            if (!fallo) {
                let num = numero1 + numero2
                q.resolve(num); //Se cumple o resuelve la promesa => then
            } else {
                q.reject('lo siento pero fallo'); //falla 
            }
        }, espera);

        return q.promise;

    } //sumar


    //vamos a llamar a la funcion asicrona
    $scope.p1 = $scope.sumar(2, 3, false, 2000).then(function (result) {
        console.debug('promesa1 cumplida resultado %o ' + result);
        $scope.resultado1 = result;
    }).catch(function (result) {
        console.debug('promesa1 no cumplida resultado %o ' + result);
    });

    //volvemos a llamar
    $scope.p2 = $scope.sumar(5, 5, false, 5000);
    $scope.p2.then(function (result) {
        console.debug('promesa2 cumplida resultado %o ' + result);
        $scope.resultado2 = result;
    }).catch(function (result) {
        console.debug('promesa2 no cumplida resultado %o ' + result);
    });

    // vamos a esperar a que se cumplan las dos promesas para sumar total
    $q.all([$scope.p1, $scope.p2]).then(function () {
        console.debug("Todas las promesas completadas");
        $scope.resultadoTotal = $scope.resultado1 + $scope.resultado2;

    }).catch(function (result) {
        console.debug("fallo alguna promesa");
    });


}]);