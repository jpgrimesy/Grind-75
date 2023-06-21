// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const brackets = ['[', ']', '(', ')', '{', '}']
    let pair = []
   
    for(let bracket of s) {
        let index = brackets.indexOf(bracket)

        if (index % 2 === 0) {
            pair.push(index + 1)
        } else if (pair.pop() !== index) {
            return false
        }
    }
    return pair.length === 0
};

console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))

