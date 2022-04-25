// find min and max value from array

function myMaxVlaue(list){
	let newArray = list.sort(function(a,b){
		return a - b;
	});
	return newArray[newArray.length-1];
}


function myMinVlaue(list){
	let newArray = list.sort(function(a,b){
		return a - b;
	});
	return newArray[0];
}

let points = [40,100,25,5,10,4];

console.log('Max value: '+myMaxVlaue(points));
console.log('Min value: '+myMinVlaue(points));