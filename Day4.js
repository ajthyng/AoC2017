module.exports = {
	partOne: function (input) {
		input = input.split('\n').filter(row => {
			let uniqueWords = new Set(row.split(' '));
			return uniqueWords.size === row.split(' ').length
		});
		input = input.filter(row => {
			let splitRow = row.split(' ');
			let sameLetterWords = new Set(splitRow);
			return sameLetterWords.size === splitRow.length;
		});
		return input.length;
	},
	partTwo: function (input) {
		input = input.split('\n').filter(row => {
			let uniqueWords = new Set(row.split(' '));
			return uniqueWords.size === row.split(' ').length
		});
		input = input.filter(row => {
			let splitRow = row.split(' ').map(word => {
				return word.split('').sort().join('');
			});
			let sameLetterWords = new Set(splitRow);
			return sameLetterWords.size === splitRow.length;
		});
		return input.length;
	}
};