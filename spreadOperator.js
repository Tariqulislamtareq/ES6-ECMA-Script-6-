let numbers = [1,2,3,4,5];
let max = (numbers)=>{
    return Math.max(...numbers);
}
console.log("Numbers are after spread operator ..." , ...numbers);
console.log("max number :" + max(numbers));