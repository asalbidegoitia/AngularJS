angular.
module('angularApp'). // nombre App
component('componenteFooter', { //nombre componente, para usarlo <componente-menu>
  templateUrl: './components/footer/footer.html',
  controller: function FooterController($scope, servicioConstantes) {
    console.trace('FooterController');
    $scope.constantes=servicioConstantes;
    /*
    $scope.autor= servicioConstantes.autor;
    $scope.version= servicioConstantes.version;
    $scope.github=servicioConstantes.github;
    */
   
  
  } // end FooterController
});