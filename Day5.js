module.exports = {
	partOne: function (input) {
		input = input.split('\n').map(num => parseInt(num));
		let count = 0;
		let currentIndex = 0;
		while (currentIndex >= 0 && currentIndex < input.length) {
			let nextIndex = currentIndex + input[currentIndex];
			input[currentIndex] += 1;
			currentIndex = nextIndex;
			count += 1;
		}
		return count;
	},
	partTwo: function (input) {
		input = input.split('\n').map(num => parseInt(num));
		let count = 0;
		let currentIndex = 0;
		while (currentIndex >= 0 && currentIndex < input.length) {
			let nextIndex = currentIndex + input[currentIndex];
			input[currentIndex] = input[currentIndex] >=3 ? input[currentIndex] - 1 : input[currentIndex] + 1;
			currentIndex = nextIndex;
			count += 1;
		}
		return count;
	}
};