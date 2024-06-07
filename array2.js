// Array traversing - 
// output - arr i is value of array;
// let data = [10, 4, 23, 21, 34, 9, 33, 12];

// for(let i = 0; i <= data.length-1; i++) {
//     console.log(data[i], "is index of", i);
// }

// array searching
// output -  item - 70, index. Find index of 70.
// let item = 21;
// let index;
// for(let i = 0; i <= data.length-1; i++) {
//     if(data[i] === item) {
//         index = i;
//         break;
//     }
// }
// console.log(item, "is on index", index)

// array insert - 
// output - newEl insert on position 2 inside an array
// Hint - go backwad in loop, compare position with i and then create an extra element an array then place this item on that position

// let newEl = 70;
// let position = 2;

// for(let i = data.length-1; i >= 0; i--) {
//     if(i >= position) {
//         data[i+1] = data[i];
//         if(i === position) {
//             data[i] = newEl;
//         }
//     }
// }

// console.log(data)

// delete array
// delete element from position 3 from an array
// hint - start loop from given position then shift element one step back from given postion then do lenght of array -1

// let position = 3;
// for(let i = position; i <= data.length - 1; i++) {
//     data[i] = data[i+1];
// }

// data.length = data.length-1;
// console.log(data);

// merge array - 
// merge data1  and data2 inside data 3 array
// hint - loop in data1 and store values in data3, now again loop on data2 and store values in data3, but noe start holding fom data1 length

// let data1 = [2, 4, 3, 8, 5,11];
// let data2 = [12, 24, 13, 28, 15,11];
// let data3 = [];

// for(let i = 0; i <= data1.length-1; i++) {
//     data3[i] = data1[i];
// }
// for(let i = 0; i <= data2.length-1; i++) {
//     data3[data1.length+i] = data2[i];
// }

// console.log(data3)

// merge array with while loop
// data1, and data2 merge in data3
// d1, d2, d3 - 0
// d1 < dada1 and d2 < data2 length
// data1[d1] < data2[d2] then data3[d3] = data1[d1], d1++
// else - data3[3] = data2[d2], d2++

// d3++

// while data1 < data1 length then data3[d3] = data1[d1], d1++, d3++

// let data1 = [2, 4, 3, 8, 5,11];
// let data2 = [12, 24, 13, 28, 15,11];
// let data3 = [];
// let d1 = 0;
// let d2 = 0;
// let d3 = 0;

// while(d1 < data1.length && d2 < data2.length) {
//     if(data1[d1] < data2[d2]) {
//         data3[d3] = data1[d1];
//         d1++;
//     } else {
//         data3[d3] = data2[d2];
//         d2++;
//     }
//     d3++;
// }
// while(d1 < data1.length) {
//     data3[d3] = data1[d1];
//     d1++;
//     d3++;
// }

// console.log(data3)

// sort array - 
// Hint - run a loop and also inside this loop run another loop
// check - data[j] > data[j+1] then
// temp - data[j]
// data[j] = data[j+1]
// data[j+1] = temp

// for(let i = 0; i <= data.length-1; i++) {
//     for(let j = 0; j <= data.length-1; j++) {
//         if(data[j] > data[j+1]) {
//             let temp = data[j];
//             data[j] = data[j+1];
//             data[j+1] = temp;
//         }
//     }
// }

// console.log(data);

// sort in descending order
// hint - just start first loop from last then also start start nested loop fron i and go back
// define minId check data[j] < data[minId] then minId = j
//  // temp - data[minId]
// data[minId] = data[i]
// data[i] = temp

// for(let  i = data.length-1; i >= 0; i--) {
//     let minId = i;
//     for(let j = i; j >= 0; j--) {
//         if(data[j] < data[minId]) {
//            minId = j;
//         }
//     }
//     let temp = data[minId];
//     data[minId] = data[i];
//     data[i] = temp;
// }

// console.log(data);

// selection sort
// Hint - data, 
// selectionSort(items) - 
// for - minId = i;
// for - j = i+1
// data[j] < data[minId] then minId = j'

// temp - data of minId
// data of minId - data of i
// data of i - temp

let data = [10, 4, 23, 21, 34, 9, 33, 12];

function selectionSort(items) {
    let minId;
    for(let  i = 0; i <= items.length - 1; i++) {
        minId = i;
        for(let j = i + 1; j <= items.length - 1; j++) {
            if(items[j] < items[minId]) {
                minId = j;
            }
        }

        let temp = items[minId];
        items[minId] = items[i];
        items[i] = temp;
    }
}

selectionSort(data);
console.log(data);