// sigfig-homework-20170930/test/test02_spec.js

// Test 02 : One-week date threshold test.

'use strict';

const testDriver = require('./test_driver');

const expectedAlertStrings = [
	'1,BUY,AAPL',
	'1,BUY,GOOG'
];

// ISO 8601 date format: See https://www.iso.org/iso-8601-date-and-time-format.html
const todaysDateAsISO8601String = '2017-09-30';		// This value of "now" will be used in our testing.

// Test criterion: A trade will be considered if and only if its date is equal to or later than the test's "today's date"
// (in the case of this test, "today's date" is '2017-09-30'; therefore a trade will be considered if and only if its date is equal to or later than '2017-09-23'.

const trades = {
	'friend': [
		['2017-09-24', true, 'AAPL'],		// Passes the date filter: 2017-09-24 is later than our cutoff date of 2017-09-23.
		['2017-09-23', true, 'GOOG'],		// Passes the date filter: 2017-09-23 is equal to our cutoff date of 2017-09-23.
		['2017-09-22', true, 'YHOO']		// Does not pass the date filter: 2017-09-22 is earlier than our cutoff date of 2017-09-23.
	]
};

testDriver('test02 : One-week date threshold test', expectedAlertStrings, trades, todaysDateAsISO8601String);
