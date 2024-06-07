// queue- enqueue, dequeue
// Hint - queue - [], currentSize, maxSize
// enqueue(newVa)
// currentSize >= maxSize then alert else queue[currentSize] = newVal
// currentSIZE++

// dequeue 
// currentSize > 0 then 
// for -
// queue[i] = queue[i+1]

// currentSize--;
// queue.length = currentSize
// else alert - queue is already empty

// let queue = [];
// let currentSize = queue.length;
// let maxSize = 5;

// function enqueue(newVal) {
//     if(currentSize >= maxSize) {
//         console.log("queue is already full", newVal);
//     } else {
//         queue[currentSize] = newVal;
//         currentSize++;
//     }
// }

// function dequeue() {
//     if(currentSize > 0)  {
//         for(let i = 0; i <= queue.length - 1; i++) {
//             queue[i] = queue[i+1];
//         }
//         currentSize--;
//         queue.length = currentSize;
//     } else {
//         console.log("queue is already empty");
//     }
// }

// enqueue(30);
// enqueue(20);
// enqueue(10);
// dequeue();
// console.log(queue)

// circular queue
// Hint - class Queue
// constructor(size)
// maxSize = size
// items = new Array(size)
// currentSize = 0;
// rear = -1;
// front = -1;

// enqueue(val)
// currentSize != max
// rear == max - 1
// rear = 0;
// else - rear++;

// item[rear] = val
// currentSize++;
// front === -1 then
// front =  rear


// dequeue
// currentSize != 0
// items[front] = null
// front == max-1
// front = 0
// else
// front++

// currentSize++;
// else 
// front =-1
// rear =-1
// alert - queue empty

class Queue {
    constructor(size) {
        this.maxSize = size;
        this.items = new Array(size);
        this.currentSize = 0;
        this.rear = -1;
        this.front = -1;
    }

    enqueue(val) {
        if(this.currentSize != this.maxSize) {
           if( this.rear == this.maxSize - 1) {
               this.rear = 0;
           } else {
            this.rear++;
        }
        this.items[this.rear] = val;
        this.currentSize++;
        if((this.front == -1)) {
            this.front = this.rear;
        }
    }
    }


    dequeue() {
        if(this.currentSize != 0) {
            this.items[this.front] = null;
            if(this.front == this.maxSize - 1) {
                this.front = 0;
            } else {
                this.front++;
            }
            this.currentSize--;
        } else {
            this.front= -1;
            this.rear= -1;
            console.log("queue is empty");
        }
    }
    display() {
        console.log(this.items);
    }

    }  

    const queue = new Queue();
    queue.enqueue(20);
    queue.dequeue();
    queue.display();
