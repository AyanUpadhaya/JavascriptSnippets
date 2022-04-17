//javascript playground

const fs = require('fs');
const path = require('path');
const post = 'I love Flask Framework';

//mkdir
fs.mkdir(path.join(__dirname,'/test'),{},(err)=>{
    if(err) throw err;
    console.log('Folder crated in current directory');
});

//write file
fs.writeFile(path.join(__dirname,'/test','hello.txt'),'I love node js\n',(err)=>{
    if(err) throw err;
    console.log('File written..');
});

//append file
fs.appendFile(path.join(__dirname,'/test','hello.txt'),post,(err)=>{
    if(err) throw err;
    console.log('Data Updated..');
});
//read file
fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf-8',(err,content)=>{
    if(err) throw err;
    console.log(content);
});