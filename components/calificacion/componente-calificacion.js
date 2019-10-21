angular.
module('angularApp'). //nombre App
component('componenteCalificacion', {
    templateUrl: './components/calificacion/template.html',
    bindings: {
        pnota: '@' //parametro de entrada que es un atributo
    },
    controller: function CalificacionController() {
        console.trace('CalificacionController');
        const NOTA_MIN = 0;
        const NOTA_MAX = 10;
        this.tituloR = '-';
        this.tituloS = '+';
        this.nota = 0;

        //evento para cuando se inicia el controlador
        this.$onInit = function () {
            console.trace('CalificacionesController init');
            this.nota = +this.pnota; //el + es para parsearlo a int (parseInt)
            this.valorar();
        }

        this.sumar = function () {
            console.trace('suma click');
            if (this.nota < NOTA_MAX) {
                this.nota++;
                this.valorar();
            }
        };
        this.restar = function () {
            console.trace('resta click');
            if (this.nota > NOTA_MIN) {
                this.nota--;
                this.valorar();
            }
        };

        this.valorar = function () {
            switch (this.nota) {
                case 1:
                    this.valor = "Muy deficiente";
                    break;
                case 2:
                    this.valor = "Insuficiente";
                    break;
                case 3:
                    this.valor = "Deficiente";
                    break;
                case 4:
                    this.valor = "Necesita mejorar";
                    break;
                case 5:
                    this.valor = "Suficiente";
                    break;
                case 6:
                    this.valor = "Bien";
                    break;
                case 7:
                    this.valor = "Notable";
                    break;
                case 8:
                    this.valor = "Notable alto";
                    break;
                case 9:
                    this.valor = "Sobresaliente";
                    break;
                case 10:
                    this.valor = "Matricula";
                    break;
                default:
                    this.valor = "Suspenso";
                    break;
            }
        };
    }
});