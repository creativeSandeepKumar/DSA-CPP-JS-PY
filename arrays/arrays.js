const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function reverseArr(arr) {
    var _a;
    var s = 0;
    var e = arr.length - 1;
    while (s < e) {
        _a = [arr[e], arr[s]], arr[s] = _a[0], arr[e] = _a[1];
        s++;
        e--;
    }
    return arr;
}
function findSumArr() {
    var a = [9, 9, 9];
    var b = [1];
    var i = a.length - 1;
    var j = b.length - 1;
    var ans = [];
    var carry = 0;
    while (i >= 0 && j >= 0) {
        var val1 = a[i];
        var val2 = b[j];
        var sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        sum = sum % 10;
        ans.push(sum);
        i--;
        j--;
    }
    while (i >= 0) {
        var sum = a[i] + carry;
        carry = Math.floor(sum / 10);
        sum = sum % 10;
        ans.push(sum);
        i--;
    }
    while (j >= 0) {
        var sum = b[j] + carry;
        carry = Math.floor(sum / 10);
        sum = sum % 10;
        ans.push(sum);
        j--;
    }
    while (carry !== 0) {
        var sum = carry;
        carry = Math.floor(sum / 10);
        sum = sum % 10;
        ans.push(sum);
    }
    console.log('Before reverse', ans);
    var result = reverseArr(ans);
    console.log("Sum of array is: ", result.join());
}

function rotateArr(){
    let nums = [1, 2, 3, 4, 5, 6,7];
    let k = 3;
    let n = nums.length;
    let temp = [];

    for(let i = 0; i < n; i++){
        temp[(i + k)% n] = nums[i];
    }

    for(let i = 0; i < n; i++){
        nums[i] = temp[i];
    }

    console.log("Rotated Array is", nums.join(" "));
}

function checkSortedRotatedArr(){
    let nums = [2, 3, 4, 5, 6, 1, 5, 2];
    let cnt = 0;

    for(let i = 1; i < nums.length; i++){
        if(nums[i] < nums[i - 1])
            cnt++;
    }
    if(nums[nums.length - 1] < nums[0]){
        cnt++;
    }

    let checkbool = cnt <=1;

  
    if(checkbool){
        console.log("The array is sorted and rotated.");
      } else {
        console.log("The array is not sorted and rotated.");
      }
}

function main() {
    console.log("\nSelect the items which you want to print from below list: \n");
    console.log();
    console.log("\n1. Find Sum of Array\n");
    console.log("\n2. Rotate Array\n");
    console.log("\n3. Check Sorted Rotated Array\n");
    rl.question("", function (num_of_item) {
        var selectedItem = parseInt(num_of_item);
        console.log();
        switch (selectedItem) {
            case 1:
                findSumArr();
                rl.close();
                break;
            case 2:
                rotateArr();
                rl.close();
                break;
            case 3:
                checkSortedRotatedArr();
                rl.close();
                break;
            default:
                console.log("\nInvalid Number, Please select a number from above given list :)\n");
                rl.close();
                break;
        }
    });
}
main();
