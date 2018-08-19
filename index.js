'use strict';

const mergeSort = arr => {
		if (arr.length < 2) {
			return arr;
		}

    let middle = Math.floor(arr.length / 2);
    let left   = arr.slice(0, middle);
    let right  = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
    let arr = [];

    while (left.length && right.length) {
      (left[0] <= right[0]) ? arr.push(left.shift()) : arr.push(right.shift());
    }

    while (left.length) {
			arr.push(left.shift());
		}

    while (right.length) {
			arr.push(right.shift());
		}

    return arr;
}

module.exports = mergeSort;
