// CONCEPTS: HASH AND STACK

var isValid = function(s) {

    const hashMap = {'(':')', '{':'}', '[':']'}
    const stack = []

    for (let ch of s) {
        if (hashMap[ch]) {
            stack.push(hashMap[ch])
        } else if (stack[stack.length - 1] === ch) {
            stack.pop()
        } else {
            return false
        }
    }

    return stack.length === 0

    
};