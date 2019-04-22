"use stritch"

//Завдання 1

//*1
var arr = [2, -5, 1, -2, 0, -3, 2, -14];
var positValues = arr.filter(function(number) {
	return number > 0;
});

//*2
var sqrt = positValues.map(function(number) {
	return Math.sqrt(number)
});

//*3
console.log(sqrt);

//Завдання 2

var arr = [4, 3, 5, 5, 0, 4, 8, 6];
var meaning = 0;
var result = arr.reduce(function(sum, current) {
	if (current === 0) {
		meaning = sum;
	} else {
		return sum + current;
	}
}, 0);
if (meaning === 0) {
	meaning = result;
}

console.log(meaning);

//Завдання 3
var sum = 0;

function summArguments() {
	for (var i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}
};
summArguments(1, 15, 5, 5)
console.log(sum);