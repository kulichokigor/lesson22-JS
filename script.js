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
var result = arr.reduce(function(sum, current, index) {
	if (arr.indexOf(0) == -1 || index < arr.indexOf(0)) {
		return sum + current
	}else {return sum}
}, 0);

console.log(result);

//Завдання 3

var sum = 0;
function summArguments() {
	for (var i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}
};
summArguments(1, 15, 5, 5)
console.log(sum);