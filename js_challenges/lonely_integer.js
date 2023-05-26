
// # example of bit manipulation (the carrot syntax)

function lonelyinteger(a) {
    
    let ans = 0
    // # The loop uses the in operator to iterate over the indices of the array rather than the actual values.
    // # bitwise XOR operation (^=) 
    for (const i in a ) ans^=a[i];
    console.log(ans)
}

lonelyinteger([0, 0, 1, 2, 1])