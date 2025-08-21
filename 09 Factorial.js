// Problem 9: Find the Factorial of a Number
// Write a function that calculates the factorial of a number using a loop.

// Example:

// Input: 5
// Output: 120


const findFactorial=(num)=>{
    
    let factorial=1

    for(let n=2;n<=num;n++){
        factorial=factorial*n    
    }
    console.log(factorial)


}

findFactorial()