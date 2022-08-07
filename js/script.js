const personalMovieDB = {
  count: 0,
  movies: {},
  actor: {},
  genres: [],
  private: false,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyMovies: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Последний просмотренный фильм?", "").trim(),
        b = prompt("На сколько вы его оцените?", "");
      if (a.length < 50 && a != null && b != null && a != "" && b != "") {
        personalMovieDB.movies[a] = b;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  detectViewerLevel: function () {
    if (personalMovieDB.count >= 0 && personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i < 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`).toLowerCase();
      if (genre === "" || genre == null) {
        console.log("Вы ввели некорректные данные или не ввели их вовсе");
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },
  toggleVisibleMyDB: function () {
    personalMovieDB.private = !personalMovieDB.private;
    // false - он переключает в true, если true - переключает в false
  },
};

// personalMovieDB.start();
// personalMovieDB.rememberMyMovies();
// personalMovieDB.detectViewerLevel();
// personalMovieDB.showMyDB(personalMovieDB.private);
// personalMovieDB.writeYourGenres();

// console.log(personalMovieDB.toggleVisibleMyDB());
// console.log(personalMovieDB.private);
