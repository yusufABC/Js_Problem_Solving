// Problem 4: Find the Maximum Number
// Write a function that takes an array of numbers and returns the largest number.

// Example:

// Input: [5, 1, 9, 3]
// Output: 9

const findMaxNum=(num)=>{
    let max=num[0]
for(i=0;i<=num.length;i++){
   if(num[i]>max){
    max=num[i]
   }
}
console.log(max)
}

findMaxNum( [5, 1, 9,12, 3])



