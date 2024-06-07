// recursion
// function apple(x) {
//     console.log(x);
//     if(x < 10) {
//         apple(x+1);
//     }
// }

// apple(2)

// factorial
// function factorial(item){
//     if(item == 0) {
//         return 1;
//     }
//     return item*factorial(item-1);
// }

// console.log(factorial(3));
// console.log(factorial(5-1))

// indirect recursion
// let money = 100;
// let totalApple = 0;

// function buyApple(x) {
//     if(x >= 0) {
//         console.log("I have", x, "RS", totalApple );
//         buyMore(x - 5);

//     } else {
//         console.log("I don't have more money", totalApple - 1);
//     }
// }

// function buyMore(x){
//        totalApple++;
//        buyApple(x-5);
// }

// buyApple(money);

// function test(x) {
//     if(x > 0) {
//         test(x-1);
//     }

//     console.log(x);
// }

// test(5)

// Array reverse
// steps:
// 1. define array data, undefined temp;
// customReverse function - pmrs- data, start, end
// conndition start <= end 
// logic - temp assign data start index
// data start index assign data end index
// data end index assign temp;
// exucute custom reverse function pmr - data, start+1, end-1

// let data = [5, 12, 65, 89, 16, 25, 100,200];
// let temp;
// function customReverse(data, start, end) {
//     console.log(data);
//     if(start <= end) {
//         temp = data[start];
//         data[start] = data[end];
//         data[end] = temp;
//         customReverse(data, start+1, end-1);
//     }
// }

// customReverse(data, 0, data.length-1);
// console.log(data);

// head and tail recusrsion
// define colors function - 
// data - 20;
// condition tru then data*20 else data/20
// define days function and execute colors function inside this
// define fruits function and execute days function inside this
// define topFunction function and execute fruits function inside this
// execute topFunction

function colors() {
    let data = 20;
    if(true) {
        console.log(data*20);
    } else {
        console.log(data/20);
    }
}

function days() {
    colors();
}

function fruits() {
    days();
}

function topFunction() {
    fruits();
}

topFunction();
