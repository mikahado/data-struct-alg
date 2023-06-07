const binary_search = (nums, target) => {
    let start = 0
    let end = nums.length - 1

    // while (start <= end) {
    //     let mid = Math.floor(start + end / 2)
    //     if(target < nums[mid]) {
    //         end = mid - 1 
    //     } else if (target > nums[mid]) {
    //         start = mid + 1
    //     } else {
    //         return mid
    //     }
    // }
    // return -1

    // BASE CASE
    if (start > end) {
        return 'Not found.'
    }

    const mid = Math.floor(start + end / 2)

    if (nums[mid] === target) {
        return `Found at index ${mid}`
    }

    if (target < nums[mid]) {
        end = mid - 1
        nums = nums.splice(0, end)
        return binary_search(nums, target)
    }

    if (target > nums[mid]) {
        end = mid + 1
        nums = nums.splice(mid, end)
        return binary_search(nums, taret)
    }

}

// example:
// target = 9 
//       m
//   s   
// [-1,0,3,4,9,12] 
//              e

//       m
//         s   
// [-1,0,3,4,9,12] 
//              e

//           m
//         s   
// [-1,0,3,4,9,12] 
//              e

//breaks! must return mid index of 9, which is 4