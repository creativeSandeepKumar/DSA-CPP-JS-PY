// selection sort
// ietm array
// selectionSort(data)
// minId
// for - minId = i, for - j = i+1, 
// condition data[j] < data[minId] then minId = j;
// 
// temp - data[minId]
// data[minId] - data[i]
// data[i] - temp

// selectionSort(items)

// let items = [12, 23, 11, 6, 45, 12, 17];

// function selectionSort(data) {
//     let minId;
//     for( let i = 0; i <= data.length-1; i++) {
//         minId = i;
//         for(let j = i + 1; j <= data.length; j++) {
//             if(data[j] < data[minId]) {
//                 minId = j;
//             }
//         }

//         let temp = data[minId];
//         data[minId] = data[i];
//         data[i] = temp;
        
//     }

//     // console.log(minId);
// }

// selectionSort(items);
// console.log(items);

// palindrome

// palindrome(data) - 
// start - 0;
// end - data.length-1;
// result - true;
// while - end > start then 
// data[start] != data[end] then result - false;

// start++;
// end--

// retrun result;

// execute palindrome
// function palindrome(data) {
//     let start = 0;
//     let end = data.length - 1;
//     let result = true;

//     while(end > start) {
//         if(data[start] != data[end]) {
//             return false;
//         }

//         start++;
//         end--;
//     }

//     return result;
// }

// console.log(palindrome("levelsm"));

// maximum occuring characters
// str 
// strObj
// maxKey
// for - str.lenght - 
// key - str[i]
// if - !strObj[key] then strObj[key]=0

// strObj[key]++
// if - maxKey == "" || strObj[key] > strObj[maxKey]
// then - maxKey=key
// 
// 

// let str = "Thiss is Ram";
// let strObj = {};
// let maxKey = '';
// for(let i = 0; i <= str.length-1; i++) {
//     let key = str[i];
//     if(!strObj[key]) {
//         strObj[key] = 0;
//     }

//     strObj[key]++;
//     if(maxKey == "" || strObj[key] > strObj[maxKey]) {
//         maxKey = key;
//     }


// }

// console.log(strObj)
// console.log(maxKey)

// Objects
// let data = {
//     name: "anil",
//     age: 28,
//     mail: "abc@test.com",
//     getName: function() {
//         return this.name;
//     }
// }

//     data.contact = 12345;
//     data.name = "peter";

//     // for(x in data) {
//     //     console.log(data[x]);
//     // }

//     console.log(Object.keys(data));
//     console.log(Object.values(data));
//     console.log(Object.entries(data));
// console.log(data);

// map
// let data = new Map([
//     [100, "hundred"],
//     [true, "yes"],
//     [undefined, "okay"],
// ]);

// data.set("day", "sunday").set("color", "red");

// // console.log(data.get(100));
// // console.log(data.get(undefined));
// // console.log(data.size);

// for(x of data) {
//     console.log(x[1]);
// }

// data.forEach((val, key) => {
//     console.log(val, key);
// })

// console.log(data.entries());
// // console.log(data);

// anagram

// function checkAnagram(str1, str2) {
//     let objStr1 = {};
//     if(str1.length !== str2.length) {
//         return false;
//     }
//     for(ch of str1) {
//         objStr1[ch] = (objStr1[ch] || 0) + 1;
//     }

//     for(ch of str2) {
//         if(!objStr1[ch]) {
//             return false;
//         }
//         objStr1[ch]--;
//     }
//     return true;
// }

// console.log(checkAnagram("anil", "nila"));


// check palindrome
// palindrome(data)
// start - 0, end - data lenght - 1, result true
// while - end > start then
// data[start] != data[end] then return false

// start++;
// end--

// return result 

// function palindrome(data) {
//     let start = 0;
//     let end = data.length - 1;
//     let result = true;
//     while(end > start) {
//         if(data[start] != data[end]) {
//             return false;
//         }
//         start++;
//         end--;
//     }

//     return result;
// }

// let answer = palindrome("level2");
// console.log(answer);

// max_occuring character in string
// Hint: str - "Hello peter ooo";
// strObj = {}, maxKey = ""
// for on str - 
// key = str[i]
// !strObj[key] then strObj[key] = 0;

// strObj[key]++;
// maxKey == "" || strObj[key] > strObj[maxKey]
// maxKey = key

// let str = "Hello peter ooo";
// let strObj = {};
// let maxKey = "";

// for(let i = 0; i <= str.length - 1; i++) {
//     let key = str[i];
//     // console.log(key);
    
//     if(!strObj[key]) {
//         strObj[key] = 0;
//     }
//     strObj[key]++;
    
//     if(maxKey == "" || strObj[key] > strObj[maxKey]) {
//         maxKey = key;
//     }
// }

// console.log(maxKey);
// merge and sort array
// Hint - merge(arr, l, m, r) 
// n1 = m - l + 1
// n2 = r - m

// L = new Array(n1)
// R = new Array(n2)

// for(let i = 0; i < n1; i++) L[i] = arr[l+i]
// for(let j = 0; i < 21; j++) R[j] = arr[m + 1 + j]

// merge temp arrays back into arr[l..r]

// let i = 0;
// let j = 0;
// let k = 1;

// while(i < n1 && j < n2) 
// if L[i] <= R[j]
// arr[k] = L[i]
// i++
// else 
// arr[k] = R[i]
// j++;

// k++;

// while(i < n1)
// arr[k] = L[i]
// i++
// k++

// while(j < n2) 
// arr[k] = R[j]
// j++
// k++

// mergeSort(arr, l, r) 
// if l >= r
// return;

// let m = l + parseInt((r - l)/2)

// mergeSort(arr, l, m)
// mergeSort(arr, m + 1, r)
// merge(arr, l, m, r)

// let arr = [12, 11, 13, 5, 6, 7];
// ler arr_size = arr.length;

// mergeSort(arr, 0, arr_size - 1);

function merge(arr, l, m, r) {
    let n1 = m = l + 1;
    let n2 = r - m;

    let L = new Array(n1);
    let R = new Array(n2);

    for(let i = 0; i < n1; i++) L[i] = arr[i + 1];
    for(let j = 0; j < n1; j++) R[j] = arr[m + 1 + j];

    let  i = 0;
    let j = 0;
    let k = l;

    while(i < n1 && j < n2) {
        if(L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while(i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while(j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }

}

function mergeSort(arr, l, r) {
    if(l > r) {
        return;
    }

    let m = l + parseInt((r - l) / 2);

    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);
}

let arr = [12, 11, 13, 5, 6, 7];
let arr_size = arr.length;

mergeSort(arr, 0, arr_size - 1);
console.log(arr);