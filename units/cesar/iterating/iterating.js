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

countFromCounter(7);
count(9,16);

function countdown(from) {
	if (0 == from) {
		return;
	}

	appendTo('countdown', `${from} `);	

	countdown(from-1)
}

countdown(5);