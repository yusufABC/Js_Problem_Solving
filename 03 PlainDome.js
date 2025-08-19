// Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward and backward).

// Example:

// Input: "madam"
// Output: true
// Input: "hello"
// Output: false

const checkPlainDom=(text)=>{

    const newText=text.split("").reverse().join('')
    if(text==newText){
        console.log(true)
    }else{
        console.log(false)
    }
    console.log(newText)

}

checkPlainDom('madam')