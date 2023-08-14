/* Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?
Examples:
input:    output:
0    ->   0
2    ->   5
3    ->   5
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5  */

function roundToNext5(n) {
	return n % 5 === 0 ? n : n < 0 ? n - (n % 5) : n - (n % 5) + 5;
}
