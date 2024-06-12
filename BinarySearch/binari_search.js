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

function main(){
    console.log("\nSelect which item do you print from below list\n");
    console.log("\n1. Binary Search\n");
    console.log("\n2. Peak number index\n");
    console.log("\n3. Fisrt and Last Occurence\n");
    console.log("\n4. Peak In Mountain Array\n");

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
        
            default:
                console.log("\nInvalid Number, Please select a number from above given list: )\n");
                rl.close();
                break;
        }
    })

    return;
}

main();