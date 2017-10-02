// sigfig-homework-20170930/test/test01_spec.js

// Test 01 : An initial, arbitrary smoke test.

'use strict';

const testDriver = require('./test_driver');

const expectedAlertStrings = [
	'4,SELL,IBM',
	'2,BUY,AAPL',
	'2,BUY,GOOG',
	'1,SELL,YHOO',
	'1,BUY,MSFT'
];

// ISO 8601 date format: See https://www.iso.org/iso-8601-date-and-time-format.html
const todaysDateAsISO8601String = '2017-09-30';		// This value of "now" will be used in our testing.

const trades = {
	'friend2': [
		['2017-09-25', true, 'GOOG'],		// * (Passes the date filter)
		['2017-09-22', true, 'GOOG'],
		['2017-09-29', false, 'AAPL'],		// *
		['2017-09-27', false, 'IBM'],		// *
		['2017-09-30', false, 'YHOO'],		// *
		['2017-09-20', true, 'AAPL'],
		['2017-09-21', false, 'IBM'],
		['2017-09-24', false, 'YHOO']		// *
	],
	'friend3': [
		['2017-09-26', true, 'AAPL'],		// *
		['2017-09-20', false, 'GOOG'],
		['2017-09-15', false, 'YHOO'],
		['2017-09-28', true, 'MSFT'],		// *
		['2017-09-27', true, 'AAPL'],		// *
		['2017-09-26', true, 'MSFT'],		// *
		['2017-09-29', false, 'IBM'],		// *
		['2017-09-21', false, 'YHOO']
	],
	'friend7': [
		['2017-09-26', false, 'MSFT'],		// *
		['2017-09-28', false, 'IBM'],		// *
		['2017-09-28', true, 'AAPL'],		// *
		['2017-09-25', true, 'YHOO'],		// *
		['2017-09-21', false, 'GOOG'],
		['2017-09-27', true, 'GOOG'],		// *
		['2017-09-22', true, 'YHOO'],
		['2017-09-29', true, 'YHOO']		// *
	],
	'friend11': [
		['2017-09-27', false, 'YHOO'],		// *
		['2017-09-30', false, 'YHOO'],		// *
		['2017-09-29', true, 'AAPL'],		// *
		['2017-09-22', true, 'AAPL'],
		['2017-09-21', false, 'YHOO'],
		['2017-09-24', false, 'MSFT'],		// *
		['2017-09-23', true, 'AAPL'],		// *
		['2017-09-25', false, 'AAPL']		// *
	],
	'friend13': [
		['2017-09-28', true, 'AAPL'],		// *
		['2017-09-27', false, 'IBM'],		// *
		['2017-09-23', true, 'MSFT'],		// *
		['2017-09-21', true, 'GOOG'],
		['2017-09-20', true, 'AAPL'],
		['2017-09-26', true, 'MSFT'],		// *
		['2017-09-28', true, 'AAPL'],		// *
		['2017-09-22', false, 'YHOO']
	],
	'friend19': [
		['2017-09-28', false, 'AAPL'],		// *
		['2017-09-27', false, 'YHOO'],		// *
		['2017-09-21', false, 'AAPL'],
		['2017-09-23', true, 'MSFT'],		// *
		['2017-09-27', true, 'YHOO'],		// *
		['2017-09-26', false, 'MSFT'],		// *
		['2017-09-29', true, 'MSFT'],		// *
		['2017-09-20', false, 'GOOG']
	]
};

testDriver('test01 : Smoke test', expectedAlertStrings, trades, todaysDateAsISO8601String);
