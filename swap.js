let a=10;
let b=20;
let swap = (x,y)=>{
    let temp;
    temp = x;
    x=y;
    y = temp
    console.log("After Swap")
    console.log("a: "+ x);
    console.log("b: "+ y);
}
console.log("a: " + a);
console.log("b: " + b);
swap(a,b);

// swap using destructuring 
[a,b]=[b,a];
console.log("Destructuring");
console.log("a: " + a);
console.log("b: " + b);
