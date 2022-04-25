//toString() converts an array to a string of (comma separated) array values.

const fruits = ['mango','orange','banana','apple'];

console.log("To String: "+fruits.toString());

//join() method behaves just like toString(), but you can specify the separator:

console.log("Join: "+fruits.join('*'));

//pop() method returns the value that was "popped out":

let fruit = fruits.pop();

console.log('Popped out value: '+fruit);

//push() method adds/appends a new element to an array (at the end):

fruits.push('Pappya');
console.log("Pushed: "+fruits.toString());

//shift() method returns the value that was "shifted out":
let shifted = fruits.shift();
console.log("Shifted: "+shifted);
console.log(fruits.toString());

//unshift() method adds a new element to an array (at the beginning)

fruits.unshift('lemon');
console.log('Unshifted: '+fruits.toString());

//check length

console.log('Length: '+fruits.length);

//easy way appending
fruits[fruits.length]='Kiwi';
console.log('Appended: '+fruits.toString());

//concat() method creates a new array by merging (concatenating) existing arrays

let veges = ['Cucumber','Carrots','Potato','Brocoly'];
let shopping = fruits.concat(veges);
console.log('Shopping: '+shopping);

//splice() method can be used to add new items to an array:

fruits.splice(3, 2, 'water mellon','grapes')
console.log('Spliced: '+fruits.toString());

//The slice() method creates a new array.slice() method does not remove any elements from the source array.

let sample = fruits.slice(1)
console.log('Sliced: '+sample.toString());

//Note: All JavaScript objects have a toString() method.
//sort() method sorts an array alphabetically:

fruits.sort();
console.log('Sorted: '+fruits.toString());

//reverse() method reverse an array
fruits.reverse();
console.log('Reversed: '+fruits.toString());

// indexOf() method searches an array for an element value and returns its position.

let position = fruits.indexOf('grapes')+1;
console.log('Position of grapes in fruits: '+position.toString());
