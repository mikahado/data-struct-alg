var isAnagram = function(s, t) {

    if (s.length !== t.length) {
       return false; // Anagrams must have the same length
   }

   let hashTable = {} 

   for (let i = 0; i < s.length; i++){
       hashTable[s[i]] = (hashTable[s[i]] || 0) + 1;
   }

    for (let j = 0; j < t.length; j++){
       if (!hashTable[t[j]]) {
           return false; // If t contains a character not in s, it's not an anagram
       }
       hashTable[t[j]]--;
   }

   return true

   // split both
   // check if s includes t and t includes s
   
};