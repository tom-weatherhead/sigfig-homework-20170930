// sigfig-homework-20170930/test/test04_spec.js

// Test 04 : Zero exclusion test number 2.

// Test the filtering out of a particular stock from the list of alerts in cases where the number of friends with more buys than sells for that stock equals the number of friends with more sells than buysfor the same stock.

'use strict';

const testDriver = require('./test_driver');

const expectedAlertStrings = [
	'1,BUY,AAPL',
	'1,SELL,GOOG'
];

// ISO 8601 date format: See https://www.iso.org/iso-8601-date-and-time-format.html
const todaysDateAsISO8601String = '2017-09-30';		// This value of "now" will be used in our testing.

// Transaction summary for this test:

// AAPL: 2 friend with net buys and 1 friend with net sells. Net buying friends for AAPL: +1.
// GOOG: 1 friend with net buys and 2 friends with net sells. Net buying friends for GOOG: -1.
// MSFT: 1 friend with net buys and 1 friend with net sells. Net buying friends for MSFT: zero; therefore there will be no MSFT alerts returned in the alert list.

const trades = {
	'friend1': [
		['2017-09-29', true, 'AAPL']
	],
	'friend2': [
		['2017-09-29', true, 'GOOG']
	],
	'friend3': [
		['2017-09-26', true, 'AAPL'],
		['2017-09-24', false, 'AAPL'],
		['2017-09-29', true, 'AAPL']
	],
	'friend4': [
		['2017-09-29', true, 'MSFT']
	],
	'friend5': [
		['2017-09-29', false, 'GOOG']
	],
	'friend6': [
		['2017-09-27', false, 'MSFT'],
		['2017-09-29', true, 'MSFT'],
		['2017-09-28', false, 'MSFT']
	],
	'friend7': [
		['2017-09-29', false, 'AAPL']
	],
	'friend8': [
		['2017-09-29', false, 'GOOG']
	]
};

testDriver('test04 : Zero exclusion test number 2', expectedAlertStrings, trades, todaysDateAsISO8601String);
