// CONCEPT: HASH TABLE

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function(nums, target) {

    // BRUTE FORCE

    //     var twoSum = function(nums, target) {
    //     for (let i = 0; i < nums.length; i++) {
    //         for (let j = i + 1; j < nums.length; j++) {
    //             if (nums[i] + nums[j] == target) {
    //                 return [i, j]
    //             }
    //         }
    //     }
    // };
    
    // sets hash object
    
        const hashTable = {} 
    
        for (let index = 0; index < nums.length; index++) {
            const complement = target - nums[index]
    
            if (complement in hashTable) {
                return[hashTable[complement], index]
            }
    
            hashTable[nums[index]] = index
        }
    
    }