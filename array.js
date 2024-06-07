// array traversing
let data = [9, 45, 2, 8, 45, 23, 7, 78, 0, 11, 41, 77];

// for(let i = 0; i < data.length; i++) {
//     console.log(`Array ${i} is ${data[i]}`);
// }


// array insert
// let newEl = 70;
// let position = 2;
// console.log(data)
// for(let i = data.length-1; i >=0; i--) {
//     if(i >= position) {
//         data[i + 1] = data[i];
//         if(i === position) {
//             data[i] = newEl
//         }
//     }
// }

// delete array element
// let position = 3;
// for(let i = position; i <= data.length-1; i++) {
//     data[i] = data[i+1];
// }
// data.length = data.length-1;

// console.log(data)

// merge array

let data2 = [1, 2, 3, 4, 5,6];
let data3 = [];
// for(let i = 0; i < data.length; i++) {
//     data3[i] = data[i];
// }

// for(let i = 0; i < data2.length; i++) {
//     data3[data.length+i] = data2[i];
// }

// merge while loop
// let d1 = 0;
// let d2 = 0;
// let d3 = 0;

// console.log(data3)
// while(d1 < data.length && d2< data2.length) {
//     if(data[d1] < data2[d2]) {
//         data3[d3] = data[d1];
//         d1++;
//     } else {
//         data3[d3] = data2[d2];
//         d2++;
//     }
//     d3++;
// }
// while(d1 < data.length) {
//     data3[d3] = data[d1];
//     d1++;
//     d3++;
// }


// console.log(data3)

// searching

// let item = 78;
// let index = undefined;

// for(let i = 0; i <= data.length - 1; i++) {
//     if(data[i] == item ) {
//         index = i;
//         break;
//     }
// }

// console.log(index);
// console.log(data.indexOf(item));
// console.log(data.splice(2, 1));

// sorting

for(let i = 0; i <= data.length - 1; i++) {
    for( let j = 0; j <= data.length - 1; j++) {
        if(data[j] > data[j + 1]) {
            let temp = data[j];
            data[j] = data[j+1];
            data[j+1] = temp;
        }
    }
}

console.log(data)
