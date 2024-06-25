const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19]
console.log(`====== Task : 01 ======`);
const newArray = arrayNumbers.map( (element)=>{
    return element + 10;
});
console.log(`new element each added by 10: ${newArray}`);



console.log(`====== Task : 02  ======`);
const newArr =arrayNumbers.map( (value)=>{
    return value*value*value;
});
console.log(`Cube of each array element: ${ newArr}`);



console.log(`====== Task : 03 ======`);

const newarr = arrayNumbers.map( (currentValue,index)=>{
    return currentValue + index;
});
console.log(`The index value added to current value: ${newarr}`);