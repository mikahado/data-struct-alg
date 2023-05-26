// Effecient string building

const pushArray = arr => {
    let ans = [];

    for (const c of arr) {
        ans.push(c);
    }

    return ans.join("")
}

const addString = arr => {
    let ans = "";
    
    for (const c of arr) {
        ans += c;
    }

    return ans;
}

// In JavaScript, benchmarking shows that concatenation with += is faster than using .join().