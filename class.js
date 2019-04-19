class Person{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log("hello my name is "+this.name);
    }

}
let person = new Person('tareq');
console.log(person.__proto__ == Person.prototype);
