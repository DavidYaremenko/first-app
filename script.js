const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
const lastMovie = prompt("Один из последних просмотренных фильмов?", "");
const rate = prompt("На сколько оцените его?", "");
const lastMovie2 = prompt("Один из последних просмотренных фильмов?", "");
const rate2 = prompt("На сколько оцените его?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres: [],
    privat: false
}

personalMovieDB.movies[lastMovie] = rate; // так мы записываем в обьект movies информацию из ответов. [lastMovie] = rate соответствует записи Logan: '5'
personalMovieDB.movies[lastMovie2] = rate2;

console.log(personalMovieDB);