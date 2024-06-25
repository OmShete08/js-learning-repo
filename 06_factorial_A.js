function factorialOfNum(num)
{
    if (num === null || num === undefined ) {
        console.log(`Invalid input: ${num}`);
        return;
    }
    
    let fact = 1;
    for (let i = num; i >= 1;  i--){
        fact= fact*i;
    }
    console.log("The factorial of " + num + " is: " + fact + ".");
    return fact;
  }
  
  // Calling the function with different arguments
  factorialOfNum(5);
  factorialOfNum(3);
  factorialOfNum(null);
  factorialOfNum(8);
  factorialOfNum(undefined);
  factorialOfNum(9);
  factorialOfNum(0);
    


