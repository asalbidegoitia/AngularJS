function PokemonProvider($http, $q) {

    console.log('PokemonProvider');
    const ENDPOINT = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000";
    this.listar = function () {

        console.log('pokemonProvider listar ' + ENDPOINT);
        let pokemons = [];
        let promesas = [];
        let q = $q.defer();

        console.log("1º llamada asincrona, para conseguir los nombres y url");
        $http.get(ENDPOINT).then(
            response => {
                let resultados = response.data.results;
                resultados.forEach(pokemon => {
                    console.log("... llamada asincrona para " + pokemon.url);
                    let p = $http.get(pokemon.url)
                    promesas.push(p); // guardar promesa en array para luego sincronizar

                    p.then(
                        response => {
                            // si la promesa se cumple, guardar pokemon en array 
                            // guardamos solo los datos, no la response completa           
                            pokemons.push(response.data);
                        }
                        //si falla no hacemos nada
                    );

                }); //forEach

            },
            response => {
                q.reject('Error, igual esta caida la API de Pokemnon %o', response);
            });

        //fin 1º llamada asincrona

        // Debemos sincronizar todas las promesas dentro de la 1º llamada Asincrona
        // podeis comentar estas lineas y por la consola de chrome se ven las peticiones HXR en pestaña NETWORKS
        // pero como no esperamos a que se cumplan todas, no se veran los datos por pantalla
        $q.all(promesas).then(
            response => {
                q.resolve(pokemons)
            }, // resolvemos y retornamos el array con pokemos
            response => {
                q.reject('Lo sentimos al unit todos los pokemos!!! %o', response)
            }
        );


        return q.promise;
    } // listar

    this.listaById = function (url) {
        console.log('pokemonProvider listaById ' + url);
        return $http.get(url);
    }


    //vamosa esperar a que se cumplan las dos
    $q.all([this.p1, this.p2]).then(function () {
        console.debug("Todas las promesas completadas");
        console.debug(pokemons);

    }).catch(function (result) {
        console.debug("fallo alguna promesa");
    });




}