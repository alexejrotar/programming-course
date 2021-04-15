'use strict';

let counter = 0;

function countFromCounter(to) {
	appendTo('countFromCounter', `${counter} `);
	if (counter == to) {
  	return;
	}
	counter = counter + 1;
	countFromCounter(to);
}

function count(from, to) {
  appendTo('count', `${from} `);
	if (from == to) {
  	return;
	}
	count(from+1, to);
}
