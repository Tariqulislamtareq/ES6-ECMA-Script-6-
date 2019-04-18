let obj ={
    name: 'Tareq',
    progCode: 133,
    language : function(){
        console.log("ECMA SCRIPT");
    }
}

let{name, progCode,language}=obj;
console.log( name,progCode);
language();

let obj2 ={
    name: 'John Doe',
    progCode: 132,
    language: function(){
        console.log("JavaScript");
    }
}
let{ name: name1, progCode: progCode1, language:programming}=obj2;
console.log(name1, progCode1);
programming();

//obj are not like position order by array obj are position by name