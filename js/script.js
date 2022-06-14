const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMuvieDB = {
    count: numberOfFilms,
    muvies: {},
    actors: {},
    genrеs: [],
    privat: false
};

const a = prompt('Один из фильмов которые вы уже посмотрели?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из фильмов которые вы уже посмотрели?', ''),
    d = prompt('На сколько оцените его?', '');


personalMuvieDB.muvies[a] = b;
personalMuvieDB.muvies[c] = d;


console.log(personalMuvieDB);