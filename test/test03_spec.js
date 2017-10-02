// sigfig-homework-20170930/test/test03_spec.js

// Test 03 : Zero exclusion test number 1.

// Test the filtering out of trades of a particular stock for a particular friend in cases where the number of buys for that stock and friend equals the number of sells for the same stock and friend.

'use strict';

const testDriver = require('./test_driver');

const expectedAlertStrings = [
	'1,BUY,IBM',
	'1,SELL,MSFT'
];

// ISO 8601 date format: See https://www.iso.org/iso-8601-date-and-time-format.html
const todaysDateAsISO8601String = '2017-09-30';		// This value of "now" will be used in our testing.

// Transaction summary for this test:

// AAPL: 1 buy and 1 sell. Net transactions: zero; therefore there will be no AAPL trades reported for this friend.
// IBM: 2 buys and 1 sell. Net transactions: +1 (i.e. net 1 buy).
// MSFT: 1 buy and 2 sells. Net transactions: -1 (i.e. net 1 sell).

const trades = {
	'friend': [
		['2017-09-29', true, 'AAPL'],
		['2017-09-29', true, 'IBM'],
		['2017-09-29', false, 'MSFT'],
		['2017-09-29', false, 'IBM'],
		['2017-09-29', false, 'AAPL'],
		['2017-09-29', true, 'IBM'],
		['2017-09-29', true, 'MSFT'],
		['2017-09-29', false, 'MSFT']
	]
};

testDriver('test03 : Zero exclusion test number 1', expectedAlertStrings, trades, todaysDateAsISO8601String);
