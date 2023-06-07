/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {

    // Base case: If either list is null, return the other list
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }

  // Recursive case: Compare current nodes and choose the smaller one
  let mergedList;
  if (list1.val < list2.val) {
    mergedList = list1;
    mergedList.next = mergeTwoLists(list1.next, list2);
  } else {
    mergedList = list2;
    mergedList.next = mergeTwoLists(list1, list2.next);
  }

  return mergedList;

//     let curr = new ListNode()
//     const dummy = curr
//    while(list1&&list2) {
//        if(list1.val < list2.val) {
//            curr.next = list1
//            list1 = list1.next
//        } else { 
//            curr.next = list2
//            list2 = list2.next
//        }
//        curr = curr.next
//    }
//    if(list1) {
//        curr.next = list1
//    }
//    if(list2) {
//        curr.next = list2
//    }
//    return dummy.next
    
};