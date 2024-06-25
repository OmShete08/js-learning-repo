const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];
console.log(`====== Task : 01 ======`);
arrayNumbers.forEach( (index,currentValue)=> {
    console.log(`The given Element is ${index}  at index:${currentValue}` );
});


console.log(`====== Task : 02 ======`);
arrayNumbers.forEach((element) => {
    if(element >=0){
        console.log(`Positive elements is : ${element}`);
    };
   
});



console.log(`====== Task : 03 ======`);
const newarr = arrayNumbers.forEach((element) => {
    if(element < 0)
    {
        console.log(`Negative numbers is: ${element}`);
    };
    
});




console.log(`====== Task : 04 ======`);
arrayNumbers.forEach ( (value) => {
    if(value%2==0){
        console.log(`Even numbers is: ${value}`);
    }
 });


console.log(`====== Task : 05 ======`);
let sum = 0;
arrayNumbers.forEach((element) => {
    sum = sum+element;
   
});
console.log(sum);



console.log(`====== Task : 06 ======`);
arrayNumbers.forEach ( (currentValue,index) => {
    if(index%2==0){
        console.log(`Even indexed array value is: ${currentValue}`);
    }
 });

