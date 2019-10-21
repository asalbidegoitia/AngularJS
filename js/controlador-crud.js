app.controller('crudController', ['$scope', '$http', '$log', 'cancionProvider',
    function ($scope, $http, $log, cancionProvider) {
        console.trace('crudController');
        $log.info('crudController con $log');

        //varaibles dels scope del controlador
        $scope.titulo = "Ejercicio CRUD contra Servicio Rest en Java";

        //TODO ponerlo donde sea necesario
        $scope.canciones = [];

        this.$onInit = function () {
            console.trace('crudController onInit');

            /*
            TODO ponerlo donde sea neceario
            cancionProvider.listar();
            cancionProvider.detalle(1);
            cancionProvider.eliminar(2);
            cancionProvider.crear("Mockito");
            cancionProvider.modificar(1,"Cambiada Cancion 1");
            */

            $scope.refrescar();

        }; //en init

        //funciones
        $scope.refrescar = () => {
            console.trace('refrescar datos llamando al provider');
            let promesa = cancionProvider.listar();
            promesa.then(
                response => {
                    console.debug('Llamada Rest OK %o', response);
                    $scope.canciones = response.data;
                },
                response => {
                    console.warn('Llamada Rest ERROR %o', response);
                }
            );
        }

        $scope.nuevaCancion = (nombre) => {
            console.trace('click nuevaCancion nombre %s', nombre);
            //TODO validacion

            let p = cancionProvider.crear(nombre);
            if (nombre === undefined) {
                $scope.mensaje = {
                    "texto": "<strong>ERROR</strong> No has introducido texto",
                    "clase": "danger"
                };
            } else {
                p.then(
                    (response) => {
                        console.debug('llamada correcta %o', response);
                        $scope.mensaje = {
                            "texto": "<strong>OK</strong> Registro Creado",
                            "clase": "success"
                        };
                        $scope.refrescar();
                    },
                    (response) => {
                        console.debug('llamada incorrecta %o', response);
                        $scope.mensaje = {
                            "texto": "<strong>WARNING</strong> Registro ya existe o Formato no valido",
                            "clase": "warning"
                        };
                    }
                );
            }
        } //end nueva cancion

        $scope.eliminarCancion = (id) => {

            console.trace('click borrarCancion nombre %s', id);
            //TODO validacion


            if (confirm('¿Estas Seguro?')) {
                let p2 = cancionProvider.eliminar(id);
                p2.then(
                    (response) => {
                        console.debug('llamada correcta %o', response);
                        $scope.mensaje = {
                            "texto": "<strong>OK</strong> Registro Eliminado",
                            "clase": "success"
                        };
                        $scope.refrescar();
                    },
                    (response) => {
                        console.warn('llamada incorrecta %o', response);
                        $scope.mensaje = {
                            "texto": "<strong>WARNING</strong> No se ha podido eliminar",
                            "clase": "warning"
                        };
                    }
                );
            } //cierre confirm

        }; //eliminarCancion

        
    $scope.modificarCancion = (cancion ) => {
        console.trace('click nuevaCancion nombre %s ',cancion.id, ' %s ', cancion.nombre);
        //TODO validacion
        $scope.cancionEditar=cancion;

    };

    }
]);