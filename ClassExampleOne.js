//class

class Person{
	//constructor function
	constructor(name,age){
		//properties and this keyword refers to the object
		this.name = name;
		this.age = age;
	}

	//method
	getInfo(){
		console.log(`Name: ${this.name} and age: ${this.age}`);
	}
}

//inheritence example

class Employee extends Person{
	constructor(name,age,salary){
		super(name,age)//super inherits properties and methods
		this.salary = salary
	}

	allInfo(){
		return `Name: ${this.name} and age is ${this.age} and salary ${this.salary}`;
	}
}

let emp = new Employee('Ayan Upadhaya',29,10000);

emp.getInfo();
console.log(emp.allInfo());
