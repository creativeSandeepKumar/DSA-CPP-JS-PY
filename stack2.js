// stack second time
// make push function
// Hint - data, crntSz, max = 5
// push(newVal) - 
// alert for full stack if crntSz bigger than max
// 
// add newVal at last in current data size
// increase current size

// let data = [];
// let currentSize = data.length;
// let max= 5;

// function push(newVal) {
//     if(currentSize >= max) {
//         console.log("stack is already full, you cannot add", newVal);
//     } else {

//         data[currentSize] = newVal;
//         currentSize++;
//     }
    
// }



// Make a pop function
// Hint - 
// pop() - 
// if currentsize bigger than 0 then decrease currentsize and make data length equals to currentsize
// else - show alert stack is already empty

// function pop() {
//     if(currentSize > 0) {
//         currentSize--;
//         data.length = currentSize;
//     } else {
//         console.log("stack is already empty");
//     }
// }

// push(20);
// push(30);
// push(40);
// push(10);
// push(60);
// push(50);
// push(5);
// pop();
// console.log(data);

// stack with class
class Stack {
    item = [];
    maxSize;
    currentSize;
    restr = [];
    constructor(size) {
        this.maxSize = size;
        this.currentSize = this.item.length;
    }

    push(newVal) {
        if(this.currentSize >= this.maxSize) {
            console.log("stack is already full", newVal);
        } else {
            this.item[this.currentSize] = newVal;
            this.currentSize++;
           
        }
    }

    pop() {
        if(this.currentSize > 0) {
            this.currentSize--;
            this.item.length = this.currentSize;
        } else {
            console.log("stack is already empty");
        }
    }

    reverseStr(item) {
        for(let i = item.length - 1; i >= 0; i--) {
            this.push(item[i]);
        }
    }

    display() {
        // console.log(this.item);
        return this.item;
    }
}

const stack = new Stack(5);
// stack.push(20);
// stack.push(10);
// stack.push(30);
// stack.push(40);
// stack.pop();
let str = "anil";
str = str.split("");
stack.reverseStr(str);
let str2 = stack.display();
console.log(str2.join(""));
