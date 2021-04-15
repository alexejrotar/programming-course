'use strict';

let counter = 0;

function countFromCounter(to) {
	if (counter == to) {
  	return;
	}

	appendTo('countFromCounter', `${counter} `);

	counter = counter + 1;
	countFromCounter(to);
}

function count(from, to) {
	if (from == to) {
  	return;
	}

	appendTo('count', `${from} `);

	count(from+1, to);
}
