import test from 'ava';
import mergeSort from './';

const numsArr = [46, 24, 33, 10, 2, 81, 50];
const expectedNumsArr = [2, 10, 24, 33, 46, 50, 81];

test('Merge sort test array of numbers', t => {
	t.truthy(mergeSort(numsArr), expectedNumsArr);
});

const lettersArr = ['d', 'h', 'z', 'a', 'r', 'b', 'i'];
const expectedlettersArr = [ 'a', 'b', 'd', 'h', 'i', 'r', 'z' ];

test('Merge sort test array of letters', t => {
	t.truthy(mergeSort(lettersArr), expectedlettersArr);
});

const wordsArr = ['happy', 'auto', 'energy', 'zoo', 'trigonometry', 'dog', 'foo'];
const expectedWordsArr = [ 'auto', 'dog', 'energy', 'foo', 'happy', 'trigonometry', 'zoo' ];

test('Merge sort test array of words', t => {
	t.truthy(mergeSort(wordsArr), expectedWordsArr);
});
