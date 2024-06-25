const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19]



const newArr = arrayNumbers.filter( (element) => {
   return  element >= 50;
});
console.log(`Numbers which are greater than 50 is: ${newArr}`);


const newarr = arrayNumbers.filter( (element) => {
    return element%2==0
        

});
console.log(`Even number are: ${newarr}`);

 
 
 