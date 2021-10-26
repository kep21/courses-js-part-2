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
};*/ // 1 метод
//               прототип для jonh від soldier
//Object.setPrototypeOf(jonh,soldier);
const jonh =Object.create(soldier);// 2 метод
jonh.sayHello();

// To string
console.log(typeof(String(null)));

//  конкатинация
console.log(typeof(5 + ''));

const number = 5;

console.log("https://vk.com/catalog/ + number");

const fontSize = 26 + 'px';

// To number

console.log(typeof(Number('4'))); // 1 спосіб

console.log(typeof(+'5')); // 2 спосіб

console.log(typeof(parseInt("15px", 10))); // 3 спосіб


// To boolean
// 0, '', null, undefined, Nan - завжди false, тобто не працює

 let switcher = 1;

if (switcher) {
	console.log('Working...');
}

// 2
console.log(typeof(Boolean('4')));

// 3
console.log(typeof(!!'4444'));
          // Понимание основ
// 1
let x = 5;
alert(x++);

// 2
console.log([]+ false);// виводит false

console.log([]+ false - null + true); // Nan

/*let y = 1;
let с = y = 2;
alert(c);*/ // працює

console.log([] +1 + 2);// 12

alert("1"[0]);

// console.log(2 && 1 && null & 0 && undefined);
// и запинается на лжи

//console.log(!!(1 && 2) === (1 && 2));// false


                    //  3
console.log( null || 2 && 3 || 4);
// 1 пункт- вибираем приоритет операторов.
//2 пункт- оператор сравнение при правде вернет последнее значение(3).
//3 пункт- null или(||) 3-|| запинаетсЯ на правде, поєтому вернется 3.
//4 пункт- 3 || 4 вернет 3, потому что или(||) запинается на правде


const a = [1, 2, 3];
                 // не равни, єто разние ящики с разними яблоками при єтом просто идентични, в общем масиви в данном случае хранят разную инфу
const b = [1, 2, 3];

alert (+ "INFINITI"); // ВИВЕДЕТ INFINITI, а тип данних число, бо є +

console.log("Ёжики" > "яблоко");
