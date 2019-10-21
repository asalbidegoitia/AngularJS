
/**
 * Controlador principal
 */
app.controller('mainCtrl', ['$scope','$http','servicioConstantes', function($scope,$http,servicioConstantes){

    this.$onInit= function(){
      console.log('onInit mainCtrl');
      $scope.constantes= servicioConstantes;
      $scope.alerta={
        "texto":"Ongi Etorri",
        "clase":"success"
      };
  
      //check para saber si el servicio rest esta levantado
      let url= 'http://localhost:3000/frutas';
      $http.get(url).then(function (result) {
        console.trace('servicio rest funcionando');
        $scope.alerta={
          "texto":"<strong>Atención</strong> Servicio Rest Funcionando",
          "clase":"success"
        };
      }).catch(function (response) {
        console.warn('servicio rest fallando %o', response);
        $scope.alerta={
          "texto":"<strong>Atención</strong> Servicio Rest Parado",
          "clase":"warning"
        };
      });
      
    }// end onInit
  
  }]);
  