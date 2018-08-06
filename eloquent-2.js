<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>
<script type="text/javascript">

var rows = 7
for (var i=1; i <=rows; i++)
{
	for (var j=1; j <=i; j++)
{
		document.write("# ");
}
document.write("<br/>");
}
</script>
<p>
	Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
</p>
<script type="text/javascript">
	for (let i = 1; n <= 100; i++) {
		let output = "";
		if (i % 3 == 0) output += "Fizz";
		if (i % 5 == 0) output += "Buzz";
		console.log(output || i);
	}
	}
</script>
<p>chessboard</p>
<script type="text/javascript">
	//create a chessboard
	//write a string that produces a 8x9 grid
	//seperate lines with new line characters
	// each position of the grid will be either a "" or a "#"
var size = 8;

var board = "";

for (var y = 0; y < size; y++){
	for (var x = 0; x < size; x++){
		if ((x+y) % 2 == 0){
			board += " ";
			else 
				board += "#"
				}
				board += "\n";
	}
}
console.log(board);

</script>
</body>
</html>