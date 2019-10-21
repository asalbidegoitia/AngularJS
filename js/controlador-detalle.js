app.controller('detalleController', ['$scope', '$routeParams', '$log',
    function ($scope, $routeParams, $log) {
        console.trace('detalleController');
        $log.info('detalleController con $log');

        $scope.id =$routeParams.id;

       

    }
]);