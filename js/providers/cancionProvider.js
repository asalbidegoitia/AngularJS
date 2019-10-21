function CancionProvider($http) {
    console.log('CancionProvider');
    const ENDPOINT = "http://localhost:8080/cancion/";
    this.listar = function () {
      console.log('cancionProvider listar ' + ENDPOINT);
      return $http.get(ENDPOINT);
    } //listar
  
    this.detalle = function (idCancion) {
      let url = ENDPOINT + idCancion;
      console.log('cancionProvider detalle' + url);
      return $http.get(url);

    } //detalle
  
    this.eliminar = function (idCancion) {
      let url = ENDPOINT + idCancion;
      console.log('cancionProvider eliminar' + url);
      return $http.delete(url);
    } //eliminar
  
    this.crear = function (nombreCancion) {
      let url = ENDPOINT;
      console.log('cancionProvider nombreCancion ' + url);
      //le mandamos una cancion en el body
      let body ={"id": 0, "nombre": nombreCancion}
      return $http.post(url,body);
    } // crear
  
    this.modificar = function (idCancion, nombreCancion) {
      let url = ENDPOINT + idCancion;
      console.log('cancionProvider modificar %s  id=%s nombre=%s', url, idCancion, nombreCancion);
      return $http.put(url,body);
    } // modificar
  }