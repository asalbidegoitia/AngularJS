app.controller('pokemonController', ['$scope', 'pokemonProvider', function ($scope, pokemonProvider) {


    console.trace('PokemonController');
    $scope.titulo = "Pokemon";
    $scope.pokemons = [];


    let p1 = pokemonProvider.listar();
    p1.then(response => {
        console.debug('llamada listar OK %o', response);
        $scope.pokemons = response;

    }, response => { //gestion de errores
        console.warn('llamada listar ERROR %o', response);

    }); // listar


}]);