const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actor: {},
  genres: [],
  private: false,
};
 
const a = prompt("Последний просмотренный фильм?", ""),
  b = +prompt("На сколько вы его оцените?", ""),
  c = prompt("Последний просмотренный фильм?", ""),
  d = +prompt("На сколько вы его оцените?", "");
 
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
 
// если вносим данные через точку то возможно данные не правильно отобразятся personalMovieDB.movies.a = b, 
// поэтому вносим данные через квадратные скобки personalMovieDB.movies[c] = d; 
 
console.log(personalMovieDB);