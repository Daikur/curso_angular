System.register(["../model/pelicula"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var pelicula_1;
    var PELICULAS;
    return {
        setters:[
            function (pelicula_1_1) {
                pelicula_1 = pelicula_1_1;
            }],
        execute: function() {
            exports_1("PELICULAS", PELICULAS = [
                new pelicula_1.Pelicula(1, "Batman v Superman", "Zack Snider", 2016),
                new pelicula_1.Pelicula(2, "La verdad Duele", "Will Smith", 2016),
                new pelicula_1.Pelicula(3, "El seños de los anillos", "Desconocido", 2002),
                new pelicula_1.Pelicula(4, "Una historia real", "El de supersalidos", 2015),
                new pelicula_1.Pelicula(5, "Don Jon", "Josep Gordon Levir", 2004),
                new pelicula_1.Pelicula(6, "Dos tontos muy tontos", "Desconocido", 2001)
            ]);
        }
    }
});
//# sourceMappingURL=mock.peliculas.js.map