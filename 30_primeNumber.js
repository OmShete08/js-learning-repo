function isprime(num) {

    for (let index = 2; index < num; index++){
        if (num%index==0) {
        return false;
        }    
    }
    return true;
}
var result = isprime(3)
console.log(`given number 3 is prime: ${result}`);
var result = isprime(9)
console.log(`given number 9 is prime: ${result}`);
var result = isprime(7)
console.log(`given number 7 is prime: ${result}`);
var result = isprime(6)
console.log(`given number 6 is prime: ${result}`);
var result = isprime(19)
console.log(`given number 19 is prime: ${result}`);
var result = isprime(29)
console.log(`given number 29 is prime: ${result}`);
var result = isprime(53)
console.log(`given number 53 is prime: ${result}`);


const array =[3,9,7,6,19,29,53]
let count = 0;
for (const num of array) {
    if(isprime(num)){
        count = count + 1;
    }
    
}
console.log(`The given array is:`, "3,9,7,6,19,29,53");
console.log(`The tootal count of prime nuber in array is:  ${count}`);