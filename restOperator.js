let sumUp = (...numbers)=>{
    console.log(numbers);
    let result =0;
    for(let i=0; i<numbers.length; i++){
        result += numbers[i];
        console.log(numbers[i]);
    }
    return result;
}
console.log("Total Sum of Numbers " + sumUp(1,2,3,4,5,6,7));

let maxNumber = (...numbers)=>{
    let max;
    for(let i=0; i< numbers.length; i++){
        if(i==0){
            max = numbers[0];
        }else if( i>0){
            if(numbers[i]> numbers[i-1]){
                max = numbers[i];
            }
        }
    }
    return max;
}

console.log(maxNumber(1,3,2,35,6788,345,215,8909,1,0));

