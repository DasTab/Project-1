let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}
start();


const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actor: {},
  genres: [],
  private: false,
};


function rememberMyMovies() {
  // First
  for (let i = 0; i < 2; i++) {
    const a = prompt("Последний просмотренный фильм?", ""),
      b = prompt("На сколько вы его оцените?", "");
    if (a.length < 50 && a != null && b != null && a != "" && b != "") {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}
rememberMyMovies();

// Second
// let i = 0;
// while (i < 2) {
//   const a = prompt("Последний просмотренный фильм?", ""),
//     b = prompt("На сколько вы его оцените?", "");
//   if (a.length < 50 && a != null && b != null && a != "" && b != "") {
//     personalMovieDB.movies[a] = b;
//     console.log("done");
//   } else {
//     console.log("error");
//     i--;
//   }
//   i++;
// }

// Third
// let i = 0;
// while (i < 2) {
//   const a = prompt("Последний просмотренный фильм?", ""),
//     b = prompt("На сколько вы его оцените?", "");
//   a != null && b != null && a != "" && b != "" && a.length < 50
//     ? (personalMovieDB.movies[a] = b)
//     : i--,
//     console.log("error");
//   i++;
// }


function detectViewerLevel() {

  if (personalMovieDB.count >= 0 && personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}
detectViewerLevel();


function showMyDB (hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.private);


function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}
writeYourGenres();
