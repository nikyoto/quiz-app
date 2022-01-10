console.log("ich bin die exercise.js")
const selector = ".btn-answer";
const button = document.querySelector(selector);


//keyof ElementEventMap
const ElementEventMap = {
	click: "", //key(Ort)value(Bootcamp) pair (Paar)
	change: "",
	hover: "",
	mouseenter: "",
	mouseleave: "",
	mouseleave: "",
	keydown: "",
	dblclick: "",

}


const listener = () => {
	console.log("Man man man");
};


// Add Event-Listener
button.addEventListener ("dblclick",listener); //eigentlich haben wir an dieser Stelle dblclick implementiert, aber aus unerklärlichen Gründen, funktioniert das nicht.


// Add Event-Listener
button.addEventListener("dblclick",() => {
console.log("Ich verstehe ");
});

button.addEventListener("dblclick", function () {
console.log("nur Bahnhof.");
});

//another Exercises

//Juice Processor
const cutPieces = function (fruit) {
	return fruit* 4;
};

const fruitProcessor = function (apples, oranges) {
	const applePieces = cutPieces(apples);
	const orangePieces = cutPieces(oranges);

	const juice = "Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.";
	return juice;

};

console.log(fruitProcessor(2, 3));


//another function
function calcAge(birthYear, firstName){
	const age = 2037 - birthYear;
	console.log('${firstName} is ${age} years old');
	return age;
}

const age = calcAge(1991, "Jonas")


//i will try  to coding a function
function wishList (birthDay, xMas){
	const list = 0 + birthDay + xMas;
	console.log('In the List from ${xMas} and ${birthDay}) are many presents!');
	return list;
}

const list = wishList("a Present", "another Present")

//i wil try code another Shoppinglist

function shoppingList (fruits, vegetables){
	const numberOfPieces = fruits + vegetables;
	console.log('We need to buy ${fruits} and ${vegetables}');
	return numberOfPieces;
}
const numberOfPieces = shoppingList("3 Mangos", "5 Potatoes")





//if Anwendungen 1, when to use Blockstatesment
const a ="A";
if (a =="A") {
	console.log(1) //multiple rows requiere a block-statement
	console.log(2)
}
//single lines don't requiere a Block-Statement
if (a=="A") console.log(1)
console.log(2);




//if Anwendungen 2

if (a =="A") {
	console.log(1)
	console.log(2)
} else {					//else if ist just an if inside an else
	if (a == "B"){

	}
}




//if Anwendungen 3
if (a =="A") {
	console.log(1)
	console.log(2)
} else console.log(3);

if (a=="A"){
	console.log(1);
	console.log(2);
} else if (a == "B") {
	//this is the same as line 102 - 106
}
