app.controller('contratosController', function ($scope, $http) {

    $scope.titulo = "Ejercicio Filter, Map etc";
    $scope.contratos = [];
    $scope.ENDPOINT = "http://localhost:3000/contratos/";
    $scope.ejercicio1 = [];
    $scope.tiposProductos = [];
    $scope.ejercicio2 = [];

    this.$onInit = function () {
        console.trace('contratosController onInit');
        $http.get($scope.ENDPOINT).then(function (response) {
            console.trace('peticion GET %s response=%o', $scope.ENDPOINT, response);
            $scope.contratos = response.data;
            $scope.ejercicios();
            

        }, function (response) { //gestion de errores
            console.warn('Tenermos un error %o', response);
        });

    }; //onInit
    /**
     * Hacemos esta funcion para calcular los datos del ejercicio
     */

    $scope.ejercicios = function(){
        //contratos cuyo campo TIPPRODUCT sea KT
        console.trace('ejercicio 1');
        $scope.ejercicio1 = $scope.contratos.filter(e => e.TIPPRODUCT === 'KT');

        //array en el que cada elemento contenga el código de contrato concatenado con el digito de control (campos codCONTRAT y digContrat), además del saldo en euros (campo SALCONTRAT dividido entre 100)
        console.trace('ejercicio 2');  
        $scope.ejercicio2 = $scope.contratos.map(e=>{
            let cc = (e.codContrat==undefined)?'':e.codContrat.toString();
            let dc= (e.digContrat==undefined)?'':e.digContrat.toString(); 
            return{
                "codigoContrato":(cc+ dc),
                "saldo": (e.SALCONTRAT/100)
            }
        }).filter(e=>{
            //devuelve filtrando por los que tengan codigoContrato no vacio y saldo > 0
            return (e.codigoContrato !="" && e.saldo>0)         
        });

        //Obtener todos los contratos que en su campo acciones contengan la clave “SITUACION” (filter por la subestructura)
        console.trace('ejercicio 3');  
        $scope.ejercicio3 = $scope.contratos.filter((v,i,a)=>{ //valor,indice,array
            //si acciones undefined false y pasamos al siguiente
            if(v.ACCIONES != undefined){
                //filtramos en acciones para sacar los que tengan situacion en su clave
                let result = v.ACCIONES.filter(e=> e.clave=="SITUACION");
                if(result.length === 1){
                    return true;
                }else{
                    return false;
                }
                
            }else{
                return false;
            }
        }); 

        //Obtener un array que contenga todas las acciones posibles (map y spread)
        //TODO
        console.trace('ejercio 4');
        $scope.temporal = $scope.contratos.filter(e=> e.ACCIONES != null && e.ACCIONES != "");
                                                   
        $scope.ejercicio4 = $scope.temporal.map(e=>e.ACCIONES).filter((v,i,a)=>{

    


             return a.indexOf(v)===i;
                
        });

        //Combinaciones de las anteriores, etc
        console.trace('ejercicio 5');  
         //tipos de productos sin repeticiones
         $scope.tiposProductos= $scope.contratos.map(e=>e.TIPPRODUCT).filter((v,i,a) =>{
            return a.indexOf(v)=== i;
        });

        
    }

});