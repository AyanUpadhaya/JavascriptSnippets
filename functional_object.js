var Person = function(name,age,color){
    this.name = name;
    this.age = age;
    this.color=color;
    this.getInfo = ()=>{
        return `person name is ${this.name} and age is ${this.age}`;
    }
}

Person.prototype.msg = function(){
    return "Hello everyone"
};
var p =new Person('Bob',32,'white');
console.log(p.getInfo());
console.log(p.color);

p.occupation = 'programmer';

console.log(p.msg())
