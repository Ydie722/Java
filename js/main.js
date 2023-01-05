// // =================================
// // =================================
// // Obiekty
// // =================================
// // =================================





// const colors = ["red", "green", "blue"];
// const firstColor = colors[0];
// const secondColor = colors[1];

// const [first, second] = colors;

// console.log(firstColor, secondColor);
// console.log(first, second);

// const [, , okej] = colors;
// console.log(okej);

// const person = {
// 	name: "Lily",
// 	age: 23,
// 	job: "DJ",
// 	car: {
// 		brand: "Dodge",
// 		model: "Viper",
// 	},
// };

// const showInfo = ({ name, age, job }) => {
// 	console.log(`${name} pracuje jako ${job} i ma ${age} lat/a.`);
// };

// showInfo(person);

// const showInfo2 = ({ car: { brand, model } }) => {
// 	console.log(`Jej samochód to ${brand} ${model}`);
// };

// showInfo2(person);

// const showInfo3 = () => {
// 	const {
// 		car: { brand, model },
// 	} = person;
// 	console.log(`Jej samochód to ${brand} ${model}`);
// };

// showInfo3(person);
// const user = {
// 	name: "Lily",
// 	age: 23,
// };

// const pet = {
// 	name: "Drops",
// 	type: "dog",
// };

// const userInfo = Object.assign({}, user, pet);
// console.log(user);
// console.log(pet);
// console.log(userInfo);

// const userCopy = Object.assign({}, user);
// userCopy.age = 25;
// console.log(userCopy);

// class Animal {
// 	constructor(name) {
// 		this.name = name;
// 	}
// 	sound() {
// 		console.log(`Zwierzak robi "hau hau".`);
// 	}
// }

// class Dog extends Animal {
// 	constructor(name, age) {
// 		super(name);
// 		this.age = age;
// 	}
// }

// class Cat extends Animal {
// 	sound() {
// 		console.log(`Miał`);
// 	}
// }

// const dog = new Dog("Drops", 23);
// dog.sound();
// console.log(dog);

// const cat = new Cat("kot");
// cat.sound();
// console.log(cat);

// function Person(name, age) {
// 	this.name = name;
// 	this.age = age;
// }

// Person.prototype.sayHi = function () {
// 	console.log(`Cześć, jestem ${this.name}`);
// };
// Person.prototype.showAge = function () {
// 	console.log(`Mam ${this.age} lat/a`);
// };

// const person1 = new Person("majek", 23);

// console.log(person1);
// person1.sayHi();
// person1.showAge();

// class Person2 {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}
// 	sayHi() {
// 		console.log(`Cześć, jestem ${this.name}`);
// 	}
// 	showAge() {
// 		console.log(`Mam ${this.age} lat/a`);
// 	}
// }

// const person2 = new Person2("Ania", 33);
// person2.sayHi();
// person2.showAge();

// function Food(name, prize, weight) {
// 	this.name = name;
// 	this.prize = prize;
// 	this.weight = weight;
// }

// const food1 = new Food("Burger", 25, 1);
// console.log(food1);

// Food.prototype.showIt = function () {
// 	console.log(`${this.name} kosztuje ${this.prize} i waży ${this.weight}`);
// };

// food1.showIt();

// class Eating {
// 	constructor(name, prize, weight) {
// 		this.name = name;
// 		this.prize = prize;
// 		this.weight = weight;
// 	}
// 	showE() {
// 		console.log(
// 			`${this.name} kosztuje ${this.prize}zł i waży ${this.weight}kg`
// 		);
// 	}
// }

// const food2 = new Eating("pizza", 22, 2);
// console.log(food2);
// food2.showE();
// function test() {
// 	console.log(this);
// 	console.log(this.name);
// }

// const car1 = {
// 	name: "Audi",
// };

// const car2 = {
// 	name: "Dodge",
// };
// const car3 = {
// 	name: "Nissan",
// };

// test.bind(car1)();

// Zadanie Obiekty

// const btnOne = document.querySelector(".btn-one");
// const btnTwo = document.querySelector(".btn-two");
// const btnThree = document.querySelector(".btn-three");
// const p = document.querySelector("p");

// function Konst(meal, prize) {
// 	this.meal = meal;
// 	this.prize = prize;
// }

// const newMeal = new Konst("Pizza", 35);
// const newMeal2 = new Konst("Burger", 22);
// const newMeal3 = new Konst("Hotdog", 8);

// Konst.prototype.que = function () {
// 	console.log(`${this.meal} kosztuje ${this.prize} zł`);
// };

// btnOne.addEventListener("click", () => newMeal.que());
// btnTwo.addEventListener("click", () => newMeal2.que());
// btnThree.addEventListener("click", () => newMeal3 .que());

// const myObject = {
// 	key: value,
// 	key: value,
// 	key: value,
// };

//KOnstruktor
// function User(name, age) {
// 	this.name = name;
// 	this.age = age;
// }

// const newUser = new User("Klaudia", 23);
// const newUser2 = new User("Lily", 34);
// const newUser3 = new User("Majek", 45);

// console.log(newUser, newUser2, newUser3);

// User.prototype.hello = function () {
// 	console.log(`Cześć ${this.name}`);
// };

// User.prototype.country = "Polska";
// console.log(newUser2.country);
// newUser.hello();

// const user = {
// 	name: "Klaudia",
// 	showName() {
// 		console.log(this.name);
// 	},
// };

// user.showName()

// const user = {
// 	name: "Klaudia",
// 	age: 23,
// 	sex: "female",
// 	"hair-color": "blonde",
// };

// for (const data in user) {
// 	console.log(user[data]);
// }

// const dogName = "Drops";
// const dogAge = 5;

// const dog = {
// 	// name: dogName,
// 	// age: dogAge,
// 	dogName,
// 	dogAge,
// };

// dog["Rasa-Psa"] = "Lablador";
// dog.color = "niebieski";

// console.log(dog);

// const user = {
// 	name: "Klaudia",
// 	age: 23,
// };

// user.country = "Polska";
// user["fav-color"] = "niebieski";
// console.log(user);

// const newUser = {
// 	name: "Lisa",
// 	age: 23,
// 	car: {
// 		brand: "Audi",
// 		model: "A3",
// 		color: "Czarny",
// 		sound(){
// 			console.log("Brum brum");
// 		},
// 	},
// };

// newUser.car.sound();

// // =================================
// // =================================
// // Projekt #7 !!!!!
// // =================================
// // =================================

// let todoInput;
// let errorInfo;
// let addBtn;
// let ulList;
// let newTodos;

// // POP UP
// let popup;
// let popupInfo;
// let todoToEdit;
// let popupInput;
// let popupAddBtn;
// let popupCloseBtn;

// const main = () => {
// 	prepareDOMElemenst();
// 	prepareDOMEvents();
// };

// const prepareDOMElemenst = () => {
// 	todoInput = document.querySelector(".todo-input");
// 	errorInfo = document.querySelector(".error-info");
// 	addBtn = document.querySelector(".btn-add");
// 	ulList = document.querySelector(".todolist ul");
// 	//
// 	popup = document.querySelector(".popup");
// 	popupInfo = document.querySelector(".popup-info");
// 	popupInput = document.querySelector(".popup-input");
// 	popupAddBtn = document.querySelector(".accept");
// 	popupCloseBtn = document.querySelector(".cancel");
// };

// const prepareDOMEvents = () => {
// 	addBtn.addEventListener("click", addNewTodo);
// 	ulList.addEventListener("click", checkClick);
// 	popupCloseBtn.addEventListener("click", closePopup);
// 	popupAddBtn.addEventListener("click", changeTodoText);
// 	todoInput.addEventListener("keyup", enterKetCheck);
// };

// const addNewTodo = () => {
// 	if (todoInput.value !== "") {
// 		newTodos = document.createElement("li");
// 		newTodos.textContent = todoInput.value;
// 		createToolsArea();
// 		ulList.append(newTodos);

// 		todoInput.value = "";
// 		errorInfo.textContent = "";
// 	} else {
// 		errorInfo.textContent = "Wpisz treść zadania!";
// 	}
// };

// const createToolsArea = () => {
// 	const toolsPanel = document.createElement("div");
// 	toolsPanel.classList.add("tools");
// 	newTodos.append(toolsPanel);

// 	const btnComplete = document.createElement("button");
// 	btnComplete.classList.add("complete");
// 	btnComplete.innerHTML = '<i class="fas fa-check"></i>';

// 	const btnEdit = document.createElement("button");
// 	btnEdit.classList.add("edit");
// 	btnEdit.textContent = "EDIT";

// 	const btnDelete = document.createElement("button");
// 	btnDelete.classList.add("delete");
// 	btnDelete.innerHTML = '<i class="fas fa-times"></i>';

// 	toolsPanel.append(btnComplete, btnEdit, btnDelete);
// };

// // funkcje POPUP

// const checkClick = (e) => {
// 	if (e.target.matches(".complete")) {
// 		e.target.closest("li").classList.toggle("completed");
// 		e.target.classList.toggle("completed");
// 	} else if (e.target.matches(".edit")) {
// 		editTodo(e);
// 	} else if (e.target.matches(".delete")) {
// 		deleteTodo(e);
// 	}
// };

// const editTodo = (e) => {
// 	todoToEdit = e.target.closest("li");
// 	popupInput.value = todoToEdit.firstChild.textContent;
// 	popup.style.display = "flex";
// };

// const closePopup = () => {
// 	popup.style.display = "none";
// 	popupInfo.textContent = "";
// };

// const changeTodoText = () => {
// 	if (popupInput.value !== "") {
// 		todoToEdit.firstChild.textContent = popupInput.value;
// 		popup.style.display = "none";
// 		popupInfo.textContent = "";
// 	} else {
// 		popupInfo.textContent = "Musisz podac jakąś treść!";
// 	}
// };

// const deleteTodo = (e) => {
// 	e.target.closest("li").remove();

// 	const allTodos = ulList.querySelectorAll("li"); // Element tablico podobny
// 	if (allTodos.length === 0) {
// 		errorInfo.textContent = "Brak zadań na liście...";
// 	} else {
// 		errorInfo.textContent = "";
// 	}
// };

// // Enter
// const enterKetCheck = (e) => {
// 	if (e.key === "Enter") {
// 		addNewTodo();
// 	}
// };

// document.addEventListener("DOMContentLoaded", main);

// =================================
// =================================
// Projekt #6
// =================================
// =================================

// const currentDay = document.querySelector(".current-day");
// const funFact = document.querySelector(".fun-fact");

// const facts = [
// 	"Krokodyl nie potrafi wystawić języka.",
// 	"Każdy człowiek spędził około pół godziny jako pojedyncza komórka.",
// 	"Dźwięk przemieszcza się 15 razy szybciej przez stal niż przez powietrze.",
// 	"Leniwce potrzebują dwóch tygodni na strawienie jedzenia.",
// 	"Goryle śpią nawet czternaście godzin dziennie.",
// 	"Język kameleona jest dwukrotnie dłuższy od jego ciała.",
// 	"Chińczycy w ciągu roku zużywają około 80 miliardów pałeczek.",
// 	"Żeby wejść na Wieżę Eiffla trzeba pokonać aż 1710 stopni.",
// ];

// const day = new Date();
// currentDay.textContent = day.toLocaleDateString("default", { weekday: "long" });

// const showRandomFact = () => {
// 	const number = Math.floor(Math.random() * facts.length);
// 	funFact.textContent = facts[number];
// };

// showRandomFact();

// =================================
// =================================
// Projekt #5
// =================================
// =================================

// const brugerBtn = document.querySelector(".burger");
// const barsIcon = document.querySelector(".fa-bars");
// const xIco = document.querySelector(".fa-times");
// const nav = document.querySelector("nav ul");

// const handleNav = () => {
// 	nav.classList.toggle("active");
// 	brugerBtn.classList.toggle("active");
// 	barsIcon.classList.toggle("hide");
// 	xIco.classList.toggle("hide");
// };

// brugerBtn.addEventListener("click", handleNav);

// =================================
// =================================
// Projekt #4
// =================================
// =================================

// const converter = document.querySelector("#converter");
// const result = document.querySelector(".result");
// const convBtn = document.querySelector(".conv");
// const resetBtn = document.querySelector(".reset");
// const changeBtn = document.querySelector(".change");
// const one = document.querySelector(".one");
// const two = document.querySelector(".two");

// const changeParr = () => {
// 	if (one.textContent === "°C") {
// 		one.textContent = "°F";
// 		two.textContent = "°C";
// 		result.textContent = "";
// 	} else if (one.textContent === "°F") {
// 		one.textContent = "°C";
// 		two.textContent = "°F";
// 		result.textContent = "";
// 	}
// };

// const farere = () => {
// 	let far = converter.value * 1.8 + 32;
// 	result.textContent = `${converter.value}°C to ${far.toFixed(1)}°F`;
// 	converter.value = "";
// };

// const celss = () => {
// 	let far = (converter.value - 32) / 1.8;
// 	result.textContent = `${converter.value}°F to ${far.toFixed(1)}°C`;
// 	converter.value = "";
// };

// Opcja 1
// const check = () => {
// 	if (converter.value === "") {
// 		result.textContent = "Wpisz wartość!";
// 	} else if (one.textContent === "°C") {
// 		farere();
// 	} else if (one.textContent === "°F") {
// 		celss();
// 	}
// };

// Opcja 2
// const check = () => {
// 	if (converter.value !== "") {
// 		if (one.textContent === "°C") {
// 			farere();
// 		} else {
// 			celss();
// 		}
// 	} else {
// 		result.textContent = "Wpisz wartość!";
// 	}
// };

// const restt = () => {
// 	result.textContent = "";
// 	converter.value = "";
// };

// changeBtn.addEventListener("click", changeParr);
// convBtn.addEventListener("click", check);
// resetBtn.addEventListener("click", restt);

// =================================
// =================================
// Projekt #3
// =================================
// =================================

// const pass = document.querySelector("#password");
// const p = document.querySelector(".passinfo");
// const letters = /[a-z]/i;
// const numbers = /[0-9]/;
// const special = /[!@#$%^&*()]/;
// const minValue = 10;

// const showMsg = () => {
// 	if (
// 		pass.value.length > minValue &&
// 		pass.value.match(letters) &&
// 		pass.value.match(numbers) &&
// 		pass.value.match(special)
// 	) {
// 		p.textContent = "Masz bardzo dobre hasło";
// 		p.style.color = "lime";
// 	} else if (
// 		pass.value.length > minValue &&
// 		pass.value.match(letters) &&
// 		pass.value.match(numbers)
// 	) {
// 		p.textContent = "Masz dobre hasło";
// 		p.style.color = "yellow";
// 	} else {
// 		p.textContent = "Masz słabe hasło";
// 		p.style.color = "red";
// 	}
// };

// const chechPass = () => {
// 	if (pass.value !== "") {
// 		showMsg();
// 	} else {
// 		p.textContent = "Nie podałes hasła...";
// 		p.style.color = "";
// 	}
// };

// pass.addEventListener("keyup", chechPass);

// =================================
// =================================
// Projekt #2
// =================================
// =================================

// const sizeUp = document.querySelector(".sizeUp");
// const sizeDown = document.querySelector(".sizeDown");
// const colorBtn = document.querySelector(".color");
// const p = document.querySelector("p");
// let size = 36;

// const sizeUpFun = () => {
// 	if (size >= 60) return;
// 	size += 5;
// 	p.style.fontSize = size + "px";
// };

// const sizeDownFun = () => {
// 	if (size <= 21) return;
// 	size -= 5;
// 	p.style.fontSize = size + "px";
// };

// const colorChange = () => {
// 	const r = Math.floor(Math.random() * 255);
// 	const g = Math.floor(Math.random() * 255);
// 	const b = Math.floor(Math.random() * 255);
// 	p.style.color = `rgb(${r},${g},${b})`;
// };

// colorBtn.addEventListener("click", colorChange);
// sizeDown.addEventListener("click", sizeDownFun);
// sizeUp.addEventListener("click", sizeUpFun);

// =================================
// =================================
// Projekt #1
// =================================
// =================================

// const arrowBtn = document.querySelector(".arrow");
// const arrowIcon = document.querySelector(".fas");
// const img = document.querySelector(".item1");

// const adding = () => {
// 	img.classList.toggle("hide");
// 	if (img.classList.contains("hide")) {
// 		arrowIcon.style.transform = "rotate(180deg)";
// 	} else {
// 		arrowIcon.style.transform = "rotate(0)";
// 	}
// };

// arrowBtn.addEventListener("click", adding);

// let nameE = document.querySelector(".name").value;
// const btn = document.querySelector(".btnik");
// console.log(nameE);
// console.log(btn);

// const check = (nameE) => {
// 	if (nameE.length === 0) {
// 		console.log("KUTAZ");
// 	} else {
// 		console.log("nameE");
// 	}
// };

// btn.addEventListener("click", check);

// const li = document.querySelectorAll("li");
// let number = 1;

// for (let liItem of li) {
// 	liItem.textContent = number;
// 	liItem.dataset.id = number;
// 	number++;
// }

// for (let liItem of li) {
// 	liItem.textContent = number;
// 	liItem.dataset.id = number;
// 	number++;
// }

// for (let i = 0; i < li.length; i++) {
// 	li[i].textContent = number;
// 	li[i].dataset.id = number;
// 	number++;
// }

// for (let i = 0; i < li.length; i++) {
// 	li[i].textContent = number;
// 	li[i].dataset.id = number;
// 	number++;
// }

// const threeLi = document.querySelector("[data-id='3']");
// console.log(threeLi);
// const divek = threeLi.closest(".wrapper");
// console.log(divek);
// const image = document.querySelector("img");
// image.setAttribute(
// 	"src",
// 	"https://sdpl.b-cdn.net/17166-large_default/obrazek-obrazki-18paz.jpg"
// );
// image.setAttribute("alt", "doggo");

// const funcja = () => {
// 	let wynik = 20 * 20;
// 	console.log(wynik);
// };

// setTimeout(funcja, 2000);

// const child = document.querySelector(".middle-child");
// console.log(child);
// console.log(child.previousElementSibling);
// console.log(child.nextElementSibling);

// const parentEl = child.parentElement;
// console.log(parentEl);

// console.log(child.closest('.grandpa'));

// const btn1 = document.querySelector(".btn1");
// const btn2 = document.querySelector(".btn2");
// const p1 = document.querySelector(".p1");
// const p2 = document.querySelector(".p2");
// const divS = document.querySelector(".square");

// const hello = () => {
// 	console.log("Cześć!");
// };

// const change = () => {
// 	divS.style.backgroundColor = "red";
// };

// const changeTwo = () => {
// 	divS.style.backgroundColor = "blue";
// };

// const toglo = () => {
// 	p1.classList.toggle("show");
// 	p2.classList.toggle("show");
// };

// btn1.addEventListener("dblclick", hello);
// divS.addEventListener("mouseenter", change);
// divS.addEventListener("mouseleave", changeTwo);
// btn2.addEventListener("click", toglo);

// const ulList = document.createElement("ul");
// document.body.append(ulList);
// const number = 10;

// for (let i = 1; i <= number; i++) {
// 	const liItem = document.createElement("li");
// 	ulList.append(liItem);
// 	liItem.textContent = i;
// }

// const lastLi = ulList.querySelector("li:last-child");
// lastLi.style.backgroundColor = "blue";

// const ulList = document.createElement("ul");
// document.body.append(ulList);
// const number = 10;

// for (let i = 1; i <= number; i++) {
// 	const liItem = document.createElement("li");
// 	liItem.textContent = i;
// 	ulList.append(liItem);
// }

// const lastli = ulList.querySelector("li:last-child");
// lastli.textContent = "Jestem ostatnim li";

// lastli.style.backgroundColor = "blue";
// lastli.style.padding = "20px 40px";
// lastli.style.fontSize = "48px";

// const head = document.querySelector(".header");
// const divOne = document.querySelector(".div-one");
// const divTwo = document.querySelector(".div-two");
// const btn = document.querySelector("button");

// const test = () => {
// 	head.classList.toggle("test");
// 	divOne.classList.toggle("test");
// 	divTwo.classList.toggle("test");
// };

// btn.addEventListener("click", test);

// const gold = document.querySelector(".gold");
// const div = document.createElement("div");

// gold.append(div);

// const btn = document.querySelector("button");

// const test = (e) => {
// 	console.log(e.target.classList);
// };

// btn.addEventListener("click", test);

// const btn1 = document.querySelector(".btn-1");
// const btn2 = document.querySelector(".btn-2");
// const btn3 = document.querySelector(".btn-3");

// btn1.addEventListener("click", function () {
// 	console.log("Klikniteo mnie");
// });

// btn2.addEventListener("mouseover", () => console.log("Najechano na mnie"));

// const test = () => {
// 	console.log("Double click");
// };

// btn3.addEventListener("dblclick", test);

// const div = document.querySelector("div");
// const ulList = document.createElement("ul");
// const p = document.createElement("p");
// ulList.textContent = "Czesc";

// div.append(ulList, p);

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
