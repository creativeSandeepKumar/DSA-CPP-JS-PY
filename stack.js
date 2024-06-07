// stack
// data - [];
// currentSize - data length;
// max - 5
// push function , pmr - newVal
// condition - crntsz >= max then console - message - "stack is full you cannot add"+ newVal
// data crntindx assign newVal
// crntsz +1;

// define pop function
// condtion crntsz > 0 then 
// crntsz -= 1;
// data length assign crntsz
// else - console - message - "stack is already empty"

let data = [];
let currentSize = data.length;
let max = 5;

function push(newVal) {
    if(currentSize >= max) {
        console.log("stack is full you cannot add" + newVal);
    } else {
        data[currentSize] = newVal;
        currentSize += 1
    }
}

function pop() {
    if(currentSize > 0) {
        currentSize -= 1;
        data.length = currentSize;
    } else {
        console.log("stack is already empty");
    }
}

function reverseStr(item) {
    for(let i = 0; i < item.length; i++) {
        push(item[i]);
    }

    for(let i = 0; i < item.length; i++){
        item[i] = pop();
    }
}

let str = "anil";
str = str.split("");
console.log(str);
reverseStr(str);

// console.log(data);

// class Stack {
//     item = [];
//     currentSize;
//     maxSize;
//     constructor(size) {
//         this.maxSize = size;
//         this.currentSize = this.item.length;
//     }

//     push(newVal) {
//         if(this.currentSize >= this.maxSize) {
//             console.log("stack is full");
//         } else {
//             this.item[this.currentSize] = newVal;
//             this.currentSize++;
//         }
//     }

//     pop() {
//         if(this.currentSize > 0) {
//             this.currentSize--;
//             this.item.length = this.currentSize;
//         } else {
//             console.log("stack is already empty");
//         }
//     }

//     display() {
//         console.log(this.item);
//     }
// }

// let st1 = new Stack(22);
// st1.push(20);
// st1.push(30);
// st1.push(10);
// st1.push(5);
// // st1.reverseStr();
// st1.display();
