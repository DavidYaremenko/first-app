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

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// const lastMovie = prompt("Один из последних просмотренных фильмов?", "");
// const rate = prompt("На сколько оцените его?", "");
// const lastMovie2 = prompt("Один из последних просмотренных фильмов?", "");
// const rate2 = prompt("На сколько оцените его?", "");

let personalMovieDB = {
    count: 0,
    movies:{},
    actors:{},
    genres: [],
    privat: false,
    start: function(){ // функция не дает задать дальше вопросы если введено не число
        personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
                                                                            // isNaN проверяет что введено не число
        while(personalMovieDB.count == "" || personalMovieDB.count == null || personalMovieDB.count == isNaN(personalMovieDB.count)){
            personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function(){
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
    
    },
    detectedPersonalLevel: function(){

        if(personalMovieDB.count < 10){ 
            confirm("Просмотрено мало фильмов");
        }else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
            confirm("Ты классичческий зритель");
        }else if(personalMovieDB.count >= 30){
            confirm("Ты киноман");
        }else {
            confirm("Произошла ошибка");
        }
    
    },
    showMyDB: function(hidden) { // функция проверяет состояние поля private. 
        if(!hidden){ // !hidden говорит что не скрыта
            console.log(personalMovieDB);
        }
    
    },
    toggleVisibleMyDB: function(){ //проверять свойство privat. Если оно false - он переключает его в true, если true - переключает в false.
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else {
            personalMovieDB.privat = true;
        }

    }, 


    writeYourGenres: function(){ // функция задает три вопроса и записывает в масив ответы
        for(let i = 1; i <= 3; i++){
            let genre = prompt(`Ваш любимый жанр под номером ${i}`); // пример азписи ответов на вопрос сразу в маасив


            if(genre === "" || genre == null){
                console.log("Вы вввели не корректные данные");
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;

            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);

        });
    }

};

// personalMovieDB.movies[lastMovie] = rate; // так мы записываем в обьект movies информацию из ответов. [lastMovie] = rate соответствует записи Logan: '5'
// personalMovieDB.movies[lastMovie2] = rate2;

console.log(personalMovieDB);