function plusMinus(arr) {

    const len = arr.length;
    
    // set by initializing blank values, like REACT STATE.

    let positive = 0
    let negative = 0
    let zero = 0
    
    for(let i=0; i < len; i++) {
        if(arr[i] > 0) {
            positive += 1;
        } else if (arr[i] < 0) {
            negative += 1;
        } else {
            zero += 1;
        }
    }

    const pos = positive / len;
    const neg = negative / len;
    const zer = zero / len;
    
    console.log(pos.toFixed(6))
    console.log(neg.toFixed(6))
    console.log(zer.toFixed(6))

}