// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
// str.length - и получить её длину)

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно */

'use strict';

let numberOfFilms;
// const lastMovie = prompt("Один из последних просмотренных фильмов?", "");
// const rate = prompt("На сколько оцените его?", "");
// const lastMovie2 = prompt("Один из последних просмотренных фильмов?", "");
// const rate2 = prompt("На сколько оцените его?", "");

function start(){ // функция не дает задать дальше вопросы если введено не число
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
                                                                        // isNaN проверяет что введено не число
    while(numberOfFilms == "" || numberOfFilms == null || numberOfFilms == isNaN(numberOfFilms)){
        numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}
start();

let personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres: [],
    privat: false
}

// personalMovieDB.movies[lastMovie] = rate; // так мы записываем в обьект movies информацию из ответов. [lastMovie] = rate соответствует записи Logan: '5'
// personalMovieDB.movies[lastMovie2] = rate2;


function rememberMyFilms(){
    for(let i = 0; i < 2; i++){ // автоматизируем цикл чтобы не писать 4 строки как выше
        const lastMovie = prompt("Один из последних просмотренных фильмов?", "").trim(); // trim не дает вводить пробел вначале и конце строки
        const rate = prompt("На сколько оцените его?", "");
        // переменная не должна ровняться null и тд
        if(lastMovie != null && rate != null && lastMovie != "" && rate != "" && lastMovie.length <= 50 && rate.length <= 50){ // проверяем на то, чтобы пользователь не нажал Отмена, не оставил поле пустым, и чтобы длина была нге больше 50 символов
         
            personalMovieDB.movies[lastMovie] = rate;
            console.log("done");
        }else {
            console.log("error");
            i--; // если получили ошибку(длина ответа больше 50) - вернуться на один вопрос назад(снвоа его задать)
        }
    }

}
rememberMyFilms();


function detectedPersonalLevel(){

    if(personalMovieDB.count < 10){ 
        confirm("Просмотрено мало фильмов");
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
        confirm("Ты классичческий зритель");
    }else if(personalMovieDB.count >= 30){
        confirm("Ты киноман");
    }else {
        confirm("Произошла ошибка");
    }

}
detectedPersonalLevel();

function showMyDB(hidden) { // функция проверяет состояние поля private. 
    if(!hidden){ // !hidden говорит что не скрыта
        console.log(personalMovieDB);
    }

}
showMyDB(personalMovieDB.privat); // вот тут мы и ссылаемся на поле

function writeYourGenres(){ // функция задает три вопроса и записывает в масив ответы
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`); // пример азписи ответов на вопрос сразу в маасив
    }
}
writeYourGenres();

console.log(personalMovieDB);