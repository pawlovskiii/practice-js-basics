/* rozwiązanie z pętlą for */

const x = prompt('Enter your number');

function multTable(num) {
	const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const value = Number(num);
	if (!nums.includes(value)) throw Error('Input must be between 1-9');
	for (let i = 1; i < 10; i++) {
		console.log(value * i);
	}
}
multTable(x);

a = prompt('Enter the base of the number');
n = prompt('Enter the number exponent');

/* rozwiązanie z pętlą while  */
function toPower(a, n) {
	const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	if (!nums.includes(Number(a))) throw Error('Input must be between 1-9');
	if (!nums.includes(Number(n))) throw Error('Input must be between 1-9');
	let i = 0;
	let result = 1;
	while (i < n) {
		i++;
		result *= a;
	}
	return result;
}

console.log(toPower(a, n));
