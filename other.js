// anagram
// Hint - 
// checkAnagra(str1, str2) - 
// objStr1 as {};
// str1 length !== str2 length then return false
// 
// for - char of str1
// objStr1[ch] = objStr1[ch] || 0 + 1

// for - char of str2 
// !ObjStr1[ch] then return false
// 
// ObjStr1[ch]--;

// return false

function checkAnagram(str1, str2) {
    let ObjStr1 = {};

    if(str1.length !== str2.length) {
        return false;
    }

    for(ch of str1) {
        ObjStr1[ch] = (ObjStr1[ch] || 0) + 1;
    }

    for(char of str2) {
        console.log(ObjStr1[char])
        if(!ObjStr1[char]) {
            return false;
        }
        ObjStr1[char]--;
    }
    return true;
}

let isAnagram = checkAnagram("ram", "mar" );
console.log(isAnagram)