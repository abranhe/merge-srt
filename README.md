<p align="center" id="top">
	<a href="https://www.npmjs.com/package/merge-srt"><img src="https://cdn.abraham.gq/projects/merge-srt/merge-sort.gif"></a>
	<br>
	<br>
	<br>
	<a href="https://www.npmjs.com/package/merge-srt"><b>merge-srt</b></a>
	: Merge Sort Algorithm Implementation
</p>

<p align="center">
	<!-- Travis CI -->
	<a href="https://travis-ci.org/abranhe/merge-srt"><img src="https://img.shields.io/travis/abranhe/merge-srt.svg?logo=travis" /></a>
	<!-- LICENSE -->
	<a href="https://github.com/abranhe/merge-srt/blob/master/LICENSE"><img src="https://img.shields.io/github/license/abranhe/merge-srt.svg" /></a>
	<!-- NPM Version -->
	<a href="https://www.npmjs.com/package/merge-srt"><img src="https://img.shields.io/npm/v/merge-srt.svg" /></a>
	<!-- @abranhe -->
	<a href="https://github.com/abranhe"><img src="https://abranhe.com/badge.svg"></a>
	<!-- Cash me -->
	<a href="https://cash.me/$abranhe"><img src="https://cdn.abraham.gq/badges/cash-me.svg"></a>
	<!-- Patreon -->
	<a href="https://www.patreon.com/abranhe"><img src="https://cdn.abraham.gq/badges/patreon.svg" /></a>
	<!-- Paypal -->
	<a href="https://paypal.me/abranhe/10"><img src="https://cdn.abraham.gq/badges/paypal.svg" /></a>
</p>

# Overview

In computer science, merge sort is an efficient, general-purpose, comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the implementation preserves the input order of equal elements in the sorted output.

Merge sort is a divide and conquer algorithm that was invented by John von Neumann in 1945. A detailed description and analysis of bottom-up mergesort appeared in a report by Goldstine and von Neumann as early as 1948.

[Read More ...](https://en.wikipedia.org/wiki/Merge_sort)

# Install

```
npm install merge-srt
```

# Usage

```js
const mergeSort = require('merge-srt');

let numsArr = [46, 24, 33, 10, 2, 81, 50];
console.log(mergeSort(numsArr));
// => [ 2, 10, 24, 33, 46, 50, 81 ]

let lettersArr = ['d', 'h', 'z', 'a', 'r', 'b', 'i'];
console.log(mergeSort(lettersArr));
// => [ 'a', 'b', 'd', 'h', 'i', 'r', 'z' ]

let wordsArr = ['happy', 'auto', 'energy', 'zoo', 'trigonometry', 'dog', 'foo'];
console.log(mergeSort(wordsArr));
// => [ 'auto', 'dog', 'energy', 'foo', 'happy', 'trigonometry', 'zoo' ]
```

# API

## `mergeSort(array)`

> Return a sorted array using merge sort algorithm

# Related

- [merge-srt-cli](https://github.com/abranhe/merge-srt-cli): CLI for this module
- [bubble-srt](https://github.com/abranhe/bubble-srt): Bubble Sort Algorithm Implementation

# Team

|[![Carlos Abraham Logo](https://avatars3.githubusercontent.com/u/21347264?s=50&v=4)](https://19cah.com)|
| :-: |
| [Carlos Abraham](https://github.com/abranhe) |

# License

[MIT](https://github.com/abranhe/merge-srt/blob/master/LICENSE) License © [Carlos Abraham](https://github.com/abranhe/)
