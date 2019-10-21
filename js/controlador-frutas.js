//copia del controlador del componente-frutas para probar los ejemplos de programacion-funcional.html
app.controller('frutasController', function ($scope, $http) {

    $scope.ENDPOINT = "http://localhost:3000/frutas/";
    $scope.frutas = "";

    this.$onInit = function () {
        console.trace('FrutasController onInit');
        $http.get($scope.ENDPOINT)
            .then(function (response) {
                console.trace('peticion GET %s response=%o', $scope.ENDPOINT, response);
                $scope.frutas = response.data;
                $scope.visualizar = $scope.frutas.slice($scope.itemInicial, $scope.itemFinal);

                console.trace('paginacion=%o', $scope.visualizar);

                //sacar precios para frutas con precio mayor a 2 euros
                $scope.nombre2e = response.data.filter(e => e.precio > 2).map(e => e.nombre);

                //sacar suma total de precios para frutas con precio mayor a 3 euros
                $scope.total3e = response.data.filter(e => e.precio > 3).map(e => e.precio).reduce((pv, cv) => pv + cv);;
                //calcular total de euros
                $scope.totalEuros = response.data.map(e => e.precio).reduce((pv, cv) => pv + cv);
                //para sacar los precios
                $scope.precios = response.data.map(e => e.precio);
                //para multiplicar los precios por 2
                $scope.precioPor2 = response.data.map(e => e.precio * 2);
                //para que no salgan duplicados (en este caso con el array de colores)
                $scope.colores = response.data.map(e => e.color).filter((v, i, a) => a.indexOf(v) === i);

            }, function (response) { //gestion de errores
                console.warn('Tenermos un error %o', response);
                $scope.mensajeValidacion = "ERROR El servidor no responde";
            });
    }; //end onInit



});