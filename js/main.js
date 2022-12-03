const colors = ["niebieski"];
colors.unshift("czerwony");
colors.push("pomaranczowy");
console.log(colors);

for (let i = 0; i < colors.length; i++) {
	console.log(
		`Moj ulubiony color to: ${
			colors[i].charAt(0).toUpperCase() + colors[i].slice(1)
		}`
	);
}

for (const number of colors) {
	console.log(
		`Moj ulubiony kolor to jest : ${
			number.charAt(0).toUpperCase() + number.slice(1)
		}`
	);
}

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
