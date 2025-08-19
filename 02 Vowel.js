// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

// Example:

// Input: "programming"
// Output: 3

const countVowel=(text)=>{

    const vowels='aeiou'
    let vowelCount=0
    for(i=0;i<=text.length;i++){
        if(vowels.includes(text[i])){
            vowelCount++
        }
    }
console.log(vowelCount)
}

countVowel("Programming")