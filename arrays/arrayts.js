var readline = require("readline");
var rl = readline.createInterface({
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
        j--;
    }
    console.log('Before reverse', ans);
    var result = reverseArr(ans);
    console.log("Sum of array is: ", result.join());
}
function rotateArr() {
    var nums = [1, 2, 3, 4, 5, 6, 7];
    var k = 3;
    var n = nums.length;
    var temp = [];
    for (var i = 0; i < n; i++) {
        temp[(i + k) % n] = nums[i];
    }
    for (var i = 0; i < n; i++) {
        nums[i] = temp[i];
    }
    console.log("Rotated Array", nums.join(" "));
}
function main() {
    console.log("\nSelect the items which you want to print from below list: \n");
    console.log();
    console.log("\n1. Find Sum of Array\n");
    console.log("\n2. Rotate Array\n");
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
            default:
                console.log("\nInvalid Number, Please select a number from above given list :)\n");
                rl.close();
                break;
        }
    });
}
main();
