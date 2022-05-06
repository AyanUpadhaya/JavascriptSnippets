//map
/*
The map() method is used for creating 
a new array from an existing one, 
applying a function to each one of the elements of the first array.
*/

let singleNumbers = [1,2,3,4,5,6,7,8];

let doubleNumbers = singleNumbers.map(item => item*2);

console.log(doubleNumbers);


//filter

//check numbers that are higher than 10
/*
The filter() method takes each element in an array and it applies a conditional statement against it. 
*/

let higherThenTen = doubleNumbers.filter(item => item>10);

console.log(higherThenTen);


//reduce

/*
The reduce() method reduces an array of values down to just one value. 
To get the output value, it runs a reducer function on each element of the array.
accumulator - the returned value of the previous iteration
currentValue - the current item in the array
*/

let sum = higherThenTen.reduce(function(result,item){
	return result+item;
},0)

console.log(sum);