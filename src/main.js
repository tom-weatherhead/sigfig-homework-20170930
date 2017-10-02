// sigfig-homework-20170930/src/main.js

'use strict';

const util = require('./util');

const myUserID = 'me';

function rankedListOfAlerts (library, todaysDateAsISO8601String) {
	let now;

	if (todaysDateAsISO8601String) {
		now = new Date(todaysDateAsISO8601String);
	} else {
		now = Date.now();
	}

	const numberOfMillisecondsInAWeek = 7 * 24 * 60 * 60 * 1000;
	const timeAWeekAgo = now.getTime() - numberOfMillisecondsInAWeek;
	const myFriends = library.getFriendsListForUser(myUserID);
	let netTradesPerStockForAllFriends = {};

	myFriends
		// At this point, we have a list of user IDs.
		.map(library.getTradeTransactionsForUser)
		// At this point, we have a list of lists of trade strings.
		.map(tradesForUserID => {
			let netTradesPerStockForThisUser = {};

			tradesForUserID
				// At this point, we have a list of trade strings.
				.map(util.tradeStringToObject)
				// At this point, we have a list of trade objects.
				.filter(trade => { return trade.date.getTime() >= timeAWeekAgo; })
				// At this point, we have a list of trades that occurred within the past week.
				// We could use a ".reduce(func, {})" instead of a ".forEach(...)" here:
				.forEach(trade => {
					let netBuysForThisStockAndUser = netTradesPerStockForThisUser[trade.tickerSymbol] || 0;

					if (trade.buy) {
						netBuysForThisStockAndUser++;
					} else {
						netBuysForThisStockAndUser--;
					}

					netTradesPerStockForThisUser[trade.tickerSymbol] = netBuysForThisStockAndUser;
				});

			// netTradesPerStockForThisUser is a hash, where the keys are ticker symbols and each key is (the number of buy trades minus the number of sell trades) for this stock for this friend.
			return Object.entries(netTradesPerStockForThisUser);
			// What is returned is a list of key-value pairs. Each key-value pair is represented by a list of length 2; element 0 is the key, and element 1 is the value.
		})
		// At this point, we have a list of lists of key-value pairs.
		.reduce((a, b) => { return a.concat(b); }, [])	// Flatten the list of lists.
		// At this point, we have a list of key-value pairs.
		// We could use a ".reduce(func, {})" instead of a ".forEach(...)" here:
		.forEach(netTradeInfoPairs => {
			let netBuysForThisStockForAllFriends = netTradesPerStockForAllFriends[netTradeInfoPairs[0]] || 0;

			if (netTradeInfoPairs[1] > 0) {
				netBuysForThisStockForAllFriends++;
			} else if (netTradeInfoPairs[1] < 0) {
				netBuysForThisStockForAllFriends--;
			}

			netTradesPerStockForAllFriends[netTradeInfoPairs[0]] = netBuysForThisStockForAllFriends;
		});

	// netTradesPerStockForAllFriends is a hash, where the keys are ticker symbols and each key is ((the number of friends who performed more buy trades than sell trades for this stock) minus (the number of friends who performed more sell trades than buy trades for this stock)).
	return Object.entries(netTradesPerStockForAllFriends)
		// At this point, we have a list of key-value pairs. Each key-value pair is represented by a list of length 2; element 0 is the key, and element 1 is the value.
		.filter(entry => { return entry[1] !== 0; })
		// All cases where (the number of buy trades equals the number of sell trades) for a particular friend and stock have been removed.
		.sort((a, b) => { return Math.abs(b[1]) - Math.abs(a[1]); })
		// The list has now been sorted by the number of net friends, regardless of buy vs. sell.
		.map(entry => { return Math.abs(entry[1]) + ',' + (entry[1] > 0 ? 'BUY' : 'SELL') + ',' + entry[0]; });

	// What is returned is a list of strings, formatted as required.
}

module.exports = rankedListOfAlerts;
