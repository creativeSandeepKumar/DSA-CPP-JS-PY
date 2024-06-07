// // queue 
// let queue = [];
// let currentSize = queue.length;

// let maxSize = 5;

// function enqueue(newVal) {
//     if(currentSize >= maxSize) {
//         console.log("queue is already full");
//     } else {
//         queue[currentSize] = newVal;
//         currentSize++;
//     }
// }

// function display() {
//     console.log(queue);
// };

// function dequeue() {
//     if(currentSize > 0) {
//         for(let i = 0; i < queue.length; i++) {
//             queue[i] = queue[i+1];
//         }
//         currentSize--;
//         queue.length = currentSize;
//     } else {
//         console.log("queue is already empty");
//     }
// }

// enqueue(20)
// enqueue(10)
// enqueue(30)
// dequeue()
// display();

// circular queue
class Queue {
    constructor(size) {
        this.max = size;
        this.items = new Array(size);
        this.currentSize = 0;
        this.rear = -1;
        this.front = -1;
    }
    enqueue(val) {
        if(this.currentSize != this.max) {
            if(this.rear == this.max -1) {
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
            if(this.front == this.max-1) {
                this.front = 0;
            } else {
                this.front++;
            }
            this.currentSize--;
        } else {
            this.front =- 1;
            this.rear =- 1;
            console.log("queue is empty");
        }
    }

    display() {
        console.log(this.items);
    }

}

let queue = new Queue();
queue.enqueue(20);
queue.enqueue(30);
queue.dequeue();
queue.dequeue();
queue.display();

console.log()