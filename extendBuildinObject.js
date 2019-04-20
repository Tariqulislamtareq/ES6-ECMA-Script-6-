class ConvertedArray extends Array{
    convert(){
        let returnArray  =[];
        this.forEach(value=>returnArray.push('converted '+value));
        return returnArray;
    }
}
let numberArray = new ConvertedArray();
numberArray.push(1);
numberArray.push(2);
numberArray.push(3);
console.log(numberArray);