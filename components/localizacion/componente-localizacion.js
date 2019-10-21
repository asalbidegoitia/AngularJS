angular.
module('angularApp'). // nombre App
component('componenteJsonp', { //nombre componente
    templateUrl: './components/localizacion/template-localizacion.html',
    controller: function HttpRequestController($scope, $http, $sce) {
        console.trace('HttpJsonP');

        $scope.ocultarDatos = true;
        $scope.localizacion = [];
        //$scope.SERVICE_URL = "http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK";
        $scope.SERVICE_URL = "http://www.geoplugin.net/json.gp";
        $scope.trustedUrl= $sce.trustAsResourceUrl($scope.SERVICE_URL);

        // peticion http request mediante Ajax (es asincrona)
        console.debug('Llamada asincrona');
        $scope.localizar = function () {
            $http.get($scope.trustedUrl)
                .then(function (response) {
                    console.trace('Aparecen los datos de la localizacion %o', response);
                    $scope.localizacion = response.data;
                    $scope.ocultarDatos = false;
                    $scope.initMap();
                });
        }; //geolocalizar

        $scope.initMap = function () {

            console.trace('initMap');
            var myLatLng = {
                lat: +$scope.localizacion.geoplugin_latitude,
                lng: +$scope.localizacion.geoplugin_longitude
            };

            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                center: myLatLng
            });

            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: "Estas en " + $scope.localizacion.geoplugin_city
            });

        }; // initMap

        console.debug('Seguimos ejecutando otras secuencias');


    } //end controller
});
