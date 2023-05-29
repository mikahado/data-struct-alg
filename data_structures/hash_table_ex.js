// Nested for loops, O(n^2)
const ineffecientItemInCommon = (arr1, arr2) => {
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; i < arr2.length; j++) {
            if (arr1[i] === arr2[j]) return true
        }
    }
    return false 
}

// Hash table lookup, O(2n)
function effecientItemInCommon(arr1, arr2) {
    let obj = {}
    
    for (let i = 0; i < arr1.length; i++ ) {
      obj[arr1[i]] = true
    }
    
    for (let j = 0; j < arr2.length; j++) {
      if (obj[arr2[j]]) {
        console.log(true)
        } 
    }
    console.log(false)
  }
  
  let array1 = [1, 3, 5]
  let array2 = [2, 4, 5]
  
  itemInCommon(array1, array2)



//HASH TABLE
// key => value lookup
// store obj in an array. how to jump from string to index in array? Hash function. 

// int hashCode(strings){

// }

// hash code is not actually index. 
// two diff strings could have same hash code. collisions happen. solution: chaining to LINKED LISTS. 
// hash table class will have array taht holds the data, not array of values but of LINKED LIST OF THE VALUES.
// 

// string -> hashcode --> index

// class Hastable {
//     linkedList[]   --array of linked list of the values
//     boolean put(string key, person value) {    
//      int hashcode = getHashCode(key
//      int index = convertToIndex(hashCode)
//      Linkedlist = data[index]
//      list.insert(key, value)
//     }
// }

// 0(1) -- good hash table. getting and setting in constant time
// 0(n) -- more world world, lots of collisions