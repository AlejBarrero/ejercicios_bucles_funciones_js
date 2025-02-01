/* Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas.
Utiliza bucles para lograrlo e imprime el objeto final por consola. */

const starWarsMovies = [
    { title: 'A New Hope', releaseYear: 1977 },
    { title: 'The Empire Strikes Back', releaseYear: 1980 },
    { title: 'Return of the Jedi', releaseYear: 1983 },
    { title: 'The Phantom Menace', releaseYear: 1999 },
    { title: 'Attack of the Clones', releaseYear: 2002 },
    { title: 'Revenge of the Sith', releaseYear: 2005 },
    { title: 'The Force Awakens', releaseYear: 2015 },
    { title: 'The Last Jedi', releaseYear: 2017 },
    { title: 'The Rise of Skywalker', releaseYear: 2019 },
    { title: 'Rogue One', releaseYear: 2016 },
    { title: 'Solo', releaseYear: 2018 }
];

function filtrarDecada(lista) {
    let peliculas1970 = [], peliculas1980 = [], peliculas1990 = [], peliculas2000 = [], peliculas2010 = [];

    for (pelicula of lista) {
        if (pelicula.releaseYear >= 1970 && pelicula.releaseYear < 1980) {
            peliculas1970.push(pelicula);
        } else if (pelicula.releaseYear >= 1980 && pelicula.releaseYear < 1990) {
            peliculas1980.push(pelicula);
        } else if (pelicula.releaseYear >= 1990 && pelicula.releaseYear < 2000) {
            peliculas1990.push(pelicula);
        } else if (pelicula.releaseYear >= 2000 && pelicula.releaseYear < 2010) {
            peliculas2000.push(pelicula);
        } else {
            peliculas2010.push(pelicula);
        }
    }
    console.log("Peliculas de los 70:", peliculas1970);
    console.log("Peliculas de los 80:", peliculas1980);
    console.log("Peliculas de los 90:", peliculas1990);
    console.log("Peliculas de los 2000:", peliculas2000);
    console.log("Peliculas de los 2010:", peliculas2010);
    return {peliculas1970, peliculas1980, peliculas1990, peliculas2000, peliculas2010};
}

filtrarDecada(starWarsMovies);
