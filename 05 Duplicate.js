// Problem 5: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array.

// Example:

// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]


const removeDuplicate=(arr)=>{

    const uniqueArr=[...new Set(arr)]
    console.log(uniqueArr)

}

removeDuplicate([1, 2, 2, 3, 4, 4])