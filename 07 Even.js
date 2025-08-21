// Problem 7: Find Even Numbers in an Array
// Write a function that returns all even numbers from a given array.

// Example:

// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

const findEvenNum=(num)=>{
    let f=[]

    for(i=0;i<=num.length;i++){
        // console.log(num[i])
       if(num[i]%2==0){
        f.push(num[i])
       }

        
    }
    console.log(f)
  
}

findEvenNum([1, 2, 3, 4, 5,13,14, 6])