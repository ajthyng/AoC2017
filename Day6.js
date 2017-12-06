/**
 * Copyright 2017 Andrew Thyng
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

Array.prototype.equals = function(arr) {
	if (this.length === arr.length) {
		return this.every((item, index) => {
			return item === arr[index];
		})
	}
	return false;
};

Array.prototype.getMax = function() {
	let max = {
		value: this[0],
		index: 0
	};
	this.forEach((value, index) => {
		if (value > max.value) {
			max.value = value;
			max.index = index;
		}
	});
	return max;
};

Array.prototype.spreadBlocks = function({value, index}) {
	this[index] = 0;
	for (let i = 1; i <= value; i++) {
		this[(index+i) % this.length] += 1;
	}
	return this;
};

module.exports = {
	partOne: function (input = '0\t2\t7\t0') {
		input = input.split('\t').map(num => parseInt(num));
		let history = [];
		history.push([...input]);
			input.spreadBlocks(input.getMax());
		while (history.every((arr, index) => !arr.equals(input))) {
			history.push([...input]);
			input.spreadBlocks(input.getMax());
		}

		return history.length;
	},
	partTwo: function (input = '0\t2\t7\t0') {
		input = input.split('\t').map(num => parseInt(num));
		let history = [];
		history.push([...input]);
		let matchingPosition = 0;
		input.spreadBlocks(input.getMax());
		while (history.every((arr, index) => {
			let doesNotMatch = !arr.equals(input);
			let matches = !doesNotMatch;
			if (matches) {
				matchingPosition = index
			}
			return doesNotMatch;
		})) {
			history.push([...input]);
			input.spreadBlocks(input.getMax());
		}

		return history.length - matchingPosition;
	}
};
