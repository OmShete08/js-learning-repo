console.log("-----------------Step 01-----------------");
let good = () =>
{
        console.log(`"Good Morning, Today is Friday"`);
}
good()


console.log("-----------------Step 02-----------------");
let multiply = (n1,n2,n3) =>
    {
            console.log(n1*n2*n3);
    }
    multiply(5,5,2)
    multiply(10,4,1)

    console.log("-----------------Step 03-----------------");

let add = (n1,n2,n3,n4,n5)  => 
    {
    const result =n1+n2+n3+n4+n5;
    return result;
}
const value = add(100,100,200,349,756);
const word = add("I am ","Learning ","ES6 ","features ","in depth")
console.log("Addition of Number is:",value);
console.log("Addition of Word is:",word);