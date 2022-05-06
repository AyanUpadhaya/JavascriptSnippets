// constructor

function Book(title,author,year){
	this.title = title;
	this.author = author;
	this.year = year;

}


//prototype

Book.prototype.getSummary = function(){
		return `${this.title} was created by ${this.author} in ${this.year}`;
}

//inheritence

function Magazine(title,author,year,month){
	Book.call(this,title,author,year);
	this.month = month;
}
//inherit prototype

Magazine.prototype = Object.create(Book.prototype);

const mag1 = new Magazine('Mag one','Jamie Doe','2014','Feburary');

console.log(mag1.getSummary());
