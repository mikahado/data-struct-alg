const unsortedArray = [3,2,2,1,1,1]

for (let x of unsortedArray) {
    if(!Number.isInteger(x)) {
        console.log("found non-integer value inside input array.")
        return
    } else if (x < 0) {
        console.log("found neg value inside the input array")
        return
    }
}