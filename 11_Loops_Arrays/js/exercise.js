/**
 * Javascript Exercise: Loops and Arrays.
 * Most of your answers should be stored in variables called q1, q2 etc..
 Print the variables q1, q1 etc to the console. 
 */

/**
 * Question 1
 * Create a 'for' loop that populates an array with the numbers 1 through 10 
 */
   var myArray = [];
for (i=1; i<=10; i++) {
	myArray.push(i);
}


/**
 * Question 2
 * Using a while loop subtract the numbers 1 through 10 from 100
 * Store the sum in the "sub" variable and print the sub and start to the console after each iteration.
 */
var sub = 100;
var start = 1;
for (start=1; start<=10; start++){
	sub = sub - start;
	console.log(sub);
	console.log(start);
}


/**
 * Question 3
 * Using a for loop programatically find the largest number in the array.
 * Store the largest number in a variable called "largest_num"
 */
var someNums = [3, 1, 88, -1, 33, 96, 35, 12, 72];
var largest_num = someNums[0];
for (i=0; i<=someNums.length; i++) {
	if (someNums[i] > largest_num) {largest_num = someNums[i]}
}


/**
 * Question 4
 * Using a for loop programatically find the smallest number in the "someNums" array.
 * Store that number in "small"
 */
var small = someNums[0];
for (i=0; i<=someNums.length; i++) {
	if (someNums[i] < small) {small = someNums[i]}
}
/**
 * Question 5
 * Count how many elements appear in BOTH arrays. Store the number of duplicates in the 
 * variable "totalDuplicates". 
 * Hint: You will need to do a loop inside of another loop
 */
var firstArray = ['peaches', 'apples', 'pears', 'oranges', 'plums', 'water melon', 'strawberries'];
var secondArray = ['blueberries', 'water melon', 'tomatoes', 'apples', 'plums', 'oranges', 'cantaloupe'];
var totalDuplicates = 0;

for (f=0; f<=firstArray.length - 1; f++){
	for (s=0; s<=secondArray.length - 1; s++){
		if (firstArray[f] == secondArray[s]) {
			totalDuplicates = totalDuplicates + 1;
		};

	};


}

/**
 * Question 6 - ******BONUS******
 * Count the number of unique elements that are in the array. In other words, in the 
 * array [1, 2, 1] there are two unique numbers: 1 and 2.
 * Store the number of uniques in "totalUniques"
 */

var numbers = [3, 7, 1, 3, 23, 7, 98, 26, 1];
var totalUniques = 0;
var dupe = false;

for (c=0;c<=numbers.length - 1; c++){
	totalUniques++;
	dupe = false;
	for (n=0;n<c; n++) {
		if (numbers[n] == numbers[c]) {dupe=true};
	};
	if (dupe==true) {totalUniques--};
	console.log('end-of-loop n: %o', n);
	console.log(dupe);
	console.log('unq: %o', totalUniques);
}