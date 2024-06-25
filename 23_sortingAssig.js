const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45]
console.log(`Given array: ${arrayRollNumbers}`);
console.log(`=====================Task: 01===================== `);
arrayRollNumbers.reverse();
console.log(`Reverse array is: ${arrayRollNumbers}`);
console.log(`=====================Task: 02===================== `);

arrayRollNumbers.sort();
console.log(`Default sorted array is: ${arrayRollNumbers}`);

console.log(`=====================Task: 03===================== `);
arrayRollNumbers.sort((n1,n2)  =>{
    return n1>n2  ?  1 : -1;
  
} );
console.log(`Sorted array is: ${arrayRollNumbers}`);

console.log(`=====================Task: 04===================== `);

const maxNumber = Math.max(...arrayRollNumbers);
console.log(`Greatest Number: ${maxNumber}`);


console.log(`=====================Task: 05===================== `);
const minNumber = Math.min(...arrayRollNumbers);
console.log(`Smallest Number: ${minNumber}`);

console.log(`=====================Task: 06===================== `);
const uniqueArray = [...new Set(arrayRollNumbers)];
console.log(`After removing duplication: ${uniqueArray}`);