//Javascript array functions

//map

const participants = ['Tyler','Ramazon','Arianana','Bishwa','Smith'];
const finalist = participants.map((x)=>{
    return x+ ' '+'has is in the finals';
});
console.log(finalist);

//filter
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

function checkLength(x){

	if (x.length>6){
		return x;
	}

}
const result = words.filter(checkLength);
console.log(result);


//foreach
const numbers = [2,3,4,6,8,9];
let oddList = [];
function number(x){
    if( x%2 !== 0){
        oddList.push(x);
    }
}
numbers.forEach(number);
console.log('Oddlist is ---')
console.log(oddList);

//.reduce() method
const sum = numbers.reduce((accumlator,currentValue)=>{

   return accumlator+currentValue;

});

console.log(`The sum is : ${sum}`);





