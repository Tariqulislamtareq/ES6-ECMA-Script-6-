class Helper{
    static loggedMessage(message){
        console.log(message);
    }
}
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

//let helper = new Helper();
Helper.loggedMessage("logged!!!");
