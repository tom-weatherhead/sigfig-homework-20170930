// sigfig-homework-20170930/src/util.js

'use strict';

function createTrade (dateString, buy, tickerSymbol) {
	return {
		date: new Date(dateString),
		buy: buy,
		tickerSymbol: tickerSymbol
	};
}

function tradeStringToObject (tradeString) {
	const splitArray = tradeString.split(',');

	return createTrade(splitArray[0], splitArray[1] === 'BUY', splitArray[2]);
}

module.exports = {
	createTrade: createTrade,
	tradeStringToObject: tradeStringToObject
};
