// recursion
// Hint - 
// apple(x)
// x < 10 - apple(x+1);

// function apple(x) {
//     if(x < 10) {
//         apple(x + 1);
//     }
//     console.log(x);
// }

// apple(0);

// factorial - 
// factorial(item)
// item == 0 then reltun 1;

// return item*factorial(item-1);
// function factorial(item) {
//     if(item == 0) {
//         return 1;
//     }

//     return item*factorial(item - 1);
// }

// let data = factorial(10);
// console.log(data);

// Recusrsion type
// Indirect Recursion
// calculate maney and total apple
// Hint - buyApple(x)
// x > 0 then - console - "I have", x, "Rs", totalApple
// else - console - I don't have money more, total Apple

// buyMore(x)
// totalApple++
// buyApple(x - 5)

// let x = 100;
// let totalApple = 0;

// function buyApple(x) {
//     if(x > 0) {
//         console.log("I have", x, "Rs", totalApple);
//         burMore(x - 5)
//     } else {
//         console.log("I don't have more money", totalApple);
//     }
// }

// function burMore(x) {
//     totalApple++;
//     buyApple(x - 5);
// }

// buyApple(x);

// function test(x) {
//     if(x > 0) {
//         test(x - 10);
//     }
//     console.log(x);
// }

// test(100);

// array reverse with recusrion
// Hint - 
// data = [---], temp;
// customReverse(data, start, end) 
// start <= end
// temp = data[start];
// data[start] = data[end]
// data[end] = temp
// customReverse(data, 0, start+1, end-1);

// let data = [3, 12, 5, 23, 11, 8, 34];
// let temp;

// function customReverse(data, start, end) {
//     if(start <= end) {
//         temp = data[start];
//         data[start] = data[end];
//         data[end] = temp;
//         customReverse(data, start + 1, end - 1);
//     }
// }

// customReverse(data, 0, data.length - 1);
// console.log(data);

// Recursive Binary
// data, start, end, find, position
// recursiveBinary(data, start, end)
// mid
// data[mid] === find then position - mid, return true
// else if - data[mid] < find, recursiveBinary(data, mid+1, end)
// else - recurisveBinary(data, start, mid - 1);

// let data = [3, 23, 4, 23, 15, 34, 22];
// let start = 0;
// let end = data.length - 1;
// let find = 15;
// let position = undefined;

// function recurisveBinary(data, start, end) {
//     let mid = Math.floor((start+end)/2);
//     console.log(mid);
//     if(data[mid] === find) {
//         position = mid;
//         return true
//     } 
// else if(data[mid] < find) {
//         recurisveBinary(data, mid + 1, end);
//     } 
// else {
//         recurisveBinary(data, start, mid - 1);
//     }
// }

// recurisveBinary(data, start, end);
// console.log(position);

// Head and tail recursion
// function colors() {
//     let data = 20;
//     if(true) {
//         console.log(data*20);
//     } else {
//         console.log(data/20);
//     }
// }

// function days() {
//     colors();
// }

// function fruits() {
//     days();
// }

// function topFunction() {
//     fruits();
// }

// topFunction();

// Bubble sort with recursion
// arr,
// recursiveBubbleSort(data, count)
// count === 1 return;

// currentEl = 0 ;

// for - on count
// data[i] > data[i+1]
// temp = data[i];
// data[i] = data[i + 1]
// data[i + 1] = temp
// currentEl++


// recursiveBubbleSort(data, cpunt - 1);

// let arr = [64, 34, 25, 12];

// function recursiveBubbleSort(data, count) {
//     if(count == 1) {
//         return;
//     }
//     let currentEl = 0;
//     for(let i = 0; i <= count-1; i++) {
//         if(data[i] > data[i + 1]) {
//             let temp = data[i];
//             data[i] = data[i + 1];
//             data[i + 1] = temp;
//             currentEl++;
//         }
//     }

//     recursiveBubbleSort(data, count - 1);
// }
// recursiveBubbleSort(arr, arr.length);
// console.log(arr);

