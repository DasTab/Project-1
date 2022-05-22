const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");


const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actor: {},
  genres: [],
  private: false,
};


for (let i = 0; i < 2; i++) {
  const a = prompt("Последний просмотренный фильм?", ""),
        b = prompt("На сколько вы его оцените?", "");
  if (a.length < 50 && a != null && b != null && a != "" && b != "") {
    personalMovieDB.movies[a] = b;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }
}

if (personalMovieDB.count >=0 && personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}


// // если вносим данные через точк10у то возможно данные не правильно отобразятся personalMovieDB.movies.a = b,
// // поэтому вносим данные через квадратные скобки personalMovieDB.movies[c] = d;

console.log(personalMovieDB);



