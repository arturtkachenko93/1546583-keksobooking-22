function randomInteger(min, max) {
	let randomNumber = min - 0.5 + Math.random() * (max - min + 1);
	return Math.round(randomNumber);

	if (randomInteger >= 0 && randomInteger <= 90) {
		console.log(randomInteger)
	} else {
		console.log('number is not range')
	}
}

console.log(randomInteger(90, 100));


function randomIntegerDot(min, max) {
	return min + Math.random() * (max - min);

	if (randomInteger >= 0 && randomInteger <= 90) {
		console.log(randomInteger)
	} else {
		console.log('number is not range')
	}
}

console.log(randomIntegerDot(num.toFixed(2)(1, 100)));