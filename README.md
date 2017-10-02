# sigfig-homework-20170930
My solution to the take-home question for the SigFig interview process.

Git installation and testing instructions for sigfig-homework-20170930:

	$ npm i -g grunt
	$ git clone https://github.com/tom-weatherhead/sigfig-homework-20170930.git
	$ cd sigfig-homework-20170930
	$ npm i
	$ grunt

	Note: The command "grunt" runs lint, security, and unit tests.

Question 1: Write a function that provides a ranked (high to low) list of alerts...

	- Answer: The function in question is named "rankedListOfAlerts"; it can be found in the file "src/main.js".

Question 2: Write code for a few key unit tests for your code.

	- Answer: The four unit tests are in the "test" directory. They are executed via the Grunt task runner and the Mocha and Chai unit-testing frameworks for Node.js. The tests are:
		- Test 01: An initial, arbitrary smoke test.
		- Test 02: One-week date threshold test.
		- Test 03: Zero exclusion test number 1: Test the filtering out of trades of a particular stock for a particular friend in cases where the number of buys for that stock and friend equals the number of sells for the same stock and friend.
		- Test 04: Zero exclusion test number 2: Test the filtering out of a particular stock from the list of alerts in cases where the number of friends with more buys than sells for that stock equals the number of friends with more sells than buysfor the same stock.

Question 3: Enumerate other unit test scenarios (code not required).

	- Answer:
	
		- Unit test scenario: Test the selection of a set of friends that is a proper subset of the set of all users who are recorded in the data set as having executed trades.
		- Unit test scenario: Test the filtering out trade dates that are in the future.
		- Unit test scenario: Test the algorithm's ability to detect and gracefully handle other forms of invalid data.
		- Unit test scenario: Test the algorithm's performance while processing very large data sets.

Question 4: Provide space and time complexity for your solution.

	- Answer:
		
		Note the time complexity of the following functions:
		
			- Array.filter(function) : O(a * b), if the length of the array is a and the time complexity of "function" for each member of the array is O(b).
			- Array.forEach(function) : Similar to Array.filter().
			- Array.map(function) : Similar to Array.filter().
			- Array.reduce(function, initialAccumulatorValue) : Similar to Array.filter().
			- Array.sort(comparatorFunction) : O(n log n) in an average case, and O(n^2) in the worst case (Quicksort degenerate case), if the length of the array is n.
				Node.js uses the V8 JavaScript engine, which uses insertion sort to sort short arrays, and Quicksort to sort longer arrays.
				See https://www.quora.com/What-is-the-sorting-algorithm-behind-a-Javascript-Array-sort-method
				See also https://github.com/v8/v8/blob/master/src/js/array.js
				This could be improved by a third-party array sorting library.

		Therefore: if n = the total number of trades recorded by the system, then:
			- Space complexity = O(n)
			- Time complexity = O(n log n) in an average case, O(n^2) in the worst case.
