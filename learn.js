const numberOfFilms =+prompt("Сколько фильмов уже посмотрели?", " ");

const personalMovieDB = {
	count:numberOfFilms,
	movies:{},
	actors:{},
	genres:[],
	privat:false
};

// Автоматизировать вопроси про фильми при помощи цикла

/*for (let i = 0; i<2; i++) {
	const a = prompt("Один из последних просмотренних фильмов?", " "),
	b = prompt("На сколько оцените его?", "");
	personalMovieDB.movies[a] = b;
}
console.log(personalMovieDB);


// Сделать так чтоб пользователь не мог оставить ответ в виде пустой строки отменить ответ или ввести название фильма длинне чем 50 символов
 Если єто происходит возвращаемся к вопросам опять

for (let i = 0; i<2; i++) {
	const a = prompt("Один из последних просмотренних фильмов?", " "),
	b = prompt("На сколько оцените его?", "");
	if (a != null && b !=null && a !='' && b !='' && a.length<50) {
		personalMovieDB.movies[a] = b;
		console.log('done');
	} else {
		console.log('error');
		i--;
	}
}
console.log(personalMovieDB);*/

//При помощи условий проверить personalMovieDB.count, если он меньше 10-"Просмотрено довольно мало фильмов",
//если от 10 до 30 -"Ви класический зритель", если больше - "Ви киноман".Если не подошло ни к одному варианту -"Произошла ошибка"

/*if (personalMovieDB.count<10) {
console.log("Просмотрено довольно мало фильмов");
}
else if (personalMovieDB.count>=10 && personalMovieDB.count<30) {

console.log("Ви класический зритель");
}
else if (personalMovieDB.count>=30) {
console.log("Ви киноман");
}
else{
	console.log("Произошла ошибка");
}
console.log(personalMovieDB);*/

function calc (a,b) {
	return (a + b);
}
console.log(calc(4,6));
console.log(calc(5,25));
console.log(calc(8,12));

// Function expression
const logger = function () {
	console.log("Hi");
};
logger();

const calcul = (a, b) => {
	console.log('1');
	return a + b;
};

// метод slice

const logg = "Hello ukraine";

console.log(logg.slice(-7, -1));

// Math metod

const num =13.2;
console.log(Math.round(num));


// parseInt
const test = "12.2px";
console.log(parseInt(test));

//parseFloat

const tes = "12.2px";
console.log(parseFloat(tes));


// Создать функцию showMyDB которая будет проверять свойство privat.Если стоит в позиции false- виводит в консоль главний обьект программи//

function showMyDB (hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}
showMyDB(personalMovieDB.privat);


//Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос "Ваш любимий жанр под номером ${номер по порядку}".Каждий ответ записивается в массив данних genres/

function writeYourGenres () {
	for (let i =1; i<=3; i++) {
	const genre = prompt(`Ваш любимий жанр под номером ${i}`);
	personalMovieDB.genres [i - 1] = genre;
	}
}
writeYourGenres();


// робота с обектами(objects)
const options = {
	name:'test',
	width:1024,
	height:1024,
	colors: {
		border:'black',
		bg:'red'
	}
};
// const {border,bg} = options.colors; console.log(border) (деструктуризация обєктов)
/*console.log(options.name);

delete options.name;

console.log(options);*/

console.log(Object.keys(options).length);

/// виведе обєкт
const exercise = {
	age:'21',
	name:'Serg',
	surname:'vrgry',
	hobbies:'coding'
};

console.log(Object.keys(exercise));


// массив

const arr = [2,3,6,8,10];

arr.forEach(function() {

});

// копия обєкта
function copy(mainObj) {
	let objCopy = {};
	let key;
	for (key in mainObj) {
		objCopy[key] = mainObj[key];
	}
	return objCopy;
}
const numbers = {
	a:2,
	b:5,
	c: {
		x:7,
		y:4
	}
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
console.log(newNumbers);


const add = {
	d:17,
	e:20
};

console.log(Object.assign(numbers,add));

//поверхнева копія масива

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'asfsdhd';
console.log(newArray);
console.log(oldArray);

// оператор розворота

const video = ['youtube', 'vimeo', 'rutube'],
blogs = ['wordpress', 'livejournal', 'blogger'],
internet = [...video, ...blogs, 'vk','facebook'];

console.log(internet);

function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}
const numer = [2, 5, 7];
log(...numer);


// Prototype

const soldier = {
	health:400,
	armor:100,
	sayHello:function() {
		console.log("Hello");
	}
};

/*const jonh = {
	health:100
};*/
//               прототип для jonh від soldier
//Object.setPrototypeOf(jonh,soldier);
const jonh =Object.create(soldier);
jonh.sayHello();