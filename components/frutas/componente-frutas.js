angular.
module('angularApp'). // nombre App
component('componenteFrutas', { //nombre componente
    templateUrl: './components/frutas/template-frutas.html',
    controller: function FrutasController($scope, $http) {
        console.trace('FrutasController');

        $scope.ENDPOINT = "http://localhost:3000/frutas/";
        $scope.frutas = [];
        $scope.total = 0;
        $scope.titulo="Frutas";
        $scope.visualizar = [];
        $scope.paginaInicial = 0;
        $scope.itemsPorPagina=3;
        $scope.paginaFinal=$scope.itemsPorPagina;

        $scope.colores= [];
        $scope.nombre2e = []; //nombre para frutas mayores de 2 euros
        $scope.totalEuros=0;
  

        //eventos del controlador
        this.$onInit = function () {
            console.trace('FrutasController onInit');

            $http.get($scope.ENDPOINT).
            then(function (response) { //success antiguo
                console.trace('peticion GET %s data=%o', $scope.ENDPOINT, response);
                $scope.frutas = response.data;
                $scope.visualizar =  $scope.frutas.slice($scope.paginaInicial,$scope.paginaFinal);
                console.trace('paginacion=%o',$scope.visualizar);

                //sacamos los colores para el filtro de colores
                $scope.colores= response.data.map(elem=>elem.color); //es una forma abreviada de hacer una function (funcion arrow)

                //sacar precios para frutas con precio mayor a 2 euros
                $scope.nombre2e = response.data.filter(e=>e.precio>2).map(e=>e.nombre);
                //sacar nombre y precios para frutas con precio mayor que 2
                $scope.nombre2e = response.data.filter(e=>e.precio>2).map(e=>{
                    return {"nombre": e.nombre, "precio": e.precio}
                 });

                //calcular total de euros
                $scope.totalEuros = response.data.map(e=>e.precio).reduce((pv,cv)=>pv+cv);

                //para que no salgan duplicados (en este caso con el array de colores)
                $scope.colores= response.data.map(e=>e.color).filter((v,i,a)=>a.indexOf(v)===i); //v valor, i indice, a array
            }, function (response) { //gestion de error
                console.warn('Tenemos un error %o', response);
            }); //end onInit
        }


        //funciones
        $scope.sumar = function(fj){
            console.log('click sumar %o', fj);
            fj.cantidad++;
            
        };
        $scope.restar = function(fj){
            console.log('click restar %o', fj);
            if(fj.cantidad>0){
                fj.cantidad--;
            }    
        };
        $scope.comprar = function(fj){
            console.log('click realizar la operacion cantidad * precio');
            $scope.total += fj.precio * fj.cantidad; 
            fj.cantidad = 0;       
        };
        $scope.borrar = function(fj){
            console.log('click borrado');
            $scope.total = 0;
        };
        $scope.filtro = function(columna){
            console.log('columna %o', columna);
            $scope.columna=columna;
            $scope.orden= !$scope.orden;
            $scope.flechaNombre= "fa-sort-alpha-down";
            $scope.flechaPrecio= "fa-sort-numeric-down";
            if($scope.orden && columna == 'nombre'){
                $scope.flechaNombre = "fa-sort-alpha-down";
            }else if(!$scope.orden && columna=="nombre"){
                $scope.flechaNombre="fa-sort-alpha-up";
             }
            if($scope.orden && columna == 'precio'){
                $scope.flechaPrecio = "fa-sort-numeric-up";
            }else if(!$scope.orden && columna=="precio"){
                scope.flechaPrecio="fa-sort-numeric-down";
            }
        };

        $scope.paginaSiguiente = function(){
            $scope.paginaInicial += $scope.itemsPorPagina;
            $scope.paginaFinal +=$scope.itemsPorPagina; 
            $scope.visualizar =  $scope.frutas.slice($scope.paginaInicial,$scope.paginaFinal);
        }
        $scope.paginaAnterior = function(){
            $scope.paginaInicial -= $scope.itemsPorPagina;
            $scope.paginaFinal -= $scope.itemsPorPagina; 
            $scope.visualizar =  $scope.frutas.slice($scope.paginaInicial,$scope.paginaFinal);
        }

    } //end controller
});