class Person{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log("My Name is: "+this.name + "mt age is: "+this.age);
    }
}
class Tareq extends Person{
    constructor(age){
        super('Max');
        this.age = age;
    }
   
    greetTwice(){
        this.greet();
    }

}
let tareq = new Tareq(22);
tareq.greet();
tareq.greetTwice();
console.log(tareq.__proto__ === Tareq.prototype);
