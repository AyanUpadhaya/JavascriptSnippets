//filtering values from array
const employees = [
        'Sahana',
        'Monira',
        'Ishrak',
        'Monir',
        'Abbas',
        'Kajol',
        'Amal',
        'Bikash',
        'Rahul',
        'Anirban',
        'Masud',
        'Rana'
    ]
    
employees.forEach((name)=>{
    if (name.toLowerCase().startsWith('m')){
        console.log(name)
    }
    
})
//reversing an array
console.log(employees.reverse())
