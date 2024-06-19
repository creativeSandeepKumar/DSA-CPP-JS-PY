const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function binarySearch(arr, key){
    let start = 0;
    let end = arr.length - 1;

    let mid = start + Math.floor((end - start)/2);

    while(start <=  end){
        if(arr[mid] == key){
            return mid;
        }

        if(key > arr[mid]){
            start = mid + 1;
        } else {
            end = mid - 1;
        }

        mid = start + Math.floor((end - start)/2);
    }

    return -1;
}

function item1() {
  let even = [2, 4, 6, 7, 12, 18];
  let odd = [2, 4, 6, 8, 10];

  let evenIndex = binarySearch(even, 6);

  console.log(" Index of 6 is ", evenIndex);

  let oddIndex = binarySearch(odd, 10);

  console.log(" Index of 10 is ", oddIndex);

}


function item2() {
   let arr = [2, 4, 6, 8, 12, 36];
   let s = 0;
   let e = arr.length-1;
   let mid = s + Math.floor(s+(e-s)/2);

   while(s < e){
    if(arr[mid] < arr[mid + 1]){
        s = mid + 1;
    } else {
        e = mid;
    }
    mid = s + Math.floor((e-s)/2);
   }

   console.log(" Peak number is ", s);

}

function firstOccurence(arr, key){
    let start = 0;
    let end = arr.length - 1;
    let answer = -1;
    let mid = Math.floor(start + (end - start)/2);

    while(start <= end){
        if(arr[mid] == key){
            answer = mid;
            end = mid - 1;
        } else if(key > arr[mid]){
            start = mid + 1;
        } else if(key < arr[mid]){
            end = mid - 1;
        }
        mid = Math.floor(start + (end - start)/2);
    }

    return answer;
}


function lastOccurence(arr, key){
    let start = 0;
    let end = arr.length - 1;
    let answer = -1;
    let mid = Math.floor(start + (end - start)/2);

    while(start <= end){
        if(arr[mid] == key){
            answer = mid;
            start = mid + 1;
        } else if(key > arr[mid]){
            start = mid + 1;
        } else if(key < arr[mid]){
            end = mid - 1;
        }
        mid = Math.floor(start + (end - start)/2);
    }

    return answer;
}

function firstAndLastOccurence(){
    let arr = [2, 5, 20, 20, 20, 50, 80];
    let key = 20;

    let first = firstOccurence(arr, key);
    let last = lastOccurence(arr, key);

    console.log("First occurence is ", first, " And last occurence ", last);
}

function find_pivot(arr){
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end)/2);

    while(start < end){
        if(arr[mid] < arr[mid+1]){
            start = mid + 1;
        } else {
            end = mid;
        }
        mid = Math.floor((start + end)/2);
    }

    return start;
}

function peakInMountainArr(){
    let arr = [2, 5, 7, 8, 11, 36, 6, 5, 4];
    let mountain = find_pivot(arr);
    console.log("Mountain element in arr is", mountain);

}

function getPivot(arr){
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor(start + (end - start)/2);

    while(start < end){
        if(arr[mid] >= arr[0]){
            start = mid + 1;
        } else {
            end = mid;
        }
        mid = Math.floor(start + (end - start)/2);
    }
    return start;
}

function checkPivot(){
    let arr = [0, 10, 20, 40, 56];
    let pivot = getPivot(arr);
    console.log("pivot element is ", pivot);
}

function rotatedBinarySearch(arr, s, key){
    let start = s;
    let end = arr.length - 1;
    let mid = start + (end - start)/2;

    while (start <= end) {
        if(arr[mid] == key){
            return mid;
        }

        if(key > arr[mid]){
            start = mid + 1;
        } else {
            end = mid - 1;
        }

        mid = start + (end - start)/2;
    }

    return -1;
}

function findPosition(){
    let arr = [2, 4, 6, 8, 10, 12];
    let pivot = getPivot(arr);
    let k = 6;
    let ans;
    if(k >= arr[pivot] && k <= arr[arr.length - 1]){
        ans = rotatedBinarySearch(arr, pivot, 6);
    } else {
        ans = rotatedBinarySearch(arr, pivot - 1, 6);
    }
    console.log("check binary search ", ans);
}

function sqrtInteger(n){
    let s = 0;
    let e = n;

    let mid = Math.floor(s + (e - s)/2);
    let ans = -1;

    while(s <= e){
        let square = mid * mid;

        if(square == n){
            return mid;
        }

        if(square < n){
            ans = mid;
            s = mid + 1;
        } else {
            e = mid - 1;
        }

        mid = Math.floor(s + (e - s)/2);
    }

    return ans;
}


function morePrecision(n, precision, tempSol){
    let factor = 1;
    let ans = tempSol;

    for(let i = 0; i < precision; i++){
        factor = factor/10;

        for(let j = ans; j * j < n; j = j + factor){
            ans = j;
        }
    }

    return ans;
}

function squareRoot(){
    rl.question("Enter the number\n",  (num) => {
        num = parseInt(num);

        let tempSol = sqrtInteger(num);
        console.log(" Answer is ", morePrecision(num, 3, tempSol));
        rl.close();
    },
)
}

function isPossible(stalls, k, mid, n){
    let cowCount = 1;
    let lastPos = stalls[0];

    for(let i = 0; i < n; i++){
        if(stalls[i] - lastPos >= mid){
            cowCount++;
            if(cowCount == k){
                return true;
            }
            lastPos = stalls[i];
        }
    }

    return false;
}

function aggressiveCows(){
    let stalls = [1, 2, 3, 4, 8, 9];
    let k = 3;
    stalls.sort((a, b) => a - b);
    let s = 0;
    let n = stalls.length;
    let e = stalls[n-1];
    let ans = -1;
    let mid = Math.floor(s + (e - s)/2);

    while( s <= e){
        if(isPossible(stalls, k, mid, n)){
            ans = mid;
            s = mid + 1;
        } else {
            e = mid - 1;
        }
        mid = Math.floor(s + (e - s)/2);
    }
    console.log(' The largest minimum distance is: ', ans)
}

function is_possible(arr, n, m, mid){
    let studentCount = 1;
    let pagesum = 0;

    for(let i = 0; i < n; i++){
        if(pagesum + arr[i] <= mid){
            pagesum += arr[i];
        } else {
            studentCount++;
            if(studentCount > m || arr[i] > mid){
                return false;
            }
            pagesum = arr[i];
        }

        if(studentCount > m){
            return false;
        }
    }

    return true;
}

function allocateBook(){
    let arr = [12, 34, 67, 90];
    let s = 0;
    let sum = 0;
    let m = 2;
    let n = arr.length;

    for(let i = 0; i < n; i++){
        sum += arr[i];
    }

    let e = sum;
    let ans = -1;
    let mid = Math.floor(s + (e - s)/2);

    while(s <= e){
        if(is_possible(arr, n , m, mid)){
            ans = mid;
            e = mid - 1;
        } else {
            s = mid + 1;
        }
        mid = Math.floor(s + (e - s)/2);
    }
    console.log(" The minimum number of pages that can allocated is ", ans);

}


function main(){
    console.log("\nSelect which item do you print from below list\n");
    console.log("\n1. Binary Search\n");
    console.log("\n2. Peak number index\n");
    console.log("\n3. Fisrt and Last Occurence\n");
    console.log("\n4. Peak In Mountain Array\n");
    console.log("\n5. Check pivot element\n");
    console.log("\n6. Search In Rotated Array\n");
    console.log("\n7. Get Square Root\n");
    console.log("\n8. Aggressive Cows\n");
    console.log("\n9. Book allocation problem\n");

    rl.question("", (num_of_item) => {
        num_of_item = parseInt(num_of_item);
        console.log();
        switch (num_of_item) {
            case 1:
                item1();
                break;
            case 2:
                item2();
                break;
            case 3:
                firstAndLastOccurence();
                break;
            case 4:
                peakInMountainArr();
                break;
            case 5:
                checkPivot();
                break;
            case 6:
                findPosition();
                break;
            case 7:
                squareRoot();
                break;
            case 8:
                aggressiveCows();
                rl.close();
                break;
            case 9:
                allocateBook();
                rl.close();
                break;
        
            default:
                console.log("\nInvalid Number, Please select a number from above given list: )\n");
                rl.close();
                break;
            }
    })

    return;
}

main();