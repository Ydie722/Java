


// const divek = document.querySelector("div");
// const parr = document.createElement("p");

// divek.appendChild(parr);

// const ulList = document.createElement("ul");
// const ulElement = document.createElement("li");
// ulElement.textContent = "CZESC";

// document.body.appendChild(ulList);
// ulList.appendChild(ulElement);

// const heading = document.querySelector("h1");
// const parr = document.querySelectorAll("p");
// const divOne = document.querySelector(".test");
// const pInDiv = divOne.querySelector(".test");

// const test = document.querySelector("ul li");
// console.log(test);

// const ulList = document.querySelector("ul");
// console.log(ulList);

// const liItem = ulList.querySelector("li");
// console.log(liItem);

// const liItems = document.querySelectorAll(".test");
// console.log(liItems);

// const test = document.getElementById("item");
// console.log(test);

// const test2 = document.getElementsByTagName("li");
// console.log(test2);

// const test3 = document.getElementsByClassName("test");
// console.log(test3);

// let num = 10;
// let numbers = [];

// for (let i = 0; i < num; i++) {
// 	numbers.push(i);
// }

// const funOne = (x) => {
// 	if (x % 3 === 0 && x !== 0) {
// 		console.log(`${x} jest podzielne przez 3`);
// 	} else {
// 		console.log(`${x} nie jest podzielne przez 3`);
// 	}
// };

// numbers.forEach(funOne)

// let celsius;
// let temp;

// const fahrenheit = (x) => {
// 	celsius = x;
// 	temp = x * 1.8 + 32;

// 	console.log(`${celsius} = ${temp}`);
// };

// fahrenheit(30);
// let score;

// const add = (x, y) => {
// 	score = x + y;
// 	// if (score % 2 == 0) {
// 	// 	funOne();
// 	// } else {
// 	// 	funTwo();
// 	// }

// 	score % 2 == 0 ? funOne() : funTwo();
// };
// const funOne = () => {
// 	console.log(`Liczba ${score} jest parzysta`);
// };
// const funTwo = () => {
// 	console.log(`Liczba ${x} jest nie parzysta`);
// };

// add(5, 5);

// const numbers = [0.5, 4, "abc"];
// const names = ["Lisa", "Lily", "Adam", "Przemek"];
// numbers.forEach((num) => console.log(num));
// const bigNames = names.map((name) => name.toUpperCase());
// console.log(bigNames);

// const showBigNames = (name) => {
// 	console.log(name.toUpperCase());
// };

// names.forEach(showBigNames);

// names.forEach((elo) => console.log(elo.toUpperCase()));

// const name = "lis";
// const test = () => {
// 	console.log(`Name w funkcj - ${name}`);

// };
// test();
// console.log(`Name poza funkcjią - ${name}`);

// //SPREAD
// const arr = [1, 2, 3, 4];
// console.log(arr);
// console.log(...arr);

// //REST
// const numbers = (x, y, ...z) => {
// 	console.log(x, y, z);
// };
// numbers(123,23423,123213,1235,345)

// const hello = (name = "Drogi uzytkowniku") => {
// 	console.log(`Czesc ${name}, jak sie masz`);
// };

// hello();
// hello("maciek");

// const plus = (x, y) => {
// 	console.log(x + y);
// };

// plus(5, 6);

// const days = ["poniedzialek", "wtorek", "sroda"];
// const days2 = days.forEach(function (day) {
// 	console.log(day);
// });

// const days3 = days.forEach((day) => console.log(day));

// const arrowFunction = () => {
// 	// asdsa
// };

// const test2 = (name) => {
// 	console.log(`Mam na imie: ${name}`);
// };

// test2("Lisa");

// const heading = document.querySelector("h1");
// heading.addEventListener("click", function () {
// 	console.log("Click");
// });

// const test = function (x, y) {
// 	console.log(`Cześć jestem ${x} mam ${y} lat`);
// };

// test("Maciek", 20);

// function test() {
// 	console.log("czesc");
// }

// test();

// const helloWorld = function () {
// 	console.log("ZCXdas");
// };

// helloWorld();

// function add(x, y) {
// 	return x + y;
// }

// add(5, 4);

// const cars = "Audi, Mercedes, BMW, Nissan, Dodge";
// const carsArr = cars.split(", ");
// console.log(carsArr);
// if (cars.length > 3) {
// 	console.log("JEST OK");
// } else {
// 	console.log("Nie jest OK");
// }

// cars.length > 3 ? console.log("JUTA") : console.log("KOOKs");

// if (carsArr.includes("Audi")) {
// 	carsArr.unshift("majbach");
// } else {
// 	carsArr.pop();
// }

// console.log(carsArr);

// if (newCars.lenght > 3) {
// 	console.log("Jest OK!");
// } else {
// 	console.log("Nie jeste OK!");
// }

// if(newCars.includes("Audi")){
//     console.log(newCars.push('Majbach'));
// }else {
//     console.log(newCars.pop());
// }

// const colors = ["niebieski"];
// colors.unshift("czerwony");
// colors.push("pomaranczowy");
// console.log(colors);

// for (let i = 0; i < colors.length; i++) {
// 	console.log(
// 		`Moj ulubiony color to: ${
// 			colors[i].charAt(0).toUpperCase() + colors[i].slice(1)
// 		}`
// 	);
// }

// for (const number of colors) {
// 	console.log(
// 		`Moj ulubiony kolor to jest : ${
// 			number.charAt(0).toUpperCase() + number.slice(1)
// 		}`
// 	);
// }

// const numbers = [1, 5, 13, 26, 48];
// const newArr = numbers.map((number) => number * 5);
// console.log(newArr);

// for (const number of newArr) {
// 	if (number % 2 === 0) {
// 		console.log(`Liczba jest parzysta: ${number}`);
// 	} else {
// 		console.log(`liczba nie jest parzysta: ${number}`);
// 	}
// }

// const numbers = [1, 2, 3];
// const food = ["hamburger", "frytki", "pizza"];
// console.log(numbers.concat(food));
// const menu = numbers.concat(food);
// console.log(...menu);

// const newArr = [...numbers, ...food];
// console.log(newArr);

// const letters = ["c", "d"];
// console.log(letters);
// letters.push("e", "f");
// letters.unshift("a", "b");
// console.log(letters);
// console.log(letters.includes("c"));

// const numbers = [0, 1, 2, 3];

// const newNum = numbers.forEach((number) => console.log(number * 2));
// console.log(newNum);

// const mapNumb = numbers.map((number) => number * 2);
// console.log(mapNumb);

// const numbers = [0, 23, 48, 175, 2, 34, 11];

// // function number(x) {
// // 	// return x % 2 === 0;
// //     return x > 50
// // }

// numbers.forEach((num) => console.log(num));

// console.log(numbers.includes(10));

// console.log(numbers.indexOf(234));

// console.log(numbers.filter(number));

// const numbers = [0, 0, 1, 1, 2, 2, 2];
// const colors = ["red", "green", "blue", true, 123];
// const cars = [123, true, "audi", "bmw", "mercedes", "ferrari", "🤷‍♂️", "👀"];

// const numbers2 = numbers.slice(0, 2);
// console.log(numbers2);

// const numbers3 = numbers.slice(-3);
// console.log(numbers3);

// const randomStuff = colors.splice(-2);
// console.log(colors);
// console.log(randomStuff);

// const newCars = cars.splice(2, 4, "test");
// console.log(cars);
// console.log(newCars);

// const numbers = [1, 2, 3, 4, 5];

// // console.log(numbers);
// // numbers.push(6,7,8)

// const abc = ["a", "b", "c"];
// const newAbc = numbers.concat(abc);

// // console.log(newAbc);

// console.log(abc);
// console.log(...abc);

// const drinks = ["pepsi", "kawa", "sok"];
// const meals = ["schabowy", "spaghetti", "zupa"];
// const menu = [...drinks, ...meals];
// console.log(menu);

// const menu = drinks.concat(meals);
// console.log(...menu);

// function multiply(x) {
// 	return x * 2;
// }

// const newNumbers = numbers.map(multiply);
// console.log(newNumbers);

// const promka = "0%";

// switch (promka) {
// 	case `${promka}`:
// 		console.log(`Przecena wynosi ${promka}`);
// 		break;
// }

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// numbers.unshift(-1, 0);
// console.log(numbers);

// numbers.shift();
// console.log(numbers);

// const colors = ["red", "green", "blue"];
// console.log(colors);

// colors.push("gold");
// console.log(colors);

// colors.pop()
// console.log(colors);

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(numbers);

// numbers.unshift(-1, 0);
// console.log(numbers);

// numbers.push(8);
// console.log(numbers);
// numbers.shift();
// console.log(numbers);
// numbers.pop();
// console.log(numbers);

// const numbers = [5, 8, 10, 23, 48, 60];

// for (const number of numbers) {
// 	console.log(number / 5);
// }

// console.log("------");

// for (const number of numbers) {
// 	if (number % 2 === 0) {
// 		console.log(
// 			`%cLiczba ${number} jest parzysta`,
// 			"background-color: orange;color:black"
// 		);
// 	} else if (number % 2 === 1) {
// 		console.log(
// 			`%cLiczba ${number} jest nie parzysta`,
// 			"background-color:tomato"
// 		);
// 	}
// }

// let x = 20;

// do {
// 	x -= 3;
// } while (x > 0);
// console.log(x);

// let x = 0;

// while (x < 10) {
// 	x += 2;
// 	console.log(x);
// }

// const cities = ["Warszawa", "Kraków", "Gdańsk", "Poznań"];

// for (let i = 0; i < cities.length; i++) {
// 	console.log(`To miasto nazywa się: ${cities[i].toUpperCase}`);
// }

// const numbers = [1, 2, 3, 4, 5];

// for (const number of numbers) {
// 	console.log(number * 2);
// }

// for (let i = 0; i < numbers.length; i++) {
// 	console.log(numbers[i] * 2);
// }

// let i = 0;

// do {
// 	i++;
// 	console.log(i);
// } while (i < 2);

// let i= 0;

// while (i < 5) {
// 	i++;
// 	console.log(i);
// }

// const animals = ["dog", "cat", "rabbit", "mysz"];

// const colors = [
// 	"red",
// 	"blue",
// 	"green",
// 	"purple",
// 	"white",
// 	"orange",
// 	"gradient",
// ];

// for (let i = 0; i < colors.length; i++) {
// 	console.log(colors[i]);
// }

// console.log(animals[0]);
// console.log(animals[1]);
// console.log(animals[2]);
// console.log(animals[3]);

// for (let i = 0; i < animals.length; i++) {
//     console.log(animals[i]);
// }

// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }

// const x = 50;
// let wynik;

// if (x >= 100) {
// 	wynik = "x > 100";
// } else if (x < 100 && x > 30) {
// 	wynik = "x jest sredniakiem";
// } else if (x <= 30) {
// 	wynik = "x jest maly";
// }

// console.log(wynik.toUpperCase());

// const x = 12;

// if (x % 2 == 0) {
// 	console.log("X jest parzyste");
// } else {
// 	console.log("X nie jeste parzyste");
// }

// const check = x % 2 == 0 ? "X parzyste " : "x nie parztyste";
// console.log(check);

// const promo = "50%";

// switch (promo) {
// 	case `${promo}`:
// 		console.log(`Dzis mamy ${promo} zniżki`);
// 		break;
// }

// const promo = "30%";

// switch (promo) {
// 	case "10%":
// 		console.log("Dziś mamy 10% zniżki!");
// 		break;
// 	case "20%":
// 		console.log("Dziś mamy 20% zniżki!");
// 		break;
// 	case "30%":
// 		console.log("Dziś mamy 30% zniżki!");
// 		break;
// 	default:
// 		console.log(`Dziś mamy ${promo} zniżki!`);
// }

// const x = 100;
// const y = 50;

// if (x > y) {
// 	console.log(`${x} > ${y}`);
// } else if (x == y) {
// 	console.log(`${x} = ${y}`);
// } else {
// 	console.log(`${x} < ${y}`);
// }

// const color = "blue";
// const newColor = "green";

// if (color === newColor) {
// 	console.log("Kolory sie zgadzaja");
// } else {
// 	console.log("Kolory sie nie zgadzaja");
// }

// const x = 50
// const y = 30

// if (x > y){
//     console.log(`${x} jest większe od ${y}`);
// }

// const x = 100;

// if (x > 20) {
// 	console.log(`${x} > 20`);
// } else {
// 	console.log(`${x} < 20`);
// }

// const newX = x > 20 ? `${x} > 20` : `${x} < 20`;

// console.log(newX);

// const day = "srodasd";

// if (day === "poniedzialek") {
// 	console.log("Dziś jest poniedzialek");
// } else if (day === "wtorek") {
// 	console.log("Dziś jest wtorek");
// } else if (day === "sroda") {
// 	console.log("Dziś jest sroda");
// } else if (day === "czwartek") {
// 	console.log("Dziś jest czwartek");
// } else if (day === "piatek") {
// 	console.log("Dziś jest piatek");
// } else {
// 	console.log("Weekend");
// }

// switch (day) {
// 	case "poniedzialek":
// 		console.log("Dzis jest poniedzialek");
// 		break;
// 	case "wtorek":
// 		console.log("Dzis jest wtorek");
// 		break;
// 	case "sroda":
// 		console.log("Dzis jest sroda");
// 		break;
// 	case "czwartek":
// 		console.log("Dzis jest czwartek");
// 		break;
// 	case "piatek":
// 		console.log("Dzis jest piatek");
// 		break;
// 	default:
// 		console.log("Weekend");
// }
