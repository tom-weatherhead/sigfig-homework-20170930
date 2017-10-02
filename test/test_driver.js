// sigfig-homework-20170930/test/test_driver.js

'use strict';

const chai = require('chai');
const expect = chai.expect;

const util = require('../src/util');

const rankedListOfAlerts = require('..');

module.exports = (testName, expectedAlertStrings, allTradesAsTriplets, todaysDateAsISO8601String, friendsList) => {
	describe(testName, function () {
		it('Passes', function (done) {

			if (!friendsList) {
				friendsList = Object.keys(allTradesAsTriplets);
			}

			const getFriendsListForUser = userID => {		// eslint-disable-line no-unused-vars
				return friendsList;
			};

			const getTradeTransactionsForUser = userID => {
				const trades = allTradesAsTriplets[userID] || [];

				return trades
					.map(tradeAsTriplet => { return util.createTrade(tradeAsTriplet[0], tradeAsTriplet[1], tradeAsTriplet[2]); })
					.sort((a, b) => { return b.date.getTime() - a.date.getTime(); })
					.map(trade => {
						return trade.date.toISOString().substring(0, 10) + ',' + (trade.buy ? 'BUY' : 'SELL') + ',' + trade.tickerSymbol;
					});
			};

			const library = {
				getFriendsListForUser: getFriendsListForUser,
				getTradeTransactionsForUser: getTradeTransactionsForUser
			};
			const actualAlertStrings = rankedListOfAlerts(library, todaysDateAsISO8601String);

			expect(actualAlertStrings).to.be.deep.equal(expectedAlertStrings);
			done();
		});
	});
};
