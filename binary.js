// binary search
// data - [5, 9, 13, 17, 45, 67, 89, 100]
// find - 89
// start - 0;
// end - data.lenght-1;
// position - undefined
// while - start <= end then
// mid - floor((start+end)/2)
// if - data[mid] === find then position = mid, break;
// else if - data[mid] < find then
// start - mid+1;
// else - mid-1

// let data = [5, 9, 13, 17, 45, 67, 89, 100];
// let find = 89;
// let start = 0;
// let end = data.length-1;
// let position = undefined;
// while(start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     if(data[mid] === find) {
//         position = mid;
//         break;
//     } else if(data[mid] < find) {
//         start = mid+1;
//     } else {
//         mid -1;
//     }
// }

// console.log(position);

// bubble sort recursion
let arr = [64, 34, 25, 12];

function recursiveBubbleSort(data, count) {
    if(count == 1) {
        return;
    }

    let currentEl = 0;

    for(let i = 0; i < count - 1; i++) {
        if(data[i] > data[i +1]) {
            let temp = data[i];
            data[i] = data[i + 1];
            data[i + 1] = temp;
            currentEl++;
        }
    }
    recursiveBubbleSort(data, count-1)
}

recursiveBubbleSort(arr, arr.length);
console.log(arr);