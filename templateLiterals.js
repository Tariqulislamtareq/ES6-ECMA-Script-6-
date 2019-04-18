//Template Literals allows to write multiline string using ``(backticks) 
let fname = 'TARIQUL';
let lname = 'ISLAM';
let age = 22;
let desc = `
    Hello, My name is ${fname + " "} ${lname} and I am ${age} years old !!!
`
let printvar = `
Hello, My name is \${fname + " "} \${lname} and I am ${age} years old !!!
` 
console.log(desc);
console.log(printvar);